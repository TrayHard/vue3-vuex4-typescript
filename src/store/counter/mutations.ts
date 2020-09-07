import { MutationTree } from 'vuex';
import { CounterState } from './state';

export enum MutationTypes {
    INC_COUNTER = 'SET_COUNTER'
}

export type Mutations<S = CounterState> = {
    [MutationTypes.INC_COUNTER](state: S, payload: number): void;
}

export const mutations: MutationTree<CounterState> & Mutations = {
    [MutationTypes.INC_COUNTER](state: CounterState, payload: number) {
        state.counter += payload;
    },
};
