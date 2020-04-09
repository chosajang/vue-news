<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="item-list">
      <li class="post" v-for="item in fetchedAsk" :key="item.id">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="item-title">
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <router-link v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
    <!-- <p v-for="item in fetchedAsk" :key="item.id">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
    </p> -->
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
// import { mapState, mapGetters } from 'vuex';
// import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  }
  // data () {
  //   return {
  //     ask: []
  //   };
  // },
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ])
  // ...mapGetters({
  //   askItems: 'fetchedAsk'
  // })
  // ...mapState({
  //   ask: state => state.ask
  // })
  // ask() {
  //   return this.$store.state.ask;
  // }
  // },
  // created () {
  //   this.$store.dispatch('FETCH_ASK');
  // var vm = this;
  // fetchAskList()
  //   .then(function (response) {
  //     vm.ask = response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }
};
</script>

<style scoped>

</style>
