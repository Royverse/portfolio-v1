#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const registryPath = path.resolve(__dirname, 'projects.json');

if (!fs.existsSync(registryPath)) {
  console.error(`Error: projects.json not found at ${registryPath}`);
  process.exit(1);
}

const projects = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const args = process.argv.slice(2);
const command = args[0] || 'list';

function parseOnlyFilter() {
  const onlyIdx = args.indexOf('--only');
  if (onlyIdx !== -1 && args[onlyIdx + 1]) {
    const ids = args[onlyIdx + 1].split(',').map(s => s.trim().toLowerCase());
    return projects.filter(p => ids.includes(p.id.toLowerCase()));
  }
  return projects;
}

async function handleList() {
  console.log('\n========================================================================================');
  console.log('                 ROY MOOTSANA PORTFOLIO & EXPERIMENTS ECOSYSTEM                         ');
  console.log('========================================================================================');
  console.table(
    projects.map(p => ({
      ID: p.id,
      Name: p.name,
      Category: p.category,
      Theme: p.themeColor,
      Framework: p.framework,
      NetlifyID: p.netlifySiteId ? p.netlifySiteId.slice(0, 8) + '...' : 'GH-Pages',
      Branch: p.branch,
      ExistsLocally: fs.existsSync(p.localPath) ? '✅' : '❌'
    }))
  );
  console.log(`Total Projects: ${projects.length}`);
}

async function handleStatus() {
  const targetProjects = parseOnlyFilter();
  console.log(`\n🔍 Checking git status across ${targetProjects.length} projects...\n`);

  for (const p of targetProjects) {
    if (!fs.existsSync(p.localPath)) {
      console.log(`❌ [${p.id}] Local folder missing: ${p.localPath}`);
      continue;
    }
    try {
      const { stdout } = await execAsync('git status -s -b', { cwd: p.localPath });
      const lines = stdout.trim().split('\n');
      const branchLine = lines[0];
      const changes = lines.slice(1).filter(Boolean);

      if (changes.length === 0) {
        console.log(`✅ [${p.id.padEnd(20)}] ${branchLine} (Clean)`);
      } else {
        console.log(`⚠️  [${p.id.padEnd(20)}] ${branchLine} (${changes.length} changed files)`);
        changes.forEach(c => console.log(`     ${c}`));
      }
    } catch (err) {
      console.log(`❌ [${p.id}] Error: ${err.message}`);
    }
  }
}

async function handleExec() {
  const cmd = args[1];
  if (!cmd) {
    console.error('Usage: node orchestrate.mjs exec "<shell-command>" [--only <id1,id2>]');
    process.exit(1);
  }

  const targetProjects = parseOnlyFilter();
  console.log(`\n🚀 Executing "${cmd}" across ${targetProjects.length} projects...\n`);

  for (const p of targetProjects) {
    if (!fs.existsSync(p.localPath)) {
      console.log(`❌ [${p.id}] Local folder missing: ${p.localPath}`);
      continue;
    }
    console.log(`--- [${p.name}] (${p.id}) in ${p.localPath} ---`);
    try {
      const { stdout, stderr } = await execAsync(cmd, { cwd: p.localPath });
      if (stdout.trim()) console.log(stdout.trim());
      if (stderr.trim()) console.error(stderr.trim());
    } catch (err) {
      console.error(`❌ Command failed: ${err.message}`);
      if (err.stdout) console.log(err.stdout);
      if (err.stderr) console.error(err.stderr);
    }
    console.log('');
  }
}

async function handleVerify() {
  console.log(`\n🌐 Pinging live URLs across ${projects.length} projects in parallel...\n`);

  const results = await Promise.all(
    projects.map(async p => {
      const startTime = Date.now();
      try {
        const response = await fetch(p.liveUrl, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } });
        const duration = Date.now() - startTime;
        return {
          ID: p.id,
          Name: p.name,
          Status: response.status === 200 ? '✅ 200 OK' : `⚠️ ${response.status}`,
          Latency: `${duration}ms`,
          LiveURL: p.liveUrl
        };
      } catch (err) {
        return {
          ID: p.id,
          Name: p.name,
          Status: `❌ FAIL (${err.message})`,
          Latency: 'N/A',
          LiveURL: p.liveUrl
        };
      }
    })
  );

  console.table(results);
}

async function handleBuild() {
  const targetProjects = parseOnlyFilter();
  console.log(`\n📦 Running builds across ${targetProjects.length} projects...\n`);

  for (const p of targetProjects) {
    if (p.buildCommand === 'static') {
      console.log(`⏭️  [${p.id}] Static project (no build needed).`);
      continue;
    }
    if (!fs.existsSync(p.localPath)) {
      console.log(`❌ [${p.id}] Missing local directory: ${p.localPath}`);
      continue;
    }
    console.log(`⚙️  [${p.id}] Building (${p.buildCommand})...`);
    try {
      const { stdout } = await execAsync(p.buildCommand, { cwd: p.localPath });
      console.log(`✅ [${p.id}] Build succeeded.`);
    } catch (err) {
      console.error(`❌ [${p.id}] Build failed: ${err.message}`);
    }
  }
}

async function handleDeploy() {
  const targetProjects = parseOnlyFilter();
  console.log(`\n🚀 Deploying ${targetProjects.length} projects to Netlify...\n`);

  for (const p of targetProjects) {
    if (p.deployMethod === 'github-pages') {
      console.log(`⏭️  [${p.id}] Deploys automatically via GitHub Pages push.`);
      continue;
    }
    if (p.deployMethod === 'netlify-git') {
      console.log(`⏭️  [${p.id}] Deploys automatically via GitHub commit push.`);
      continue;
    }
    if (!p.netlifySiteId) {
      console.log(`⏭️  [${p.id}] No Netlify Site ID configured.`);
      continue;
    }

    const deployDir = path.resolve(p.localPath, p.outputDir || '.');
    if (!fs.existsSync(deployDir)) {
      console.error(`❌ [${p.id}] Deploy directory not found: ${deployDir}. Run build first!`);
      continue;
    }

    console.log(`📤 [${p.id}] Deploying ${deployDir} to Netlify (${p.netlifySiteName || p.netlifySiteId})...`);
    try {
      const { stdout } = await execAsync(`netlify deploy --dir "${deployDir}" --site "${p.netlifySiteId}" --prod`, {
        cwd: p.localPath
      });
      console.log(`✅ [${p.id}] Deployment complete.`);
    } catch (err) {
      console.error(`❌ [${p.id}] Netlify deploy error: ${err.message}`);
    }
  }
}

async function handleFavicons() {
  const targetProjects = parseOnlyFilter();
  const scriptPath = path.resolve(__dirname, 'scripts', 'generate_custom_favicons.ps1');

  if (!fs.existsSync(scriptPath)) {
    console.error(`Error: generate_custom_favicons.ps1 not found at ${scriptPath}`);
    process.exit(1);
  }

  console.log(`\n🎨 Generating signature favicons for ${targetProjects.length} projects...\n`);

  for (const p of targetProjects) {
    if (!fs.existsSync(p.localPath)) continue;

    // Detect target assets directory (public/ if exists, else project root)
    const publicDir = path.resolve(p.localPath, 'public');
    const targetDir = fs.existsSync(publicDir) ? publicDir : p.localPath;

    console.log(`🎨 [${p.id}] Generating favicons with border ${p.themeColor} into ${targetDir}...`);
    try {
      const cmd = `powershell -ExecutionPolicy Bypass -File "${scriptPath}" -BorderHex "${p.themeColor}" -TargetDir "${targetDir}"`;
      await execAsync(cmd, { cwd: __dirname });
      console.log(`✅ [${p.id}] Favicons generated successfully.`);
    } catch (err) {
      console.error(`❌ [${p.id}] Generation failed: ${err.message}`);
    }
  }
}

async function handleCommit() {
  const message = args[1];
  if (!message) {
    console.error('Usage: node orchestrate.mjs commit "<commit-message>" [--only <id1,id2>]');
    process.exit(1);
  }

  const targetProjects = parseOnlyFilter();
  console.log(`\n💾 Committing and pushing across ${targetProjects.length} projects: "${message}"\n`);

  for (const p of targetProjects) {
    if (!fs.existsSync(p.localPath)) continue;
    try {
      const { stdout: diff } = await execAsync('git status --porcelain', { cwd: p.localPath });
      if (!diff.trim()) {
        console.log(`⏭️  [${p.id}] No changes to commit.`);
        continue;
      }
      console.log(`📦 [${p.id}] Staging, committing, and pushing...`);
      await execAsync('git add .', { cwd: p.localPath });
      await execAsync(`git commit -m "${message}"`, { cwd: p.localPath });
      await execAsync(`git push origin ${p.branch}`, { cwd: p.localPath });
      console.log(`✅ [${p.id}] Pushed to origin/${p.branch}.`);
    } catch (err) {
      console.error(`❌ [${p.id}] Error: ${err.message}`);
    }
  }
}

// Router
switch (command) {
  case 'list':
    handleList();
    break;
  case 'status':
    handleStatus();
    break;
  case 'exec':
  case 'run':
    handleExec();
    break;
  case 'verify':
  case 'ping':
    handleVerify();
    break;
  case 'build':
    handleBuild();
    break;
  case 'deploy':
    handleDeploy();
    break;
  case 'favicons':
    handleFavicons();
    break;
  case 'commit':
    handleCommit();
    break;
  default:
    console.log(`
Available commands:
  node orchestrate.mjs list                    - List all 13 projects with metadata
  node orchestrate.mjs status                  - Git status across all repositories
  node orchestrate.mjs exec "<cmd>"            - Run arbitrary command across repositories
  node orchestrate.mjs verify                  - Health-check all live URLs concurrently
  node orchestrate.mjs build                   - Run build scripts on all compiled projects
  node orchestrate.mjs deploy                  - Deploy production builds directly to Netlify
  node orchestrate.mjs favicons                - Re-generate custom bordered favicons for projects
  node orchestrate.mjs commit "<message>"      - Git add, commit, and push modified projects

Options:
  --only <id1,id2>                             - Target specific project IDs
`);
}
