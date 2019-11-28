import Vue from "vue";
import App from "./App.vue";

// 单组件测试
// import pgkName from '../packages/test-directive/index'
// 整体引入
import vueDirectiveKit from "../packages/index";
console.log("vueDirectiveKit:", vueDirectiveKit);
Vue.use(vueDirectiveKit);


new Vue({
    el: "#app",
    render: h => h(App)
});
