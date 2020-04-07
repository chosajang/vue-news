<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs">{{ job.title }}</div> -->
    <p v-for="job in this.$store.state.jobs" :key="job.id" >
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';

export default {
  created () {
    this.$store.dispatch('FETCH_JOBS');
  }
};
</script>

<style>

</style>
