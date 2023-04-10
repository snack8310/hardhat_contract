// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ILogic {
    function setNumber(uint _number) external;

    function getNumber() external view returns (uint);
}

contract Proxy {
    ILogic public logic;

    function setLogicAddress(address _logicAddress) public {
        logic = ILogic(_logicAddress);
    }

    function getLogicAddress() public view returns (address) {
        return address(logic);
    }

    function setNumber(uint _number) public {
        logic.setNumber(_number);
    }

    function getNumber() public view returns(uint){
        return logic.getNumber();
    }
}
