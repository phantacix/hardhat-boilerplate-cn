# React Dapp示例

此目录包含一个示例Dapp，用于与您的合约交互，该示例使用React构建.

## 运行Dapp

该项目使用[`create-react-app`](https://create-react-app.dev/),因此大多数
配置文件都由它处理.

要运行它，你只需要在终端中执行`npm start`，然后打开[http://localhost:3000](http://localhost:3000).

要了解有关`create-react-app`的更多信息，您可以阅读[此文档](https://create-react-app.dev/docs/getting-started).

## Dapp的架构

这个Dapp由多个React组件组成，你可以在`src/components`找到.

大多数为表现型组件，没有逻辑，只渲染HTML.

核心功能的实现在`src/components/Dapp.js`中,该示例具有如果连接到用户的钱包，初始化以太坊连接和合约，
从合约中读取状态和发送交易.

你可以将`Dapp`组件作为项目的起点.每个部分都有代码的注释，并指出具体信息，以及哪些可以重复使用。

## 获取帮助和新闻

如果您在这个项目需要帮助，请阅读[本指南](https://hardhat.org/hardhat-runner/docs/guides/getting-help)
了解如何获得帮助.

[关注我们的推特](https://twitter.com/HardhatHQ)获取有关Hardhat的最新消息，别忘了为[我们的GitHub仓库]加星(https://github.com/NomicFoundation/hardhat)!

**Happy _building_!**