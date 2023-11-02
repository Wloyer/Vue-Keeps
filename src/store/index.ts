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
    GetPostIt(state) {
      return state.postIt;
    },
  },
  mutations: {
    addPostIt(state, payload) {
      state.postIt.push(payload);
    },
    deletePostIt(state, content) {
      const index = state.postIt.findIndex((postIt) => postIt === content);
      if (index !== -1) {
        state.postIt.splice(index, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
