import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    userInfo: null,
    // 存储菜单的路由
    menuRoutes: [],
  },
  mutations: {
    setCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, payLoad) {
      state.userInfo = payLoad;
    },
    changeMenuRoutes(state, routes) {
      state.menuRoutes = routes;
    },
  },
  actions: {
    setCollapsedAction({ commit }) {
      commit('setCollapsed');
    },
    setUserInfo({ commit }, payLoad) {
      commit('setCollapsed', payLoad);
    },
    changeMenuRoutes({ commit }, routes) {
      commit('changeMenuRoutes', routes);
    },
  },
  modules: {},
});
