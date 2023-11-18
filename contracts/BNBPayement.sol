// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReceiveBNB {
    // Enregistrer les paiements reçus
    event PaymentReceived(address sender, uint amount);

    // Fonction pour recevoir des BNB
    receive() external payable {
        emit PaymentReceived(msg.sender, msg.value);
    }

    // Retirer les BNB du contrat
    function withdraw(address payable to) public {
        require(address(this).balance > 0, "No BNB to withdraw");
        to.transfer(address(this).balance);
    }
}
