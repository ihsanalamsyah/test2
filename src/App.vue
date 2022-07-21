<template>
  <div id="app">
    <HelloWorld />
    <CardItem />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue2Filters from 'vue2-filters'
import CardItem from './components/CardItem.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    CardItem
},
  mixins: [Vue2Filters.mixin]
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
