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
    addLeave(state, leave) {
      state.leaves = [...state.leaves, leave];
    },
  },
  actions: {
    async getLeaves(store, email) {
      if (email) {
        const leave = await getAllLeaves(email);
        store.commit('fetchLeaves', leave);
        return leave;
      }
      const emailData = await sessionStorage.getItem('email');
      const leave = await getAllLeaves(emailData);
      store.commit('fetchLeaves', leave);
      return leave;
    },
    async addLeaves(store, data) {
      store.commit('addLeave', data);
    },
    async addUsers(store, data) {
      store.commit('addUser', data);
      return data;
    },
  },
  modules: {
  },
});
