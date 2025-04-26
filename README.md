# TrueVisions - Certifying Charitable Donations with Blockchain Technology

## Overview
TrueVisions is a blockchain-based platform designed to revolutionize charitable donations. It provides a transparent and efficient process where every donation is not only traceable but also certified. Once the liquidity pool is unlocked following donor verification that invoices and quotes comply, TrueVisions ensures that donations are explicitly used for the intended charitable works. This system offers donors, be they individuals or businesses, concrete proof of their contributions.

## Key Technologies
- Blockchain: Ethereum, Hardhat, Ethers.
- Oracles: Chainlink with CCIP for real-time data verification.
- Frontend: ReactJS with Tailwind for styling.
- Backend: NestJS, Node.js for robust API services.
- Storage: IPFS - Lighthouse for decentralized storage of proofs like PDFs and images.
- Wallet Integration: WalletConnect for secure wallet interactions.
- Languages: TypeScript, JavaScript for comprehensive and scalable development.
- Support for Unicef: Directly aiding a globally recognized charitable organization.

## Features
- Certified Transactions: Ensuring donations are used as intended with transparent blockchain recording.
- Donor Verification: Liquidity pool unlocked after donors confirm compliance of invoices and quotes.
- Proof of Donation: Providing tangible evidence for donors.
- Smart Contracts: Automated, secure distribution of funds.
- Data Integrity: Real-time data verification with Chainlink oracles.
- Secure Storage: Decentralized storage for transaction proofs.

## Future Plans
DAO Implementation: A system of decentralized autonomous organization (DAO) for decision-making regarding quotes and invoices

## Getting Started

### Prerequisites
- Docker
- Node.js
- Yarn or npm
- Git

### Setting Up the Backend

1. Clone the backend repository:
```
git clone https://github.com/lyeslimani/ethglobalbackend.git
```

2. Navigate to the cloned directory:
```
cd ethglobalbackend
```

3. Start the services using Docker Compose:
```
docker-compose up -d
```
4. Execute migrations (after ensuring the services are up and running):
```
yarn migration:run
```

Running Hardhat for Blockchain Interactions
Navigate to the Hardhat directory:
```
cd path/to/hardhat
```
Run tests to ensure everything is set up correctly:
```
npx hardhat test
```
Deploy smart contracts:
```
npx hardhat run scripts/deploy.js --network localhost
```
This will generate an ABI in the ./client directory.

## Starting the Frontend Application

Navigate to the ./client directory:
```
cd path/to/client
```
Install dependencies:
```
yarn install
```
Start the React application:
```
yarn start
```

## Additional Resources
Smart Contract Development: Access our smart contracts on Remix for further exploration and testing: Remix Ethereum - TokenTransferor.sol 
> https://remix.ethereum.org/#url=https://docs.chain.link/samples/CCIP/TokenTransferor.sol&lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.19+commit.7dd6d404.js

## Social Impact
TrueVisions is committed to redefining charitable giving, making it more transparent and impactful, and fostering a trustworthy philanthropic environment, with special support for Unicef.

## Summary
TrueVisions leverages cutting-edge blockchain and web technologies to transform the landscape of charitable donations, ensuring transparency, security, and enhanced impact in philanthropy.
