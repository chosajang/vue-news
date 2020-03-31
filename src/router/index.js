import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';

Vue.use(VueRouter);

const Home = { template: '<div>Home</div>' };
const NotFound = { template: '<div>Home</div>' };

export const router = new VueRouter({
  mode: 'history',
  router: [
    {
      // path: url 주소
      path: '/',
      // component: url 주소로 이동했을때 표시될 컴포넌트(페이지 개념)
      component: Home
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
