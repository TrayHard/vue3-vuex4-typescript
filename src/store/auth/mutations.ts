import { MutationTree } from 'vuex';
import { AuthState } from './state'

export enum MutationTypes {
    LOG_IN = 'LOG_IN'
}

export type Mutations<S = AuthState> = {
    [MutationTypes.LOG_IN](state: S, payload: boolean): void;
}

export const mutations: MutationTree<AuthState> & Mutations = {
    [MutationTypes.LOG_IN](state: AuthState, payload: boolean) {
        console.log("IT WORKS");
        state.isLoggedIn = payload;
    },
};
