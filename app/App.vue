<template>
  <div id="app">
    <GridBlock />
  </div>
</template>

<script>
import GridBlock from '@/components/GridBlock.vue'

export default {
  name: 'app',
  components: {
    GridBlock
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
