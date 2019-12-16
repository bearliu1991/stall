<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
  html 
    font-size:62.5%
  
  .fade-leave-active
    transition: opacity 0.2s
  .fade-enter-active 
    transition: opacity 2.5s
  .fade-enter,.fade-leave-to 
    opacity: 0
</style>
