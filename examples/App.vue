<template>
    <div id="app">
        <div v-img-placeholder.bg="['http://api.dujin.org/bing/1920.php','https://www.baidu.com/favicon.ico']" class="wrapper">
            背景图-图片
        </div>
        <div v-img-placeholder.bg="'http://api.dujin.org/bing/1920.php'" class="wrapper">
            背景图-颜色
        </div>

        <div class="wrapper">
            图片-图片
            <img v-img-placeholder="['http://api.dujin.org/bing/1920.php','https://www.baidu.com/favicon.ico']" alt="">
        </div>
        <div class="wrapper">
            图片-颜色
            <img v-img-placeholder="'http://api.dujin.org/bing/1920.php'" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    directives:{
    },
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<style lang="scss" scoped>
#app{
    display: flex;
}
.wrapper {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
    &>img{
        width: 160px;
        height: 160px;
        display: block;

    }
}
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
</style>
