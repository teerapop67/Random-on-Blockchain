//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract RandomHaha {
    uint256 private randoms = 0;
    bool private answer = false;
    uint256 private a;
    mapping(address => uint256) reward; 

    constructor() {
        randoms = 1;
        answer = false;
    }

    receive() external payable {}

    fallback() external payable {}


    function viewNum() public view returns (bool, uint256) {
        return (answer, a);
    }

    function RandomNum(uint256 number) external payable {
        require(address(this).balance >= msg.value, "Insufficien money on smart contract");
        require(msg.value > 0, "Insufficient funds to allow transfer");

        a = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,
                                          randoms))) % 10;

        if (number == a) {
            answer = true;
            payable(msg.sender).transfer(msg.value * 2);
        }
        else {
            answer = false;
            payable(address(this)).transfer(msg.value * 2);
        }
    }

    function getBalance() public view  returns (uint256) {
        return address(this).balance;
    } 

}
