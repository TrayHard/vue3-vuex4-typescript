import { CommitOptions, DispatchOptions, Module } from 'vuex';
import { CounterState, state } from './state';
import { Mutations, mutations } from './mutations';
import { Actions, actions } from './actions';
import { Getters, getters } from './getters';

export { CounterState } from './state';
export { MutationTypes } from './mutations';
export { ActionTypes } from './actions';
export { Getters } from './getters';

export type CounterStore = {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
} & {
    dispatch<K extends keyof Actions>(
        key: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions
    ): ReturnType<Actions[K]>;
} & {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    };
};

const counterModule: Module<CounterState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default counterModule;
