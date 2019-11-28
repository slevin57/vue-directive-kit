// 引入组件
import follower from "./src/follower";

const install = Vue => {
    Reflect.ownKeys(follower).map(key => Vue.directive(key, follower[key]));
};

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use({ install });
}

export default {
    install
};
