import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';

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
    path: '/jobs',
    name: 'Jobs',
    component: JobsView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView
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
