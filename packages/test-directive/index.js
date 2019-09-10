// 引入组件
import testDirective from "./src/test-directive";

const install = Vue => {
    Reflect.ownKeys(testDirective).map(key => Vue.directive(key, testDirective[key]));
};

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use({ install })
    var b
}

export default {
    install
};
