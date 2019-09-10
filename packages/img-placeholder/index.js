

// 引入组件
import imgPlaceholder from "./src/img-placeholder";

const install = Vue => {
    Reflect.ownKeys(imgPlaceholder).map(key => Vue.directive(key, imgPlaceholder[key]));
};

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use({ install });
}

export default {
    install
};
