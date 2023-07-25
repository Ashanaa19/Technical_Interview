import Vue from 'vue';
import VueRouter from 'vue-router';
import PageOne from './components/PageOne.vue';
import PageTwo from './components/PageTwo.vue';
import PageThree from './components/PageThree.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PageOne },
  { path: '/page2', component: PageTwo },
  { path: '/page3', component: PageThree },
];

const router = new VueRouter({
  routes,
});

export default router;
