webpack将动态打包所有依赖（创建所谓的 依赖图(dependency graph)）。这是极好的创举，因为现在每个模块都可以明确表述它自身的依赖，可以避免打包未使用的模块。

除了引入 JavaScript，还可以通过 loader 或内置的 Asset Modules 引入任何其他类型的文件。

模块 loader 可以链式调用。链中的每个 loader 都将对资源进行转换。链会逆序执行。第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推。最后，webpack 期望链中的最后的 loader 返回 JavaScript。

应保证 loader 的先后顺序：'style-loader' 在前，而 'css-loader' 在后。如果不遵守此约定，webpack 可能会抛出错误。

## 加载数据
可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。
JSON文件的支持是内置的。

## 自定义JSON模块parser
通过使用 自定义 parser 替代特定的 webpack loader，可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入。
