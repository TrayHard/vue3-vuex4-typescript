<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ counter }}</span>
    <button @click="inc"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    const counter = ref(store.state);
    const inc = () => {
      store.commit('increment');
    };
    return {
      inc,
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
