// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Logic {
    uint private number;

    function setNumber(uint _number) public {
        number = _number + 2;
    }

    function getNumber() public view returns(uint){
        return number;
    }
}