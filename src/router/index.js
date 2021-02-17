import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Department from '../components/Department.vue'
import Employee from '../components/Employee.vue'
import Leaving from '../components/Leaving.vue'
import Attendance from '../components/Attendance.vue'

Vue.use(VueRouter)
Vue.use(Home)
Vue.use(Login)
Vue.use(Department)
Vue.use(Employee)
Vue.use(Leaving)
Vue.use(Attendance)

const routes = [
  { path: '/', redirect: '/home' },
  {path:'/login',component:Login},
  {path:"/home",component:Home,children:[{
    path: '/department',
    component: Department
  }, {
    path: '/employee',
    component: Employee
     },{
      path: '/leaving',
      component: Leaving
       },
       {
  path: '/attendance',
  component: Attendance
   }  ]
},  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
