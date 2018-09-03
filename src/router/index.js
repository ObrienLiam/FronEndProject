import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Add from '@/components/Add'
import Users from '@/components/Users'
import Edit from '@/components/Edit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/accounts',
      name: 'Users',
      component: Users
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
  ]
})
