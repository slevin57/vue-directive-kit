// 引入指令文件
import directive1 from './test-directive/src/test-directive'
import infiniteScroll from './infinite-scroll/src/infinite-scroll'
import imgPlaceholder from './img-placeholder/src/img-placeholder'
import imgLazyload from './img-lazyload/src/img-lazyload'

// 存储指令列表
const directives = [
    directive1,
    infiniteScroll,
    imgPlaceholder,
    imgLazyload,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 遍历注册指令
    directives.map(directive => Reflect.ownKeys(directive).map(key => Vue.directive(key, directive[key])))
    // directives.map(directive => Object.entries(directive).forEach(key => Vue.directive(key[0], key[1])))
}


// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}


export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的指令列表
    directive1,
    infiniteScroll,
    imgPlaceholder,
    imgLazyload,
}
