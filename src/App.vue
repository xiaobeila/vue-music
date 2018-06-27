<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/style/common';
 [v-cloak] {
    display: none;
  }
  #app {
    width: 100%;
    height: 100%;
    font-size: .12rem;
    .weui-toast__content {
      font-size: .12rem;
    }
  }
</style>
