import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const logic1Factory = await ethers.getContractFactory("Logic1:Logic", deployer);

  const logic1 = await logic1Factory.deploy();

  console.log("logic1 address:", logic1.address);

  // const logic2Factory = await ethers.getContractFactory("Logic2:Logic", deployer);

  // const logic2 = await logic2Factory.deploy();

  // console.log("logic2 address:", logic2.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
