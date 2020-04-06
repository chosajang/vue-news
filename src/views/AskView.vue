<template>
  <div>
    <div v-for="item in ask">{{ item }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data () {
    return {
      ask: []
    };
  },
  created () {
    var vm = this;
    fetchAskList()
      .then(function (response) {
        vm.ask = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    // return new Promise();
  }
};
</script>

<style>

</style>
