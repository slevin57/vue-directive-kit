export default {
    testDirective: {
        bind: () => {
            console.log("1:", 1);
        },
        inserted: (el, binding) => {
            console.log("el:", el);
        },
    }
};
