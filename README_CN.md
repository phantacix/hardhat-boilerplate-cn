# Hardhat Boilerplate

该仓库包含一个示例项目，您可以将其用作为您以太坊项目的起点。它也非常适合学习以下智能合约开发的基础知识。

该项目为[Hardhat初学者教程](https://hardhat.org/tutorial)，但你应该能够通过阅读README并探索其
`contracts`, `tests`, `scripts` and `frontend`目录。

## 快速启动

您需要做的第一件事是克隆此仓库并进行安装
依赖关系：

```sh
git clone https://github.com/NomicFoundation/hardhat-boilerplate.git
cd hardhat-boilerplate
npm install
```

安装后，让我们运行Hardhat的测试网络：

```sh
npx hardhat node
```

然后，新开一个终端(Terminal)，在仓库的根目录运行以下命令，部署合约：

```sh
npx hardhat run scripts/deploy.js
或
npx hardhat run scripts/deploy.js --network localhost
```

最后，执行以下命令启动`frontend`项目：

```sh
cd frontend
npm install
npm start
```

打开[http://localhost:3000/](http://localhost:3000/)查看你的Dapp。
你需要安装[Coinbase钱包](https://www.coinbase.com/wallet)或[Metamask钱包](https://metamask.io)，并配置`localhost:8545`地址。

## 用户指南

您可以在[该文档]中找到有关使用此存储库的详细说明和更多提示(https://hardhat.org/tutorial).

- [编写并且编译合约](https://hardhat.org/tutorial/writing-and-compiling-contracts/)
- [配置开发环境](https://hardhat.org/tutorial/setting-up-the-environment/)
- [测试合约](https://hardhat.org/tutorial/testing-contracts/)
- [配置你的钱包](https://hardhat.org/tutorial/boilerplate-project#how-to-use-it)
- [Hardhat的所有文档](https://hardhat.org/docs/)

有关Hardhat的完整介绍，请参考[指南](https://hardhat.org/getting-started/#overview).

## 包含了哪些?

此仓库使用我们推荐的Hardhat设置，推荐使用我们的工具箱[`@nomicfoundation/hardhat-toolbox`](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-toolbox). 当你使用这个插件时，你将能够：

-使用[ethers.js]部署合约并与之交互(https://docs.ethers.io/v5/)以及[`hardhat-ethers`](https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers)插件。

- Test your contracts with [Mocha](https://mochajs.org/), [Chai](https://chaijs.com/) and our own [Hardhat Chai Matchers](https://hardhat.org/hardhat-chai-matchers) plugin.

- 测试您的合约可以使用[Mocha](https://mochajs.org/)，[Chai](https://chaijs.com/)和[Hardhat Chai Matchers](https://hardhat.org/hardhat-chai-matchers)插件。

- 通过我们的[Hardhat Network Helpers](https://hardhat.org/hardhat-network-helpers)与Hardhat Network互动.

- 使用[hardhat etherscan]验证合约的源代码(https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan)插件。

- 通过[hardhat-gas-reporter](https://github.com/cgewecke/hardhat-gas-reporter)获取合约中使用的gas指标插件。

- 使用[solidity-coverage](https://github.com/sc-forks/solidity-coverage)衡量您的代码覆盖率.

该项目还包括[示例 frontend/Dap](./fronted)，它使用[Create React App](https://github.com/facebook/create-react-app).

## 故障排除

- `Invalid nonce` errors: if you are seeing this error on the `npx hardhat node`
  console, try resetting your Metamask account. This will reset the account's
  transaction history and also the nonce. Open Metamask, click on your account
  followed by `Settings > Advanced > Clear activity tab data`.

- `无效随机数`错误：如果您在执行`npx hardhat node`命令时看到控制台的错误，请尝试重置您的Metamask帐户。这将重置帐户的
交易历史以及随机数。打开Metamask，点击您的帐户然后是`设置>高级>清除活动选项卡数据`。

## 设置编辑器

[Hardhat for Visual Studio Code](https://hardhat.org/hardhat-vscode)是Hardhat官方的扩展,为VSCode添加了对Solidity的支持.如果你使用Visual Studio code请进行体验！

## 获取帮助和更新

如果你需要该项目的帮助，请阅读[指南](https://hardhat.org/hardhat-runner/docs/guides/getting-help)了解如果获得帮助.

有关Hardhat的最新消息，[关注我们的推特](https://twitter.com/HardhatHQ)，别忘了给我们的[GitHub仓库]加星(https://github.com/NomicFoundation/hardhat)!


**Happy _building_!**
