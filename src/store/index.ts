/* eslint-disable prettier/prettier */
import { createStore } from "vuex";

export default createStore({
  state: { postIt: [] as Array<unknown> },
  getters: {
    NewPostIt(state) {
      return state.postIt
    }
  },
  mutations: {
    addPostIt(state, payload) {
      state.postIt.push( payload);
    },
  },
  actions: {
  },
  modules: {},
});
