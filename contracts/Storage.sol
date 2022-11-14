// SPDX-License-Identifier: MIT
pragma solidity >=0.4.16 <0.9.0;

// Storage is a contract that stores a number
contract SimpleStorage {
    uint storedData;

    // Store a number
    function set(uint x) public {
        storedData = x;
    }

    // Retrieve a number
    function get() public view returns (uint) {
        return storedData;
    }
}