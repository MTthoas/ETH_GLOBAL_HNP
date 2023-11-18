const { ethers } = require("hardhat");

async function main() {
    const TokenTransferor = await ethers.getContractFactory("TokenTransferor");

    const tokenTransferor = await TokenTransferor.deploy(
        "0xD0daae2231E9CB96b94C8512223533293C3693Bf",
        "0x779877A7B0D9E8603169DdbD7836e478b4624789"
    );

    await tokenTransferor.deployed();

    console.log("TokenTransferor deployed to:", tokenTransferor.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
