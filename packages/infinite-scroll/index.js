// 引入组件
import infiniteScroll from './src/infinite-scroll'

const install = Vue => {
    Reflect.ownKeys(infiniteScroll).map(key => Vue.directive(key, infiniteScroll[key]));
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use({ install });
}

export default {
    install
}
