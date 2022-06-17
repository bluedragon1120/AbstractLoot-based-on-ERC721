import { ethers } from "hardhat";

async function main() {
  const Loot = await ethers.getContractFactory("Loot");
  const loot = await Loot.deploy();

  await loot.deployed();

  console.log("AbstractLoot deployed to:", loot.address);

  const AbstractLoot = await ethers.getContractFactory("AbstractLoot");
  const abstractloot = await AbstractLoot.deploy(loot.address);

  await abstractloot.deployed();

  console.log("AbstractLoot deployed to:", abstractloot.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
