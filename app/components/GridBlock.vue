<template>
  <div class="grid-block">
    <h1>Play with the Widget 👇</h1>

    <div class="button-group actions">
      <label for="actions">Actions:</label>
      <button @click="handleUndo" :disabled="!hasUndo">Undo(<strong>{{undoCount}}</strong>)(⌘ + Z)</button>
      <button @click="handleRedo" :disabled="!hasRedo">Redo(<strong>{{redoCount}}</strong>)(⌘ + Y)</button>
    </div>

    <div class="button-group mutations">
      <label for="mutations">Mutations:</label>
      <button @click="handleChangeColor">Change Color</button>
    </div>

    <div class="button-group namespaced">
      <label for="mutations">Nested Actions:</label>
      <button @click="toggleShowCard">Toggle Show Card</button>
    </div>

    <div class="button-group custom">
      <label for="mutations">Custom:</label>
      <button @click="handleChangeGrid">Change Grid</button>
      <button @click="handleResetGrid">Reset Grid</button>
    </div>

    <div class="button-group subscribe">
      <label for="mutations">Subscribe Toggle:</label>
      <button @click="unsubscribeActions">Unsubscribe Actions</button>
      <button @click="subscribeActions">Subscribe Actions</button>
      <button @click="unsubscribeMutations">Unsubscribe Mutations</button>
      <button @click="subscribeMutations">Subscribe Mutations</button>
    </div>

    <div class="button-group restore">
      <label for="mutations">Restore:</label>
      <button @click="handleResetHistory">Reset History</button>
    </div>

    <smart-widget-grid
      :margin="[5, 5]"
      :row-height="36"
      :layout="layout"
      @layout-updated="handleLayoutUpdated"
    >
      <smart-widget
        v-for="item in layout"
        :simple="!isShowCard"
        shadow="never"
        :padding="[0, 0]"
        :key="item.i"
        :slot="item.i"
      >
        <template v-if="isShowCard" >
          <div slot="title" class="widget-title">
            <span>Card {{item.i}}</span>
          </div>
          <div class="layout-center" :style="{'background-color': item.color}">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          </div>
        </template>
        <div class="layout-center" :style="{'background-color': item.color}" v-else>
          <h3>{{ item.i }}</h3>
        </div>
      </smart-widget>
    </smart-widget-grid>
  </div>
</template>

<script>
import key from 'keymaster'
import cloneDeep from 'lodash.clonedeep'
import debounce from 'lodash.debounce'
import { mapState, mapActions, createNamespacedHelpers } from 'vuex'

const stateshot = createNamespacedHelpers('vuexstateshot')

export default {
  name: 'GirdBlock',
  computed: {
    ...mapState('global', {
      layout: state => state.layout
    }),
    ...stateshot.mapGetters([
      'undoCount',
      'redoCount',
      'hasUndo',
      'hasRedo'
    ]),
    ...mapState('global/widget', {
      isShowCard: state => state.isShowCard
    })
  },
  mounted () {
    // clone the init layout
    this.setState({
      cloneLayout: cloneDeep(this.layout)
    })
    this.bindKeys()
  },
  beforeDestroy () {
    this.unbindKeys()
  },
  methods: {
    ...mapActions('global', [
      'setState',
      'setLayout',
      'undoLayout',
      'redoLayout',
      'resetLayout'
    ]),
    ...mapActions('global/widget', ['toggleShowCard']),
    ...stateshot.mapActions(['undo', 'redo', 'reset']),
    handleLayoutUpdated (newLayout) {
      this.setLayout(newLayout)
    },
    async handleUndo () {
      const { global } = await this.undo()
      this.undoLayout(global)
    },
    async handleRedo () {
      const { global } = await this.redo()
      this.redoLayout(global)
    },
    handleChangeColor () {
      this.$store.commit('global/CHANGE_COLOR')
    },
    handleChangeGrid: debounce(function () {
      const newLayout = [
        { x: 0, y: 0, w: 4, h: 3, i: 'One', color: '#4AF' },
        { x: 4, y: 0, w: 4, h: 3, i: 'Two', color: '#4FA' },
        { x: 8, y: 0, w: 4, h: 3, i: 'Three', color: '#A4F' },
        { x: 0, y: 3, w: 12, h: 4, i: 'Four', color: '#AF4' },
        { x: 0, y: 7, w: 12, h: 4, i: 'Five', color: '#F4A' }
      ]

      this.setState({ layout: newLayout })

      /**
       * May be there is a lot of actions/mutations you want call
       * When you finish the logic, you can call the syncState method to
       * snapshot the state right now, and the param is the state
       */

      this.$stateshot.syncState('global')
    }, 333),
    handleResetGrid () {
      this.resetLayout()
      this.$stateshot.syncState('global')
    },
    unsubscribeActions () {
      this.$stateshot.unsubscribeAction()
    },
    subscribeActions () {
      this.$stateshot.subscribeAction()
    },
    unsubscribeMutations () {
      this.$stateshot.unsubscribe()
    },
    subscribeMutations () {
      this.$stateshot.subscribe()
    },
    handleResetHistory () {
      this.reset()
    },
    bindKeys () {
      const self = this
      const bindUndo = () => {
        self.hasUndo && self.handleUndo()
        return false
      }
      const bindRedo = () => {
        self.hasRedo && self.handleRedo()
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
.grid-block {
  width: 750px;
  margin: 0 auto;
  h1 {
    margin-bottom: 60px;
  }
  .widget-title {
    margin-left: 10px;
  }
}
.button-group {
  display: flex;
  align-items: center;
  margin: 0 0 20px;
  label {
    width: 120px;
    margin-right: 20px;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
  }
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
