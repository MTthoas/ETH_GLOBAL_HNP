// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Fundraiser {
    // Adresse de l'organisateur
    address public owner;

    // Date de fin de la cagnotte
    uint public endTime;

    // Adresse de l'association
    address payable public beneficiary;

    // Montant total collecté
    uint public totalCollected;

    // Constructeur pour initialiser le contrat
    constructor(uint _duration, address payable _beneficiary) {
        owner = msg.sender;
        endTime = block.timestamp + _duration;
        beneficiary = _beneficiary;
    }

    // Fonction pour faire un don
    function donate() public payable {
        require(block.timestamp < endTime, "La cagnotte n'est plus disponible");
        totalCollected += msg.value;
    }

    // Fonction pour envoyer les fonds à l'association
    function releaseFunds() public {
        require(msg.sender == owner, "Seul l'organisateur peut retirer les fonds");
        require(block.timestamp >= endTime, "La cagnotte n'est pas encore finie");
        beneficiary.transfer(address(this).balance);
    }

    // Fonction pour récupérer le solde de la cagnotte
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
