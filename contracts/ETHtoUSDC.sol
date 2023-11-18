// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EthToUsdcConverter {
    IUniswapV2Router02 private uniswapRouter;
    address private usdcAddress;

    // Événement pour enregistrer la conversion
    event ConversionCompleted(address from, uint ethAmount, uint usdcAmount);

    constructor(address _uniswapRouterAddress, address _usdcAddress) {
        uniswapRouter = IUniswapV2Router02(_uniswapRouterAddress);
        usdcAddress = _usdcAddress;
    }

    // Fonction pour convertir l'ETH envoyé en USDC
    function convertEthToUsdc() external payable {
        require(msg.value > 0, "Must send ETH to convert");

        // Adresse du WETH, nécessaire pour la conversion sur Uniswap
        address[] memory path = new address[](2);
        path[0] = uniswapRouter.WETH();
        path[1] = usdcAddress;

        // Effectuer la conversion
        uint deadline = block.timestamp + 300; // 5 minutes de délai
        uniswapRouter.swapExactETHForTokens{value: msg.value}(
            0, // Accepter n'importe quel montant de USDC (attention au slippage dans la pratique)
            path,
            address(this),
            deadline
        );

        // Émettre l'événement après la conversion
        uint usdcBalance = IERC20(usdcAddress).balanceOf(address(this));
        emit ConversionCompleted(msg.sender, msg.value, usdcBalance);
    }

    // Permettre le retrait des USDC par le propriétaire du contrat
    function withdrawUsdc(address to, uint amount) external {
        require(IERC20(usdcAddress).balanceOf(address(this)) >= amount, "Not enough USDC");
        IERC20(usdcAddress).transfer(to, amount);
    }
}
