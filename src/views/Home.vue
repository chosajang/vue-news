<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeView msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeView from '@/components/HomeView.vue'

export default {
  name: 'Home',
  components: {
    HomeView 
  }
}
</script>
