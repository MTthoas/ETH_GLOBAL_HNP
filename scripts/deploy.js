const { ethers, artifacts } = require("hardhat");
const fs = require('fs');
const path = require('path');

async function main() {
    const TokenTransferor = await ethers.getContractFactory("TokenTransferor");

    const tokenTransferor = await TokenTransferor.deploy(
        "0xD0daae2231E9CB96b94C8512223533293C3693Bf",
        "0x779877A7B0D9E8603169DdbD7836e478b4624789"
    );

    await tokenTransferor.deployed();

    console.log("TokenTransferor deployed to:", tokenTransferor.address);

    const contractArtifact = await artifacts.readArtifact("TokenTransferor");

    const data = {
        Contract: {
            link: "0xD0daae2231E9CB96b94C8512223533293C3693Bf",
            router: "0x779877A7B0D9E8603169DdbD7836e478b4624789",
            abi: contractArtifact.abi,
        }
    };

    fs.writeFileSync(
        path.join('./client/src/contracts/', 'TokenTransferorABI.json'), 
        JSON.stringify(data, null, 2)
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
