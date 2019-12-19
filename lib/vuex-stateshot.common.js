module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js ***!
  \**********************************************************************************/
/*! exports provided: createPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ \"./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ \"./src/vuex-stateshot.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createPlugin\", function() { return _entry__WEBPACK_IMPORTED_MODULE_1__[\"createPlugin\"]; });\n\n\n\n\n\n//# sourceURL=webpack://vuex-stateshot/./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// This file is imported into lib/wc client bundles.\n\nif (typeof window !== 'undefined') {\n  if (true) {\n    __webpack_require__(/*! current-script-polyfill */ \"./node_modules/current-script-polyfill/currentScript.js\")\n  }\n\n  var i\n  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\\/)[^/]+\\.js(\\?.*)?$/))) {\n    __webpack_require__.p = i[1] // eslint-disable-line\n  }\n}\n\n// Indicate to webpack that this file can be concatenated\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n\n//# sourceURL=webpack://vuex-stateshot/./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js?");

/***/ }),

/***/ "./node_modules/current-script-polyfill/currentScript.js":
/*!***************************************************************!*\
  !*** ./node_modules/current-script-polyfill/currentScript.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// document.currentScript polyfill by Adam Miller\n\n// MIT license\n\n(function(document){\n  var currentScript = \"currentScript\",\n      scripts = document.getElementsByTagName('script'); // Live NodeList collection\n\n  // If browser needs currentScript polyfill, add get currentScript() to the document object\n  if (!(currentScript in document)) {\n    Object.defineProperty(document, currentScript, {\n      get: function(){\n\n        // IE 6-10 supports script readyState\n        // IE 10+ support stack trace\n        try { throw new Error(); }\n        catch (err) {\n\n          // Find the second match for the \"at\" string to get file src url from stack.\n          // Specifically works with the format of stack traces in IE.\n          var i, res = ((/.*at [^\\(]*\\((.*):.+:.+\\)$/ig).exec(err.stack) || [false])[1];\n\n          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag\n          for(i in scripts){\n            if(scripts[i].src == res || scripts[i].readyState == \"interactive\"){\n              return scripts[i];\n            }\n          }\n\n          // If no match, return null\n          return null;\n        }\n      }\n    });\n  }\n})(document);\n\n\n//# sourceURL=webpack://vuex-stateshot/./node_modules/current-script-polyfill/currentScript.js?");

/***/ }),

/***/ "./node_modules/stateshot/dist/stateshot.js":
/*!**************************************************!*\
  !*** ./node_modules/stateshot/dist/stateshot.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, '__esModule', { value: true });\n\n// See https://github.com/garycourt/murmurhash-js\nvar murmurHash2 = function murmurHash2(str) {\n  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n  var l = str.length;\n  var h = seed ^ l;\n  var i = 0;\n  var k = void 0;\n\n  while (l >= 4) {\n    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;\n    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n    k ^= k >>> 24;\n    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n\n    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;\n\n    l -= 4;\n    ++i;\n  }\n\n  /* eslint-disable no-fallthrough */\n  switch (l) {\n    case 3:\n      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;\n    case 2:\n      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;\n    case 1:\n      h ^= str.charCodeAt(i) & 0xff;\n      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n  }\n\n  h ^= h >>> 13;\n  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);\n  h ^= h >>> 15;\n\n  return h >>> 0;\n};\n\nvar hashFunc = murmurHash2;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar defaultRule = {\n  // StateNode => { Chunks, Children }\n  toRecord: function toRecord(node) {\n    return {\n      chunks: [_extends({}, node, { children: undefined })], children: node.children\n    };\n  },\n  // { Chunks, Children } => StateNode\n  fromRecord: function fromRecord(_ref) {\n    var chunks = _ref.chunks,\n        children = _ref.children;\n    return _extends({}, chunks[0], { children: children });\n  }\n};\n\nvar state2Record = function state2Record(stateNode, chunkPool) {\n  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var prevRecord = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  var pickIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;\n\n  var ruleIndex = rules.findIndex(function (_ref2) {\n    var match = _ref2.match;\n    return match(stateNode);\n  });\n  var rule = rules[ruleIndex] || defaultRule;\n\n  var _rule$toRecord = rule.toRecord(stateNode),\n      chunks = _rule$toRecord.chunks,\n      children = _rule$toRecord.children;\n\n  var recordChildren = children;\n  var hashes = [];\n  for (var i = 0; i < chunks.length; i++) {\n    var chunkStr = JSON.stringify(chunks[i]);\n    var hashKey = hashFunc(chunkStr);\n    hashes.push(hashKey);\n    chunkPool[hashKey] = chunkStr;\n  }\n\n  if (pickIndex !== -1 && Array.isArray(prevRecord && prevRecord.children)) {\n    var childrenCopy = [].concat(_toConsumableArray(prevRecord.children));\n    childrenCopy[pickIndex] = state2Record(recordChildren[pickIndex], chunkPool, rules);\n    return { hashes: hashes, ruleIndex: ruleIndex, children: childrenCopy };\n  } else {\n    return {\n      hashes: hashes,\n      ruleIndex: ruleIndex,\n      children: children && children.map(function (node) {\n        return state2Record(node, chunkPool, rules);\n      })\n    };\n  }\n};\n\nvar record2State = function record2State(recordNode, chunkPool) {\n  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var hashes = recordNode.hashes,\n      ruleIndex = recordNode.ruleIndex,\n      children = recordNode.children;\n\n  var chunks = hashes.map(function (hash) {\n    return JSON.parse(chunkPool[hash]);\n  });\n  var rule = rules[ruleIndex] || defaultRule;\n  return rule.fromRecord({\n    chunks: chunks,\n    children: children && children.map(function (node) {\n      return record2State(node, chunkPool, rules);\n    })\n  });\n};\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar noop = function noop() {};\nvar History = function () {\n  function History() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n      rules: [],\n      delay: 50,\n      maxLength: 100,\n      onChange: noop,\n      useChunks: true\n    };\n\n    _classCallCheck(this, History);\n\n    this.rules = options.rules || [];\n    this.delay = options.delay || 50;\n    this.maxLength = options.maxLength || 100;\n    this.useChunks = options.useChunks === undefined ? true : options.useChunks;\n    this.onChange = options.onChange || noop;\n\n    this.$index = -1;\n    this.$records = [];\n    this.$chunks = {};\n\n    this.$pending = {\n      state: null, pickIndex: null, onResolves: [], timer: null\n    };\n    this.$debounceTime = null;\n  }\n\n  // : boolean\n\n\n  _createClass(History, [{\n    key: 'get',\n\n\n    // void => State\n    value: function get() {\n      var currentRecord = this.$records[this.$index];\n      var resultState = void 0;\n      if (!currentRecord) {\n        resultState = null;\n      } else if (!this.useChunks) {\n        resultState = currentRecord;\n      } else {\n        resultState = record2State(currentRecord, this.$chunks, this.rules);\n      }\n      this.onChange(resultState);\n      return resultState;\n    }\n\n    // (State, number?) => History\n\n  }, {\n    key: 'pushSync',\n    value: function pushSync(state) {\n      var _this = this;\n\n      var pickIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;\n\n      var latestRecord = this.$records[this.$index] || null;\n      var record = this.useChunks ? state2Record(state, this.$chunks, this.rules, latestRecord, pickIndex) : state;\n      this.$index++;\n      this.$records[this.$index] = record;\n      // Clear redo records.\n      for (var i = this.$index + 1; i < this.$records.length; i++) {\n        this.$records[i] = null;\n      }\n      // Clear first valid record if max length reached.\n      if (this.$index >= this.maxLength) {\n        this.$records[this.$index - this.maxLength] = null;\n      }\n\n      // Clear pending state.\n      if (this.$pending.timer) {\n        clearTimeout(this.$pending.timer);\n        this.$pending.state = null;\n        this.$pending.pickIndex = null;\n        this.$pending.timer = null;\n        this.$debounceTime = null;\n        this.$pending.onResolves.forEach(function (resolve) {\n          return resolve(_this);\n        });\n        this.$pending.onResolves = [];\n      }\n\n      this.onChange(state);\n      return this;\n    }\n\n    // (State, number?) => Promise<History>\n\n  }, {\n    key: 'push',\n    value: function push(state) {\n      var _this2 = this;\n\n      var pickIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;\n\n      var currentTime = +new Date();\n      var setupPending = function setupPending() {\n        _this2.$pending.state = state;\n        _this2.$pending.pickIndex = pickIndex;\n        _this2.$debounceTime = currentTime;\n        var promise = new Promise(function (resolve, reject) {\n          _this2.$pending.onResolves.push(resolve);\n          _this2.$pending.timer = setTimeout(function () {\n            _this2.pushSync(_this2.$pending.state, _this2.$pending.pickIndex);\n          }, _this2.delay);\n        });\n        return promise;\n      };\n      // First time called.\n      if (this.$pending.timer === null) {\n        return setupPending();\n      } else if (currentTime - this.$debounceTime < this.delay) {\n        // Has been called without resolved.\n        clearTimeout(this.$pending.timer);\n        this.$pending.timer = null;\n        return setupPending();\n      } else return Promise.reject(new Error('Invalid push ops'));\n    }\n\n    // void => History\n\n  }, {\n    key: 'undo',\n    value: function undo() {\n      if (this.hasUndo) this.$index--;\n      return this;\n    }\n\n    // void => History\n\n  }, {\n    key: 'redo',\n    value: function redo() {\n      if (this.hasRedo) this.$index++;\n      return this;\n    }\n\n    // void => History\n\n  }, {\n    key: 'reset',\n    value: function reset() {\n      var _this3 = this;\n\n      this.$index = -1;\n      this.$records.forEach(function (tree) {\n        tree = null;\n      });\n      Object.keys(this.$chunks).forEach(function (key) {\n        _this3.$chunks[key] = null;\n      });\n      this.$records = [];\n      this.$chunks = {};\n      clearTimeout(this.$pending.timer);\n      this.$pending = {\n        state: null, pickIndex: null, onResolves: [], timer: null\n      };\n      this.$debounceTime = null;\n      return this;\n    }\n  }, {\n    key: 'hasRedo',\n    get: function get() {\n      // No redo when pointing to last record.\n      if (this.$index === this.$records.length - 1) return false;\n\n      // Only has redo if there're valid records after index.\n      // There can be no redo even if index less than records' length,\n      // when we undo multi records then push a new one.\n      var hasRecordAfterIndex = false;\n      for (var i = this.$index + 1; i < this.$records.length; i++) {\n        if (this.$records[i] !== null) hasRecordAfterIndex = true;\n      }\n      return hasRecordAfterIndex;\n    }\n\n    // : boolean\n\n  }, {\n    key: 'hasUndo',\n    get: function get() {\n      // Only has undo if we have records before index.\n      var lowerBound = Math.max(this.$records.length - this.maxLength, 0);\n      return this.$index > lowerBound;\n    }\n\n    // : number\n\n  }, {\n    key: 'length',\n    get: function get() {\n      return Math.min(this.$records.length, this.maxLength);\n    }\n  }]);\n\n  return History;\n}();\n\n/**\n * Stateshot.js\n * (c) 2018 Yifeng Wang\n */\n\nexports.History = History;\n//# sourceMappingURL=stateshot.js.map\n\n\n//# sourceURL=webpack://vuex-stateshot/./node_modules/stateshot/dist/stateshot.js?");

/***/ }),

/***/ "./src/vuex-stateshot.js":
/*!*******************************!*\
  !*** ./src/vuex-stateshot.js ***!
  \*******************************/
/*! exports provided: createPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPlugin\", function() { return createPlugin; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var stateshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stateshot */ \"./node_modules/stateshot/dist/stateshot.js\");\n/* harmony import */ var stateshot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stateshot__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst SCOPE_NAME = 'vuexstateshot'\nconst SYNC_STATE = '__SYNC_STATE__'\nconst STATESHOT_UNDO = 'STATESHOT_UNDO'\nconst STATESHOT_REDO = 'STATESHOT_REDO'\n\nclass VuexStateshot {\n  constructor (store, modules, options) {\n    const {\n      // Max length saving history states, 100 by default.\n      maxLength = 100,\n      // Debounce time for push in milliseconds, 50 by default.\n      delay = 50,\n      ...others\n    } = options\n\n    const history = new stateshot__WEBPACK_IMPORTED_MODULE_1__[\"History\"]({\n      maxLength: maxLength + 1,\n      delay,\n      ...others\n    })\n\n    // store state\n    this.store = store\n    this.modules = modules\n    this.moduleNames = Object.keys(modules)\n    this.rootModule = store._modules.root\n\n    // subscribe state\n    this.actions = this.getSubscribeTypes('actions')\n    this.mutations = this.getSubscribeTypes('mutations')\n    this.unsubscribeAction = null\n    this.unsubscribe = null\n\n    // history state\n    this.history = history\n    // console.log(this.store)\n  }\n\n  getHistoryLength () {\n    /**\n     * There is some wrong with the stateshot.js\n     * The truely history length is $records we need filter the record\n     * Otherwise when you call the undo().get(), the history.length is wrong\n     */\n    // const historyLength = this.history.length\n    return this.history.$records.filter(record => record).length\n  }\n\n  /**\n   * Get the wanted subscribe types with namespace\n   * @param {*} context 'actions/mutations'\n   */\n  getSubscribeTypes (context) {\n    let types = []\n\n    for (const namespace of this.moduleNames) {\n      const subscribe = this.modules[namespace][context]\n      const mapedTypes = subscribe && subscribe.map(type => {\n        return namespace === 'rootModule' ? type : `${namespace}/${type}`\n      })\n      types = [...types, mapedTypes]\n    }\n\n    const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))\n\n    return deepFlatten(types.filter(v => v))\n  }\n\n  findNamespacedModule (namespace, moduleTree = this.rootModule) {\n    if (namespace === 'root') return this.rootModule\n    const parts = namespace.split('/')\n    if (!parts.length) return false\n\n    const subtree = moduleTree._children[parts[0]]\n    const subpath = parts.slice(1).join('/')\n    if (subtree && subtree.namespaced) {\n      return parts.length === 1 ? subtree : this.findNamespacedModule(subpath, subtree)\n    } else {\n      for (const name in moduleTree._children) {\n        const namespacedMoudle = this.findNamespacedModule(namespace, moduleTree._children[name])\n        if (namespacedMoudle) return namespacedMoudle\n      }\n    }\n\n    return false\n  }\n\n  registerPluginMoudle () {\n    this.store.registerModule(SCOPE_NAME, {\n      namespaced: true,\n      state: {\n        prevState: {},\n        nextState: {},\n        hasUndo: false,\n        hasRedo: false,\n        historyLength: 0,\n        undoCount: 0,\n        redoCount: 0\n      },\n      actions: {\n        // snap a state shot of rootState\n        snapshot: async ({ commit, dispatch, state, rootState }, payload) => {\n          await this.history.push(rootState)\n\n          const historyLength = this.getHistoryLength()\n\n          commit(SYNC_STATE, {\n            hasUndo: historyLength - 1 > 0,\n            hasRedo: false,\n            historyLength,\n            undoCount: historyLength - 1,\n            redoCount: 0\n          })\n        },\n        undo: ({ commit, state }, payload) => {\n          const { hasUndo } = state\n          const prevState = this.history.undo().get()\n          if (prevState && hasUndo) commit('STATESHOT_UNDO', prevState)\n          return prevState\n        },\n        redo: ({ commit, state }, payload) => {\n          const { hasRedo } = state\n          const nextState = this.history.redo().get()\n          if (nextState && hasRedo) commit('STATESHOT_REDO', nextState)\n          return nextState\n        },\n        reset: ({ commit }, payload) => {\n          this.history.reset()\n          commit(SYNC_STATE, {\n            nextState: {},\n            prevState: {},\n            hasUndo: false,\n            hasRedo: false,\n            historyLength: 0,\n            undoCount: 0,\n            redoCount: 0\n          })\n        }\n      },\n      mutations: {\n        [SYNC_STATE] (state, payload) {\n          Object.assign(state, payload)\n        },\n        [STATESHOT_UNDO] (state, prevState) {\n          state.prevState = prevState\n          state.undoCount -= 1\n          if (state.undoCount === 0) state.hasUndo = false\n          state.redoCount += 1\n          state.hasRedo = state.redoCount > 0\n        },\n        [STATESHOT_REDO] (state, nextState) {\n          state.nextState = nextState\n          state.redoCount -= 1\n          if (state.redoCount === 0) state.hasRedo = false\n          state.undoCount += 1\n          state.hasUndo = state.undoCount > 0\n        }\n      },\n      getters: {\n        hasUndo: state => state.hasUndo,\n        hasRedo: state => state.hasRedo,\n        undoCount: state => state.undoCount,\n        redoCount: state => state.redoCount,\n        historyLength: state => state.historyLength\n      }\n    })\n  }\n\n  syncState (namespace = 'root') {\n    const { state } = this.findNamespacedModule(namespace, this.rootModule)\n    this.store.dispatch(`${SCOPE_NAME}/snapshot`, state)\n  }\n\n  stateshotFromAction (store) {\n    return {\n      before: (action, state) => {\n        console.log(\n          '%cAction',\n          'background: blue; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',\n          `${action.type}`\n        )\n      },\n      after: (action, state) => {\n        if (this.actions.includes(action.type)) {\n          this.syncState()\n          console.log(\n            '%cSync',\n            'background: green; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',\n            `Sync State... length is: ${this.history.length}`\n          )\n        }\n      }\n    }\n  }\n\n  stateshotFromMutation (mutation, state) {\n    if (this.mutations.includes(mutation.type)) {\n      this.syncState()\n      console.log(\n        '%cMutation',\n        'background: green; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',\n        `Sync State... length is: ${this.history.length}`\n      )\n    }\n  }\n\n  subscribeAction () {\n    this.unsubscribeAction = this.store.subscribeAction(this.stateshotFromAction(this.store))\n  }\n\n  subscribe () {\n    this.unsubscribe = this.store.subscribe((mutation, state) => this.stateshotFromMutation(mutation, state))\n  }\n}\n\nfunction createPlugin (modules, options) {\n  return store => {\n    const plugin = new VuexStateshot(store, modules, options)\n\n    plugin.registerPluginMoudle()\n    plugin.syncState()\n    plugin.subscribeAction()\n    plugin.subscribe()\n\n    vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$stateshot = plugin\n  }\n}\n\n\n//# sourceURL=webpack://vuex-stateshot/./src/vuex-stateshot.js?");

/***/ }),

/***/ "vue":
/*!******************************************************************!*\
  !*** external {"commonjs":"vue","commonjs2":"vue","root":"Vue"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue\");\n\n//# sourceURL=webpack://vuex-stateshot/external_%7B%22commonjs%22:%22vue%22,%22commonjs2%22:%22vue%22,%22root%22:%22Vue%22%7D?");

/***/ })

/******/ });