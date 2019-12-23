import flushPromises from 'flush-promises'

import { logshot, createApp } from './helper'

describe.each([
  ['Test root module', 'rootModule', 'first'],
  ['Test namespaced module', 'global', 'second']
])('VuexStateshot', (description, namespace, flag) => {
  if (flag === 'first') {
    describe(description, () => {
      let vm = null

      beforeAll(() => {
        const wrapper = createApp(namespace)
        vm = wrapper.vm
      })

      it('sets initial states', () => {
        expect(vm.hasUndo).toBeFalsy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(0)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(1)
      })

      it('commit a mutation on root module', async () => {
        expect(vm.theme).toBe('light')
        vm.setTheme('dark')
        expect(vm.theme).toBe('dark')
        await flushPromises()
        logshot(vm)
        expect(vm.hasUndo).toBeTruthy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(1)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(2)
      })

      it('call undo', async () => {
        const { theme } = await vm.undo()
        expect(theme).toBe('light')
        expect(vm.hasUndo).toBeFalsy()
        expect(vm.hasRedo).toBeTruthy()
        expect(vm.undoCount).toBe(0)
        expect(vm.redoCount).toBe(1)
      })

      it('call redo', async () => {
        const { theme } = await vm.redo()
        expect(theme).toBe('dark')
        expect(vm.hasUndo).toBeTruthy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(1)
        expect(vm.redoCount).toBe(0)
      })

      it('call reset history', () => {
        vm.reset()
        expect(vm.hasUndo).toBeFalsy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(0)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(0)
      })
    })
  }

  if (flag === 'second') {
    describe(description, () => {
      let vm = null

      beforeAll(() => {
        const wrapper = createApp(namespace)
        vm = wrapper.vm
      })

      it('sets initial states', () => {
        expect(vm.hasUndo).toBeFalsy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(0)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(1)
      })

      it('dispatch a action on global module', async () => {
        expect(vm.lang).toBe('en')
        vm.setLang('zh')
        expect(vm.lang).toBe('zh')
        await flushPromises()
        // logshot(vm)
        expect(vm.hasUndo).toBeTruthy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(1)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(2)
      })

      it('commit a mutation on global module', async () => {
        expect(vm.color).toBe('#fff')
        vm.changeColor('#4af')
        expect(vm.color).toBe('#4af')
        await flushPromises()
        expect(vm.hasUndo).toBeTruthy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(2)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(3)
      })

      it('call custom action(unsubscribed)', async () => {
        expect(vm.color).toBe('#4af')
        // begin custom action
        vm.setState({
          color: '#af4'
        })
        vm.$stateshot.syncState()
        // end custom action
        expect(vm.color).toBe('#af4')
        await flushPromises()
        expect(vm.hasUndo).toBeTruthy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(3)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(4)
      })

      it('call undo multiple times', async () => {
        await vm.undo()
        await vm.undo()
        const { global } = await vm.undo()
        expect(global.color).toBe('#fff')
        expect(global.lang).toBe('en')
        expect(vm.hasUndo).toBeFalsy()
        expect(vm.hasRedo).toBeTruthy()
        expect(vm.undoCount).toBe(0)
        expect(vm.redoCount).toBe(3)
      })

      it('call redo', async () => {
        const { global } = await vm.redo()
        expect(global.color).toBe('#fff')
        expect(global.lang).toBe('zh')
        expect(vm.hasUndo).toBeTruthy()
        expect(vm.hasRedo).toBeTruthy()
        expect(vm.undoCount).toBe(1)
        expect(vm.redoCount).toBe(2)
      })

      it('call reset history', () => {
        vm.reset()
        expect(vm.hasUndo).toBeFalsy()
        expect(vm.hasRedo).toBeFalsy()
        expect(vm.undoCount).toBe(0)
        expect(vm.redoCount).toBe(0)
        expect(vm.historyLength).toBe(0)
      })
    })
  }
})
