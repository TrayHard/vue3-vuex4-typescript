import { createStore, ModuleTree } from 'vuex';
import auth, { AuthStore, AuthState } from './auth';
import counter, { CounterStore, CounterState } from './counter';

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

// export const store = createStore({
//     modules: {
//         auth: authModule,
//         counter: counterModule
//     }
// });
