const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenTransferor Contract", function () {
    let TokenTransferor, tokenTransferor;
    let owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        TokenTransferor = await ethers.getContractFactory("TokenTransferor");
        tokenTransferor = await TokenTransferor.deploy(/* params */);
    });

    it("Should deploy the contract correctly", async function () {
        expect(tokenTransferor.address).to.properAddress;
    });


});