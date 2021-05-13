import Vue from 'vue';
import VueRouter from 'vue-router';
import getMenuRoutes from '@/utils/permission';
import store from '@/store';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

const asyncRouterMap = [
  {
    path: '/product',
    name: 'Product',
    component: Home,
    meta: {
      title: '商品',
    },
    children: [
      {
        path: 'list',
        name: 'ProductList',
        component: () => import('@/views/page/productList.vue'),
        meta: {
          title: '商品列表',
        },
      },
      {
        path: 'add',
        name: 'ProductAdd',
        meta: {
          title: '添加商品',
        },
        component: () => import('@/views/page/productAdd.vue'),
      },
      {
        path: 'category',
        name: 'Category',
        meta: {
          title: '类目管理',
        },
        component: () => import('@/views/page/category.vue'),
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});
let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoutes(store.state.user.role, asyncRouterMap);
        router.addRoutes(menuRoutes);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes));
        isAddRoutes = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});
export default router;
