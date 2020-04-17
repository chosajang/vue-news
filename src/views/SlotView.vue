<template>
  <div>
    <ul>
      <slot-item v-for="item in items" :key="item" :propsdata="item"></slot-item>
    </ul>
  </div>
</template>

<script>
import SlotItem from '../components/SlotItem.vue';

export default {
  components: {
    SlotItem
  },
  data () {
    return {
      items: ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05']
    };
  }
};
</script>

<style>

</style>
