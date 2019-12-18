<template>
  <div id="app" :class="{'dark-mode': isDarkmode}">
    <GridBlock :is-darkmode="isDarkmode" />
  </div>
</template>

<script>
import GridBlock from '@/components/GridBlock.vue'

export default {
  name: 'app',
  computed: {
    isDarkmode () {
      return this.$store.state.theme === 'dark'
    }
  },
  components: {
    GridBlock
  }
}
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  color: #2c3e50;
  &.dark-mode {
    background-color: #222C3C;
  }
}
</style>
