const shell = require("shelljs");

if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git");
    shell.exit(1);
}

// // 打包
// shell.exec('npm run lib');
// 更新版本号及changlog
shell.exec("npx standard-version --release-as patch");
// 同步修改及tag到远程仓库
shell.exec("git push --follow-tags");
// 发布npm
shell.exec("npm publish");


