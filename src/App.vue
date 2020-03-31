<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/project">Project</router-link>
    </div>
    <!-- url에 다른 뷰컴포넌트 출력 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
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
