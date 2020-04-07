<template>
  <div>
    <div v-for="item in fetchedAsk">{{ item.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';
import { mapState, mapGetters } from 'vuex';

export default {
  // data () {
  //   return {
  //     ask: []
  //   };
  // },
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })
    // ...mapState({
    //   ask: state => state.ask
    // })
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created () {
    this.$store.dispatch('FETCH_ASK');
    // var vm = this;
    // fetchAskList()
    //   .then(function (response) {
    //     vm.ask = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
};
</script>

<style>

</style>
