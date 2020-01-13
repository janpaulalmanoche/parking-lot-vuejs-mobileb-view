import {mapState,mapMutations} from 'vuex';

const routes = [
  // {
  //   path:'/login',
  //   component: () => import('components/Login/Login.vue')
  // },
    //this is temporay routes, to test api in drago tales
  {
    path: '/',
    component: () => import('layouts/MyLayout2.vue'),
    children: [
      { path: '', component: () => import('src/kiosk/Index3.vue') }, //PageTodo == Index.vue
      // { path: '/settings' , name:'settings', component: () => import('pages/PageSettings.vue') },
      // {path: 'designing' , name:'designing', component:()=>import('components/FormDesign.vue')},
      // {path: '/booking' , name:'bookin', component:()=>import('components/Booking/Booking.vue')}

    ]
  },
    //tnhis is the real routes
  // {
  //   path: '/',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }, //PageTodo == Index.vue
  //     { path: '/settings' , name:'settings', component: () => import('pages/PageSettings.vue') },
  //     {path: 'designing' , name:'designing', component:()=>import('components/FormDesign.vue')}
  //
  //   ]
  // },
]

// // Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
