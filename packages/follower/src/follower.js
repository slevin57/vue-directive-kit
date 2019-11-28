export default {
    follower:{
        inserted(el, binding) {
            let txt, style;
            if (binding.value) {
                txt = binding.value.txt;
                style = binding.value.style || {};
            }
            let span = document.createElement("span");
            let _style = {
                backgroundColor: "#fff",
                padding: "3px 5px",
                color: "#000",
                borderRadius: "8px",
            };
            el.style = Object.assign(span.style, _style, style);
            span.style.position = "fixed";
            span.style.visibility = "hidden";
            span.innerText = txt || "点击查看详情";

            el.onmousemove = e => {
                if (el.contains(e.target)) {
                    el.appendChild(span);
                    let spanRect = span.getBoundingClientRect();
                    span.style.visibility = "visible";
                    span.style.left = `${e.clientX - (spanRect.width / 2)}px`;
                    span.style.top = `${e.clientY + (spanRect.height / 2)}px`;
                }
            };
            el.onmouseleave = e => {
                span.style.visibility = "hidden";
            };
        },
        unbind(el) {
            el.onmousemove = null;
            el.onmouseleave = null;
        }
    }
};
