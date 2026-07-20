// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"grUcb":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 4321;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "309bf672248aa3b4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fyuxx":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3dd2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$3dd2.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$3dd2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactResponsive = require("react-responsive");
var _reactResponsiveDefault = parcelHelpers.interopDefault(_reactResponsive);
var _styledComponents = require("styled-components");
var _hero = require("./components/PortfolioLegacy/WideScreen/HeroSlide/Hero");
var _heroDefault = parcelHelpers.interopDefault(_hero);
var _work = require("./components/PortfolioLegacy/WideScreen/WorkSlide/Work");
var _workDefault = parcelHelpers.interopDefault(_work);
var _skills = require("./components/PortfolioLegacy/WideScreen/Skills");
var _skillsDefault = parcelHelpers.interopDefault(_skills);
var _contact = require("./components/PortfolioLegacy/WideScreen/ContactSlide/Contact");
var _contactDefault = parcelHelpers.interopDefault(_contact);
var _hero1 = require("./components/PortfolioLegacy/Mobile/HeroSlide/Hero");
var _heroDefault1 = parcelHelpers.interopDefault(_hero1);
var _work1 = require("./components/PortfolioLegacy/Mobile/WorkSlide/Work");
var _workDefault1 = parcelHelpers.interopDefault(_work1);
var _skills1 = require("./components/PortfolioLegacy/Mobile/Skills");
var _skillsDefault1 = parcelHelpers.interopDefault(_skills1);
var _contact1 = require("./components/PortfolioLegacy/Mobile/ContactSlide/Contact");
var _contactDefault1 = parcelHelpers.interopDefault(_contact1);
var _indexCss = require("./Assets/index.css");
const GlobalStyle = (0, _styledComponents.createGlobalStyle)`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;
_c = GlobalStyle;
class LegacyPortfolio extends (0, _react.Component) {
    componentDidMount() {
        if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    }
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 31,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactResponsiveDefault.default), {
            query: "(min-width: 1225px)",
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 32,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _heroDefault.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 33,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _workDefault.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 34,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _skillsDefault.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 35,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _contactDefault.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 36,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactResponsiveDefault.default), {
            query: "(max-width: 1224px)",
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 38,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _heroDefault1.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 39,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _workDefault1.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 40,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _skillsDefault1.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 41,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _contactDefault1.default), {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 42,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(GlobalStyle, {
            __source: {
                fileName: "src/LegacyPortfolio.js",
                lineNumber: 44,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
exports.default = LegacyPortfolio;
var _c;
$RefreshReg$(_c, "GlobalStyle");

  $parcel$ReactRefreshHelpers$3dd2.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","react-responsive":"7GCfY","styled-components":"dYNT2","./components/PortfolioLegacy/WideScreen/HeroSlide/Hero":"cHcxB","./components/PortfolioLegacy/WideScreen/WorkSlide/Work":"ftYbZ","./components/PortfolioLegacy/WideScreen/Skills":"9yWj8","./components/PortfolioLegacy/WideScreen/ContactSlide/Contact":"erbBO","./components/PortfolioLegacy/Mobile/HeroSlide/Hero":"aZc43","./components/PortfolioLegacy/Mobile/WorkSlide/Work":"e4D4B","./components/PortfolioLegacy/Mobile/Skills":"hjve4","./components/PortfolioLegacy/Mobile/ContactSlide/Contact":"k3Hvr","./Assets/index.css":"STMKi","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"7GCfY":[function(require,module,exports,__globalThis) {
!function(root, factory) {
    module.exports = factory(require("659c8916acb9ead9"));
}("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module1 = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__), module1.l = !0, module1.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module1) {
            var getter = module1 && module1.__esModule ? function() {
                return module1.default;
            } : function() {
                return module1;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);
    }([
        function(module1, exports, __webpack_require__) {
            var ReactIs = __webpack_require__(1);
            module1.exports = __webpack_require__(8)(ReactIs.isElement, !0);
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            module1.exports = __webpack_require__(7);
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            module1.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            function toHyphenLower(match) {
                return "-" + match.toLowerCase();
            }
            function hyphenateStyleName(name) {
                if (cache.hasOwnProperty(name)) return cache[name];
                var hName = name.replace(uppercasePattern, toHyphenLower);
                return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
            }
            var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
            __webpack_exports__.a = hyphenateStyleName;
        },
        function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            function _objectSpread(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = null != arguments[i] ? arguments[i] : {}, ownKeys = Object.keys(source);
                    "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                    }))), ownKeys.forEach(function(key) {
                        _defineProperty(target, key, source[key]);
                    });
                }
                return target;
            }
            function _defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__), stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([
                __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
                __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
            ]), matchers = {
                orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([
                    "portrait",
                    "landscape"
                ]),
                scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([
                    "progressive",
                    "interlace"
                ]),
                aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
                deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
                height: stringOrNumber,
                deviceHeight: stringOrNumber,
                width: stringOrNumber,
                deviceWidth: stringOrNumber,
                color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                resolution: stringOrNumber
            }, features = _objectSpread({
                minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
                maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
                minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
                maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
                minHeight: stringOrNumber,
                maxHeight: stringOrNumber,
                minDeviceHeight: stringOrNumber,
                maxDeviceHeight: stringOrNumber,
                minWidth: stringOrNumber,
                maxWidth: stringOrNumber,
                minDeviceWidth: stringOrNumber,
                maxDeviceWidth: stringOrNumber,
                minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
                maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
                minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
                maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
                minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
                maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
                minResolution: stringOrNumber,
                maxResolution: stringOrNumber
            }, matchers), types = {
                all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
                embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
            }, all = _objectSpread({}, types, features);
            matchers.type = Object.keys(types), __webpack_exports__.a = {
                all: all,
                types: types,
                matchers: matchers,
                features: features
            };
        },
        function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            function _typeof(obj) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                    return typeof obj;
                } : function(obj) {
                    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                })(obj);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(target, props) {
                for(var i = 0; i < props.length; i++){
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
            }
            function _possibleConstructorReturn(self1, call) {
                return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self1) : call;
            }
            function _getPrototypeOf(o) {
                return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                })(o);
            }
            function _assertThisInitialized(self1) {
                if (void 0 === self1) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self1;
            }
            function _inherits(subClass, superClass) {
                if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: !0,
                        configurable: !0
                    }
                }), superClass && _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
                return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
                    return o.__proto__ = p, o;
                })(o, p);
            }
            function _objectSpread(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = null != arguments[i] ? arguments[i] : {}, ownKeys = Object.keys(source);
                    "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                    }))), ownKeys.forEach(function(key) {
                        _defineProperty(target, key, source[key]);
                    });
                }
                return target;
            }
            function _defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, obj;
            }
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            }), __webpack_require__.d(__webpack_exports__, "default", function() {
                return MediaQuery;
            });
            var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__), __WEBPACK_IMPORTED_MODULE_2_matchmediaquery__ = __webpack_require__(11), __WEBPACK_IMPORTED_MODULE_2_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_matchmediaquery__), __WEBPACK_IMPORTED_MODULE_3_hyphenate_style_name__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_4__mediaQuery__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_5__toQuery__ = __webpack_require__(13);
            __webpack_require__.d(__webpack_exports__, "toQuery", function() {
                return __WEBPACK_IMPORTED_MODULE_5__toQuery__.a;
            });
            var defaultTypes = {
                component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
                query: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
                values: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_4__mediaQuery__.a.matchers),
                children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([
                    __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
                    __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
                ]),
                onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
            }, excludedQueryKeys = Object.keys(defaultTypes), omit = function(object, keys) {
                var newObject = _objectSpread({}, object);
                return keys.forEach(function(key) {
                    return delete newObject[key];
                }), newObject;
            }, getValues = function(_ref) {
                var values = _ref.values;
                if (!values) return null;
                var keys = Object.keys(values);
                return 0 === keys.length ? null : keys.reduce(function(result, key) {
                    return result[Object(__WEBPACK_IMPORTED_MODULE_3_hyphenate_style_name__.a)(key)] = values[key], result;
                }, {});
            }, getQuery = function(props) {
                return props.query || Object(__WEBPACK_IMPORTED_MODULE_5__toQuery__.a)(omit(props, excludedQueryKeys));
            }, MediaQuery = function(_React$Component) {
                function MediaQuery() {
                    var _getPrototypeOf2, _this;
                    _classCallCheck(this, MediaQuery);
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                    return _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MediaQuery)).call.apply(_getPrototypeOf2, [
                        this
                    ].concat(args))), _defineProperty(_assertThisInitialized(_this), "state", {
                        matches: !1,
                        mq: null,
                        query: "",
                        values: null
                    }), _defineProperty(_assertThisInitialized(_this), "componentDidMount", function() {
                        _this.state.mq.addListener(_this.updateMatches), _this.updateMatches();
                    }), _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps, prevState) {
                        _this.state.mq !== prevState.mq && (_this.cleanupMediaQuery(prevState.mq), _this.state.mq.addListener(_this.updateMatches)), _this.props.onChange && prevState.matches !== _this.state.matches && _this.props.onChange(_this.state.matches);
                    }), _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function() {
                        _this._unmounted = !0, _this.cleanupMediaQuery(_this.state.mq);
                    }), _defineProperty(_assertThisInitialized(_this), "cleanupMediaQuery", function(mq) {
                        mq && (mq.removeListener(_this.updateMatches), mq.dispose());
                    }), _defineProperty(_assertThisInitialized(_this), "updateMatches", function() {
                        _this._unmounted || _this.state.mq.matches !== _this.state.matches && _this.setState({
                            matches: _this.state.mq.matches
                        });
                    }), _defineProperty(_assertThisInitialized(_this), "render", function() {
                        return "function" == typeof _this.props.children ? _this.props.children(_this.state.matches) : _this.state.matches ? _this.props.children : null;
                    }), _this;
                }
                return _inherits(MediaQuery, _React$Component), _createClass(MediaQuery, null, [
                    {
                        key: "getDerivedStateFromProps",
                        value: function(props, state) {
                            var query = getQuery(props);
                            if (!query) throw new Error("Invalid or missing MediaQuery!");
                            var values = getValues(props);
                            if (query === state.query && values === state.values) return null;
                            var mq = __WEBPACK_IMPORTED_MODULE_2_matchmediaquery___default()(query, values || {}, !!values);
                            return {
                                matches: mq.matches,
                                mq: mq,
                                query: query,
                                values: values
                            };
                        }
                    }
                ]), MediaQuery;
            }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);
            _defineProperty(MediaQuery, "displayName", "MediaQuery"), _defineProperty(MediaQuery, "defaultProps", {
                values: null
            });
        },
        function(module1, exports) {
            module1.exports = __WEBPACK_EXTERNAL_MODULE_6__;
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            !function() {
                function isValidElementType(type) {
                    return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
                }
                function typeOf(object) {
                    if ("object" == typeof object && null !== object) {
                        var $$typeof = object.$$typeof;
                        switch($$typeof){
                            case REACT_ELEMENT_TYPE:
                                var type = object.type;
                                switch(type){
                                    case REACT_ASYNC_MODE_TYPE:
                                    case REACT_CONCURRENT_MODE_TYPE:
                                    case REACT_FRAGMENT_TYPE:
                                    case REACT_PROFILER_TYPE:
                                    case REACT_STRICT_MODE_TYPE:
                                    case REACT_SUSPENSE_TYPE:
                                        return type;
                                    default:
                                        var $$typeofType = type && type.$$typeof;
                                        switch($$typeofType){
                                            case REACT_CONTEXT_TYPE:
                                            case REACT_FORWARD_REF_TYPE:
                                            case REACT_PROVIDER_TYPE:
                                                return $$typeofType;
                                            default:
                                                return $$typeof;
                                        }
                                }
                            case REACT_LAZY_TYPE:
                            case REACT_MEMO_TYPE:
                            case REACT_PORTAL_TYPE:
                                return $$typeof;
                        }
                    }
                }
                function isAsyncMode(object) {
                    return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, lowPriorityWarning$1(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
                }
                function isConcurrentMode(object) {
                    return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
                }
                function isContextConsumer(object) {
                    return typeOf(object) === REACT_CONTEXT_TYPE;
                }
                function isContextProvider(object) {
                    return typeOf(object) === REACT_PROVIDER_TYPE;
                }
                function isElement(object) {
                    return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                function isForwardRef(object) {
                    return typeOf(object) === REACT_FORWARD_REF_TYPE;
                }
                function isFragment(object) {
                    return typeOf(object) === REACT_FRAGMENT_TYPE;
                }
                function isLazy(object) {
                    return typeOf(object) === REACT_LAZY_TYPE;
                }
                function isMemo(object) {
                    return typeOf(object) === REACT_MEMO_TYPE;
                }
                function isPortal(object) {
                    return typeOf(object) === REACT_PORTAL_TYPE;
                }
                function isProfiler(object) {
                    return typeOf(object) === REACT_PROFILER_TYPE;
                }
                function isStrictMode(object) {
                    return typeOf(object) === REACT_STRICT_MODE_TYPE;
                }
                function isSuspense(object) {
                    return typeOf(object) === REACT_SUSPENSE_TYPE;
                }
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
                var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, lowPriorityWarning = function() {}, printWarning = function(format) {
                    for(var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                    var argIndex = 0, message = "Warning: " + format.replace(/%s/g, function() {
                        return args[argIndex++];
                    });
                    "undefined" != typeof console && console.warn(message);
                    try {
                        throw new Error(message);
                    } catch (x) {}
                };
                lowPriorityWarning = function(condition, format) {
                    if (void 0 === format) throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
                    if (!condition) {
                        for(var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++)args[_key2 - 2] = arguments[_key2];
                        printWarning.apply(void 0, [
                            format
                        ].concat(args));
                    }
                };
                var lowPriorityWarning$1 = lowPriorityWarning, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
                exports.typeOf = typeOf, exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isValidElementType = isValidElementType, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense;
            }();
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            function emptyFunctionThatReturnsNull() {
                return null;
            }
            var ReactIs = __webpack_require__(1), assign = __webpack_require__(9), ReactPropTypesSecret = __webpack_require__(2), checkPropTypes = __webpack_require__(10), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
            printWarning = function(text) {
                var message = "Warning: " + text;
                "undefined" != typeof console && console.error(message);
                try {
                    throw new Error(message);
                } catch (x) {}
            }, module1.exports = function(isValidElement, throwOnDirectAccess) {
                function getIteratorFn(maybeIterable) {
                    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                    if ("function" == typeof iteratorFn) return iteratorFn;
                }
                function is(x, y) {
                    return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
                }
                function PropTypeError(message) {
                    this.message = message, this.stack = "";
                }
                function createChainableTypeChecker(validate) {
                    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                        if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
                            if (throwOnDirectAccess) {
                                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                throw err.name = "Invariant Violation", err;
                            }
                            if ("undefined" != typeof console) {
                                var cacheKey = componentName + ":" + propName;
                                !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                            }
                        }
                        return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
                    }
                    var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0, chainedCheckType = checkType.bind(null, !1);
                    return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
                }
                function createPrimitiveTypeChecker(expectedType) {
                    function validate(props, propName, componentName, location, propFullName, secret) {
                        var propValue = props[propName];
                        if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createArrayOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                        var propValue = props[propName];
                        if (!Array.isArray(propValue)) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
                        for(var i = 0; i < propValue.length; i++){
                            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                            if (error instanceof Error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createInstanceTypeChecker(expectedClass) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if (!(props[propName] instanceof expectedClass)) {
                            var expectedClassName = expectedClass.name || ANONYMOUS;
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createEnumTypeChecker(expectedValues) {
                    function validate(props, propName, componentName, location, propFullName) {
                        for(var propValue = props[propName], i = 0; i < expectedValues.length; i++)if (is(propValue, expectedValues[i])) return null;
                        var valuesString = JSON.stringify(expectedValues, function(key, value) {
                            return "symbol" === getPreciseType(value) ? String(value) : value;
                        });
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                    }
                    return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull);
                }
                function createObjectOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                        if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                        for(var key in propValue)if (has(propValue, key)) {
                            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error instanceof Error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createUnionTypeChecker(arrayOfTypeCheckers) {
                    function validate(props, propName, componentName, location, propFullName) {
                        for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                            if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                        }
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                    }
                    if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;
                    for(var i = 0; i < arrayOfTypeCheckers.length; i++){
                        var checker = arrayOfTypeCheckers[i];
                        if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), emptyFunctionThatReturnsNull;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                        for(var key in shapeTypes){
                            var checker = shapeTypes[key];
                            if (checker) {
                                var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                                if (error) return error;
                            }
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function createStrictShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName], propType = getPropType(propValue);
                        if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                        var allKeys = assign({}, props[propName], shapeTypes);
                        for(var key in allKeys){
                            var checker = shapeTypes[key];
                            if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }
                function isNode(propValue) {
                    switch(typeof propValue){
                        case "number":
                        case "string":
                        case "undefined":
                            return !0;
                        case "boolean":
                            return !propValue;
                        case "object":
                            if (Array.isArray(propValue)) return propValue.every(isNode);
                            if (null === propValue || isValidElement(propValue)) return !0;
                            var iteratorFn = getIteratorFn(propValue);
                            if (!iteratorFn) return !1;
                            var step, iterator = iteratorFn.call(propValue);
                            if (iteratorFn !== propValue.entries) {
                                for(; !(step = iterator.next()).done;)if (!isNode(step.value)) return !1;
                            } else for(; !(step = iterator.next()).done;){
                                var entry = step.value;
                                if (entry && !isNode(entry[1])) return !1;
                            }
                            return !0;
                        default:
                            return !1;
                    }
                }
                function isSymbol(propType, propValue) {
                    return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
                }
                function getPropType(propValue) {
                    var propType = typeof propValue;
                    return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
                }
                function getPreciseType(propValue) {
                    if (void 0 === propValue || null === propValue) return "" + propValue;
                    var propType = getPropType(propValue);
                    if ("object" === propType) {
                        if (propValue instanceof Date) return "date";
                        if (propValue instanceof RegExp) return "regexp";
                    }
                    return propType;
                }
                function getPostfixForTypeWarning(value) {
                    var type = getPreciseType(value);
                    switch(type){
                        case "array":
                        case "object":
                            return "an " + type;
                        case "boolean":
                        case "date":
                        case "regexp":
                            return "a " + type;
                        default:
                            return type;
                    }
                }
                function getClassName(propValue) {
                    return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
                }
                var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                    array: createPrimitiveTypeChecker("array"),
                    bool: createPrimitiveTypeChecker("boolean"),
                    func: createPrimitiveTypeChecker("function"),
                    number: createPrimitiveTypeChecker("number"),
                    object: createPrimitiveTypeChecker("object"),
                    string: createPrimitiveTypeChecker("string"),
                    symbol: createPrimitiveTypeChecker("symbol"),
                    any: function() {
                        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                    }(),
                    arrayOf: createArrayOfTypeChecker,
                    element: function() {
                        function validate(props, propName, componentName, location, propFullName) {
                            var propValue = props[propName];
                            if (!isValidElement(propValue)) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                            return null;
                        }
                        return createChainableTypeChecker(validate);
                    }(),
                    elementType: function() {
                        function validate(props, propName, componentName, location, propFullName) {
                            var propValue = props[propName];
                            if (!ReactIs.isValidElementType(propValue)) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
                            return null;
                        }
                        return createChainableTypeChecker(validate);
                    }(),
                    instanceOf: createInstanceTypeChecker,
                    node: function() {
                        function validate(props, propName, componentName, location, propFullName) {
                            return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                        }
                        return createChainableTypeChecker(validate);
                    }(),
                    objectOf: createObjectOfTypeChecker,
                    oneOf: createEnumTypeChecker,
                    oneOfType: createUnionTypeChecker,
                    shape: createShapeTypeChecker,
                    exact: createStrictShapeTypeChecker
                };
                return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
            };
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            function toObject(val) {
                if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(val);
            }
            /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
            module1.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var test1 = new String("abc");
                    if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                    for(var test2 = {}, i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
                    if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                        return test2[n];
                    }).join("")) return !1;
                    var test3 = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                        test3[letter] = letter;
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
                } catch (err) {
                    return !1;
                }
            }() ? Object.assign : function(target, source) {
                for(var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++){
                    from = Object(arguments[s]);
                    for(var key in from)hasOwnProperty.call(from, key) && (to[key] = from[key]);
                    if (getOwnPropertySymbols) {
                        symbols = getOwnPropertySymbols(from);
                        for(var i = 0; i < symbols.length; i++)propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                    }
                }
                return to;
            };
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
                    var error;
                    try {
                        if ("function" != typeof typeSpecs[typeSpecName]) {
                            var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                            throw err.name = "Invariant Violation", err;
                        }
                        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                    } catch (ex) {
                        error = ex;
                    }
                    if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), error instanceof Error && !(error.message in loggedTypeFailures)) {
                        loggedTypeFailures[error.message] = !0;
                        var stack = getStack ? getStack() : "";
                        printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                    }
                }
            }
            var printWarning = function() {}, ReactPropTypesSecret = __webpack_require__(2), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
            printWarning = function(text) {
                var message = "Warning: " + text;
                "undefined" != typeof console && console.error(message);
                try {
                    throw new Error(message);
                } catch (x) {}
            }, checkPropTypes.resetWarningCache = function() {
                loggedTypeFailures = {};
            }, module1.exports = checkPropTypes;
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            function Mql(query, values, forceStatic) {
                function addListener(listener) {
                    mql && mql.addListener(listener);
                }
                function removeListener(listener) {
                    mql && mql.removeListener(listener);
                }
                function update(evt) {
                    self1.matches = evt.matches, self1.media = evt.media;
                }
                function dispose() {
                    mql && mql.removeListener(update);
                }
                var self1 = this;
                if (dynamicMatch && !forceStatic) {
                    var mql = dynamicMatch.call(window, query);
                    this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
                } else this.matches = staticMatch(query, values), this.media = query;
                this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
            }
            function matchMedia(query, values, forceStatic) {
                return new Mql(query, values, forceStatic);
            }
            var staticMatch = __webpack_require__(12).match, dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;
            module1.exports = matchMedia;
        },
        function(module1, exports, __webpack_require__) {
            "use strict";
            function matchQuery(mediaQuery, values) {
                return parseQuery(mediaQuery).some(function(query) {
                    var inverse = query.inverse, typeMatch = "all" === query.type || values.type === query.type;
                    if (typeMatch && inverse || !typeMatch && !inverse) return !1;
                    var expressionsMatch = query.expressions.every(function(expression) {
                        var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                        if (!value) return !1;
                        switch(feature){
                            case "orientation":
                            case "scan":
                                return value.toLowerCase() === expValue.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                expValue = toPx(expValue), value = toPx(value);
                                break;
                            case "resolution":
                                expValue = toDpi(expValue), value = toDpi(value);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                expValue = toDecimal(expValue), value = toDecimal(value);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
                        }
                        switch(modifier){
                            case "min":
                                return value >= expValue;
                            case "max":
                                return value <= expValue;
                            default:
                                return value === expValue;
                        }
                    });
                    return expressionsMatch && !inverse || !expressionsMatch && inverse;
                });
            }
            function parseQuery(mediaQuery) {
                return mediaQuery.split(",").map(function(query) {
                    query = query.trim();
                    var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                    return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function(expression) {
                        var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                        return {
                            modifier: feature[1],
                            feature: feature[2],
                            value: captures[2]
                        };
                    }), parsed;
                });
            }
            function toDecimal(ratio) {
                var numbers, decimal = Number(ratio);
                return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), decimal;
            }
            function toDpi(resolution) {
                var value = parseFloat(resolution);
                switch(String(resolution).match(RE_RESOLUTION_UNIT)[1]){
                    case "dpcm":
                        return value / 2.54;
                    case "dppx":
                        return 96 * value;
                    default:
                        return value;
                }
            }
            function toPx(length) {
                var value = parseFloat(length);
                switch(String(length).match(RE_LENGTH_UNIT)[1]){
                    case "em":
                    case "rem":
                        return 16 * value;
                    case "cm":
                        return 96 * value / 2.54;
                    case "mm":
                        return 96 * value / 2.54 / 10;
                    case "in":
                        return 96 * value;
                    case "pt":
                        return 72 * value;
                    case "pc":
                        return 72 * value / 12;
                    default:
                        return value;
                }
            }
            exports.match = matchQuery, exports.parse = parseQuery;
            var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
        },
        function(module1, __webpack_exports__, __webpack_require__) {
            "use strict";
            function keyVal(k, v) {
                var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
                return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? k : !1 === v ? negate(k) : "(".concat(realKey, ": ").concat(v, ")");
            }
            function join(conds) {
                return conds.join(" and ");
            }
            var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(4), negate = function(cond) {
                return "not ".concat(cond);
            };
            __webpack_exports__.a = function(obj) {
                var rules = [];
                return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function(k) {
                    var v = obj[k];
                    null != v && rules.push(keyVal(k, v));
                }), join(rules);
            };
        }
    ]);
});

},{"659c8916acb9ead9":"z91IX"}],"cHcxB":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$b3de = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$b3de.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$b3de.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _nameAndJobTitle = require("./NameAndJobTitle");
var _nameAndJobTitleDefault = parcelHelpers.interopDefault(_nameAndJobTitle);
var _aboutMe = require("./AboutMe");
var _aboutMeDefault = parcelHelpers.interopDefault(_aboutMe);
class Hero extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/Hero.js",
                lineNumber: 8,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _nameAndJobTitleDefault.default), {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/Hero.js",
                lineNumber: 9,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _aboutMeDefault.default), {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/Hero.js",
                lineNumber: 10,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
exports.default = Hero;

  $parcel$ReactRefreshHelpers$b3de.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","./NameAndJobTitle":"e4Ike","./AboutMe":"441Ha","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"e4Ike":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$43da = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$43da.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$43da.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _nameReveal = require("./NameReveal");
var _nameRevealDefault = parcelHelpers.interopDefault(_nameReveal);
var _titleReveal = require("./TitleReveal");
var _titleRevealDefault = parcelHelpers.interopDefault(_titleReveal);
const Container = (0, _styledComponentsDefault.default).div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    /* Keeping the background out assuming your main layout handles the dark theme */
`;
_c = Container;
const bounce = (0, _styledComponents.keyframes)`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`;
const ArrowWrapper = (0, _styledComponentsDefault.default).div`
  animation: ${bounce} 2s infinite;
  margin-top: 30px;
`;
_c1 = ArrowWrapper;
class NameAndJobTitle extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameAndJobTitle.js",
                lineNumber: 30,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _nameRevealDefault.default), {
            text: "Roy Mootsana",
            fontFam: "'Cinzel', serif",
            timeDelay: 500,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameAndJobTitle.js",
                lineNumber: 32,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            style: {
                marginTop: '10px'
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameAndJobTitle.js",
                lineNumber: 38,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _titleRevealDefault.default), {
            text: "Design and Development",
            fontFam: "'Rajdhani', sans-serif",
            timeDelay: 1300,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameAndJobTitle.js",
                lineNumber: 41,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(ArrowWrapper, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameAndJobTitle.js",
                lineNumber: 47,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _titleRevealDefault.default), {
            text: "\u2193",
            fontFam: "'Rajdhani', sans-serif",
            timeDelay: 1500,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameAndJobTitle.js",
                lineNumber: 49,
                columnNumber: 13
            },
            __self: this
        })));
    }
}
exports.default = NameAndJobTitle;
var _c, _c1;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "ArrowWrapper");

  $parcel$ReactRefreshHelpers$43da.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","./NameReveal":"j17uf","./TitleReveal":"9NPYG","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"j17uf":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$be93 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$be93.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$be93.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const Stage = (0, _styledComponentsDefault.default).div`
position: relative;
/* border:1px solid black; */
z-index: 1;
width:100%;
overflow: hidden;
`;
_c = Stage;
const moveUp = (init)=>(0, _styledComponents.keyframes)`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`;
const hideWhiteBlocks = ()=>(0, _styledComponents.keyframes)`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;
const TextToReveal = (0, _styledComponentsDefault.default).div`
  font-family: ${(props)=>props.fontFam};
  text-align:center;
  color: var(--ink);
  text-shadow: var(--aura-glow);
  letter-spacing: -0.02em;
  font-weight: 500;
  opacity: 0.9;
  @media ${(0, _breakpointsDefault.default).tablet} {
    font-size: 100px;
    animation: ${(props)=>props.reveal ? moveUp(100) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${140}px);
  }
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 140px;
    animation: ${(props)=>props.reveal ? moveUp(140) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${196}px);
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 150px;
    animation: ${(props)=>props.reveal ? moveUp(150) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${210}px);
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 200px;
    animation: ${(props)=>props.reveal ? moveUp(200) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${280}px);
  }
`;
_c1 = TextToReveal;
class NameReveal extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            reveal: false
        };
        this.revealText = this.revealText.bind(this);
    }
    componentDidMount() {
        const { timeDelay } = this.props;
        this.revealText(timeDelay);
    }
    revealText(timeout) {
        setTimeout(()=>{
            this.setState({
                reveal: true
            });
        }, timeout);
    }
    render() {
        const { text, fontFam } = this.props;
        const { reveal } = this.state;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Stage, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameReveal.js",
                lineNumber: 90,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TextToReveal, {
            fontFam: fontFam,
            reveal: reveal,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/NameReveal.js",
                lineNumber: 91,
                columnNumber: 9
            },
            __self: this
        }, text));
    }
}
NameReveal.propTypes = {
    text: (0, _propTypesDefault.default).string.isRequired,
    fontFam: (0, _propTypesDefault.default).string,
    timeDelay: (0, _propTypesDefault.default).number.isRequired
};
NameReveal.defaultProps = {
    fontFam: 'Avenir Helvetica Ariel'
};
exports.default = NameReveal;
var _c, _c1;
$RefreshReg$(_c, "Stage");
$RefreshReg$(_c1, "TextToReveal");

  $parcel$ReactRefreshHelpers$be93.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"9yQZv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
};
const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
exports.default = device;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"blUt8"}],"9NPYG":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c06f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$c06f.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$c06f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const Stage = (0, _styledComponentsDefault.default).div`
position: relative;
/* border:1px solid black; */
z-index: 1;
overflow: hidden;
`;
_c = Stage;
const moveUp = (init)=>(0, _styledComponents.keyframes)`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`;
const hideWhiteBlocks = ()=>(0, _styledComponents.keyframes)`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;
const TextToReveal = (0, _styledComponentsDefault.default).div`
  font-family: ${(props)=>props.fontFam};
  text-align:center;
  color: var(--ink);
  text-shadow: var(--aura-glow);
  letter-spacing: 0.05em;
  font-weight: 500;
  text-transform: uppercase;
  animation: ${(props)=>props.reveal ? moveUp(props.fontSizeInPx) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
  transform: translateY(${(props)=>props.fontSizeInPx * 1.4}px);
  @media ${(0, _breakpointsDefault.default).tablet} {
    font-size: 28px;
    animation: ${(props)=>props.reveal ? moveUp(28) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${28 * 1.4}px);
  }
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 40px;
    animation: ${(props)=>props.reveal ? moveUp(40) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${56}px);
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 50px;
    animation: ${(props)=>props.reveal ? moveUp(50) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${70}px);
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 60px;
    animation: ${(props)=>props.reveal ? moveUp(60) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${84}px);
  }
`;
_c1 = TextToReveal;
class TitleReveal extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            reveal: false
        };
        this.revealText = this.revealText.bind(this);
    }
    componentDidMount() {
        const { timeDelay } = this.props;
        this.revealText(timeDelay);
    }
    revealText(timeout) {
        setTimeout(()=>{
            this.setState({
                reveal: true
            });
        }, timeout);
    }
    render() {
        const { text, fontFam } = this.props;
        const { reveal } = this.state;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Stage, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/TitleReveal.js",
                lineNumber: 91,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(TextToReveal, {
            fontFam: fontFam,
            reveal: reveal,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/TitleReveal.js",
                lineNumber: 92,
                columnNumber: 9
            },
            __self: this
        }, text));
    }
}
TitleReveal.propTypes = {
    text: (0, _propTypesDefault.default).string.isRequired,
    fontFam: (0, _propTypesDefault.default).string,
    timeDelay: (0, _propTypesDefault.default).number.isRequired
};
TitleReveal.defaultProps = {
    fontFam: 'Avenir Helvetica Ariel'
};
exports.default = TitleReveal;
var _c, _c1;
$RefreshReg$(_c, "Stage");
$RefreshReg$(_c1, "TextToReveal");

  $parcel$ReactRefreshHelpers$c06f.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"441Ha":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$82da = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$82da.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$82da.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const Container = (0, _styledComponentsDefault.default).section`
    height: 40vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;
_c = Container;
const AboutMeTitle = (0, _styledComponentsDefault.default).div.attrs({
    style: ({ scrollPercent })=>({
            transform: `translateX(${scrollPercent * 5.5}%)`
        })
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: var(--ink);
  opacity: 0.07;
  top :30%;
  left:-15%;
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 180px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 200px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 350px;
  }
`;
_c1 = AboutMeTitle;
const AboutMeDescription = (0, _styledComponentsDefault.default).div`
  align-items: center;
  font-family: 'AvenirLight';
  text-align: left;
  margin-left: 30%;
  margin-right: 5%;
  position: relative;
  @media ${(0, _breakpointsDefault.default).laptop} {
    transform: translateY(40%);
    font-size: 30px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    transform: translateY(35%);
    font-size: 38px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    transform: translateY(30%);
    font-size: 70px;
  }
`;
_c2 = AboutMeDescription;
class AboutMe extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            scrollPercent: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        const { body, documentElement } = window.document;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        const sp = sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100;
        const maxlimit = documentElement.clientHeight * 150 / documentElement.scrollHeight;
        if (sp >= 0 && sp <= maxlimit) this.setState({
            scrollPercent: sp
        });
    }
    render() {
        const { scrollPercent } = this.state;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/AboutMe.js",
                lineNumber: 87,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(AboutMeTitle, {
            scrollPercent: scrollPercent,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/AboutMe.js",
                lineNumber: 89,
                columnNumber: 9
            },
            __self: this
        }, "ABOUT ME"), /*#__PURE__*/ (0, _reactDefault.default).createElement(AboutMeDescription, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/HeroSlide/AboutMe.js",
                lineNumber: 91,
                columnNumber: 9
            },
            __self: this
        }, "Software Engineer and UX Architect bridging the gap between rigorous engineering and human-centred design. A systems thinker with a designer's eye, a chess strategist's patience, and a builder's bias for action."));
    }
}
exports.default = AboutMe;
var _c, _c1, _c2;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "AboutMeTitle");
$RefreshReg$(_c2, "AboutMeDescription");

  $parcel$ReactRefreshHelpers$82da.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"ftYbZ":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c4c9 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$c4c9.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$c4c9.prelude(module);

try {
/* eslint-disable linebreak-style */ /* eslint-disable react/sort-comp */ /* eslint-disable linebreak-style */ /* eslint-disable react/no-array-index-key */ /* eslint-disable no-unused-vars */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _textContent = require("./TextContent");
var _textContentDefault = parcelHelpers.interopDefault(_textContent);
var _imageContent = require("./ImageContent");
var _imageContentDefault = parcelHelpers.interopDefault(_imageContent);
const Container = (0, _styledComponentsDefault.default).div`
  display: flex;
  flex-flow: row nowrap;
`;
_c = Container;
const Button = (0, _styledComponentsDefault.default).button`
  background: transparent;
  color: #0000ff;
  border: none;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
`;
_c1 = Button;
const Overlay = (0, _styledComponentsDefault.default).div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
_c2 = Overlay;
const Dialog = (0, _styledComponentsDefault.default).div`   background-color: #ffffff;
color: #333;
padding: 20px;
border-radius: 10px;
width: 80%;
font-family: Arial, sans-serif;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  font-size: 14px;
  margin-bottom: 15px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 15px;
  white-space: pre-wrap; /* Preserve line breaks */
}

button {
  background-color: #0000ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}
`;
_c3 = Dialog;
class Work extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            vh: 0,
            slideNumber: 0,
            showDialog: false,
            dialogProject: null
        };
        this.pageSplitTimes = 1.4;
        this.lastScrollTop = 0;
        this.scrollDirectionDown = true;
        this.handleScroll = this.handleScroll.bind(this);
        this.workDetails = [
            {
                number: '',
                projectName: '',
                projectDesc: '',
                projectType: '',
                roles: [
                    ''
                ]
            },
            {
                number: '01',
                projectName: 'BluePrint',
                projectDesc: 'Collaboratively built a comprehensive design system, showcased in Storybook.',
                projectType: 'DESIGN SYSTEM',
                roles: [
                    'UI Designer',
                    'Creative Technonogist'
                ],
                problem: 'The client needed a consistent and efficient design system to streamline their product development process.',
                indicators: 'Inconsistency in design across different products.\nDuplication of effort in designing similar components.\nLack of a centralized repository for design assets.',
                solution: 'Developed a comprehensive design system called BluePrint that provided a library of reusable components, typography guidelines, color palettes, and UI patterns. Created a Storybook documentation to showcase and maintain the design system.',
                QA: 'Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security.'
            },
            {
                number: '02',
                projectName: 'BluePrint Apps',
                projectDesc: 'Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.',
                projectType: 'ANGULAR APPS',
                roles: [
                    'UI Designer',
                    'Front-end Developer'
                ],
                problem: 'The client needed a set of applications that adhere to the design system we developed (BluePrint) to ensure a consistent user experience.',
                indicators: 'Inconsistency in the design language across different applications.\nDifficulty in maintaining consistent UI components and patterns.\nLack of a seamless user experience across different apps.',
                solution: 'Utilized the BluePrint design system to create a suite of Angular applications. Ensured consistent use of design elements, UI components, and interaction patterns across all apps. Conducted usability testing to validate the user experience.',
                QA: 'N/A'
            },
            {
                number: '03',
                projectName: 'Admin Portal',
                projectDesc: 'Created an admin portal for a nail boutique, streamlining operations by managing stock, client data, and generating reports.',
                projectType: 'WEB APP',
                roles: [
                    'MEAN Stack Developer',
                    'UI Designer'
                ],
                problem: 'The nail boutique needed an efficient system to manage their inventory, client information, and generate reports for business insights.',
                indicators: 'Manual inventory management causing errors and inefficiencies.\nLack of a centralized system to store client information.\nDifficulty in generating accurate and timely reports.',
                solution: 'Developed a web-based admin portal using the MEAN stack (MongoDB, Express.js, Angular, Node.js) that provided features for inventory management, client information storage, and report generation. Streamlined business operations and provided valuable insights for data-driven decision making.',
                QA: 'Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security.'
            },
            {
                number: '04',
                projectName: 'Nail Boutique',
                projectDesc: 'Collaborated on a website for a nail boutique with a customizer feature enabling customers to design their own nail art. Included service details, pricing, and booking options.',
                projectType: 'WEBSITE',
                roles: [
                    'Web Developer'
                ],
                problem: 'The nail boutique needed an online presence to showcase their services and allow customers to customize and book nail art designs.',
                indicators: 'Limited online visibility and reach.\nLack of a platform for customers to customize and book nail art designs.\nInability to showcase services, pricing, and contact information effectively.',
                solution: 'Developed a responsive website using HTML, CSS, and JavaScript that provided information about the nail boutique, showcased services, pricing, and contact details. Implemented a customizer feature to allow customers to design their own nail art and integrated a booking system for convenient appointment scheduling.',
                QA: 'Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security.'
            },
            {
                number: '05',
                projectName: 'Readpoint',
                projectDesc: 'Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to browse and purchase books.',
                projectType: 'WEB APP',
                roles: [
                    'Full Stack Developer'
                ],
                problem: 'The client wanted to establish an online presence to sell books and provide a seamless user experience for browsing and purchasing books.',
                indicators: 'Inability to reach a wider customer base without an online platform.\nLack of a convenient and secure way for customers to browse and purchase books.\nManual book inventory management leading to inaccuracies and inefficiencies.',
                solution: 'Developed a web application using the MERN stack (MongoDB, Express.js, React, Node.js) that provided features for browsing and purchasing books. Integrated a secure payment system and implemented an efficient book inventory management system with real-time updates.',
                QA: 'Storybook QA: Validated controls, tested responsiveness, and ensured visual alignment.\nComponent and Code Reviews: Conducted usability sessions, reviewed formatting and naming, and performed peer code reviews.\nChromatic QA: Utilized automated visual testing, collaborated for accelerated reviews, and integrated with continuous integration.\nNexus Testing: Ensured stable and up-to-date package versions through testing on Nexus.\nApplication Testing: Assessed component behavior within page templates.\nDevice Testing: Tested cross-platform compatibility, user experience, performance, and security.'
            },
            {
                number: '',
                projectName: '',
                projectDesc: '',
                projectType: '',
                roles: [
                    ''
                ],
                problem: '',
                indicators: '',
                solution: '',
                QA: ''
            }
        ];
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
            vh: Math.round(window.document.documentElement.clientHeight * this.pageSplitTimes)
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        const { body, documentElement } = window.document;
        const { vh, slideNumber } = this.state;
        const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
        if (scrollDistance > this.lastScrollTop) this.scrollDirectionDown = true;
        else this.scrollDirectionDown = false;
        this.lastScrollTop = scrollDistance;
        if (Math.floor(scrollDistance / vh) !== slideNumber && slideNumber < this.workDetails.length - 1) this.setState({
            slideNumber: Math.floor(scrollDistance / vh)
        });
        else if (slideNumber === this.workDetails.length - 1 && Math.floor(scrollDistance / vh) < slideNumber) this.setState({
            slideNumber: Math.floor(scrollDistance / vh)
        });
    }
    handleButtonClick = (projectIndex)=>{
        this.setState({
            showDialog: true,
            dialogProject: this.workDetails[projectIndex]
        });
    };
    handleCloseDialog = ()=>{
        this.setState({
            showDialog: false,
            dialogProject: null
        });
    };
    changeTextContentBasedOnScroll() {
        const { slideNumber } = this.state;
        const refresh = true;
        if (slideNumber >= this.workDetails.length) return null;
        const project = this.workDetails[slideNumber];
        let description = null;
        if (project.projectDesc) description = /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 251,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 252,
                columnNumber: 11
            },
            __self: this
        }, project.projectDesc), project.projectType !== 'UI Designer' && /*#__PURE__*/ (0, _reactDefault.default).createElement(Button, {
            type: "button",
            onClick: ()=>this.handleButtonClick(slideNumber),
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 254,
                columnNumber: 13
            },
            __self: this
        }, "More Info..."));
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _textContentDefault.default), {
            number: project.number,
            projectName: project.projectName,
            projectDesc: description,
            projectType: project.projectType,
            roles: project.roles,
            refreshToggle: refresh,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 263,
                columnNumber: 7
            },
            __self: this
        });
    }
    render() {
        const { showDialog, dialogProject } = this.state;
        const renderDialog = showDialog && dialogProject && /*#__PURE__*/ (0, _reactDefault.default).createElement(Overlay, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 278,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Dialog, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 279,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 280,
                columnNumber: 11
            },
            __self: this
        }, "Problem:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 281,
                columnNumber: 11
            },
            __self: this
        }, dialogProject.problem), /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 282,
                columnNumber: 11
            },
            __self: this
        }, "Indicators:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("ul", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 283,
                columnNumber: 11
            },
            __self: this
        }, dialogProject.indicators.split('\n').map((indicator, index)=>/*#__PURE__*/ (0, _reactDefault.default).createElement("li", {
                key: index,
                __source: {
                    fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                    lineNumber: 285,
                    columnNumber: 15
                },
                __self: this
            }, indicator))), /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 289,
                columnNumber: 11
            },
            __self: this
        }, "Solution:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 290,
                columnNumber: 11
            },
            __self: this
        }, dialogProject.solution), dialogProject.projectName === 'BluePrint' && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 294,
                columnNumber: 15
            },
            __self: this
        }, "QA:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("ul", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 295,
                columnNumber: 15
            },
            __self: this
        }, dialogProject.QA.split('\n').map((QA, index)=>/*#__PURE__*/ (0, _reactDefault.default).createElement("li", {
                key: index,
                __source: {
                    fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                    lineNumber: 297,
                    columnNumber: 19
                },
                __self: this
            }, QA)))), /*#__PURE__*/ (0, _reactDefault.default).createElement(Button, {
            onClick: this.handleCloseDialog,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 302,
                columnNumber: 11
            },
            __self: this
        }, "Close")));
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 309,
                columnNumber: 7
            },
            __self: this
        }, this.changeTextContentBasedOnScroll(), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _imageContentDefault.default), {
            pageSplitTimes: this.pageSplitTimes,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 311,
                columnNumber: 9
            },
            __self: this
        }), showDialog && /*#__PURE__*/ (0, _reactDefault.default).createElement(Overlay, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 313,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Dialog, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 314,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 315,
                columnNumber: 15
            },
            __self: this
        }, "Problem:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 316,
                columnNumber: 15
            },
            __self: this
        }, dialogProject.problem), /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 317,
                columnNumber: 15
            },
            __self: this
        }, "Indicators:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("ul", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 318,
                columnNumber: 15
            },
            __self: this
        }, dialogProject.indicators.split('\n').map((indicator, index)=>/*#__PURE__*/ (0, _reactDefault.default).createElement("li", {
                key: index,
                __source: {
                    fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                    lineNumber: 320,
                    columnNumber: 19
                },
                __self: this
            }, indicator))), /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 323,
                columnNumber: 15
            },
            __self: this
        }, "Solution:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("p", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 324,
                columnNumber: 15
            },
            __self: this
        }, dialogProject.solution), dialogProject.projectName === 'BluePrint' && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, null, /*#__PURE__*/ (0, _reactDefault.default).createElement("h3", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 328,
                columnNumber: 15
            },
            __self: this
        }, "QA:"), /*#__PURE__*/ (0, _reactDefault.default).createElement("ul", {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 329,
                columnNumber: 15
            },
            __self: this
        }, dialogProject.QA.split('\n').map((QA, index)=>/*#__PURE__*/ (0, _reactDefault.default).createElement("li", {
                key: index,
                __source: {
                    fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                    lineNumber: 331,
                    columnNumber: 19
                },
                __self: this
            }, QA)))), /*#__PURE__*/ (0, _reactDefault.default).createElement(Button, {
            onClick: this.handleCloseDialog,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/Work.js",
                lineNumber: 336,
                columnNumber: 15
            },
            __self: this
        }, "Close"))));
    }
}
exports.default = Work;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "Button");
$RefreshReg$(_c2, "Overlay");
$RefreshReg$(_c3, "Dialog");

  $parcel$ReactRefreshHelpers$c4c9.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","./TextContent":"glxcf","./ImageContent":"2jC4X","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"glxcf":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4d4c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$4d4c.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$4d4c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const TextContainer = (0, _styledComponentsDefault.default).section`
position: fixed;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
height:100vh;
width: 50%;
`;
_c = TextContainer;
const ProjectName = (0, _styledComponentsDefault.default).div`
  font-family: 'AvenirHeavy';
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 70px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 80px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 120px;
  }
  letter-spacing: -0.02em;
  /* border: 1px dashed black; */
`;
_c1 = ProjectName;
const ProjectDesc = (0, _styledComponentsDefault.default).div`
  padding-top:2%;
  font-family: 'AvenirBook';
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 25px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 30px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`;
_c2 = ProjectDesc;
const MyRole = (0, _styledComponentsDefault.default).div`
  padding-top:5%;
  font-family: 'AvenirMedium';
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 25px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 30px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 50px;
  }
  /* border: 1px dashed black; */
`;
_c3 = MyRole;
const ProjectID = (0, _styledComponentsDefault.default).div`
  font-family: 'AvenirHeavy';
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 25px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 30px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
  padding-top: 140px; /* Increased to clear back-to-menu-btn */
`;
_c4 = ProjectID;
const ProjectType = (0, _styledComponentsDefault.default).div`
  font-family: 'AvenirHeavy';
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 25px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 30px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 58px;
  }
  /* border: 1px dashed black; */
  padding: 5%;
`;
_c5 = ProjectType;
const ProjectDetails = (0, _styledComponentsDefault.default).div`
display: flex;
flex-flow: column nowrap;
/* border: 1px dashed black; */
width: 100%;
padding: 5%;
padding-left:10%;
`;
_c6 = ProjectDetails;
const ProjectDetailsContainer = (0, _styledComponentsDefault.default).div`
display: flex;
flex-flow: column nowrap;
align-items: center;
/* border: 2px solid black; */
padding-top:5%;
height: 100%;
`;
_c7 = ProjectDetailsContainer;
const appearText = ()=>(0, _styledComponents.keyframes)`
0%{
  color: #FFF;
}
100%{
  color: var(--ink);
}
`;
const revBlock = ()=>(0, _styledComponents.keyframes)`
0%{
    left: 0;
    width: 0%
}
50%{
    left:0%;
    width:100%
}
100%{
    left:100%;
    width:0%
}
`;
let BlockTextReveal = (0, _styledComponentsDefault.default).span`
`;
_c8 = BlockTextReveal;
const BlockTextRevealQuick = (0, _styledComponentsDefault.default).span`
display:${(props)=>props.inline ? 'inline-block' : 'block'};
color: var(--ink);
text-shadow: var(--aura-glow);
letter-spacing: 0.01em;
font-weight: 700;
position: relative;

&::after{
content:'';
top:0;
left:0;
position:absolute;
width:0%;
height:100%;
background: var(--ink);
animation: ${revBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
animation-delay:0s;
}
`;
const BlockTextRevealNoAnim = (0, _styledComponentsDefault.default).span`

`;
class TextContent extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            refreshBlock: false
        };
        this.refresh = this.refresh.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.refresh(nextProps);
    }
    refresh(nextProps) {
        const { refreshToggle } = nextProps;
        if (refreshToggle) {
            BlockTextReveal = BlockTextRevealNoAnim;
            this.setState({
                refreshBlock: true
            }, ()=>{
                BlockTextReveal = BlockTextRevealQuick;
                this.setState({
                    refreshBlock: false
                });
            });
        }
    }
    render() {
        const { number, projectName, projectDesc, roles, projectType, refreshToggle } = this.props;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(TextContainer, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 195,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectID, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 196,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BlockTextReveal, {
            refreshToggle: refreshToggle,
            inline: true,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 197,
                columnNumber: 11
            },
            __self: this
        }, number)), /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectDetailsContainer, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 201,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectDetails, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 202,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectName, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 203,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BlockTextReveal, {
            refreshToggle: refreshToggle,
            inline: true,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 204,
                columnNumber: 15
            },
            __self: this
        }, projectName)), /*#__PURE__*/ (0, _reactDefault.default).createElement(MyRole, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 208,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BlockTextReveal, {
            refreshToggle: refreshToggle,
            inline: true,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 209,
                columnNumber: 15
            },
            __self: this
        }, roles.map((role, index, arr)=>index === arr.length - 1 ? /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
                key: role,
                __source: {
                    fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                    lineNumber: 211,
                    columnNumber: 19
                },
                __self: this
            }, role) : /*#__PURE__*/ (0, _reactDefault.default).createElement("span", {
                key: role,
                __source: {
                    fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                    lineNumber: 215,
                    columnNumber: 19
                },
                __self: this
            }, role, "\xa0 \u2022 \xa0")))), /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectDesc, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 222,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BlockTextReveal, {
            refreshToggle: refreshToggle,
            inline: false,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 223,
                columnNumber: 15
            },
            __self: this
        }, projectDesc)))), /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectType, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 230,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BlockTextReveal, {
            refreshToggle: refreshToggle,
            inline: true,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/TextContent.js",
                lineNumber: 231,
                columnNumber: 11
            },
            __self: this
        }, projectType)));
    }
}
TextContent.propTypes = {
    number: (0, _propTypesDefault.default).string.isRequired,
    projectName: (0, _propTypesDefault.default).string.isRequired,
    projectDesc: (0, _propTypesDefault.default).node,
    projectType: (0, _propTypesDefault.default).string.isRequired,
    roles: (0, _propTypesDefault.default).array.isRequired,
    refreshToggle: (0, _propTypesDefault.default).bool.isRequired
};
TextContent.defaultProps = {
    projectDesc: null
};
exports.default = TextContent;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
$RefreshReg$(_c, "TextContainer");
$RefreshReg$(_c1, "ProjectName");
$RefreshReg$(_c2, "ProjectDesc");
$RefreshReg$(_c3, "MyRole");
$RefreshReg$(_c4, "ProjectID");
$RefreshReg$(_c5, "ProjectType");
$RefreshReg$(_c6, "ProjectDetails");
$RefreshReg$(_c7, "ProjectDetailsContainer");
$RefreshReg$(_c8, "BlockTextReveal");

  $parcel$ReactRefreshHelpers$4d4c.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"2jC4X":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$a7c1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$a7c1.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$a7c1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _bluePrintImages = require("./ParallaxImages/BluePrintImages");
var _bluePrintImagesDefault = parcelHelpers.interopDefault(_bluePrintImages);
var _bluePrintAppsImages = require("./ParallaxImages/BluePrintAppsImages");
var _bluePrintAppsImagesDefault = parcelHelpers.interopDefault(_bluePrintAppsImages);
var _adminPortalImages = require("./ParallaxImages/AdminPortalImages");
var _adminPortalImagesDefault = parcelHelpers.interopDefault(_adminPortalImages);
var _nailBoutiqueImages = require("./ParallaxImages/NailBoutiqueImages");
var _nailBoutiqueImagesDefault = parcelHelpers.interopDefault(_nailBoutiqueImages);
var _readpointImages = require("./ParallaxImages/ReadpointImages");
var _readpointImagesDefault = parcelHelpers.interopDefault(_readpointImages);
const ImageContainer = (0, _styledComponentsDefault.default).div`
  margin-left: 50%;
  width: 50%;
  height: 750vh;
  display: flex;
  flex-flow: column nowrap;
`;
_c = ImageContainer;
const ImageBox = (0, _styledComponentsDefault.default).div`
  margin-top: 40vh;
  height: 100vh;
  position: relative;
`;
_c1 = ImageBox;
class ImageContent extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            screenHeight: 0,
            scrollHeight: 0,
            scrollPercent: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
            scrollHeight: Math.round(window.document.documentElement.scrollHeight),
            screenHeight: Math.round(window.document.documentElement.clientHeight)
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        const { body, documentElement } = window.document;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        const sp = sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100;
        const minlimit = documentElement.clientHeight * 100 / documentElement.scrollHeight;
        const maxlimit = documentElement.clientHeight * 1040 / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= maxlimit) this.setState({
            scrollPercent: sp
        });
    }
    render() {
        const { scrollPercent, scrollHeight, screenHeight } = this.state;
        const { pageSplitTimes } = this.props;
        const boxHeight = pageSplitTimes * 100;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageContainer, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 63,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 64,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _bluePrintImagesDefault.default), {
            boxHeight: boxHeight,
            index: 1,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 65,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 73,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _bluePrintAppsImagesDefault.default), {
            boxHeight: boxHeight,
            index: 2,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 74,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 82,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _adminPortalImagesDefault.default), {
            boxHeight: boxHeight,
            index: 3,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 83,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 91,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _nailBoutiqueImagesDefault.default), {
            boxHeight: boxHeight,
            index: 4,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 92,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 100,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _readpointImagesDefault.default), {
            boxHeight: boxHeight,
            index: 5,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ImageContent.js",
                lineNumber: 101,
                columnNumber: 11
            },
            __self: this
        })));
    }
}
ImageContent.propTypes = {
    pageSplitTimes: (0, _propTypesDefault.default).number.isRequired
};
exports.default = ImageContent;
var _c, _c1;
$RefreshReg$(_c, "ImageContainer");
$RefreshReg$(_c1, "ImageBox");

  $parcel$ReactRefreshHelpers$a7c1.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","./ParallaxImages/BluePrintImages":"kgOjG","./ParallaxImages/BluePrintAppsImages":"4kCJk","./ParallaxImages/AdminPortalImages":"6Wp1S","./ParallaxImages/NailBoutiqueImages":"2f2Bw","./ParallaxImages/ReadpointImages":"3JRf2","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"kgOjG":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$ae4d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$ae4d.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$ae4d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const voistrapHomeImg = new URL(require("13f04c78b93cb6ab")).href;
const voistrapMeetingsImg = new URL(require("88414a3febec4e6f")).href;
const voistrapPeopleImg = new URL(require("6aa08346bc697847")).href;
const VoistrapPhoneHome = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 15}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 40vh; 
`;
_c = VoistrapPhoneHome;
const VoistrapPhoneMeetings = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
right: 2vw;
height: 50vh;
filter: blur(0.6px);
`;
_c1 = VoistrapPhoneMeetings;
const VoistrapPhonePeople = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 2}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
left:0vw;
height: 50vh; 
`;
_c2 = VoistrapPhonePeople;
class BluePrintImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 56,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(VoistrapPhonePeople, {
            src: voistrapPeopleImg,
            scroll: scrollPercent,
            alt: "voistrapPeople",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 57,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(VoistrapPhoneMeetings, {
            src: voistrapMeetingsImg,
            scroll: scrollPercent,
            alt: "voistrapMeetings",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 58,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(VoistrapPhoneHome, {
            src: voistrapHomeImg,
            scroll: scrollPercent,
            alt: "voistrapHome",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 59,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
BluePrintImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = BluePrintImages;
var _c, _c1, _c2;
$RefreshReg$(_c, "VoistrapPhoneHome");
$RefreshReg$(_c1, "VoistrapPhoneMeetings");
$RefreshReg$(_c2, "VoistrapPhonePeople");

  $parcel$ReactRefreshHelpers$ae4d.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","13f04c78b93cb6ab":"hZneB","88414a3febec4e6f":"g8Pb4","6aa08346bc697847":"kF4Vd","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"hZneB":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 14.f64a653f.png") + "?" + Date.now();

},{}],"g8Pb4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 16.86771fcc.png") + "?" + Date.now();

},{}],"kF4Vd":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 29.6d00d50e.png") + "?" + Date.now();

},{}],"4kCJk":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$87dd = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$87dd.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$87dd.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const homeImg = new URL(require("a037f7ad9f439106")).href;
const restaurantImg = new URL(require("da29619a6c328c87")).href;
const addRestaurantImg = new URL(require("c21dbbc37d14fc13")).href;
const addFoodImg = new URL(require("8a3c84e189d5e86f")).href;
const Restaurant = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 15}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left:0vw;
height: 80vh; 
`;
_c = Restaurant;
const Home = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-15vh;
right: 2vw;
height: 80vh;
filter: blur(0.2px);
`;
_c1 = Home;
const AddFood = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 5}%) scale(0.7)`
        })
})`
transition: transform 0.2s ease-out;
bottom:-30vh;
left:2vw;
position: absolute;
height: 80vh;
filter: blur(0.4px);
`;
_c2 = AddFood;
const AddRestaurant = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 2}%) scale(0.6)`
        })
})`
transition: transform 0.2s ease-out;
bottom:-15vh;
right: 4vw;
position: absolute;
height: 60vh;
filter: blur(0.2px);
`;
_c3 = AddRestaurant;
class BluePrintAppsImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 71,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(AddFood, {
            src: addFoodImg,
            scroll: scrollPercent,
            alt: "addFood",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 72,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(AddRestaurant, {
            src: addRestaurantImg,
            scroll: scrollPercent,
            alt: "addRestaurant",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 73,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Home, {
            src: homeImg,
            scroll: scrollPercent,
            alt: "Home",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 74,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Restaurant, {
            src: restaurantImg,
            scroll: scrollPercent,
            alt: "Restaurant",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 75,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
BluePrintAppsImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = BluePrintAppsImages;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "Restaurant");
$RefreshReg$(_c1, "Home");
$RefreshReg$(_c2, "AddFood");
$RefreshReg$(_c3, "AddRestaurant");

  $parcel$ReactRefreshHelpers$87dd.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","a037f7ad9f439106":"eUiac","da29619a6c328c87":"hkkmu","c21dbbc37d14fc13":"gMLqG","8a3c84e189d5e86f":"cUYY0","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"eUiac":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 19.4a3372c7.png") + "?" + Date.now();

},{}],"hkkmu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 22.e7319c2e.png") + "?" + Date.now();

},{}],"gMLqG":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 30.191af9d9.png") + "?" + Date.now();

},{}],"cUYY0":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 31.6128cf16.png") + "?" + Date.now();

},{}],"6Wp1S":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$fdf6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$fdf6.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$fdf6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const dots = new URL(require("d65363f8f99c019a")).href;
const bubbles = new URL(require("a93d4ef99ede1585")).href;
const paths = new URL(require("4a77a170ac71ce9a")).href;
const bigBubble = new URL(require("dc8ae77c17d3aa50")).href;
/* Foreground — enters first, exits first */ const Paths = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 3}%) scale(0.6)`
        })
})`
transition: transform 0.2s ease-out;
bottom: 10vh;
right: 1vw;
transform-origin: right center;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`;
_c = Paths;
const BigBubble = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.7)`
        })
})`
transition: transform 0.2s ease-out;
bottom: -10vh;
left: -4vw;
position: absolute;
height: 50vh;
filter: blur(0.3px);
`;
_c1 = BigBubble;
/* Mid-depth */ const Bubbles = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 15}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -35vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.1px);
`;
_c2 = Bubbles;
/* Background — slowest, exits last but still within section */ const Dots = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 22}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -60vh;
left: 0vw;
height: 50vh;
`;
_c3 = Dots;
class AdminPortalImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 76,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Paths, {
            src: paths,
            scroll: scrollPercent,
            alt: "paths",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 77,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(BigBubble, {
            src: bigBubble,
            scroll: scrollPercent,
            alt: "bigBubble",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 78,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Bubbles, {
            src: bubbles,
            scroll: scrollPercent,
            alt: "bubbles",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 79,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Dots, {
            src: dots,
            scroll: scrollPercent,
            alt: "dots",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 80,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
AdminPortalImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = AdminPortalImages;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "Paths");
$RefreshReg$(_c1, "BigBubble");
$RefreshReg$(_c2, "Bubbles");
$RefreshReg$(_c3, "Dots");

  $parcel$ReactRefreshHelpers$fdf6.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","d65363f8f99c019a":"g2WAZ","a93d4ef99ede1585":"hy06r","4a77a170ac71ce9a":"76hgV","dc8ae77c17d3aa50":"01m6i","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"g2WAZ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 23.c5360124.png") + "?" + Date.now();

},{}],"hy06r":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 25.ab8ae5c6.png") + "?" + Date.now();

},{}],"76hgV":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 24.cd87abd2.png") + "?" + Date.now();

},{}],"01m6i":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 26.59b84e88.png") + "?" + Date.now();

},{}],"2f2Bw":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$2278 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$2278.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$2278.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const dots = new URL(require("4e7a077ce370bc15")).href;
const bubbles = new URL(require("c3ceacceeef79614")).href;
const bigBubble = new URL(require("7069d302c44c6561")).href;
const BigBubble = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.7)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left: -4vw;
height: 50vh;
filter: blur(0.8px);
`;
_c = BigBubble;
const Bubbles = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 12}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -50vh;
right: 0vw;
transform-origin: right center;
height: 50vh;
filter: blur(0.4px);
`;
_c1 = Bubbles;
const Dots = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 25}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 30vh;
left: 0vw;
height: 40vh;
`;
_c2 = Dots;
class NailBoutiqueImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 59,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BigBubble, {
            src: bigBubble,
            scroll: scrollPercent,
            alt: "bigBubble",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 60,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Bubbles, {
            src: bubbles,
            scroll: scrollPercent,
            alt: "bubbles",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 61,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Dots, {
            src: dots,
            scroll: scrollPercent,
            alt: "dots",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 62,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
NailBoutiqueImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = NailBoutiqueImages;
var _c, _c1, _c2;
$RefreshReg$(_c, "BigBubble");
$RefreshReg$(_c1, "Bubbles");
$RefreshReg$(_c2, "Dots");

  $parcel$ReactRefreshHelpers$2278.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","4e7a077ce370bc15":"hjYM9","c3ceacceeef79614":"dsN8l","7069d302c44c6561":"eovtF","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"hjYM9":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 9.21058293.png") + "?" + Date.now();

},{}],"dsN8l":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 27.cfd76678.png") + "?" + Date.now();

},{}],"eovtF":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 28.acad1e49.png") + "?" + Date.now();

},{}],"3JRf2":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3550 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$3550.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$3550.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const bigBubble = new URL(require("7e79973d2a295909")).href;
const BigBubble = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 10}%) scale(0.7)`
        })
})`
bottom:-50vh;
left:-4vw;
position: absolute;
height: 50vh;
filter: blur(0.1px);
`;
_c = BigBubble;
class ReadpointImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/ReadpointImages.js",
                lineNumber: 30,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BigBubble, {
            src: bigBubble,
            scroll: scrollPercent,
            alt: "bigBubble",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/WorkSlide/ParallaxImages/ReadpointImages.js",
                lineNumber: 31,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
ReadpointImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = ReadpointImages;
var _c;
$RefreshReg$(_c, "BigBubble");

  $parcel$ReactRefreshHelpers$3550.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","7e79973d2a295909":"hXsT3","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"hXsT3":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 32.e113c69f.png") + "?" + Date.now();

},{}],"9yWj8":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$25b8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$25b8.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$25b8.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
const Container = (0, _styledComponentsDefault.default).div`
  height: 120vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  
`;
_c = Container;
const SkillsTitle = (0, _styledComponentsDefault.default).div`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: var(--ink);
  top: 40%;
  right: -50%;
`;
_c1 = SkillsTitle;
const SkillsList = (0, _styledComponentsDefault.default).div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'AvenirRoman';
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
`;
const CertificateGallery = (0, _styledComponentsDefault.default).div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  animation: scrollLoop 20s linear infinite;

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome and Safari */
  }
`;
const CertificateImageLink = (0, _styledComponentsDefault.default).a`
  flex: 0 0 auto;
  margin: 10px;
  scroll-snap-align: start;
`;
const CertificateImage = (0, _styledComponentsDefault.default).img`
  width: 200px;
  height: auto;
`;
class Skills extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/Skills.js",
                lineNumber: 68,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(SkillsTitle, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/Skills.js",
                lineNumber: 69,
                columnNumber: 9
            },
            __self: this
        }, "SKILLS"));
    }
}
exports.default = Skills;
var _c, _c1;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "SkillsTitle");

  $parcel$ReactRefreshHelpers$25b8.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"erbBO":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$0f38 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$0f38.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$0f38.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _socialLogo = require("./SocialLogo");
var _socialLogoDefault = parcelHelpers.interopDefault(_socialLogo);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const githubImg = new URL(require("81e267509a9e117")).href;
const mailImg = new URL(require("9220ddd4bf677080")).href;
const linkedInImg = new URL(require("36dca94e9f7bb63c")).href;
const Container = (0, _styledComponentsDefault.default).section`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;
_c = Container;
const ContactTitle = (0, _styledComponentsDefault.default).div.attrs({
    style: ({ scrollPercent })=>({
            transform: `translateX(${scrollPercent * 8}%)`
        })
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color:#cfd7ff;
  top:12%;
  left:-70%;
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 180px;
  }
  @media ${(0, _breakpointsDefault.default).laptopL} {
    font-size: 200px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    font-size: 350px;
  }
`;
_c1 = ContactTitle;
const SocialMediaIcons = (0, _styledComponentsDefault.default).div`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
_c2 = SocialMediaIcons;
class Contact extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            screenHeight: 0,
            scrollHeight: 0,
            scrollPercent: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
            scrollHeight: Math.round(window.document.documentElement.scrollHeight)
        });
        this.setState({
            screenHeight: Math.round(window.document.documentElement.clientHeight)
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        const { body, documentElement } = window.document;
        const sd = Math.max(body.scrollTop, documentElement.scrollTop);
        let sp = sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100;
        const minlimit = documentElement.clientHeight * 1040 / documentElement.scrollHeight;
        if (sp >= minlimit && sp <= 100) {
            sp -= minlimit;
            this.setState({
                scrollPercent: sp
            });
        }
    }
    render() {
        const { scrollPercent } = this.state;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/Contact.js",
                lineNumber: 86,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ContactTitle, {
            scrollPercent: scrollPercent,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/Contact.js",
                lineNumber: 87,
                columnNumber: 9
            },
            __self: this
        }, "CONTACT"), /*#__PURE__*/ (0, _reactDefault.default).createElement(SocialMediaIcons, {
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/Contact.js",
                lineNumber: 88,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _socialLogoDefault.default), {
            imgURL: githubImg,
            alternate: "Github",
            redirectURL: "https://github.com/Royverse",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/Contact.js",
                lineNumber: 90,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _socialLogoDefault.default), {
            imgURL: mailImg,
            alternate: "Mail",
            redirectURL: "mailto:roymootsana@gmail.com",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/Contact.js",
                lineNumber: 91,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _socialLogoDefault.default), {
            imgURL: linkedInImg,
            alternate: "Linkedin",
            redirectURL: "https://www.linkedin.com/in/roy-mootsana-77818a14a/",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/Contact.js",
                lineNumber: 92,
                columnNumber: 11
            },
            __self: this
        })));
    }
}
exports.default = Contact;
var _c, _c1, _c2;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "ContactTitle");
$RefreshReg$(_c2, "SocialMediaIcons");

  $parcel$ReactRefreshHelpers$0f38.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","81e267509a9e117":"bJBMm","9220ddd4bf677080":"4zFiy","36dca94e9f7bb63c":"deTw6","./SocialLogo":"63R0W","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"bJBMm":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("git.a3e89168.svg") + "?" + Date.now();

},{}],"4zFiy":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("mail.40cde78c.svg") + "?" + Date.now();

},{}],"deTw6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("linkedin.ef0d0a82.svg") + "?" + Date.now();

},{}],"63R0W":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$66f2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$66f2.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$66f2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const LogoImage = (0, _styledComponentsDefault.default).img`
/* border: 1px solid black; */
@media ${(0, _breakpointsDefault.default).laptop} {
    height: 85px;
    width: 85px;
  }
@media ${(0, _breakpointsDefault.default).laptopL} {
    height: 90px;
    width: 90px;
  }
  @media ${(0, _breakpointsDefault.default).desktop} {
    height: 180px;
    width: 180px;
  }
`;
_c = LogoImage;
class SocialLogo extends (0, _reactDefault.default).Component {
    constructor(props){
        super(props);
        this.notifySlack = this.notifySlack.bind(this);
    }
    notifySlack() {
        const { alternate } = this.props;
        console.log(alternate);
        fetch(undefined, {
            credentials: 'omit',
            method: 'POST',
            body: JSON.stringify({
                text: `\u{1F680} ${alternate}`
            })
        });
    }
    render() {
        const { imgURL, alternate, redirectURL } = this.props;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement("a", {
            href: redirectURL,
            onClick: this.notifySlack,
            target: "_blank",
            rel: "noopener noreferrer",
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/SocialLogo.js",
                lineNumber: 41,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoImage, {
            src: imgURL,
            alt: alternate,
            __source: {
                fileName: "src/components/PortfolioLegacy/WideScreen/ContactSlide/SocialLogo.js",
                lineNumber: 42,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
SocialLogo.propTypes = {
    imgURL: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).string,
        (0, _propTypesDefault.default).object
    ]).isRequired,
    alternate: (0, _propTypesDefault.default).string.isRequired,
    redirectURL: (0, _propTypesDefault.default).string.isRequired
};
exports.default = SocialLogo;
var _c;
$RefreshReg$(_c, "LogoImage");

  $parcel$ReactRefreshHelpers$66f2.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"aZc43":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c783 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$c783.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$c783.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _nameAndJobTitle = require("./NameAndJobTitle");
var _nameAndJobTitleDefault = parcelHelpers.interopDefault(_nameAndJobTitle);
var _aboutMe = require("./AboutMe");
var _aboutMeDefault = parcelHelpers.interopDefault(_aboutMe);
class Hero extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/Hero.js",
                lineNumber: 8,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _nameAndJobTitleDefault.default), {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/Hero.js",
                lineNumber: 9,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _aboutMeDefault.default), {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/Hero.js",
                lineNumber: 10,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
exports.default = Hero;

  $parcel$ReactRefreshHelpers$c783.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","./NameAndJobTitle":"kI3mm","./AboutMe":"a6EMD","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"kI3mm":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$a348 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$a348.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$a348.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _framerMotion = require("framer-motion");
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const Container = (0, _styledComponentsDefault.default).section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Changed from 35vh to center it properly */
    width: 100%;
    padding: 0 20px;
    position: relative;
    z-index: 50;
`;
_c = Container;
const Stage = (0, _styledComponentsDefault.default).div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
`;
_c1 = Stage;
const Name = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).div)`
  font-family: 'Cinzel', serif;
  text-align: center;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 700;
  white-space: nowrap;
  @media ${(0, _breakpointsDefault.default).mobileS} { font-size: 32px; }
  @media ${(0, _breakpointsDefault.default).mobileM} { font-size: 38px; }
  @media ${(0, _breakpointsDefault.default).mobileL} { font-size: 44px; }
  @media ${(0, _breakpointsDefault.default).tablet} { font-size: 100px; }
`;
_c2 = Name;
const Title = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).div)`
  font-family: 'Rajdhani', sans-serif;
  text-align: center;
  margin-top: 15px;
  color: var(--ink);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  @media ${(0, _breakpointsDefault.default).mobileS} { font-size: 12px; }
  @media ${(0, _breakpointsDefault.default).mobileM} { font-size: 14px; }
  @media ${(0, _breakpointsDefault.default).mobileL} { font-size: 16px; }
  @media ${(0, _breakpointsDefault.default).tablet} { font-size: 24px; }
`;
_c3 = Title;
const bounce = (0, _styledComponents.keyframes)`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-20px);}
  60% {transform: translateY(-10px);}
`;
const ArrowWrapper = (0, _styledComponentsDefault.default).div`
  animation: ${bounce} 2s infinite;
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
_c4 = ArrowWrapper;
class NameAndJobTitle extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 69,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Stage, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 70,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Name, {
            initial: {
                y: "100%"
            },
            animate: {
                y: 0
            },
            transition: {
                duration: 1,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ],
                delay: 0.5
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 71,
                columnNumber: 11
            },
            __self: this
        }, "Roy Mootsana")), /*#__PURE__*/ (0, _reactDefault.default).createElement(Stage, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 79,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Title, {
            initial: {
                y: "100%"
            },
            animate: {
                y: 0
            },
            transition: {
                duration: 1,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ],
                delay: 1.3
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 80,
                columnNumber: 11
            },
            __self: this
        }, "Design and Development")), /*#__PURE__*/ (0, _reactDefault.default).createElement(ArrowWrapper, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 89,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Stage, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 90,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Title, {
            initial: {
                y: "100%"
            },
            animate: {
                y: 0
            },
            transition: {
                duration: 1,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ],
                delay: 1.5
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/NameAndJobTitle.js",
                lineNumber: 91,
                columnNumber: 13
            },
            __self: this
        }, "\u2193"))));
    }
}
exports.default = NameAndJobTitle;
var _c, _c1, _c2, _c3, _c4;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "Stage");
$RefreshReg$(_c2, "Name");
$RefreshReg$(_c3, "Title");
$RefreshReg$(_c4, "ArrowWrapper");

  $parcel$ReactRefreshHelpers$a348.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","framer-motion":"byfhV","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"a6EMD":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$b926 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$b926.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$b926.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _framerMotion = require("framer-motion");
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const Container = (0, _styledComponentsDefault.default).section`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 50;
`;
_c = Container;
const AboutMeDescription = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).span)`
  font-family: 'AvenirRoman';
  text-align: center;
  color: var(--ink);
  line-height: 1.5;
  @media ${(0, _breakpointsDefault.default).mobileS} { font-size: 18px; }
  @media ${(0, _breakpointsDefault.default).mobileM} { font-size: 20px; }
  @media ${(0, _breakpointsDefault.default).mobileL} { font-size: 22px; }
  @media ${(0, _breakpointsDefault.default).tablet} { font-size: 32px; }
  @media ${(0, _breakpointsDefault.default).laptop} { font-size: 36px; }
`;
_c1 = AboutMeDescription;
class AboutMe extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/AboutMe.js",
                lineNumber: 33,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(AboutMeDescription, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 1.2,
                delay: 0.5
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/HeroSlide/AboutMe.js",
                lineNumber: 34,
                columnNumber: 9
            },
            __self: this
        }, "Software Engineer and UX Architect bridging the gap between rigorous engineering and human-centred design. A systems thinker with a designer's eye, a chess strategist's patience, and a builder's bias for action."));
    }
}
exports.default = AboutMe;
var _c, _c1;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "AboutMeDescription");

  $parcel$ReactRefreshHelpers$b926.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","framer-motion":"byfhV","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"e4D4B":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$cd05 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$cd05.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$cd05.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _vhCheck = require("vh-check");
var _vhCheckDefault = parcelHelpers.interopDefault(_vhCheck);
var _textContent = require("./TextContent");
var _textContentDefault = parcelHelpers.interopDefault(_textContent);
var _imageContent = require("./ImageContent");
var _imageContentDefault = parcelHelpers.interopDefault(_imageContent);
const Container = (0, _styledComponentsDefault.default).div`
    display: flex;
    flex-flow: row nowrap;
    background: var(--bg);
    min-height: 100vh;
    transition: background 0.5s ease;
`;
_c = Container;
class Work extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            vh: 0,
            slideNumber: 0
        };
        this.pageSplitTimes = 1.3;
        this.lastScrollTop = 0;
        this.ticking = false;
        this.handleScroll = this.handleScroll.bind(this);
        this.workDetails = [
            {
                number: '',
                projectName: '',
                projectDesc: '',
                projectType: '',
                roles: [
                    ''
                ]
            },
            {
                number: '01',
                projectName: 'BluePrint Storybook',
                projectDesc: 'Collaborated with a team to develop a comprehensive design system for a client. Created an extensive Storybook showcasing all the design elements and components.',
                projectType: 'DESIGN SYSTEM',
                roles: [
                    'UI Designer',
                    'Technologist'
                ]
            },
            {
                number: '02',
                projectName: 'BluePrint Apps',
                projectDesc: 'Built apps utilizing the design system we created for our client, resulting in consistent design and functionality across all apps.',
                projectType: 'ANGULAR APPS',
                roles: [
                    'UI Designer',
                    'Front-end Developer'
                ]
            },
            {
                number: '03',
                projectName: 'Admin Portal',
                projectDesc: 'Developed an admin portal for a nail boutique with a database to capture stock and client information, streamlining business operations and providing valuable insights.',
                projectType: 'WEB APP',
                roles: [
                    'MEAN Stack Developer',
                    'UI Designer'
                ]
            },
            {
                number: '04',
                projectName: 'Nail boutique website',
                projectDesc: "Collaborated with a team to develop a website for a nail boutique with a customizer feature that allows customers to design their own nail art.",
                projectType: 'WEBSITE',
                roles: [
                    'Web Developer'
                ]
            },
            {
                number: '05',
                projectName: 'Readpoint',
                projectDesc: 'Developed an e-commerce website for selling books with a MongoDB database and a payment system. The website allows customers to securely browse and purchase books.',
                projectType: 'WEB APP',
                roles: [
                    'Full Stack Developer'
                ]
            },
            {
                number: '',
                projectName: '',
                projectDesc: '',
                projectType: '',
                roles: [
                    ''
                ]
            }
        ];
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {
            passive: true
        });
        const vhDiff = (0, _vhCheckDefault.default)().offset;
        this.setState({
            vh: Math.round((window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes)
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        if (!this.ticking) {
            window.requestAnimationFrame(()=>{
                const { body, documentElement } = window.document;
                const { vh, slideNumber } = this.state;
                const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
                const newSlideNumber = Math.floor(scrollDistance / vh);
                if (newSlideNumber !== slideNumber && newSlideNumber >= 0 && newSlideNumber < this.workDetails.length) this.setState({
                    slideNumber: newSlideNumber
                });
                this.lastScrollTop = scrollDistance;
                this.ticking = false;
            });
            this.ticking = true;
        }
    }
    render() {
        const { slideNumber } = this.state;
        const project = this.workDetails[slideNumber] || this.workDetails[0];
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/Work.js",
                lineNumber: 103,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _textContentDefault.default), {
            number: project.number,
            projectName: project.projectName,
            projectDesc: project.projectDesc,
            projectType: project.projectType,
            roles: project.roles,
            refreshToggle: true,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/Work.js",
                lineNumber: 104,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _imageContentDefault.default), {
            pageSplitTimes: this.pageSplitTimes,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/Work.js",
                lineNumber: 112,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
exports.default = Work;
var _c;
$RefreshReg$(_c, "Container");

  $parcel$ReactRefreshHelpers$cd05.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","vh-check":"2QPwK","./TextContent":"8bUeC","./ImageContent":"lOATn","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"2QPwK":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for(var s, i = 1, n = arguments.length; i < n; i++){
                s = arguments[i];
                for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    // don't know a better way to get the size of a CSS 100vh…
    function createTestElement() {
        var testElement = document.createElement('div');
        testElement.style.cssText = 'position: fixed; top: 0; height: 100vh; pointer-events: none;';
        document.documentElement.insertBefore(testElement, document.documentElement.firstChild);
        return testElement;
    }
    function removeTestElement(element) {
        document.documentElement.removeChild(element);
    }
    //  in some browsers this will be bigger than window.innerHeight
    function checkSizes() {
        var vhTest = createTestElement();
        var windowHeight = window.innerHeight;
        var vh = vhTest.offsetHeight;
        var offset = vh - windowHeight;
        removeTestElement(vhTest);
        return {
            vh: vh,
            windowHeight: windowHeight,
            offset: offset,
            isNeeded: offset !== 0,
            value: 0
        };
    }
    // export
    function noop() {}
    function computeDifference() {
        var sizes = checkSizes();
        sizes.value = sizes.offset;
        return sizes;
    }
    function redefineVhUnit() {
        var sizes = checkSizes();
        sizes.value = sizes.windowHeight * 0.01;
        return sizes;
    }
    var methods = /*#__PURE__*/ Object.freeze({
        noop: noop,
        computeDifference: computeDifference,
        redefineVhUnit: redefineVhUnit
    });
    function isString(text) {
        return typeof text === "string" && text.length > 0;
    }
    function isFunction(f) {
        return typeof f === "function";
    }
    var defaultOptions = Object.freeze({
        cssVarName: 'vh-offset',
        redefineVh: false,
        method: computeDifference,
        force: false,
        bind: true,
        updateOnTouch: false,
        onUpdate: noop
    });
    function getOptions(options) {
        // old options handling: only redefine the CSS var name
        if (isString(options)) return __assign({}, defaultOptions, {
            cssVarName: options
        });
        // be sure to have a configuration object
        if (typeof options !== 'object') return defaultOptions;
        // make sure we have the right options to start with
        var finalOptions = {
            force: options.force === true,
            bind: options.bind !== false,
            updateOnTouch: options.updateOnTouch === true,
            onUpdate: isFunction(options.onUpdate) ? options.onUpdate : noop
        };
        // method change
        var redefineVh = options.redefineVh === true;
        finalOptions.method = methods[redefineVh ? 'redefineVhUnit' : 'computeDifference'];
        finalOptions.cssVarName = isString(options.cssVarName) ? options.cssVarName : redefineVh ? /*
                  when redefining vh unit we follow this article name convention
                  https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
                */ 'vh' : defaultOptions.cssVarName;
        return finalOptions;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
    var passiveSupported = false;
    var eventListeners = [];
    /* istanbul ignore next */ try {
        var options = Object.defineProperty({}, "passive", {
            get: function() {
                passiveSupported = true;
            }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
    } catch (err) {
        passiveSupported = false;
    }
    function addListener(eventName, callback) {
        eventListeners.push({
            eventName: eventName,
            callback: callback
        });
        window.addEventListener(eventName, callback, /* istanbul ignore next */ passiveSupported ? {
            passive: true
        } : false);
    }
    function removeAll() {
        eventListeners.forEach(function(config) {
            window.removeEventListener(config.eventName, config.callback);
        });
        eventListeners = [];
    }
    function updateCssVar(cssVarName, result) {
        document.documentElement.style.setProperty("--" + cssVarName, result.value + "px");
    }
    function formatResult(sizes, options) {
        return __assign({}, sizes, {
            unbind: removeAll,
            recompute: options.method
        });
    }
    function vhCheck(options) {
        var config = Object.freeze(getOptions(options));
        var result = formatResult(config.method(), config);
        // usefulness check
        if (!result.isNeeded && !config.force) return result;
        updateCssVar(config.cssVarName, result);
        config.onUpdate(result);
        // enabled by default
        if (!config.bind) return result;
        function onWindowChange() {
            window.requestAnimationFrame(function() {
                var sizes = config.method();
                updateCssVar(config.cssVarName, sizes);
                config.onUpdate(formatResult(sizes, config));
            });
        }
        // be sure we don't duplicates events listeners
        result.unbind();
        // listen for orientation change
        // - this can't be configured
        // - because it's convenient and not a real performance bottleneck
        addListener('orientationchange', onWindowChange);
        // listen to touch move for scrolling
        // – disabled by default
        // - listening to scrolling can be expansive…
        if (config.updateOnTouch) addListener('touchmove', onWindowChange);
        return result;
    }
    return vhCheck;
});

},{}],"8bUeC":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$58a5 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$58a5.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$58a5.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _framerMotion = require("framer-motion");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const TextContainer = (0, _styledComponentsDefault.default).section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 110px 24px 40px; /* Increased to clear season dropdown */
  pointer-events: none;
  z-index: 10;
`;
_c = TextContainer;
const ProjectID = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).div)`
  font-family: 'AvenirHeavy', sans-serif;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: var(--accent);
  margin-bottom: 24px;
`;
_c1 = ProjectID;
const ProjectNameStage = (0, _styledComponentsDefault.default).div`
  overflow: hidden;
  margin-bottom: 16px;
`;
_c2 = ProjectNameStage;
const ProjectName = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).h2)`
  font-family: 'AvenirHeavy', sans-serif;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0;
  @media ${(0, _breakpointsDefault.default).mobileS} { font-size: 32px; }
  @media ${(0, _breakpointsDefault.default).mobileM} { font-size: 38px; }
  @media ${(0, _breakpointsDefault.default).mobileL} { font-size: 44px; }
  @media ${(0, _breakpointsDefault.default).tablet} { font-size: 64px; }
`;
_c3 = ProjectName;
const MyRoleStage = (0, _styledComponentsDefault.default).div`
  overflow: hidden;
  margin-bottom: 32px;
`;
_c4 = MyRoleStage;
const MyRole = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).div)`
  font-family: 'AvenirMedium', sans-serif;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-muted);
  margin-bottom: 0;
`;
_c5 = MyRole;
const ProjectDesc = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).p)`
  font-family: 'AvenirRoman', sans-serif;
  color: var(--ink);
  line-height: 1.6;
  max-width: 90%;
  @media ${(0, _breakpointsDefault.default).mobileS} { font-size: 16px; }
  @media ${(0, _breakpointsDefault.default).mobileM} { font-size: 18px; }
  @media ${(0, _breakpointsDefault.default).mobileL} { font-size: 20px; }
`;
_c6 = ProjectDesc;
const ProjectType = (0, _styledComponentsDefault.default)((0, _framerMotion.motion).div)`
  position: absolute;
  bottom: 40px;
  right: 24px;
  font-family: 'AvenirHeavy', sans-serif;
  font-size: 10px;
  letter-spacing: 0.3em;
  color: var(--ink-faint);
  writing-mode: vertical-rl;
  text-transform: uppercase;
`;
_c7 = ProjectType;
class TextContent extends (0, _react.Component) {
    render() {
        const { number, projectName, projectDesc, roles, projectType, refreshToggle } = this.props;
        if (!projectName) return null;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(TextContainer, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 89,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _framerMotion.AnimatePresence), {
            mode: "wait",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 90,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _framerMotion.motion).div, {
            key: projectName,
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            variants: {
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.2
                    }
                },
                exit: {
                    opacity: 0,
                    transition: {
                        duration: 0.4,
                        ease: "easeIn"
                    }
                }
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 91,
                columnNumber: 11
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectID, {
            variants: {
                hidden: {
                    opacity: 0,
                    x: -30
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }
                }
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 108,
                columnNumber: 13
            },
            __self: this
        }, "// PROJECT ", number), /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectNameStage, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 121,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectName, {
            variants: {
                hidden: {
                    y: "100%"
                },
                visible: {
                    y: 0,
                    transition: {
                        duration: 0.8,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    }
                }
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 122,
                columnNumber: 15
            },
            __self: this
        }, projectName)), /*#__PURE__*/ (0, _reactDefault.default).createElement(MyRoleStage, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 135,
                columnNumber: 13
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(MyRole, {
            variants: {
                hidden: {
                    y: "100%"
                },
                visible: {
                    y: 0,
                    transition: {
                        duration: 0.8,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    }
                }
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 136,
                columnNumber: 15
            },
            __self: this
        }, roles.join(" \u2022 "))), /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectDesc, {
            variants: {
                hidden: {
                    opacity: 0,
                    y: 15
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.9,
                        ease: "easeOut"
                    }
                }
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 149,
                columnNumber: 13
            },
            __self: this
        }, projectDesc), /*#__PURE__*/ (0, _reactDefault.default).createElement(ProjectType, {
            variants: {
                hidden: {
                    opacity: 0,
                    scaleY: 0,
                    originY: 1
                },
                visible: {
                    opacity: 1,
                    scaleY: 1,
                    transition: {
                        duration: 1,
                        ease: "easeOut"
                    }
                }
            },
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/TextContent.js",
                lineNumber: 162,
                columnNumber: 13
            },
            __self: this
        }, projectType))));
    }
}
TextContent.propTypes = {
    number: (0, _propTypesDefault.default).string.isRequired,
    projectName: (0, _propTypesDefault.default).string.isRequired,
    projectDesc: (0, _propTypesDefault.default).string.isRequired,
    projectType: (0, _propTypesDefault.default).string.isRequired,
    roles: (0, _propTypesDefault.default).array.isRequired,
    refreshToggle: (0, _propTypesDefault.default).bool.isRequired
};
exports.default = TextContent;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
$RefreshReg$(_c, "TextContainer");
$RefreshReg$(_c1, "ProjectID");
$RefreshReg$(_c2, "ProjectNameStage");
$RefreshReg$(_c3, "ProjectName");
$RefreshReg$(_c4, "MyRoleStage");
$RefreshReg$(_c5, "MyRole");
$RefreshReg$(_c6, "ProjectDesc");
$RefreshReg$(_c7, "ProjectType");

  $parcel$ReactRefreshHelpers$58a5.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","framer-motion":"byfhV","prop-types":"dNVNu","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"lOATn":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$213d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$213d.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$213d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _vhCheck = require("vh-check");
var _vhCheckDefault = parcelHelpers.interopDefault(_vhCheck);
var _bluePrintImages = require("./ParallaxImages/BluePrintImages");
var _bluePrintImagesDefault = parcelHelpers.interopDefault(_bluePrintImages);
var _bluePrintAppsImages = require("./ParallaxImages/BluePrintAppsImages");
var _bluePrintAppsImagesDefault = parcelHelpers.interopDefault(_bluePrintAppsImages);
var _adminPortalImages = require("./ParallaxImages/AdminPortalImages");
var _adminPortalImagesDefault = parcelHelpers.interopDefault(_adminPortalImages);
var _nailBoutiqueImages = require("./ParallaxImages/NailBoutiqueImages");
var _nailBoutiqueImagesDefault = parcelHelpers.interopDefault(_nailBoutiqueImages);
var _readpointImages = require("./ParallaxImages/ReadpointImages");
var _readpointImagesDefault = parcelHelpers.interopDefault(_readpointImages);
const ImageContainer = (0, _styledComponentsDefault.default).div`
  width: 100%;
  height: 950vh;
  margin-bottom: 30vh;
  display: flex;
  flex-flow: column nowrap;
`;
_c = ImageContainer;
const ImageBox = (0, _styledComponentsDefault.default).div`
  margin-top: 30vh;
  height: 100vh;
  position: relative;
`;
_c1 = ImageBox;
class ImageContent extends (0, _react.Component) {
    constructor(props){
        super(props);
        this.state = {
            screenHeight: 0,
            scrollHeight: 0,
            scrollPercent: 0
        };
        this.ticking = false;
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        const vhDiff = (0, _vhCheckDefault.default)().offset;
        window.addEventListener('scroll', this.handleScroll, {
            passive: true
        });
        this.setState({
            scrollHeight: Math.round(window.document.documentElement.scrollHeight),
            screenHeight: Math.round(window.document.documentElement.clientHeight + vhDiff)
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        if (!this.ticking) {
            window.requestAnimationFrame(()=>{
                const { body, documentElement } = window.document;
                const sd = Math.max(body.scrollTop, documentElement.scrollTop);
                const sp = sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100;
                // Boundaries for performance
                const minlimit = documentElement.clientHeight * 100 / documentElement.scrollHeight;
                const maxlimit = documentElement.clientHeight * 1240 / documentElement.scrollHeight;
                if (sp >= minlimit && sp <= maxlimit) this.setState({
                    scrollPercent: sp
                });
                this.ticking = false;
            });
            this.ticking = true;
        }
    }
    render() {
        const { scrollPercent, scrollHeight, screenHeight } = this.state;
        const { pageSplitTimes } = this.props;
        const boxHeight = pageSplitTimes * 100;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageContainer, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 76,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 78,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 80,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _bluePrintImagesDefault.default), {
            boxHeight: boxHeight,
            index: 1,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 81,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 89,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _bluePrintAppsImagesDefault.default), {
            boxHeight: boxHeight,
            index: 2,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 90,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 98,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _adminPortalImagesDefault.default), {
            boxHeight: boxHeight,
            index: 3,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 99,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 107,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _nailBoutiqueImagesDefault.default), {
            boxHeight: boxHeight,
            index: 4,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 108,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 116,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _readpointImagesDefault.default), {
            boxHeight: boxHeight,
            index: 5,
            scrollPercent: scrollPercent,
            screenHeight: screenHeight,
            scrollHeight: scrollHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 117,
                columnNumber: 11
            },
            __self: this
        })), /*#__PURE__*/ (0, _reactDefault.default).createElement(ImageBox, {
            height: boxHeight,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ImageContent.js",
                lineNumber: 127,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
ImageContent.propTypes = {
    pageSplitTimes: (0, _propTypesDefault.default).number.isRequired
};
exports.default = ImageContent;
var _c, _c1;
$RefreshReg$(_c, "ImageContainer");
$RefreshReg$(_c1, "ImageBox");

  $parcel$ReactRefreshHelpers$213d.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","vh-check":"2QPwK","./ParallaxImages/BluePrintImages":"9Qu7j","./ParallaxImages/BluePrintAppsImages":"5a5Ru","./ParallaxImages/AdminPortalImages":"g4y4d","./ParallaxImages/NailBoutiqueImages":"929YP","./ParallaxImages/ReadpointImages":"h7lVP","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"9Qu7j":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$0dca = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$0dca.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$0dca.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const voistrapHomeImg = new URL(require("3620fc71c813406b")).href;
const voistrapMeetingsImg = new URL(require("1f15ec5f4cd4cbe2")).href;
const voistrapPeopleImg = new URL(require("64abdca0aede16dd")).href;
const voistrapPhoneScoreImg = new URL(require("39d40a23e6b09244")).href;
const VoistrapPhoneHome = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 15}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`;
_c = VoistrapPhoneHome;
const VoistrapPhoneMeetings = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 10vh;
right: 2vw;
height:20vh;
filter: blur(0.1px);
`;
_c1 = VoistrapPhoneMeetings;
const VoistrapPhoneScore = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 5}%) scale(0.7)`
        })
})`
transition: transform 0.2s ease-out;
bottom: 25vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`;
_c2 = VoistrapPhoneScore;
const VoistrapPhonePeople = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 2}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 50vh;
left:0vw;
height: 20vh; 
`;
_c3 = VoistrapPhonePeople;
class BluePrintImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 70,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(VoistrapPhonePeople, {
            src: voistrapPeopleImg,
            scroll: scrollPercent,
            alt: "voistrapPeople",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 71,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(VoistrapPhoneScore, {
            src: voistrapPhoneScoreImg,
            scroll: scrollPercent,
            alt: "voistrapPhone",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 72,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(VoistrapPhoneMeetings, {
            src: voistrapMeetingsImg,
            scroll: scrollPercent,
            alt: "voistrapMeetings",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 73,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(VoistrapPhoneHome, {
            src: voistrapHomeImg,
            scroll: scrollPercent,
            alt: "voistrapHome",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintImages.js",
                lineNumber: 74,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
BluePrintImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = BluePrintImages;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "VoistrapPhoneHome");
$RefreshReg$(_c1, "VoistrapPhoneMeetings");
$RefreshReg$(_c2, "VoistrapPhoneScore");
$RefreshReg$(_c3, "VoistrapPhonePeople");

  $parcel$ReactRefreshHelpers$0dca.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","3620fc71c813406b":"hZneB","1f15ec5f4cd4cbe2":"g8Pb4","64abdca0aede16dd":"kF4Vd","39d40a23e6b09244":"1FuQi","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"1FuQi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Group 34.7604cc8d.png") + "?" + Date.now();

},{}],"5a5Ru":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$8544 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$8544.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$8544.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const homeImg = new URL(require("dff9853466294db5")).href;
const restaurantImg = new URL(require("f4b230383005e66a")).href;
const addRestaurantImg = new URL(require("f2e3222258cf7a00")).href;
const addFoodImg = new URL(require("912f210a259fb575")).href;
const Restaurant = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 15}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -10vh;
left:0vw;
height: 30vh; 
`;
_c = Restaurant;
const Home = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.9)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 35vh;
right: 2vw;
height: 20vh;
filter: blur(0.2px);
`;
_c1 = Home;
const AddFood = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 5}%) scale(0.7)`
        })
})`
transition: transform 0.2s ease-out;
bottom: 20vh;
left:2vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`;
_c2 = AddFood;
const AddRestaurant = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 2}%) scale(0.6)`
        })
})`
transition: transform 0.2s ease-out;
bottom: 35vh;
right: 4vw;
position: absolute;
height: 30vh;
filter: blur(0.2px);
`;
_c3 = AddRestaurant;
class BluePrintAppsImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 71,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(AddFood, {
            src: addFoodImg,
            scroll: scrollPercent,
            alt: "addFood",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 72,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(AddRestaurant, {
            src: addRestaurantImg,
            scroll: scrollPercent,
            alt: "addRestaurant",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 73,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Home, {
            src: homeImg,
            scroll: scrollPercent,
            alt: "Home",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 74,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Restaurant, {
            src: restaurantImg,
            scroll: scrollPercent,
            alt: "Restaurant",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/BluePrintAppsImages.js",
                lineNumber: 75,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
BluePrintAppsImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = BluePrintAppsImages;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "Restaurant");
$RefreshReg$(_c1, "Home");
$RefreshReg$(_c2, "AddFood");
$RefreshReg$(_c3, "AddRestaurant");

  $parcel$ReactRefreshHelpers$8544.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","dff9853466294db5":"eUiac","f4b230383005e66a":"hkkmu","f2e3222258cf7a00":"gMLqG","912f210a259fb575":"cUYY0","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"g4y4d":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3ddf = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$3ddf.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$3ddf.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const dots = new URL(require("3c68269bfb1d75f2")).href;
const bubbles = new URL(require("b51fb0405c200494")).href;
const paths = new URL(require("696d0c883eff9599")).href;
const bigBubble = new URL(require("28cebdf9165c42f1")).href;
const Dots = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 35}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`;
_c = Dots;
const Bubbles = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 28}%) scale(0.9)`
        })
})`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`;
_c1 = Bubbles;
const Paths = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 15}%) scale(0.8)`
        })
})`
position: absolute;
bottom: 60vh;
right: 2vw;
height: 20vh;
filter: blur(0.1px);
`;
_c2 = Paths;
const BigBubble = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.7)`
        })
})`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`;
_c3 = BigBubble;
class AdminPortalImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 69,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(Paths, {
            src: paths,
            scroll: scrollPercent,
            alt: "paths",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 70,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(BigBubble, {
            src: bigBubble,
            scroll: scrollPercent,
            alt: "bigBubble",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 71,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Bubbles, {
            src: bubbles,
            scroll: scrollPercent,
            alt: "bubbles",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 72,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Dots, {
            src: dots,
            scroll: scrollPercent,
            alt: "dots",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/AdminPortalImages.js",
                lineNumber: 73,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
AdminPortalImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = AdminPortalImages;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "Dots");
$RefreshReg$(_c1, "Bubbles");
$RefreshReg$(_c2, "Paths");
$RefreshReg$(_c3, "BigBubble");

  $parcel$ReactRefreshHelpers$3ddf.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","3c68269bfb1d75f2":"g2WAZ","b51fb0405c200494":"hy06r","696d0c883eff9599":"76hgV","28cebdf9165c42f1":"01m6i","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"929YP":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$7714 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$7714.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$7714.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const dots = new URL(require("8e7ac09ed955e93e")).href;
const bubbles = new URL(require("901ca50ed34b2abf")).href;
const bigBubble = new URL(require("262c24ee23fbdaa")).href;
const Dots = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 35}%)`
        })
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 20vh;
left:0vw;
height: 20vh; 
`;
_c = Dots;
const Bubbles = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 28}%) scale(0.9)`
        })
})`
position: absolute;
bottom: 40vh;
right: 0vw;
transform-origin: right center;
height: 20vh;
filter: blur(0.6px);
`;
_c1 = Bubbles;
const BigBubble = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 8}%) scale(0.7)`
        })
})`
bottom: 60vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.8px);
`;
_c2 = BigBubble;
class NailBoutiqueImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 56,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BigBubble, {
            src: bigBubble,
            scroll: scrollPercent,
            alt: "bigBubble",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 57,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Bubbles, {
            src: bubbles,
            scroll: scrollPercent,
            alt: "bubbles",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 58,
                columnNumber: 9
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement(Dots, {
            src: dots,
            scroll: scrollPercent,
            alt: "dots",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/NailBoutiqueImages.js",
                lineNumber: 59,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
NailBoutiqueImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = NailBoutiqueImages;
var _c, _c1, _c2;
$RefreshReg$(_c, "Dots");
$RefreshReg$(_c1, "Bubbles");
$RefreshReg$(_c2, "BigBubble");

  $parcel$ReactRefreshHelpers$7714.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","8e7ac09ed955e93e":"hjYM9","901ca50ed34b2abf":"dsN8l","262c24ee23fbdaa":"eovtF","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"h7lVP":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$f5b1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$f5b1.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$f5b1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
const bigBubble = new URL(require("ec73d253a14b64a5")).href;
const BigBubble = (0, _styledComponentsDefault.default).img.attrs({
    style: ({ scroll })=>({
            transform: `translate(0px,-${scroll * 10}%) scale(0.7)`
        })
})`
bottom: 80vh;
left:-4vw;
position: absolute;
height: 20vh;
filter: blur(0.1px);
`;
_c = BigBubble;
class ReadpointImages extends (0, _react.Component) {
    render() {
        let { scrollPercent } = this.props;
        const { boxHeight, index, scrollHeight, screenHeight } = this.props;
        const heighttoBeReducedinVH = boxHeight * index - 100;
        const scrollOffset = screenHeight * heighttoBeReducedinVH / 100;
        const scrollOffsetInPercent = scrollOffset * 100 / scrollHeight + (index - 1);
        scrollPercent -= scrollOffsetInPercent;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault.default).Fragment, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/ReadpointImages.js",
                lineNumber: 29,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(BigBubble, {
            src: bigBubble,
            scroll: scrollPercent,
            alt: "bigBubble",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/WorkSlide/ParallaxImages/ReadpointImages.js",
                lineNumber: 30,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
ReadpointImages.propTypes = {
    boxHeight: (0, _propTypesDefault.default).number.isRequired,
    index: (0, _propTypesDefault.default).number.isRequired,
    screenHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollHeight: (0, _propTypesDefault.default).number.isRequired,
    scrollPercent: (0, _propTypesDefault.default).number.isRequired
};
exports.default = ReadpointImages;
var _c;
$RefreshReg$(_c, "BigBubble");

  $parcel$ReactRefreshHelpers$f5b1.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","ec73d253a14b64a5":"hXsT3","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"hjve4":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$6e50 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$6e50.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$6e50.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _breakpoints = require("../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const Container = (0, _styledComponentsDefault.default).section`
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    background: var(--bg);
    transition: background 0.5s ease;
    @media ${(0, _breakpointsDefault.default).mobileS} {
    padding-left:60px;
    }
    @media ${(0, _breakpointsDefault.default).mobileM} {
    padding-left:60px;
    }
    @media ${(0, _breakpointsDefault.default).mobileL} {
    padding-left:60px;
    }
    @media ${(0, _breakpointsDefault.default).tablet} {
    padding-left:90px;
    }
    @media ${(0, _breakpointsDefault.default).laptop} {
    padding-left:120px;
    }
`;
_c = Container;
const SkillsTitle = (0, _styledComponentsDefault.default).div`
  font-family: 'AvenirHeavy';
  color: var(--ink);
  @media ${(0, _breakpointsDefault.default).mobileS} {
    font-size: 40px;
  }
  @media ${(0, _breakpointsDefault.default).mobileM} {
    font-size: 50px;
  }
  @media ${(0, _breakpointsDefault.default).mobileL} {
    font-size: 60px;
  }
  @media ${(0, _breakpointsDefault.default).tablet} {
    font-size: 90px;
  }
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 95px;
  }
`;
const SkillsList = (0, _styledComponentsDefault.default).div`
  font-family: 'AvenirRoman';
  z-index: 1;
  
  @media ${(0, _breakpointsDefault.default).mobileS} {
    margin-top: 30px;
    font-size: 20px;
  }
  @media ${(0, _breakpointsDefault.default).mobileM} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${(0, _breakpointsDefault.default).mobileL} {
    margin-top: 35px;
    font-size: 25px;
  }
  @media ${(0, _breakpointsDefault.default).tablet} {
    margin-top: 45px;
    font-size: 35px;
  }
  @media ${(0, _breakpointsDefault.default).laptop} {
    margin-top: 60px;
    font-size: 45px;
  }
`;
class Skills extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/Skills.js",
                lineNumber: 81,
                columnNumber: 7
            },
            __self: this
        });
    }
}
exports.default = Skills;
var _c;
$RefreshReg$(_c, "Container");

  $parcel$ReactRefreshHelpers$6e50.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"k3Hvr":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$27f4 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$27f4.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$27f4.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _socialLogo = require("./SocialLogo");
var _socialLogoDefault = parcelHelpers.interopDefault(_socialLogo);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const githubImg = new URL(require("b8c71488a5fe131d")).href;
const mailImg = new URL(require("5e9d4af8985ecec2")).href;
const linkedInImg = new URL(require("35067db5162e2b5")).href;
const Container = (0, _styledComponentsDefault.default).section`
    margin-top:20vh;
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    background: var(--bg);
    transition: background 0.5s ease;
    @media ${(0, _breakpointsDefault.default).mobileS} {
    padding-left:60px;
    }
    @media ${(0, _breakpointsDefault.default).mobileM} {
    padding-left:60px;
    }
    @media ${(0, _breakpointsDefault.default).mobileL} {
    padding-left:60px;
    }
    @media ${(0, _breakpointsDefault.default).tablet} {
    padding-left:90px;
    margin-bottom:90px;
    }
    @media ${(0, _breakpointsDefault.default).laptop} {
    padding-left:120px;
    margin-bottom:120px;
    }
`;
_c = Container;
const ContactTitle = (0, _styledComponentsDefault.default).div`
  font-family: 'AvenirHeavy';
  color: var(--ink);
  @media ${(0, _breakpointsDefault.default).mobileS} {
    font-size: 40px;
  }
  @media ${(0, _breakpointsDefault.default).mobileM} {
    font-size: 50px;
  }
  @media ${(0, _breakpointsDefault.default).mobileL} {
    font-size: 60px;
  }
  @media ${(0, _breakpointsDefault.default).tablet} {
    font-size: 90px;
  }
  @media ${(0, _breakpointsDefault.default).laptop} {
    font-size: 95px;
  }
`;
_c1 = ContactTitle;
const SocialMediaIcons = (0, _styledComponentsDefault.default).div`
  /* border: 1px solid black; */
  z-index: 1;
  display: grid;
  grid-template: 80px 80px 80px / 1fr 1fr;
  @media ${(0, _breakpointsDefault.default).mobileS} {
    margin-top: 60px;
    grid-gap: 40px;
  }
  @media ${(0, _breakpointsDefault.default).mobileM} {
    margin-top: 60px;
    grid-gap: 60px;
  }
  @media ${(0, _breakpointsDefault.default).mobileL} {
    margin-top: 60px;
    grid-gap: 70px;
  }
  @media ${(0, _breakpointsDefault.default).tablet} {
    margin-top: 80px;
    grid-gap: 170px;
  }
  @media ${(0, _breakpointsDefault.default).laptop} {
    margin-top: 120px;
    grid-gap: 200px;
  }
`;
_c2 = SocialMediaIcons;
class Contact extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _reactDefault.default).createElement(Container, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/Contact.js",
                lineNumber: 89,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(ContactTitle, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/Contact.js",
                lineNumber: 90,
                columnNumber: 9
            },
            __self: this
        }, "CONTACT"), /*#__PURE__*/ (0, _reactDefault.default).createElement(SocialMediaIcons, {
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/Contact.js",
                lineNumber: 91,
                columnNumber: 9
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _socialLogoDefault.default), {
            imgURL: githubImg,
            alternate: "Github",
            redirectURL: "https://github.com/Royverse",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/Contact.js",
                lineNumber: 92,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _socialLogoDefault.default), {
            imgURL: mailImg,
            alternate: "Mail",
            redirectURL: "mailto:roymootsana@gmail.com",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/Contact.js",
                lineNumber: 93,
                columnNumber: 11
            },
            __self: this
        }), /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _socialLogoDefault.default), {
            imgURL: linkedInImg,
            alternate: "Linkedin",
            redirectURL: "https://www.linkedin.com/in/roy-mootsana-77818a14a/",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/Contact.js",
                lineNumber: 94,
                columnNumber: 11
            },
            __self: this
        })));
    }
}
exports.default = Contact;
var _c, _c1, _c2;
$RefreshReg$(_c, "Container");
$RefreshReg$(_c1, "ContactTitle");
$RefreshReg$(_c2, "SocialMediaIcons");

  $parcel$ReactRefreshHelpers$27f4.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","b8c71488a5fe131d":"bJBMm","5e9d4af8985ecec2":"4zFiy","35067db5162e2b5":"deTw6","./SocialLogo":"dvtM3","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"dvtM3":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$ce48 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$ce48.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$ce48.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _styledComponents = require("styled-components");
var _styledComponentsDefault = parcelHelpers.interopDefault(_styledComponents);
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _breakpoints = require("../../../../Assets/Responsive/breakpoints");
var _breakpointsDefault = parcelHelpers.interopDefault(_breakpoints);
const LogoImage = (0, _styledComponentsDefault.default).img`
/* border: 1px solid black; */
  @media ${(0, _breakpointsDefault.default).mobileS} {
    height: 65px;
    width: 65px;
  }
  @media ${(0, _breakpointsDefault.default).mobileM} {
    height: 80px;
    width: 80px;
  }
  @media ${(0, _breakpointsDefault.default).mobileL} {
    height: 100px;
    width: 100px;
  }
  @media ${(0, _breakpointsDefault.default).tablet} {
    height: 130px;
    width: 130px;
  }
`;
_c = LogoImage;
class SocialLogo extends (0, _reactDefault.default).Component {
    render() {
        const { imgURL, alternate, redirectURL } = this.props;
        return /*#__PURE__*/ (0, _reactDefault.default).createElement("a", {
            href: redirectURL,
            target: "_blank",
            rel: "noopener noreferrer",
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/SocialLogo.js",
                lineNumber: 30,
                columnNumber: 7
            },
            __self: this
        }, /*#__PURE__*/ (0, _reactDefault.default).createElement(LogoImage, {
            src: imgURL,
            alt: alternate,
            __source: {
                fileName: "src/components/PortfolioLegacy/Mobile/ContactSlide/SocialLogo.js",
                lineNumber: 31,
                columnNumber: 9
            },
            __self: this
        }));
    }
}
SocialLogo.propTypes = {
    imgURL: (0, _propTypesDefault.default).oneOfType([
        (0, _propTypesDefault.default).string,
        (0, _propTypesDefault.default).object
    ]).isRequired,
    alternate: (0, _propTypesDefault.default).string.isRequired,
    redirectURL: (0, _propTypesDefault.default).string.isRequired
};
exports.default = SocialLogo;
var _c;
$RefreshReg$(_c, "LogoImage");

  $parcel$ReactRefreshHelpers$ce48.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"z91IX","styled-components":"dYNT2","prop-types":"dNVNu","../../../../Assets/Responsive/breakpoints":"9yQZv","@parcel/transformer-js/src/esmodule-helpers.js":"blUt8","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"hqVUa"}],"STMKi":[function() {},{}]},["grUcb"], null, "parcelRequiref040", {}, "./", "/")

//# sourceMappingURL=LegacyPortfolio.248aa3b4.js.map
