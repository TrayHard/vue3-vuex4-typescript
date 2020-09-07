import { ActionContext, ActionTree } from 'vuex';
import { Mutations, MutationTypes } from './mutations';
import { CounterState } from './state';

export enum ActionTypes {
    INC_COUNTER = 'ACT_SET_COUNTER'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<CounterState, CounterState>, 'commit'>

export interface Actions {
    [ActionTypes.INC_COUNTER](
        { commit }: AugmentedActionContext,
        payload: number
    ): void;
}

export const actions: ActionTree<CounterState, CounterState> & Actions = {
    [ActionTypes.INC_COUNTER]({ commit }, payload: number) {
        commit(MutationTypes.INC_COUNTER, payload);
    },
};
