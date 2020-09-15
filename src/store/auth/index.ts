import { CommitOptions, DispatchOptions, Module, useStore } from 'vuex';
import { IState, state } from './state';
import { IMutations, Mutations, mutations } from './mutations';
import { IActions, Actions, actions } from './actions';
import { Getters, getters } from './getters';
import { addPath } from '@/store/utils'

export { IState } from './state';
export { IMutations } from './mutations';
export { Getters } from './getters';

// export type AuthStore = {
//     commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//         key: K,
//         payload: P,
//         options?: CommitOptions
//     ): ReturnType<Mutations[K]>;
// } & {
//     dispatch<K extends keyof Actions>(
//         key: K,
//         payload: Parameters<Actions[K]>[1],
//         options?: DispatchOptions
//     ): ReturnType<Actions[K]>;
// } & {
//     getters: {
//         [K in keyof Getters]: ReturnType<Getters[K]>
//     };
// };

export const ActionTypes = addPath(IActions, 'auth')
export const MutationTypes = addPath(IMutations, 'auth')

const auth: Module<IState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default auth;
