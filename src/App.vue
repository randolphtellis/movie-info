<template>
  <div id="app">
    <Search />
  </div>
</template>

<script>
import Search from './views/Search.vue'

export default {
  name: 'app',
  components: {
    Search
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
}
body {
  margin: 0;
  padding: 0;
  background: rgba(166, 195, 210, 0.1);
}
</style>
