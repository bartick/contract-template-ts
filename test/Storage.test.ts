import { ethers } from "hardhat";
import { expect } from "chai";

import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

let accounts;
let contract: SimpleStorage;

beforeEach(async () => {
    accounts = await ethers.getSigners();
    const SimpleStorage = new SimpleStorage__factory(accounts[0]);
    contract = await SimpleStorage.deploy();
    await contract.deployed();
});

describe("Storage", function () {
    it("Should return the new value once it's changed", async function () {
        await contract.set(5);
        expect(await contract.get()).to.equal(5);
    });
});