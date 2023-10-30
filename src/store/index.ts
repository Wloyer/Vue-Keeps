/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { createStore } from "vuex";
type PostItItem = any;

interface State {
  postIt: PostItItem[];
}

export default createStore({
  state: {
    postIt: []
  } as State,
  getters: {
    NewPostIt(state) {
      return state.postIt
    },
  },
  mutations: {
    addPostIt(state, payload) {
      state.postIt.push(payload);
    },
    removePostIt(state, index) {
      state.postIt.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {},
});
