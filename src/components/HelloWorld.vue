<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ counter }}</span>
    <div @click="inc">CLICK ME</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { ActionTypes, MutationTypes, useStore } from '../store';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    setup() {
        const store = useStore();
        const counter = computed(() => store.state.counter);
        const inc = () => {
            store.commit(MutationTypes.INC_COUNTER, 1);
        };
        const inc2 = () => {
            store.dispatch(ActionTypes.INC_COUNTER, 3);
        };
        return {
            inc,
            inc2,
            counter,
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
