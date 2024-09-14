//SPDX-License-Identifier: UNLICENSED

// Solidity文件必须从这个语法开始。
// Solidity编译器将使用它来验证其版本。
pragma solidity ^0.8.9;

// 导入此库是为了能够使用console.log
import "hardhat/console.sol";

// 定义一个名为Token的合约
contract Token {
    // 定义token名称
    string public name = "My Hardhat Token";

    // 定义token标识符
    string public symbol = "MHT";

    // 定义总供应量，使用无符号整数类型
    uint256 public totalSupply = 21000000;

    // 地址类型变量用于存储当前合约的拥有者帐户
    address public owner;

    // 帐户地址/余额，存储每个账户的余额
    mapping(address => uint256) balances;

    // Transfer事件，调用该函数进行用户间转帐
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    /**
     * 构造函数
     */
    constructor() {
        // 初始的“总供应量”被分配给交易方，即部署合约的帐户
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    /**
     * 转帐
     *
     * `external`修饰符使函数可从合约外部调用
     *
     */
    function transfer(address to, uint256 amount) external {
        //检查交易发送方是否有足够的token
        //如果`require`的第一个参数计算结果为`false`，将返回错误提示
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // 使用console.log打印消息
        console.log(
            "Transferring from %s to %s %s tokens",
            msg.sender,
            to,
            amount
        );

        // 从拥有者帐户扣除对应数量的token
        balances[msg.sender] -= amount;
        // 给目标帐户加上对应的数量
        balances[to] += amount;

        // 抛出转帐通知
        emit Transfer(msg.sender, to, amount);
    }

    /**
     * 只读函数，用于查询指定帐户的token余额
     *
     * `view`修饰符表示它不会修改合约的
     **/
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
