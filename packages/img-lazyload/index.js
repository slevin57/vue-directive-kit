
// 引入组件
import imgLazyload from './src/img-lazyload'

const install = Vue => {
    Reflect.ownKeys(imgLazyload).map(key => Vue.directive(key, imgLazyload[key]));
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use({ install });
}

export default {
    install
}
