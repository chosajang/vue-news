<template>
  <div>
    <!-- <div v-for="news in this.$store.state.news">{{ news.title }}</div> -->
    <p v-for="item in this.$store.state.news" :key="item.id" >
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <!-- <router-link v-bind:to="'/user/' + item.user">{{ item.user }}</router-link> -->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js';

export default {
  // data () {
  //   return {
  //     newsList: []
  //   };
  // },
  created () {
    console.log('NewsView.vue', this.$store);
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
