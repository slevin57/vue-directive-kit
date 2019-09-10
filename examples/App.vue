<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1 v-test-directive>{{ msg }}</h1>
        <h2 v-infinite-scroll="obj">h2</h2>
        <div v-img-placeholder="'http://api.dujin.org/bing/1920.php'">
            <img src="http://api.dujin.org/bing/1920.php" alt="" class="src">
        </div>
        <div class="img-lazyload">
            <img v-img-lazyload="'https://resources.laihua.com/2018-10-31/5dedfb80-dcbc-11e8-a1b9-67cb886d5d62.png'" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            obj:{
                loadFn: this.ttt
            }
        }
    },
    methods:{
        ttt(){
            console.log(`1:`,1);
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
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
.img-lazyload{
    padding-top: 1000px;
}
</style>
