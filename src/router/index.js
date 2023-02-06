import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/elHome/index.vue'),
    children : [
      {
        path: 'homes',
        name: 'homes',
        component: () => import('../views/Homes/index.vue')
      },
      {
        path: 'echarts',
        name: 'echarts',
        component: () => import('../views/Echarts/index.vue'),
        children:[
          {
            path:'home',
            name:'echartsHome',
            component:() =>import('../views/Echarts/echartsHome.vue')
          },
          {
            path:'list',
            name:'echartsList',
            component:() =>import('../views/Echarts/echartsList.vue')
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
