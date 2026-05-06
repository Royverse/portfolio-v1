const fs = require('fs');
const path = require('path');

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            // Regex to match imports/URLs pointing to Assets
            content = content.replace(/['"](\.\.\/)*Assets\//g, (match) => {
                const quote = match[0];
                const absoluteSrc = path.resolve('src');
                const absoluteFileDir = path.dirname(path.resolve(fullPath));
                
                let depth = 0;
                let current = absoluteFileDir;
                while (current !== absoluteSrc && current !== path.dirname(current)) {
                    current = path.dirname(current);
                    depth++;
                }
                
                // Use exactly `depth` number of '../'
                const newPrefix = quote + '../'.repeat(depth) + 'Assets/';
                if (newPrefix !== match) {
                    changed = true;
                    return newPrefix;
                }
                return match;
            });
            
            if (changed) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated: ' + fullPath);
            }
        }
    });
}

const targetDir = path.join(process.cwd(), 'src', 'components', 'PortfolioLegacy');
console.log('Targeting: ' + targetDir);
walk(targetDir);
