// 这是一个示例测试文件. HardHat将运行`test/`目录所有的*.js文件.

// 请自行添加新的测试用例

// Hardhat测试用例通用使用Mocha和Chai编写.

// 在这里导入Chai用它来断言函数
const { expect } = require("chai");

// 使用`loadFixture`在测试时共享一些常用的设置
// 通过利用Hardhat Network的快照功能，可以简化你的测试,并使其运行得更快
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

//`describe`是一个Mocha函数，允许您编写测试用例，使调试更容易。所有Mocha函数在全局范围内可用。
//
//`describe`接收测试用例中的名称和回调函数。此回调不能是异步函数。
describe("Token contract", function () {
  // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.

  // 我们定义了一个deployTokenFixture()，以便每次测试时重用相同的设置。
  // 使用loadFixture运行一次程序，并快照该状态，重置Hardhat在每次测试中都将网络连接到该快照。
  
  async function deployTokenFixture() {
    // Get the ContractFactory and Signers here.
    const Token = await ethers.getContractFactory("Token");
    const [owner, addr1, addr2] = await ethers.getSigners();

    // 要部署合约只需调用Token.deploy()并等待它被部署
    const hardhatToken = await Token.deploy();

    await hardhatToken.deployed();

    // Fixtures can return anything you consider useful for your tests
    return { Token, hardhatToken, owner, addr1, addr2 };
  }

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.
    //
    // If the callback function is async, Mocha will `await` it.
    it("Should set the right owner", async function () {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);

      // Expect receives a value and wraps it in an assertion object. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be
      // equal to our Signer's owner.
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(deployTokenFixture);
      // Transfer 50 tokens from owner to addr1
      // 从 owner转 50token到addr1帐户
      await expect(hardhatToken.transfer(addr1.address, 50))
        .to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
        .to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
    });

    it("should emit Transfer events", async function () {
      const { hardhatToken, owner, addr1, addr2 } = await loadFixture(deployTokenFixture);

      // Transfer 50 tokens from owner to addr1
      await expect(hardhatToken.transfer(addr1.address, 50))
        .to.emit(hardhatToken, "Transfer").withArgs(owner.address, addr1.address, 50)

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50))
        .to.emit(hardhatToken, "Transfer").withArgs(addr1.address, addr2.address, 50)
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      const { hardhatToken, owner, addr1 } = await loadFixture(deployTokenFixture);
      const initialOwnerBalance = await hardhatToken.balanceOf(
        owner.address
      );

      // Try to send 1 token from addr1 (0 tokens) to owner (1000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(
        hardhatToken.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("Not enough tokens");

      // Owner balance shouldn't have changed.
      expect(await hardhatToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
  });
});
