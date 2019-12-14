<template>
  <div class="state-control">
    <h1>Play with the Widget 👇</h1>

    <div class="button-group">
      <button @click="handleUndo">Undo(⌘ + Z)</button>
      <button @click="handleRedo">Redo(⌘ + Y)</button>
    </div>

    <smart-widget-grid
      :margin="[5, 5]"
      :layout="layout"
      @layout-updated="handleLayoutUpdated"
    >
      <smart-widget
        v-for="item in layout"
        simple
        shadow="never"
        :padding="[0, 0]"
        :key="item.i"
        :slot="item.i"
      >
        <div class="layout-center" :style="{'background-color': item.color}">
          <h3>{{ item.i }}</h3>
        </div>
      </smart-widget>
    </smart-widget-grid>
  </div>
</template>

<script>
import key from 'keymaster'
import { mapState, mapActions, createNamespacedHelpers } from 'vuex'

const stateshot = createNamespacedHelpers('vuexstateshot')

export default {
  name: 'TicTacToe',
  computed: {
    ...mapState({
      layout: state => state.layout
    }),
    ...stateshot.mapState({
      historyLength: state => state.historyLength,
      prevState: state => state.prevState
    })
  },
  mounted () {
    this.bindKeys()
  },
  beforeDestory () {
    this.unbindKeys()
  },
  methods: {
    ...mapActions(['setLayout', 'undoLayout', 'redoLayout']),
    ...stateshot.mapActions(['undo', 'redo']),
    handleLayoutUpdated (newLayout) {
      this.setLayout(newLayout)
    },
    async handleUndo () {
      const prevState = await this.undo()
      this.undoLayout(prevState)
    },
    async handleRedo () {
      const nextState = await this.redo()
      this.redoLayout(nextState)
    },
    bindKeys () {
      const self = this
      const bindUndo = () => {
        self.handleUndo()
        return false
      }
      const bindRedo = () => {
        self.handleRedo()
        return false
      }
      key('⌘+z, ctrl+z', bindUndo)
      key('⌘+y, ctrl+y', bindRedo)
    },
    unbindKeys () {
      key.unbind('⌘+z, ctrl+z')
      key.unbind('⌘+y, ctrl+y')
    }
  }
}
</script>

<style lang='less'>
.layout-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
}
</style>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
.state-control {
  width: 640px;
  margin: 0 auto;
}
.button-group {
  margin: 40px 0;
  button {
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  button + button {
    margin-left: 16px;
  }
}
</style>
