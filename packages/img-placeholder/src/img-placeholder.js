export default {
    imgPlaceholder: {
        inserted(el, binding) {
            // 随机色
            const randomColor = `#${Math.floor(100000 + Math.random() * 900000)}`;

            // ==用图片占位==
            if (Object.prototype.toString.call(binding.value) === "[object Array]"){
                const targetSrc = binding.value[0];
                const placeholderSrc = binding.value[1];

                let img = new Image();
                img.src = targetSrc;

                // 背景图的形式
                if (binding.modifiers.bg){
                    el.style.background = `url(${placeholderSrc}) center/cover no-repeat`;

                    img.onload = function () {
                        el.style.background = `url(${targetSrc}) center/cover no-repeat`;
                    };
                } else { // 图片的形式
                    el.src = placeholderSrc;

                    img.onload = function () {
                        el.src = targetSrc;
                    };
                }
                return;
            }

            // ==用随机色占位==
            el.style.backgroundColor = randomColor;

            let img = new Image();
            img.src = binding.value;

            img.onload = function () {
                // 背景图的形式
                if (binding.modifiers.bg){
                    el.style.background = `url(${binding.value}) center/cover no-repeat`;
                } else { // 图片的形式
                    el.src = binding.value;
                }
            };

        }
    },
};
