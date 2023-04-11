import { ethers, upgrades } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const logic1Factory = await ethers.getContractFactory(
    "contracts/Logic1.sol:Logic",
    deployer
  );

  // Deploy Logic1 contract
  const logic1 = await upgrades.deployProxy(logic1Factory);
  await logic1.deployed;
  console.log("logic1 address:", logic1.address);

  // Call myValue function
  await logic1.setNumber(1);
  const myValue1 = await logic1.getNumber();
  console.log("myValue1:", myValue1.toString());

  const logic2Factory = await ethers.getContractFactory(
    "contracts/Logic2.sol:Logic",
    deployer
  );

   // Deploy Logic2 contract
  const logic2 = await upgrades.upgradeProxy(logic1.address, logic2Factory);
  await logic2.deployed;
  console.log("logic2 address:", logic2.address);

  // Call myValue function
  await logic2.setNumber(1);
  const myValue2 = await logic2.getNumber();
  console.log("myValue2:", myValue2.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
