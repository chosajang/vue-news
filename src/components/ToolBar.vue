<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/news-basic">News Basic</router-link> |
    <router-link to="/login">Login</router-link> |
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.header {
  color: #FFF;
  background-color: #2D353C;
  display: flex;
  padding: 10px;
  font-size: 20px;
}
.header .router-link-exact-active {
  color: #FFF;
}
.header a {
  color: #B6B6B6;
}
</style>
