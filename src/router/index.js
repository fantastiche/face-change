import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition/PageTransition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '/',
        redirect: '/index'
      }, {
        path: '/index',
        name: 'index',
        component: resolve => require(['../view/Index/index.vue'], resolve),
        children: [{
          path: '/index/pageAll',
          name: 'pageAll',
          component: resolve => require(['../view/Page/pageAll.vue'], resolve)
        }, {
          path: '/index/pageDate',
          name: 'pageDate',
          component: resolve => require(['../view/Page/pageDate.vue'], resolve)
        }]
      }, {
        path: '/takePhoto',
        name: 'takePhoto',
        component: resolve => require(['../view/TakePhoto/takePhoto.vue'], resolve)
      }]
    }
  ]
})
