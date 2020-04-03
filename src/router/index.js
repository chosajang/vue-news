import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from '../views/MainView.vue';
import BlogView from '../views/BlogView.vue';
import ProjectView from '../views/ProjectView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView
  },
  { /* 404 error 방지 */
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
