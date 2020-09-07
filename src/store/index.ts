import { createStore } from 'vuex';

export type State = {
  counter: number;
};

const state: State = {
  counter: 0,
};

export const store = createStore({
  state,
  mutations: {
    increment(state) {
      state.counter += 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
