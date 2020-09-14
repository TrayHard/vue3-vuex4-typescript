<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ status }}</span>
  </div>
</template>

<script lang="ts">
import { ActionTypes } from '@/store/auth';
import { defineComponent } from 'vue';
import { store } from '../store';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    async setup() {
        const mystore = store;
        await mystore.dispatch(ActionTypes.CHECK_CREDENTIALS, { name: 'John', password: 'Doe' });
        console.log(mystore.state.auth.isLoggedIn);
        // console.log((mystore.state.auth as any).isLoggedIn);
        // const status = mystore.state.auth.getters.showLoggedStatus;
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
