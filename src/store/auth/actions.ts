import { ActionContext, ActionTree } from 'vuex';
import { Mutations, IMutations } from './mutations';
import { IState, User, state } from './state';

export enum IActions {
    CHECK_CREDENTIALS = 'CHECK_CREDENTIALS'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<IState, IState>, 'commit'>

export interface Actions {
    [IActions.CHECK_CREDENTIALS](
        { commit }: AugmentedActionContext,
        credentials: User
    ): Promise<string>;
}

export const actions: ActionTree<IState, IState> & Actions = {
    [IActions.CHECK_CREDENTIALS]({ commit }, credentials: User) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (credentials.name === state.user1.name
                    && credentials.password === state.user1.password) {
                    commit(IMutations.LOG_IN, true);
                    resolve('User is verified');
                } else {
                    reject(new Error('User is not verified'));
                }
            }, 1000);
        });
    },
};
