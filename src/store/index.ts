import { createStore } from "vuex";
type PostIt = unknown;

interface State {
  postIt: PostIt[];
}

export default createStore({
  state: {
    postIt: [],
  } as State,
  getters: {
    NewPostIt(state) {
      return state.postIt;
    },
  },
  mutations: {
    addPostIt(state, payload) {
      state.postIt.push(payload);
    },
    removePostIt(state, index) {
      state.postIt.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
