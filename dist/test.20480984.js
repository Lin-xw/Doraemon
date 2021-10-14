// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\n/*\u753B\u4E00\u53EA\u54C6\u5566A\u68A6*/\n/*\u5F00\u59CB\u4E86*/\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before{box-sizing: border-box;}\n.skin *::after{box-sizing: border-box;}\n.skin{\n    position: relative;\n    height: 50vh;\n}\n/*\u9996\u5148\uFF0C\u9700\u8981\u51C6\u5907\u54C6\u5566A\u68A6\u7684\u76AE*/\n.head{\n    z-index: 2;\n    background: #008ee3;\n    width: 280px;\n    height: 240px;\n    position: absolute;\n    left: 50%;\n    top: 20px;\n    border-radius: 50% 50% 25% 25% / 55% 55% 45% 45%;;\n    margin-left: -140px;\n}\n/*\u63A5\u4E0B\u6765\u753B\u773C\u775B*/\n.eye.left{\n    z-index: 5;\n    border: 1px solid #000;\n    width: 60px;\n    height: 75px;\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    margin-left: -60px;\n    background: #fffafa;\n    border-radius: 50%;\n}\n\n.eye.right{\n    z-index: 5;\n    border: 1px solid #000;\n    width: 60px;\n    height: 75px;\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    background: #fffafa;\n    border-radius: 50%;  \n}\n.eye.right::before{ \n    content: \"\";\n    display: block;\n    width: 16px;\n    height: 20px;\n    background: #2e2e2e;\n    border-radius: 50%;\n    position: relative;\n    top: 32px;\n    \n}\n.eye.left::before{\n    content: \"\";\n    display: block;\n    width: 16px;\n    height: 20px;\n    background: #2e2e2e;\n    border-radius: 50%;\n    position: relative;\n    left: 43px;\n    top: 32px;\n    \n}\n/*\u773C\u775B\u91CC\u7684\u73E0\u5B50*/\n.yuan1{\n    position: relative;\n    width: 8px;\n    height: 8px;\n    top: 18px;\n    left: 80%;\n    border-radius: 50%;\n    background: #fffafa;\n    margin-left: 3px;\n}\n.yuan2{\n    position: relative;\n    width: 8px;\n    height: 8px;\n    top: 18px;\n    left: 50%;\n    border-radius: 50%;\n    background: #fffafa;\n    margin-left: -28px;\n}\n/*\u63A5\u4E0B\u6765\uFF0C\u753B\u54C6\u5566A\u68A6\u7684\u9F3B\u5B50*/\n.nose{\n    z-index: 4;\n    background: #c70000;\n    width: 20px;\n    height: 20px;\n    position: relative;\n    left: 50%;\n    top: 110px;\n    border-radius: 50%;\n    margin-left: -10px;\n}\n.shuxian{\n    z-index: 3;\n    border: 1px solid #000;\n    width: 2px;\n    height: 80px;\n    left: 50%;\n    top: 150px;\n    background: #000;\n    margin-left: 9px;\n    margin-top: 11px;\n}\n.yuan{\n    position: relative;\n    width: 9px;\n    height: 9px;\n    top: 6px;\n    left: 50%;\n    border-radius: 50%;\n    background: #fffafa;\n    margin-left: 1px;\n}\n/*\u7136\u540E\u662F\u8138\u86CB*/\n.face{\n    z-index: 2;\n    position: relative;\n    width: 210px;\n    height: 180px;\n    top: 60px;\n    left: 50%;\n    margin-left: -105px;\n    background: #fffafa;\n    border-radius: 50% 50% 25% 25% / 55% 55% 45% 45%;\n}\n/*\u5145\u6EE1\u6B63\u80FD\u91CF\u7684\u5FAE\u7B11*/\n.mouth{\n    z-index: 2;\n    position: relative;\n    width: 160px;\n    height: 120px;\n    top: 96px;\n    left: 50%;\n    border-radius: 50%;\n    border-bottom: 2px #000 solid;\n    margin: -180px -80px auto;\n}\n/*\u7EA2\u8272\u56F4\u5DFE*/\n.scarf{\n    z-index: 1;\n    border: 1px solid saddlebrown;\n    width: 220px;\n    height: 130px;\n    border-radius: 50% 50% 20% 20% / 50% 50% 50% 50%;\n    background: #e30000;\n    margin: 80px auto;\n    top: -74px;\n    position: relative;\n}\n.scarf::before{\n    content: \"\";\n    display: block;\n\twidth: 46px;\n\theight: 3px;\n\tbackground: #fffafa;\n\tposition: relative;\n\tleft: 50%;\n\tmargin-left: -70px;\n\ttop: 115px;\n\tborder-radius: 5px;\n}\n/*\u5C0F\u5C0F\u7684\u94C3\u94DB*/\n.bell{\n    z-index: 2;\n    border: 2px #000 solid;\n\tborder-radius: 50%;\n\twidth: 36px;\n\theight: 36px;\n\tbackground: #ffdd2e;\n\tposition: absolute;\n\ttop: 264px;\n\tleft: 50%;\n\tmargin-left: -18px;\n}\n.bell div:nth-child(1){\n\tborder: 2px #000 solid;\n\twidth: 40px;\n\theight: 8px;\n\tbackground: #ffdd2e;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -20px;\n\ttop: 10px;\n\tborder-radius: 5px;\n}\n.bell div:nth-child(2){\n\twidth: 8px;\n\theight: 8px;\n\tborder: 2px #000 solid;\n\tposition: absolute;\n\tbackground: #6c5844;\n\tborder-radius: 50%;\n\tleft: 50%;\n\tmargin-left: -4px;\n\ttop: 20px;\n}\n.bell div:nth-child(3){\n\twidth: 2px;\n\theight: 6px;\n\tbackground: #000;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -1px;\n\ttop: 27px;\n}\n/*\u54C6\u5566A\u68A6\u7684\u5C0F\u80E1\u987B*/\n.hair.left{ \n    position: absolute;\n    width: 90px;\n    height: 20px;\n    z-index: 5;\n    top: 300px;\n    left: 50%;\n    border-radius: 20% 20% 60% 60%/60% 30% 80% 60%;\n    transform: rotate(-170deg) translateX(53px);\n    border-bottom: 2px #000 solid;\n    margin: -170px -70px auto;\n}\n.hair.left div:first-child{\n    position: relative;\n    width: 90px;\n    height: 20px;\n    z-index: 5;\n    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;\n    transform: rotate(-5deg) translateX(52px);\n    border-bottom: 2px #000 solid;\n    margin: -20px -55px auto;\n}\n.hair.left div:last-child{\n    z-index: 7;\n    position: relative;\n    width: 90px;\n    height: 20px;\n    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;\n    transform: rotate(-10deg) translateX(53px);\n    border-bottom: 2px #000 solid;\n    margin: -35px -60px auto;\n}\n.hair.right{ \n    z-index: 7;\n    position: absolute;\n    width: 90px;\n    height: 20px;\n    top: 300px;\n    left: 50%;\n    border-radius: 20% 20% 60% 60%/60% 30% 80% 60%;\n    transform: rotate(170deg) translateX(-53px);\n    border-bottom: 2px #000 solid;\n    margin: -170px -20px auto; \n}\n.hair.right div:first-child{\n    z-index: 7;\n    position: relative;\n    width: 90px;\n    height: 20px;\n    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;\n    transform: rotate(5deg) translateX(55px);\n    border-bottom: 2px #000 solid;\n    margin: -30px -51px auto\n}\n.hair.right div:last-child{\n    z-index: 7;\n    position: relative;\n    width: 90px;\n    height: 20px;\n    border-radius: 50% 50% 50% 30%/50% 30% 50% 30%;\n    transform: rotate(12deg) translateX(60px);\n    border-bottom: 2px #000 solid;\n    margin: -48px -52px auto;\n}\n/*\u597D\u4E86\uFF0C\u8FD9\u53EA\u54C6\u5566A\u68A6\u9001\u7ED9\u4F60*/\n";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 50;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 20;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"css.js"}],"C:\\Users\\林新玮\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52733' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\林新玮\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.20480984.map