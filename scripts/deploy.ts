import { ContractFactory } from "ethers";
import { ethers } from "hardhat";

async function main(contract: string) {
  const getContractFactory: ContractFactory = await ethers.getContractFactory(contract);
  const contractInstance = await getContractFactory.deploy();
  await contractInstance.deployed();
  console.log(`${contract} deployed to: ${contractInstance.address}`);
}


main("Storage").catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
