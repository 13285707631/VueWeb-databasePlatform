<template>
  <div id="app">

    <menu></menu>
  </div>
</template>

<script>
import menu from './components/menu.vue'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    
    }
  },
  components:{
    'menu':menu
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

</style>
