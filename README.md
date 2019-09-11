# vue-directive-kit

![banner](examples/assets/logo.png)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
TODO: Put more badges here.

> A collection of vue directive.

TODO: Fill out this long description.

## Table of Contents

- [vue-directive-kit](#vue-directive-kit)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [imgLazyload](#imglazyload)
    - [imgPlaceholder](#imgplaceholder)
    - [infiniteScroll](#infinitescroll)
  - [API](#api)
  - [Maintainers](#maintainers)
  - [Contributing](#contributing)
  - [License](#license)


## Install
安装
```bash
npm i vue-directive-kit -D
# yarn add vue-directive-kit
```

全局注册
```javascript
import vueDirectiveKit from 'vue-directive-kit';
Vue.use(vueDirectiveKit);
```

## Usage

### imgLazyload

```html
<img v-img-lazyload="imgSrc">
```

### imgPlaceholder

```

```

### infiniteScroll
监听window的滚动事件
```vue
<template>
    <div>
        <div class="wrapper" v-infinite-scroll="loadDataOpt">
            <ul class="list">
                <li class="item"> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            loadDataOpt:{
                loadfn: this.fetchData
            }
        }
    },
    methods:{
        fetchData(){
            console.log(`window滚动触发`);
        }
    }
}
</script>
```

监听指定元素的滚动事件
```vue
<template>
    <div>
        <div class="wrapper" ref='wrapper'>
            <ul class="list"  v-infinite-scroll="loadDataOpt">
                <li class="item"> </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            loadDataOpt:{
                loadfn: this.fetchData,
                ref: 'wrapper'
            }
        }
    },
    methods:{
        fetchData(){
            console.log(`指定元素滚动触发`);
        }
    }
}
</script>
```


## API

## Maintainers

[@guthub handler](https://github.com/guthub handler)

## Contributing

See [the contributing file](contributing.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2019 slevin
