// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract ManualToken {
    uint256 initialSuppy;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    function transfer(address from, address to, uint256 amount) public {
        balanceOf[from] = balanceOf[from] - amount;
        balanceOf[to] = balanceOf[to] + amount;
    }
    //constructor() {}
}
