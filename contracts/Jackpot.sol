// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Jackpot {
    // Structure pour représenter un sous-compte
    struct SubAccount {
        address accountAddress;
    }

    // Tableau pour stocker les sous-comptes
    SubAccount[] public subAccounts;

    // Fonction pour créer un nouveau sous-compte
    function createSubAccount() public returns (address) {
        // Créer un nouveau smart contract minimaliste (sous-compte)
        address newSubAccount = address(new MinimalWallet());
        subAccounts.push(SubAccount(newSubAccount));
        return newSubAccount;
    }

    // Récupérer le nombre de sous-comptes
    function getSubAccountsCount() public view returns (uint) {
        return subAccounts.length;
    }
}

// Contrat minimaliste pour représenter un sous-compte
contract MinimalWallet {
    // Fonction pour recevoir des fonds (payable)
    receive() external payable {}

    // Fonction pour vérifier le solde du sous-compte
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
