
import dt from "../../utils/utils";
let params = null;
// 简易防抖
function debounce(fn, delay, immediate) {
    let timer = null;
    return function (...args) {
        let ctx = this;
        if (timer) clearTimeout(timer);
        if (immediate) {
            if (!timer) fn.apply(ctx, args);
            timer = setTimeout(() => timer = null, delay);
        } else {
            timer = setTimeout(() => fn.apply(ctx, args), delay);
        }
    };
}

function doCheck(params, evt) {
    let { wrapperEl, el, binding } = params;
    let rect = el.getBoundingClientRect();
    let targetBottom = wrapperEl ? wrapperEl.getBoundingClientRect().bottom : innerHeight;
    if (rect.bottom <= targetBottom) {
        binding.value.loadFn();
    }
}

function doBind(params) {
    let { listenEl, vnode } = params;
    params.scrollHandler = dt.debounce(doCheck, 500, false).bind(null, params);
    // params.scrollHandler = doCheck.bind(null, params);
    // 对监听事件统一做防抖处理
    listenEl.addEventListener("scroll", params.scrollHandler);
    // 组件销毁时移除事件监听
    vnode.context.$on("hook:beforeDestroy", function () {
        listenEl.removeEventListener("scroll", params.scrollHandler);
    });
}


export default {
    inserted(el, binding, vnode) {
        let ref = binding.value.wrapper;
        let wrapperEl = ref ? vnode.context.$refs[ref] : "";
        let listenEl = wrapperEl || window;
        params = {
            el, wrapperEl, listenEl, binding, vnode
        };
        doBind(params);
    },
    unbind(el, binding, vnode) {
        let { listenEl, scrollHandler } = params;
        listenEl.removeEventListener("scroll", scrollHandler);
    },
};
