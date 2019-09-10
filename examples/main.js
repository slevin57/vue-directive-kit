import Vue from "vue";
import App from "./App.vue";

// 单组件测试
// import pgkName from '../packages/test-directive/index'

// 整体引入
import pgkName from "../packages/index";;
Vue.use(pgkName);


new Vue({
    el: "#app",
    render: h => h(App)
});
