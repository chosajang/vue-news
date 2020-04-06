<template>
  <div>
    <!-- <div v-for="news in newsList">{{ news }}</div> -->
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  data () {
    return {
      newsList: []
    };
  },
  created () {
    console.log('NewsView.vue', 'created()');
    this.$store.dispatch('FETCH_NEWS');
    // console.log(fetchnewslist);
    // fetchnewslist()
    //   .then(response => this.newslist = response.data)
    //   .catch(error => console.log(error));
  }
};
</script>

<style>

</style>
