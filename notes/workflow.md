<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [开发环境](#%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83)
- [本地开发及测试npm包](#%e6%9c%ac%e5%9c%b0%e5%bc%80%e5%8f%91%e5%8f%8a%e6%b5%8b%e8%af%95npm%e5%8c%85)
- [发版](#%e5%8f%91%e7%89%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### 开发环境

> Nodejs 8.12.0+
> npm 5.2+

### 本地开发及测试npm包

切换到develop分支，运行`yarn dev`进行开发。

添加改动到暂存区及提交到本地版本库
```bash
git add .
yarn commit
```
> 因为项目开启了`commitizen`及`commitlint`来规范commitMessage，所以`git commit`被`yarn commit`命令代替，而它实际执行的是`npx git cz`，会调出一个`cz-conventional-chagnelog`提供的commitMessage模板来协助完善commitMessage信息。

如需以npm包的形式进行本地测试
先生成打包文件
```
yarn lib
```

生成本地nmp包，会生成一个以`.tgz`结尾的npm包文件,例如"xxx.tgz"。
```
npm package
```

随便找一个项目，安装这个包进行测试。这里我们就在根目录下通过`vue-cli`初始化一个vue测试包，然后把npm包文件放到测试项目根路径执行安装，同时安装项目依赖。
```bash
vue init webpack-simple test
mv xxx.tgz ./test
cd test
npm i xxx.tgz && npm i
```

在test项目中测试完之后，就可以把它删掉了。


同步到远程仓库
```
git push
```

### 发版

切换到master分支，合并develop
```
git pull
git merge develop
```

如果有改动需要新增到版本库
```
git add . && yarn commit
```

登录npm
```
npm login
# npm adduser
```

发版操作
> 版本号一般为3位：x.x.x,每一位对应的含义分别是major主版本号、monor次版本号、patch修订版本号。
> 所以在打板发布的时候也需要执行不同的命令来进行不同的版本号更新。

如果是日常更新修订版本号，直接通过`yarn release`执行`shelljs`文件即可，这个文件会自动执行从更新版本号、同步代码/tag到发布npm的一系列操作。

而如果是第一个版本或者更新主版本或者次版本号，执行完下面的命令会自动更新版本及同步代码，但需要再手动执行`npm publish`发布到npm。

如果是第一个版本，需要根据当前package.json中的版本初始化tag及changelog：
```bash
yarn release:init
```

更新修订版本号(最常用):
```
yarn release:p
```

更新次版本号:
```
yarn release:n
```

更新主版本号:
```
yarn release:j
```

上面的命令会执行如下操作：
更新`packaeg.json`中版本号；
在当前master分支上打上对应tag；
更新`CHANGELOG.md`；
同步master分支及本地tag到远程仓库；
发布到npm。

