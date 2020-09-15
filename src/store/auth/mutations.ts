import { MutationTree } from 'vuex';
import { IState } from './state'

export enum IMutations {
    LOG_IN = 'LOG_IN'
}

export type Mutations<S = IState> = {
    [IMutations.LOG_IN](state: S, payload: boolean): void;
}

export const mutations: MutationTree<IState> & Mutations = {
    [IMutations.LOG_IN](state: IState, payload: boolean) {
        console.log("IT WORKS");
        state.isLoggedIn = payload;
    },
};
