import { getAllLeaves } from '@/helpers/api';
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
      console.log('fetchLeaves', leaves);
      state.leaves = leaves;
    },
  },
  actions: {
    async getLeaves(store) {
      const leave = await getAllLeaves();
      console.log({ leave });
      store.commit('fetchLeaves', leave);
      return leave;
    },
  },
  modules: {
  },
});
