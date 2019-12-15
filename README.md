# Vuex Stateshot

<p align="left">
  <a href="https://travis-ci.org/xiaoluoboding/vuex-stateshot"><img src="https://travis-ci.org/xiaoluoboding/vuex-stateshot.svg?branch=master"></a>
  <a href="https://www.npmjs.com/package/vuex-stateshot" target="_blank"><img src="https://img.shields.io/npm/v/vuex-stateshot.svg"></a>
  <a href="https://github.com/xiaoluoboding/vuex-stateshot"><img src="https://img.shields.io/github/stars/xiaoluoboding/vuex-stateshot.svg"></a>
  <a href="https://github.com/xiaoluoboding/vuex-stateshot"><img src="https://img.shields.io/github/license/xiaoluoboding/vuex-stateshot.svg"></a>
</p>

💾 A State Snapshot plugin on Actions/Mutations for Vuex3.1x.

## Installation

```bash
npm i vuex-stateshot -S
or
yarn add vuex-stateshot -S
```

## Demo

See `/app` works at [Code Sandbox](https://codesandbox.io/s/vuex-stateshot-szx9h)

## Concepts

> The core concepts is base on StateShot.js

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
      // The actions you want snapshot
      actions: [],
      // The mutations you want snapshot
      mutations: []
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

## API

### Plugin Options

| Name | Description | Type |
|:--------|:--------|:--------:|
| actions | The actions you want snapshot. | Array |
| mutations | The mutations you want snapshot. | Array |
| maxLength | Max length saving history states, 100 by default. | Number |
| delay | Debounce time for push in milliseconds, 50 by default. | Number |

### Plugin Methods

> Vuex Stateshot also provide a custom method to record the state into history

```javascript
this.$stateshot.syncState(this.$store.state)
```

| Name | Description | Callback |
|:--------|:--------|:--------:|
| syncState | Custom to record the state, not by subscribe the `action/mutation` | - |
| getHistoryLength | Get the current state history length | - |

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
