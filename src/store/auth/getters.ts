import { GetterTree, Store } from 'vuex';
import { IState } from './state';

export type Getters = {
    showLoggedStatus(state: IState): string;
};

export const getters: GetterTree<IState, IState> & Getters = {
    showLoggedStatus: (state) => state.isLoggedIn ? 'Authorized' : 'Unauthorized',
};
