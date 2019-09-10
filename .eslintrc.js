
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        // '@nuxtjs',
        // 'plugin:nuxt/recommended',
        "eslint:recommended",
        "plugin:vue/recommended",
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module",
    },
    /**
     * 添加全局变量，否则no-undef会报错。
     * true表示可重写，false相反。
     */
    "globals": {
        "next": false,
        "wx": false,
        "_hmt": false,
        "_MEIQIA": false,
    },
	/**add your custom rules here
     * 下面这些rules是用来设置从插件来的规范代码的规则，使用必须去掉前缀eslint-plugin-
     * 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    "rules": {
        // console的使用规则
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-console": [0, {
            llow: ["warn", "error"]
        }],
        //缩进风格.默认4，否则会报错
        "indent": [2, 4, {
            SwitchCase: 1 // 针对switch case的缩进
        }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-irregular-whitespace": [1, { "skipComments": true, "skipTemplates": true, "skipRegExps": true }],
        // 强制双引号
        "quotes": ["error", "double"],
        // 语句强制分号结尾
        "semi": ["error", "always"],
        // 分号前后空格。默认选项禁止分号之前有空格，强制分号之后有空格。
        "semi-spacing": [1, {
            before: false,
            after: true
        }],
        // 变量声明后必须使用；参数arg不做限制
        "no-unused-vars": [1, {
            vars: "all",
            args: "none"
        }],
        // 禁止对原生对象或只读的全局对象进行赋值
        "no-native-reassign": 2,
        // 变量声明、数组字面量、对象字面量、函数参数 和 序列中的逗号前不能有空格，后面必须有一个空格
        "comma-spacing": [1, {
            "before": false,
            "after": true
        }],
        // 是否用驼峰风格命名变量：never || always
        "camelcase": ["error", { properties: "never" }],
        // 强制函数括号之前的空格的一致性.
        // 每个选项可以设置为 "always"、"never" 或 "ignore"
        "space-before-function-paren": ["warn", {
            // 针对匿名函数表达式 (比如 function () {})
            "anonymous": "always",
            // 针对命名的函数表达式 (比如 function foo () {})。
            "named": "never",
            // 针对异步的箭头函数表达式(比如 async () => {})
            "asyncArrow": "always"
        }],
        // 该规则禁止在 return、throw、continue 和 break 语句后出现不可达代码。
        "no-unreachable": 1,
        // 消除非故意 case 落空行为
        "no-fallthrough": 1,
        // 在条件语句中，很容易将一个比较运算符（像 ==）错写成赋值运算符（如 =）
        // 所以，该规则禁止在 if、for、while 和 do...while 语句中出现模棱两可的赋值操作符
        "no-cond-assign": [2, "always"],
        // 该规则禁止在正则表达式中出现控制字符。
        "no-control-regex": 0,
        // 强制多行的三目运算符换行
        "multiline-ternary": [1, "always-multiline"],
        // else关键字要与花括号保持在同一行。
        // 'brace-style': 1,
        // 'block-spacing': 1, //单行代码块两边加空格。
        // 'spaced-comment': 1, //注释首尾留空格
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        // 是否禁止在正则表达式中出现控制字符
        "no-control-regex": 0,
        // 指定html各种元素、svg、vue组件自闭和标签的规则
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "never",
                "component": "never"
            },
            "svg": "always",
            "math": "always"
        }],
        // 每一行的属性数量
        "vue/max-attributes-per-line": ["error", {
            // 单行的话，每行属性的数量
            "singleline": 2,
            // 多行的话，每行属性的数量
            "multiline": {
                "max": 1,
                // 第一个属性是否与开始标签在同一行
                "allowFirstLine": false
            }
        }],
        "vue/multiline-html-element-content-newline": ["error", {
            "ignoreWhenEmpty": true,
            "ignores": ["pre", "textarea",],
            "allowEmptyLines": false,
        }],
        // 单行元素内容是否换行
        "vue/singleline-html-element-content-newline": [0, {
            "ignoreWhenEmpty": true,
            "ignores": ["pre", "textarea",],
            "ignoreWhenNoAttributes": true,
        }],
        // 多行元素闭合标签（右括号）换行规则
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        // 单行元素闭合标签（右括号）换行规则
        "vue/html-closing-bracket-spacing": ["error", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "never"
        }],
        // 属性值引号："double" | "single"
        "vue/html-quotes": ["error", "double"],
        // 组件name属性值的格式
        // PascalCase:驼峰 || kebab-case:连接线
        "vue/name-property-casing": ["warn", "PascalCase"],
        // v-bind写法。shorthand：简写 || longform：不缩写
        "vue/v-bind-style": ["error", "shorthand"],
        "vue/v-on-style": ["error", "shorthand"],
        // html元素中属性顺序
        "vue/attributes-order": ["warn", {
            "order": [
                "DEFINITION",
                "LIST_RENDERING",
                "CONDITIONALS",
                "RENDER_MODIFIERS",
                "GLOBAL",
                "UNIQUE",
                "TWO_WAY_BINDING",
                "OTHER_DIRECTIVES",
                "OTHER_ATTR",
                "EVENTS",
                "CONTENT"
            ]
        }],
        // 组件中属性的顺序
        "vue/order-in-components": ["warn", {
            "order": [
                "el",
                "name",
                "parent",
                "functional",
                ["delimiters", "comments"],
                ["components", "directives", "filters"],
                "extends",
                "mixins",
                "inheritAttrs",
                "model",
                ["props", "propsData"],
                "data",
                "computed",
                "watch",
                "LIFECYCLE_HOOKS",
                "methods",
                ["template", "render"],
                "renderError"
            ]
        }],
        // 强制在v-on方法后加括号
        "vue/v-on-function-call": [2, "never"],
        // 报告<template>中的语法错误
        "vue/no-parsing-error": [2, {
            "x-invalid-end-tag": false
        }],
        // 去掉检测无用转义的规则
        "no-useless-escape": [0],
    }
};

