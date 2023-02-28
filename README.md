# Typescript
记录学习收获和过程

## typescript 的使用

# 安装typescript
npm install typescript -g
tsc -v 查看安装的版本
tsc ts文件 可转化为js文件

# 初始化tsconfig.json文件
tsc --init 
详见配置 https://www.jianshu.com/p/0383bbd61a6b
outDir 配置文件出口

# vscode 监视 typescript
vscode 上选择 ctrl + shift + B
选择watch

## 学习资料
https://blog.csdn.net/qq_39261142/article/details/108981103


## 采坑记录
启动监听的时候 报 command not found: tsc
解决办法：https://blog.csdn.net/TalesOV/article/details/104435642/


## 实时更新 index.html
browser-sync start --server --files "**/*.css, **/*.html", **/*.js"
