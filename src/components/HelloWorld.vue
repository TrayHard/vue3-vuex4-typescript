<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ status }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AuthActionTypes } from '../store';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    data(): {
        status: string;
    } {
        return {
            status: '',
        };
    },
    mounted() {
        this.checkCredentials();
    },
    methods: {
        checkCredentials() {
            this.$store.dispatch(AuthActionTypes.CHECK_CREDENTIALS, { name: 'John', password: 'Doe' }).then((result) => {
                console.log({result});
                this.status = result;
            }).catch((err) => {
                console.error(err);
            });
        }
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
