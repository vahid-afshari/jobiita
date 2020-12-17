import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Form from '@/components/Form'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
import firebase from 'firebase'
import Profile from '@/components/Profile'
import ViewProfile from '@/components/profile/ViewProfile'
import Company from '@/components/Company'
import Area from '@/components/Area'
Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/company',
      name: 'Company',
      component: Company,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/area',
      name: 'Area',
      component: Area
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      meta: {
        requiresAuth: true
      }
    },
    
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
  ]
})


router.beforeEach((to, from, next)=>{
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    let user = firebase.auth().currentUser
    if(user){
      next()
    } else {
      next({name: 'Area'})
    }
  } else {
    next ()
  }
})
export default router