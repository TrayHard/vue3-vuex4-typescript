import { MutationTree } from 'vuex';
import { IState } from './state';

export enum IMutations {
    INC_COUNTER = 'SET_COUNTER'
}

export type Mutations<S = IState> = {
    [IMutations.INC_COUNTER](state: S, payload: number): void;
}

export const mutations: MutationTree<IState> & Mutations = {
    [IMutations.INC_COUNTER](state: IState, payload: number) {
        state.counter += payload;
    },
};
