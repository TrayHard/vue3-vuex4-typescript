import { GetterTree, Store } from 'vuex';
import { AuthState } from './state';

export type Getters = {
    showLoggedStatus(state: AuthState): string;
};

export const getters: GetterTree<AuthState, AuthState> & Getters = {
    showLoggedStatus: (state) => state.isLoggedIn ? 'Authorized' : 'Unauthorized',
};
