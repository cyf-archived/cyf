# Deploy

```npm
hexo clean && hexo g && gulp && hexo d
```

## 删除子模块

有时子模块的项目维护地址发生了变化，或者需要替换子模块，就需要删除原有的子模块。

删除子模块较复杂，步骤如下：

- rm -rf 子模块目录 删除子模块目录及源码

- vi .gitmodules 删除项目目录下.gitmodules文件中子模块相关条目

- vi .git/config 删除配置项中子模块相关条目

- rm .git/module/* 删除模块下的子模块目录，每个子模块对应一个目录，注意只删除对应的子模块目录即可

```git
git rm --cached 子模块名称
```
