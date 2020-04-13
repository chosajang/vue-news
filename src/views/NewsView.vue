<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
// import bus from '../utils/bus.js';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
  // created () {
  //   console.log('NewsView.vue', 'created()');
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_NEWS')
  //     .then(() => {
  //       bus.$emit('end:spinner');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   bus.$emit('end:spinner');

  //   setTimeout(() => {
  //   }, 3000);
  // }
};
</script>

<style>

</style>
