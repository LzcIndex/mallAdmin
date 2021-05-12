import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    userInfo: null,
  },
  mutations: {
    setCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, payLoad) {
      state.userInfo = payLoad;
    },
  },
  actions: {
    setCollapsedAction({ commit }) {
      commit('setCollapsed');
    },
    setUserInfo({ commit }, payLoad) {
      commit('setCollapsed', payLoad);
    },
  },
  modules: {},
});
