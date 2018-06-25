import Vue from 'vue';
import Router from 'vue-router';
import Signup from '../docs/Signup.vue';
import Login from '../docs/Login.vue';
// import Google from '../docs/Google.vue';
import slack from '../docs/slack.vue';
import addUser from '../docs/addUser.vue';
import user1 from '../docs/user1.vue';
import firebasefile from '../docs/firebase.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/google',
    //   name: 'Google',
    //   component: Google
    // },
    {
      path: '/slack',
      name: 'slack',
      component: slack
    },
    {
      path: '/user',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/user1',
      name: 'user1',
      component: user1
    },
    {
      path: '/test',
      name: 'firebasefile',
      component: firebasefile
    }
  ],
});
