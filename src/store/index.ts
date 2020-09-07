import { createStore, ModuleTree } from 'vuex';
import auth, { AuthStore } from './auth';
import counter, { CounterStore } from './counter';

export type Store = AuthStore & CounterStore;

const modules: ModuleTree<Store> = {
    counter,
    auth,
};

export const store = createStore({
    modules,
});
