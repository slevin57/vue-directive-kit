export default {
    imgLazyload: {
        bind: (el, binding) => {
            // ====第一种方法：IntersectionObserver交叉观察器======//
            if (window.IntersectionObserver) {
                const observer = new IntersectionObserver((changes) => {
                    for (const change of changes) {
                        let intersectionRatio = change.intersectionRatio;
                        if (intersectionRatio) {
                            el.src = binding.value;
                        } else {
                            console.log("我隐身了:");
                            return;
                        }
                    }
                });
                observer.observe(el);
                return;
            }

            // ====第二种方法：getBoundingClientRect======//
            //attachEvent——兼容：IE7、IE8；不兼容firefox、chrome、IE9、IE10、IE11、safari、opera
            //addEventListener——兼容：firefox、chrome、IE、safari、opera；不兼容IE7、IE8
            if (window.addEventListener) {
                document.addEventListener("scroll", binding.def.watchScroll.bind(null, el, binding));
            } else if (window.attchEvent) {
                document.attachEvent("scroll", binding.def.watchScroll.bind(null, el, binding));
            }
        },
        unbind(el, binding) {
            if (window.IntersectionObserver) {
                const observer = new IntersectionObserver(() => { });
                observer.unobserve(el);
                return;
            }

            if (window.addEventListener) {
                document.removeEventListener("scroll", binding.def.watchScroll);
            } else if (window.attachEvent) {
                window.detachEvent("scroll", binding.def.watchScroll);
            }
        },
        // 监听滚动
        watchScroll(el, binding, evt) {
            // 通过指令的el参数拿到img，判断其是否在视口内
            if (binding.def.isInViewport(el, binding)) {
                el.src = binding.value;
            }
        },
        // 监听滚动后执行的另一种方法，不通过el判断,而是直接获取img的NodeLists
        watchScroll2(el, binding, evt){
            let imgs = document.querySelectorAll("img");
            // imgs并不是纯数组：typeof(imgs)值为object
            // so先采用ES6的Array.from(imgs)转化为纯数组，再用数据的遍历方法forEach
            Array.from(imgs).forEach(img => {
                if (binding.def.isInViewport(img, binding)) {
                    // 这里用data-src替换binding.value,因为后者不能拿到每个img其自身对应的src，而是整个binding.value数组
                    img.src = img.dataset.src;
                }
            });
        },
        // 判断图片是否在视口区域内
        // 可用于lazyload, infinite scroll等常见功能
        isInViewport(el, binding) {
            let rect = el.getBoundingClientRect();
            let viewport = binding.def.getViewport();

            return rect.bottom > 0
                && rect.top < (viewport.height)
                && rect.left < (viewport.width)
                && rect.right > 0;
        },
        // 获取视口大小
        // 当`document.compatMode==BackCompat`时，为`混杂模式`,浏览器客户区宽度是document.body.clientWidth；
        // 当`document.compatMode==CSS1Compat`时，为`标准模式`，浏览器客户区宽度是document.documentElement.clientWidth。
        // `window.innderWidth`与`document.body.clientWidth`相比，只是多了页面滚动条的宽度。
        getViewport() {
            if (document.compatMode == "backCompat") {
                return {
                    width: document.body.clientWidth || window.innerWidth,
                    height: document.body.clientHeight || window.innerHeight,
                };
            } else {
                return {
                    width: document.documentElement.clientWidth || window.innerWidth,
                    height: document.documentElement.clientHeight || window.innerHeight,
                };
            }
        },
    }

};
