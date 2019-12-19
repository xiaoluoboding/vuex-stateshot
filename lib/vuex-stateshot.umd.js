(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VuexStateshot"] = factory(require("vue"));
	else
		root["VuexStateshot"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "61e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

// See https://github.com/garycourt/murmurhash-js
var murmurHash2 = function murmurHash2(str) {
  var seed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var l = str.length;
  var h = seed ^ l;
  var i = 0;
  var k = void 0;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

    l -= 4;
    ++i;
  }

  /* eslint-disable no-fallthrough */
  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;

  return h >>> 0;
};

var hashFunc = murmurHash2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultRule = {
  // StateNode => { Chunks, Children }
  toRecord: function toRecord(node) {
    return {
      chunks: [_extends({}, node, { children: undefined })], children: node.children
    };
  },
  // { Chunks, Children } => StateNode
  fromRecord: function fromRecord(_ref) {
    var chunks = _ref.chunks,
        children = _ref.children;
    return _extends({}, chunks[0], { children: children });
  }
};

var state2Record = function state2Record(stateNode, chunkPool) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var prevRecord = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var pickIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : -1;

  var ruleIndex = rules.findIndex(function (_ref2) {
    var match = _ref2.match;
    return match(stateNode);
  });
  var rule = rules[ruleIndex] || defaultRule;

  var _rule$toRecord = rule.toRecord(stateNode),
      chunks = _rule$toRecord.chunks,
      children = _rule$toRecord.children;

  var recordChildren = children;
  var hashes = [];
  for (var i = 0; i < chunks.length; i++) {
    var chunkStr = JSON.stringify(chunks[i]);
    var hashKey = hashFunc(chunkStr);
    hashes.push(hashKey);
    chunkPool[hashKey] = chunkStr;
  }

  if (pickIndex !== -1 && Array.isArray(prevRecord && prevRecord.children)) {
    var childrenCopy = [].concat(_toConsumableArray(prevRecord.children));
    childrenCopy[pickIndex] = state2Record(recordChildren[pickIndex], chunkPool, rules);
    return { hashes: hashes, ruleIndex: ruleIndex, children: childrenCopy };
  } else {
    return {
      hashes: hashes,
      ruleIndex: ruleIndex,
      children: children && children.map(function (node) {
        return state2Record(node, chunkPool, rules);
      })
    };
  }
};

var record2State = function record2State(recordNode, chunkPool) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var hashes = recordNode.hashes,
      ruleIndex = recordNode.ruleIndex,
      children = recordNode.children;

  var chunks = hashes.map(function (hash) {
    return JSON.parse(chunkPool[hash]);
  });
  var rule = rules[ruleIndex] || defaultRule;
  return rule.fromRecord({
    chunks: chunks,
    children: children && children.map(function (node) {
      return record2State(node, chunkPool, rules);
    })
  });
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var noop = function noop() {};
var History = function () {
  function History() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      rules: [],
      delay: 50,
      maxLength: 100,
      onChange: noop,
      useChunks: true
    };

    _classCallCheck(this, History);

    this.rules = options.rules || [];
    this.delay = options.delay || 50;
    this.maxLength = options.maxLength || 100;
    this.useChunks = options.useChunks === undefined ? true : options.useChunks;
    this.onChange = options.onChange || noop;

    this.$index = -1;
    this.$records = [];
    this.$chunks = {};

    this.$pending = {
      state: null, pickIndex: null, onResolves: [], timer: null
    };
    this.$debounceTime = null;
  }

  // : boolean


  _createClass(History, [{
    key: 'get',


    // void => State
    value: function get() {
      var currentRecord = this.$records[this.$index];
      var resultState = void 0;
      if (!currentRecord) {
        resultState = null;
      } else if (!this.useChunks) {
        resultState = currentRecord;
      } else {
        resultState = record2State(currentRecord, this.$chunks, this.rules);
      }
      this.onChange(resultState);
      return resultState;
    }

    // (State, number?) => History

  }, {
    key: 'pushSync',
    value: function pushSync(state) {
      var _this = this;

      var pickIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var latestRecord = this.$records[this.$index] || null;
      var record = this.useChunks ? state2Record(state, this.$chunks, this.rules, latestRecord, pickIndex) : state;
      this.$index++;
      this.$records[this.$index] = record;
      // Clear redo records.
      for (var i = this.$index + 1; i < this.$records.length; i++) {
        this.$records[i] = null;
      }
      // Clear first valid record if max length reached.
      if (this.$index >= this.maxLength) {
        this.$records[this.$index - this.maxLength] = null;
      }

      // Clear pending state.
      if (this.$pending.timer) {
        clearTimeout(this.$pending.timer);
        this.$pending.state = null;
        this.$pending.pickIndex = null;
        this.$pending.timer = null;
        this.$debounceTime = null;
        this.$pending.onResolves.forEach(function (resolve) {
          return resolve(_this);
        });
        this.$pending.onResolves = [];
      }

      this.onChange(state);
      return this;
    }

    // (State, number?) => Promise<History>

  }, {
    key: 'push',
    value: function push(state) {
      var _this2 = this;

      var pickIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      var currentTime = +new Date();
      var setupPending = function setupPending() {
        _this2.$pending.state = state;
        _this2.$pending.pickIndex = pickIndex;
        _this2.$debounceTime = currentTime;
        var promise = new Promise(function (resolve, reject) {
          _this2.$pending.onResolves.push(resolve);
          _this2.$pending.timer = setTimeout(function () {
            _this2.pushSync(_this2.$pending.state, _this2.$pending.pickIndex);
          }, _this2.delay);
        });
        return promise;
      };
      // First time called.
      if (this.$pending.timer === null) {
        return setupPending();
      } else if (currentTime - this.$debounceTime < this.delay) {
        // Has been called without resolved.
        clearTimeout(this.$pending.timer);
        this.$pending.timer = null;
        return setupPending();
      } else return Promise.reject(new Error('Invalid push ops'));
    }

    // void => History

  }, {
    key: 'undo',
    value: function undo() {
      if (this.hasUndo) this.$index--;
      return this;
    }

    // void => History

  }, {
    key: 'redo',
    value: function redo() {
      if (this.hasRedo) this.$index++;
      return this;
    }

    // void => History

  }, {
    key: 'reset',
    value: function reset() {
      var _this3 = this;

      this.$index = -1;
      this.$records.forEach(function (tree) {
        tree = null;
      });
      Object.keys(this.$chunks).forEach(function (key) {
        _this3.$chunks[key] = null;
      });
      this.$records = [];
      this.$chunks = {};
      clearTimeout(this.$pending.timer);
      this.$pending = {
        state: null, pickIndex: null, onResolves: [], timer: null
      };
      this.$debounceTime = null;
      return this;
    }
  }, {
    key: 'hasRedo',
    get: function get() {
      // No redo when pointing to last record.
      if (this.$index === this.$records.length - 1) return false;

      // Only has redo if there're valid records after index.
      // There can be no redo even if index less than records' length,
      // when we undo multi records then push a new one.
      var hasRecordAfterIndex = false;
      for (var i = this.$index + 1; i < this.$records.length; i++) {
        if (this.$records[i] !== null) hasRecordAfterIndex = true;
      }
      return hasRecordAfterIndex;
    }

    // : boolean

  }, {
    key: 'hasUndo',
    get: function get() {
      // Only has undo if we have records before index.
      var lowerBound = Math.max(this.$records.length - this.maxLength, 0);
      return this.$index > lowerBound;
    }

    // : number

  }, {
    key: 'length',
    get: function get() {
      return Math.min(this.$records.length, this.maxLength);
    }
  }]);

  return History;
}();

/**
 * Stateshot.js
 * (c) 2018 Yifeng Wang
 */

exports.History = History;
//# sourceMappingURL=stateshot.js.map


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/stateshot/dist/stateshot.js
var stateshot = __webpack_require__("61e5");

// CONCATENATED MODULE: ./src/vuex-stateshot.js



const SCOPE_NAME = 'vuexstateshot'
const SYNC_STATE = '__SYNC_STATE__'
const STATESHOT_UNDO = 'STATESHOT_UNDO'
const STATESHOT_REDO = 'STATESHOT_REDO'

class vuex_stateshot_VuexStateshot {
  constructor (store, modules, options) {
    const {
      // Max length saving history states, 100 by default.
      maxLength = 100,
      // Debounce time for push in milliseconds, 50 by default.
      delay = 50,
      ...others
    } = options

    const history = new stateshot["History"]({
      maxLength: maxLength + 1,
      delay,
      ...others
    })

    // store state
    this.store = store
    this.modules = modules
    this.moduleNames = Object.keys(modules)
    this.rootModule = store._modules.root

    // subscribe state
    this.actions = this.getSubscribeTypes('actions')
    this.mutations = this.getSubscribeTypes('mutations')
    this.unsubscribeAction = null
    this.unsubscribe = null

    // history state
    this.history = history
    // console.log(this.store)
  }

  getHistoryLength () {
    /**
     * There is some wrong with the stateshot.js
     * The truely history length is $records we need filter the record
     * Otherwise when you call the undo().get(), the history.length is wrong
     */
    // const historyLength = this.history.length
    return this.history.$records.filter(record => record).length
  }

  /**
   * Get the wanted subscribe types with namespace
   * @param {*} context 'actions/mutations'
   */
  getSubscribeTypes (context) {
    let types = []

    for (const namespace of this.moduleNames) {
      const subscribe = this.modules[namespace][context]
      const mapedTypes = subscribe && subscribe.map(type => {
        return namespace === 'rootModule' ? type : `${namespace}/${type}`
      })
      types = [...types, mapedTypes]
    }

    const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

    return deepFlatten(types.filter(v => v))
  }

  findNamespacedModule (namespace, moduleTree = this.rootModule) {
    if (namespace === 'root') return this.rootModule
    const parts = namespace.split('/')
    if (!parts.length) return false

    const subtree = moduleTree._children[parts[0]]
    const subpath = parts.slice(1).join('/')
    if (subtree && subtree.namespaced) {
      return parts.length === 1 ? subtree : this.findNamespacedModule(subpath, subtree)
    } else {
      for (const name in moduleTree._children) {
        const namespacedMoudle = this.findNamespacedModule(namespace, moduleTree._children[name])
        if (namespacedMoudle) return namespacedMoudle
      }
    }

    return false
  }

  registerPluginMoudle () {
    this.store.registerModule(SCOPE_NAME, {
      namespaced: true,
      state: {
        prevState: {},
        nextState: {},
        hasUndo: false,
        hasRedo: false,
        historyLength: 0,
        undoCount: 0,
        redoCount: 0
      },
      actions: {
        // snap a state shot of rootState
        snapshot: async ({ commit, dispatch, state, rootState }, payload) => {
          await this.history.push(rootState)

          const historyLength = this.getHistoryLength()

          commit(SYNC_STATE, {
            hasUndo: historyLength - 1 > 0,
            hasRedo: false,
            historyLength,
            undoCount: historyLength - 1,
            redoCount: 0
          })
        },
        undo: ({ commit, state }, payload) => {
          const { hasUndo } = state
          const prevState = this.history.undo().get()
          if (prevState && hasUndo) commit('STATESHOT_UNDO', prevState)
          return prevState
        },
        redo: ({ commit, state }, payload) => {
          const { hasRedo } = state
          const nextState = this.history.redo().get()
          if (nextState && hasRedo) commit('STATESHOT_REDO', nextState)
          return nextState
        },
        reset: ({ commit }, payload) => {
          this.history.reset()
          commit(SYNC_STATE, {
            nextState: {},
            prevState: {},
            hasUndo: false,
            hasRedo: false,
            historyLength: 0,
            undoCount: 0,
            redoCount: 0
          })
        }
      },
      mutations: {
        [SYNC_STATE] (state, payload) {
          Object.assign(state, payload)
        },
        [STATESHOT_UNDO] (state, prevState) {
          state.prevState = prevState
          state.undoCount -= 1
          if (state.undoCount === 0) state.hasUndo = false
          state.redoCount += 1
          state.hasRedo = state.redoCount > 0
        },
        [STATESHOT_REDO] (state, nextState) {
          state.nextState = nextState
          state.redoCount -= 1
          if (state.redoCount === 0) state.hasRedo = false
          state.undoCount += 1
          state.hasUndo = state.undoCount > 0
        }
      },
      getters: {
        hasUndo: state => state.hasUndo,
        hasRedo: state => state.hasRedo,
        undoCount: state => state.undoCount,
        redoCount: state => state.redoCount,
        historyLength: state => state.historyLength
      }
    })
  }

  syncState (namespace = 'root') {
    const { state } = this.findNamespacedModule(namespace, this.rootModule)
    this.store.dispatch(`${SCOPE_NAME}/snapshot`, state)
  }

  stateshotFromAction (store) {
    return {
      before: (action, state) => {
        console.log(
          '%cAction',
          'background: blue; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
          `${action.type}`
        )
      },
      after: (action, state) => {
        if (this.actions.includes(action.type)) {
          this.syncState()
          console.log(
            '%cSync',
            'background: green; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
            `Sync State... length is: ${this.history.length}`
          )
        }
      }
    }
  }

  stateshotFromMutation (mutation, state) {
    if (this.mutations.includes(mutation.type)) {
      this.syncState()
      console.log(
        '%cMutation',
        'background: green; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        `Sync State... length is: ${this.history.length}`
      )
    }
  }

  subscribeAction () {
    this.unsubscribeAction = this.store.subscribeAction(this.stateshotFromAction(this.store))
  }

  subscribe () {
    this.unsubscribe = this.store.subscribe((mutation, state) => this.stateshotFromMutation(mutation, state))
  }
}

function createPlugin (modules, options) {
  return store => {
    const plugin = new vuex_stateshot_VuexStateshot(store, modules, options)

    plugin.registerPluginMoudle()
    plugin.syncState()
    plugin.subscribeAction()
    plugin.subscribe()

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$stateshot = plugin
  }
}

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport createPlugin */__webpack_require__.d(__webpack_exports__, "createPlugin", function() { return createPlugin; });




/***/ })

/******/ })["default"];
});