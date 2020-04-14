<template>
  <div>
    <button @click="loginUser1">UserInfo</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from '../utils/handler.js';

export default {
  data () {
    return {
      items: []
    };
  },
  methods: {
    loginUser () {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if (response.data.id === 1) {
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {
                this.items = response.data;
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loginUser1 () {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
          console.log('인증완료');
          const list = await axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data;
        }
      } catch (error) {
        handleException(error);
        console.log(error);
      }
    }
  }
};
</script>

<style>

</style>
