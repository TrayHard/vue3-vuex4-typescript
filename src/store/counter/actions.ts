import { ActionContext, ActionTree } from 'vuex';
import { Mutations, IMutations } from './mutations';
import { IState } from './state';

export enum IActions {
    INC_COUNTER = 'ACT_SET_COUNTER'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IState, IState>, 'commit'>

export interface Actions {
    [IActions.INC_COUNTER](
        { commit }: AugmentedActionContext,
        payload: number
    ): void;
}

export const actions: ActionTree<IState, IState> & Actions = {
    [IActions.INC_COUNTER]({ commit }, payload: number) {
        commit(IMutations.INC_COUNTER, payload);
    },
};
