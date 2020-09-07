import { GetterTree } from 'vuex';
import { CounterState } from './state';

export type Getters = {
    doubleCounter(state: CounterState): number;
};

export const getters: GetterTree<CounterState, CounterState> & Getters = {
    doubleCounter: (state) => state.counter * 2,
};
