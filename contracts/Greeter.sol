// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeter {
  string private _greeting;
  string private _name;

  constructor(string memory greeting, string memory name) {
    _greeting = greeting;
    _name = name;
  }

  function greet() public view returns (string memory) {
    return string(abi.encodePacked(_greeting, " ", _name));
  }

  function setName(string memory name) public {
    _name = name;
  }
}
