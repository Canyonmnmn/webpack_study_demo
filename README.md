## 开发环境
学会自动编译代码
追踪错误
## 使用source map
为了更容易地追踪 error 和 warning，JavaScript 提供了 source maps 功能，可以将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。

## 自动编译代码
### 1.webpack watch mode
你可以指示 webpack "watch" 依赖图中所有文件的更改。如果其中一个文件被更新，代码将被重新编译，所以你不必再去手动运行整个构建。

我们添加一个用于启动 webpack watch mode 的 npm scripts：
 "watch": "webpack --watch"

 ### 2.webpack-dev-server（插件）
 webpack-dev-server 为你提供了一个基本的 web server，并且具有 live reloading(实时重新加载) 功能

 修改配置文件，告知 dev server，从什么位置查找文件：
 devServer: {
  static: './dist',
},
**此项配置是因为我们单个HTML页面有多个入口，查看代码分割分支了解更多**
optimization: {
  runtimeChunk: 'single',
},

**注意**
webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 devMiddleware.publicPath 选项进行修改。

### 3.webpack-dev-middleware（中间件）
其实webpack-dev-server也是基于这个中间件实现的