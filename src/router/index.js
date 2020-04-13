import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js';

import NewsBasicView from '../views/NewsBasicView.vue';

import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/ask'
  },
  {
    path: '/news',
    name: 'news',
    // component: createListView('NewsView')
    component: NewsView,
    beforeEnter: (to, from, next) => {
      console.log('to', to);
      // console.log('from', from);
      // console.log('next', next);
      bus.$emit('start:spinner');
      store.dispatch('FETCH_LIST', to.name)
        .then(() => { next(); })
        .catch(error => {
          console.log(error);
        });
    }
  },
  {
    path: '/ask',
    name: 'ask',
    // component: createListView('AskView')
    component: AskView,
    beforeEnter: (to, from, next) => {
      console.log('to', to);
      // console.log('from', from);
      // console.log('next', next);
      bus.$emit('start:spinner');
      store.dispatch('FETCH_LIST', to.name)
        .then(() => { next(); })
        .catch(error => {
          console.log(error);
        });
    }
  },
  {
    path: '/jobs',
    name: 'jobs',
    // component: createListView('JobsView')
    component: JobsView,
    beforeEnter: (to, from, next) => {
      console.log('to', to);
      // console.log('from', from);
      // console.log('next', next);
      bus.$emit('start:spinner');
      store.dispatch('FETCH_LIST', to.name)
        .then(() => { next(); })
        .catch(error => {
          console.log(error);
        });
    }
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemView
  },
  {
    path: '/news-basic',
    name: 'NewsBasic',
    component: NewsBasicView
  },
  {
    path: '/user/:id',
    name: 'User',
    component: UserView
  },
  { /* 404 error 방지 */
    path: '*',
    redirect: '/'
  }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});
