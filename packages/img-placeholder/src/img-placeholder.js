export default {
    /** @图片加载占位符
     * 图片加载出来之前，先用随机颜色占位，
     * 等图片完全加载之后，再显示图片
    */
    imgPlaceholder: {
        inserted(el, binding) {
            let color = Math.floor(100000 + Math.random() * 900000);//生成随机6位数
            el.style.backgroundColor = `#${color}`

            //先把图片隐藏掉
            el.childNodes[0].style.display = 'none';
            let img = new Image();
            img.src = binding.value;
            // 等图片加载完成在显示出来，避免出现图片加载过渡显示的那个阶段
            // console.log('图片是否加载完:', img.complete);
            img.onload = () => {
                el.childNodes[0].style.display = 'block';
            }
        }
    },
}
