<p align="center">
  <a href="http://ant.design">
    <img width="520" src="http://git.onemt.com.cn/tongxiang/onemt-loading/raw/develop/static/image/logo.png">
  </a>
</p>

# Multicolumn 双向列表选择组件

## 概述:

Multicolumn 是一套根据公司uap后台系统需求开发出来的双向权限配置的组件，旨在方便快速的配置每个人的权限。
(以下运行方式建立在有前端[react](https://reactjs.org/docs/hello-world.html)开发环境的基础上)

<p>实现功能:</p>
<p>1、双击左侧列表中任何数据，可将其放入右侧列表中，反之右侧数据也可以放到左侧中；</p>
<p>2、点击向右箭头即可实现左侧数据全部加入到右侧，反之一样；</p>
<p>3、如果左侧数据中有部分数据权限不能选的，点击箭头会将这些数据过滤出来；</p>
<p>4、如果列表过多，无法找到对应的权限名，左右两侧都分别有搜索功能，即可搜索找到；</p>

### 前端技术

#### 本地必须要有[node](https://nodejs.org/en/download/)和[git](https://git-scm.com/)环境

- webpack 
- bootstrap + ace
- react
- redux
- babel
- promise
- async +  await

----------------------------

## 项目开始

先将git仓库代码clone到本地，进入当前项目目录，代码如入：

```
git clone http://tongxiang@git.onemt.com.cn/tongxiang/onemt-Multicolumn.git
cd onemt-Multicolumn

```

`预览效果可以直接进入dist文件下运行index.html文件`


先安装编译第三方的依赖包
```
npm install
```
组件js放在`module`文件下，拷贝到项目对应文件中；

##### 引用

```
import Multicolumn from '@module/multicolumn';

<Multicolumn
   data={data}
   size={['50%',700]}
   titName='管理平台'
   defaultValue={defaultData}
   onChange={(val) => { }}
/>

```
##### 参数设置
```
  ** 组件传递属性props
  ------------------------
  ** data [String] 数据
  ** size [num,num]  width,height、支持百分比,默认[500,500]
  ** defaultValue {string}  默认已分配角色
  ** titName {string} 标题
  ** onChange(result) [Function]  回调函数
  -------------------------
  ```
  
##### 目录结构如下：
```
onemt-Multicolumn //项目名
  -- dist  //预编译，自动构建之后会生成的文件，默认初始化是没有当前这个文件
  -- static  //静态资源目录，css,font,image,js
     -- css
     -- font
     -- image
     -- js
        -- index.js  // 初始化js
        -- module  // 基础UI模块目录
        -- tools   // js方法工具库目录
        -- controller  // 开发生成目录（后续的开发者所开发的文件都放在这里面）
           -- action     // action 目录（此项目中暂时没用到）
           -- component  // 对应的模块 目录
           -- dispatch   // dispatch 目录
           -- reducers   // reducers 目录（此项目中暂时没用到）
           -- index.js   // 前端渲染
           -- router.js  // 前端路由
           -- store.js   // store 文件 
  -- .babelr   //babel的校验文件
  -- .eslintrc  //js编写校验配置文件
  -- .gitignore  //过滤文件
  -- java.config.js  //java环境下生成对应的编译文件的配置文件
  -- package.json  //node 安装包文件
  -- README.md   //readme 文件
  -- template.html  //html模板文件
  -- webpack.config.js  //webpack配置文件
  -- config.rb  //scss编译文件
```

