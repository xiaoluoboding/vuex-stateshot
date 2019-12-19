# Vuex Stateshot

<p align="left">
  <a href="https://travis-ci.org/xiaoluoboding/vuex-stateshot"><img src="https://travis-ci.org/xiaoluoboding/vuex-stateshot.svg?branch=master"></a>
  <a href="https://www.npmjs.com/package/vuex-stateshot" target="_blank"><img src="https://img.shields.io/npm/v/vuex-stateshot.svg"></a>
  <a href="https://github.com/xiaoluoboding/vuex-stateshot"><img src="https://img.shields.io/github/stars/xiaoluoboding/vuex-stateshot.svg"></a>
  <a href="https://github.com/xiaoluoboding/vuex-stateshot"><img src="https://img.shields.io/github/license/xiaoluoboding/vuex-stateshot.svg"></a>
</p>

💾 A State Snapshot plugin on Actions/Mutations for Vuex3.1+.

## Installation

```bash
npm i vuex-stateshot -S
or
yarn add vuex-stateshot -S
```

## Demo

See `/app` works at [Code Sandbox](https://codesandbox.io/s/vuex-stateshot-szx9h)

## Concepts

> The core concepts is base on StateShot.js and Vuex3.1+ API `subscribe` & `subscribeAction`

## Usage

> The Vuex Stateshot is base on [StateShot](https://github.com/gaoding-inc/stateshot), you can know about `StateShot` first, maybe you already use in your project.


### Create the plugin

Add the plugin to the Vuex **store**:

```javascript
import { createPlugin } from 'vuex-stateshot'

const store = new Vuex.Store({
  state: {},
  ...,
  plugins: [
    createPlugin({
      // The special root module key
      rootModule: {
        // The actions you want snapshot
        actions: [],
        // The mutations you want snapshot
        mutations: []
      },
      // The custom module name
      __MODULE__NAME__: {
        // The actions you want snapshot
        actions: [],
        // The mutations you want snapshot
        mutations: []
      }
    })
  ]
})
```

### Work with component

In *component*, use `createNamespacedHelper` to map the helpers:

```javascript
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('vuexstateshot')

export default {
  ...,

  computed: {
    ...mapGetters([ 'undoCount', 'redoCount', 'hasUndo', 'hasRedo' ])
  },

  methods: {
    ...mapActions(['undo', 'redo', 'reset'])
  }
}
```

Or use the module namespace (`vuexstateshot`) as the first argument to map helpers

```javascript
import { mapGetters, mapActions } from 'vuex'

export default {
  ...,

  computed: {
    ...mapGetters('vuexstateshot', [ 'undoCount', 'redoCount', 'hasUndo', 'hasRedo' ])
  },

  methods: {
    ...mapActions('vuexstateshot', ['undo', 'redo', 'reset'])
  }
}
```

## API

### Plugin Options

| Name | Description | Type |
|:--------|:--------|:--------:|
| first argument | Provide the relation statement of module namespace and the actions/mutations you want snapshot | Object |
| second argument | The options of stateshot [history](https://github.com/gaoding-inc/stateshot#history) instance. | Object |

** The is a example **

```js
plugins: [
  createPlugin(
    // first argument
    {
      // The special root module key
      rootModule: {
        // The actions you want snapshot
        actions: ['setTheme']
      },
      // The custom module name
      global: {
        // The actions you want snapshot
        actions: ['syncState', 'setLayout'],
        // The mutations you want snapshot
        mutations: ['CHANGE_COLOR']
      },
      // The nested custom module name
      'global/widget': {
        actions: ['toggleShowCard']
      }
    },
    // second argument
    {
      maxLength: 20
    }
  )
]
```

**history Options**

| maxLength | Max length saving history states, 100 by default. | Number |
| delay | Debounce time for push in milliseconds, 50 by default. | Number |

### Plugin Methods

> Vuex Stateshot also provide a custom method to record the state into history

```javascript
this.$stateshot.syncState()
```

| Name | Description | Callback |
|:--------|:--------|:--------:|
| syncState | Custom to record the state, not by subscribe the `action/mutation` | - |
| getHistoryLength | Get the current state history length | - |
| unsubscribeAction | When you want stop subscribe `Action` programly | - |
| subscribeAction | Used when you want resubscribe `Action` after call `unsubscribeAction` | - |
| unsubscribe | When you want stop subscribe `Mutations` programly | - |
| subscribe | Used when you want resubscribe `Mutations` after call `unsubscribe` | - |

### Namespaced Helpers

**mapGetters**

> When plugin first time sync the base state, the undoCount = 1, and hasUndo = true
> It's all begin
> When you call the undo method, you have the state can redo

| Name | Description | Type |
|:--------|:--------|:--------:|
| undoCount | The counts of the current state has undo. | Number |
| redoCount | The counts of the current state has redo. | Number |
| hasUndo | Whether current state has undo records before. | Boolean |
| hasRedo | Whether current state has redo records after undo. | Boolean |

**mapActions**

| Name | Description | Callback |
|:--------|:--------|:--------:|
| undo | Undo a record if possible. | `() => prevState` |
| redo | Redo a record if possible. Must after call the `undo` action | `() => nextState` |
| reset | Clear all the state to the origin | - |

## License

MIT
