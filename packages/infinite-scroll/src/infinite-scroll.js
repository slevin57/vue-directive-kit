
import dt from "../../utils/utils";
export default {
    /**
     * 滚动加载
     * 用于列表项的包裹元素上，接收一个对象作为参数
     * @loadFn {function} 必选。为数据加载的方法，当**指令绑定的元素底边出现在视窗内**便会触发此方法
     * @ref {string} 可选。指定监听滚动事件的目标对象，需将其`ref`值传入。默认为空，则会监听window的滚动事件
     */
    infiniteScroll: {
        inserted(el, binding, vnode) {
            let ref = binding.value.ref;
            let wrapperEl = ref ? vnode.context.$refs[ref] : "";
            let listenEl = wrapperEl ? wrapperEl : window;
            let params = {
                wrapperEl, el, binding
            };
            // 对监听事件统一做防抖处理
            listenEl.addEventListener("scroll", dt.debounce(binding.def.scrollHandler.bind(null, params), 100));
        },
        unbind(el, binding, vnode) {
            let ref = binding.value.ref;
            let wrapperEl = ref ? vnode.context.$refs[ref] : "";
            let listenEl = wrapperEl ? wrapperEl : window;
            listenEl.removeEventListener("scroll", binding.def.scrollHandler);
        },
        scrollHandler(params, evt) {
            let { wrapperEl, el, binding } = params;
            let rect = el.getBoundingClientRect();
            let targetBottom = wrapperEl ? wrapperEl.getBoundingClientRect().bottom : innerHeight;
            if (rect.bottom <= targetBottom) {
                binding.value.loadFn();
            }
        },
    },
}
