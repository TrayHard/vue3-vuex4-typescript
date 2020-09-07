<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ status }}</span>
    <!-- <div @click="inc">CLICK ME</div> -->
  </div>
</template>

<script lang="ts">
import { ActionTypes } from '@/store/auth';
import { defineComponent } from 'vue';
// import { createNamespacedHelpers } from 'vuex';
import { store } from '../store';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    async setup() {
        const mystore = store;
        const status = await mystore.state.dispatch(ActionTypes.CHECK_CREDENTIALS, { name: 'John', password: 'Doe' });
        // const counter = computed(() => store.state.counter);
        // const inc = () => {
        //     store.commit(MutationTypes.INC_COUNTER, 1);
        // };
        // const inc2 = () => {
        //     store.dispatch(ActionTypes.INC_COUNTER, 3);
        // };
        return {
            status,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
