const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BNBPayment", function () {
  let BNBPayment;
  let bNBPayment;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    BNBPayment = await ethers.getContractFactory("BNBPayment");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    bNBPayment = await BNBPayment.deploy();
  });

  describe("Receiving BNB", function () {
    it("Should emit PaymentReceived event when receiving BNB", async function () {
      await expect(await owner.sendTransaction({
        to: bNBPayment.address,
        value: ethers.utils.parseEther("1.0"), // Sending 1 BNB
      })).to.emit(bNBPayment, "PaymentReceived").withArgs(owner.address, ethers.utils.parseEther("1.0"));
    });
  });

  describe("Withdrawing BNB", function () {
    it("Should withdraw BNB to specified address", async function () {
      // First, send some BNB to the contract
      await owner.sendTransaction({
        to: bNBPayment.address,
        value: ethers.utils.parseEther("1.0"),
      });

      // Check initial balance of addr1
      const initialBalance = await addr1.getBalance();

      // Withdraw to addr1
      await bNBPayment.withdraw(addr1.address);

      // Check final balance of addr1
      expect(await addr1.getBalance()).to.be.above(initialBalance);
    });

    it("Should fail if there's no BNB to withdraw", async function () {
      await expect(bNBPayment.withdraw(addr1.address)).to.be.revertedWith("No BNB to withdraw");
    });
  });
});
