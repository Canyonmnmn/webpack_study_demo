## 代码分离
把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

常见的代码分离方法有三种：
### 1.入口起点：手动的配置
这种方式存在一些隐患：
    1.如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。
    2.这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。
### 2.防止重复：使用 `Entry dependencies` 或者 `SplitChunksPlugin` 去重和分离 chunk。
配置 dependOn option 选项，这样可以在多个 chunk 之间共享模块
### 3.动态导入：通过模块的内联函数调用来分离代码。