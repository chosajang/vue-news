import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import BlogView from '../views/BlogView.vue';
import ProjectView from '../views/ProjectView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  router: [
    {
      // path: url 주소
      path: '/',
      // component: url 주소로 이동했을때 표시될 컴포넌트(페이지 개념)
      component: MainView
    },
    {
      path: '/blog',
      component: BlogView
    },
    {
      path: '/project',
      component: ProjectView
    }
  ]
});
