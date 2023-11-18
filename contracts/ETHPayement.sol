// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BuyETH {
    // Événement pour enregistrer les paiements reçus
    event PaymentReceived(address from, uint amount, string paymentId);

    // Fonction pour recevoir des paiements en ETH
    function receivePayment(string memory paymentId) external payable {
        require(msg.value > 0, "Payment must be greater than 0");
        emit PaymentReceived(msg.sender, msg.value, paymentId);
    }

    // Fonction pour retirer les ETH stockés dans le contrat
    function withdraw(address payable dest) external {
        require(address(this).balance > 0, "No funds to withdraw");
        dest.transfer(address(this).balance);
    }

    // Fonction pour obtenir le solde du contrat
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}
