import { expect } from "chai";
import { ethers } from "hardhat";

let loot: any;
let owner: any;
let user: any;
const uri = "https://gateway.pinata.cloud/ipfs/Qme2AwawrQoBYbE21UPQtfSkcZ3KYAQMMh6z61paJ4i4bw";

describe("Loot", function () {
  it("Should return the new loot once it's changed", async function () {
    [owner, user] = await ethers.getSigners();

    const Loot = await ethers.getContractFactory("Loot");
    loot = await Loot.deploy();
    await loot.deployed();
    console.log("Loot deployed to:", loot.address);
  });
});

describe("AbstractLoot", function () {
  it("Should return the new abstractloot once it's changed", async function () {
    [owner, user] = await ethers.getSigners();

    const AbstractLoot = await ethers.getContractFactory("AbstractLoot");
    const abstractloot = await AbstractLoot.deploy(loot.address);
    await abstractloot.deployed();

    console.log("AbstractLoot deployed to:", abstractloot.address);
  });
});
