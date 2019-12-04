import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Questionnaire from "./views/Questionnaire";
import Resultats from "./views/Resultats";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    },
    {
      path: '/resultats',
      name: 'Resultats',
      component: Resultats
    }
  ]
})
