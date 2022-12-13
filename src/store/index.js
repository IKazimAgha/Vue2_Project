import { getAllLeaves } from '@/helpers/api';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leaves: [],
    users: {},
  },
  getters: {
  },
  mutations: {
    fetchLeaves(state, leaves) {
      state.leaves = leaves;
    },
    addUser(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getLeaves(store, email) {
      const leave = await getAllLeaves(email);
      store.commit('fetchLeaves', leave);
      return leave;
    },
    async addUsers(store, data) {
      store.commit('addUser', data);
      return data;
    },
  },
  modules: {
  },
});
