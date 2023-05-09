## 管理输出
随着应用程序的扩展，并且开始在文件名中使用hash并输出多个bundle，手动管理index.html就变得困难。

更改代码，我们可以看到webpack生成了print.bundle.js 和 index.bundle.js 文件。但是，如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的入口，会发生什么？会在构建时重新命名生成的 bundle，但是我们的 index.html 文件仍然引用旧的名称。

## 用 HtmlWebpackPlugin 来解决这个问题。

虽然在 dist/ 文件夹我们已经有了 index.html 这个文件，然而 HtmlWebpackPlugin 还是会默认生成它自己的 index.html 文件。也就是说，它会用新生成的 index.html 文件，替换我们的原有文件。