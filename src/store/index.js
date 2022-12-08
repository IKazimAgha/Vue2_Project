import getAllLeaves from '@/helpers/api';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leaves: [],
  },
  getters: {
  },
  mutations: {
    fetchLeaves(state, leaves) {
      state.leaves = leaves;
    },
  },
  actions: {
    async getLeaves(store) {
      const leave = await getAllLeaves();
      store.commit('fetchLeaves', leave);
      return store.state.leaves;
    },
  },
  modules: {
  },
});
