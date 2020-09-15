import { GetterTree } from 'vuex';
import { IState } from './state';

export type Getters = {
    doubleCounter(state: IState): number;
};

export const getters: GetterTree<IState, IState> & Getters = {
    doubleCounter: (state) => state.counter * 2,
};
