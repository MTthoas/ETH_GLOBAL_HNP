const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("tokenTransferor", function () {
    let tokenTransferor;
    let owner;

    beforeEach(async function () {
        const TokenTransferor = await ethers.getContractFactory("TokenTransferor");

        const mockRouterAddress = "0xD0daae2231E9CB96b94C8512223533293C3693Bf";
        const mockLinkTokenAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789"; 
    
        tokenTransferor = await TokenTransferor.deploy(mockRouterAddress, mockLinkTokenAddress);
        [owner] = await ethers.getSigners();
    });
    
    describe("Deployment", function () {
        it("Should set the right owner", async function () {
        expect(await tokenTransferor.owner()).to.equal(owner.address);
        });
    });


});
