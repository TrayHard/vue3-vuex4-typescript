import { createStore, ModuleTree } from 'vuex';
import auth, { IState as AuthState } from './auth';
import counter, { IState as CounterState } from './counter';

export {
    ActionTypes as AuthActionTypes,
    MutationTypes as AuthMutationTypes
} from './auth'

export {
    ActionTypes as CounterActionTypes,
    MutationTypes as CounterMutationTypes
} from './counter'

export type State = {
    auth: AuthState;
    counter: CounterState;
};

const modules: ModuleTree<State> = {
    auth,
    counter,
};

export const store = createStore({
    modules,
});