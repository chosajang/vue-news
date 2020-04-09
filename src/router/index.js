import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';

import NewsBasicView from '../views/NewsBasicView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/ask'
  },
  {
    path: '/ask',
    name: 'Ask',
    component: AskView
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: ItemView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView
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
