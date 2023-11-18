// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BuyMATIC {
    IUniswapV2Router02 private quickswapRouter;

    constructor(address _quickswapRouterAddress) {
        quickswapRouter = IUniswapV2Router02(_quickswapRouterAddress);
    }

    function buyMaticWithToken(address tokenAddress, uint tokenAmount) public {
        address[] memory path = new address[](2);
        path[0] = tokenAddress;
        path[1] = quickswapRouter.WETH(); // WETH est utilisé comme proxy pour MATIC sur QuickSwap

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), tokenAmount);
        IERC20(tokenAddress).approve(address(quickswapRouter), tokenAmount);

        uint deadline = block.timestamp + 300; // 5 minutes de délai
        quickswapRouter.swapExactTokensForETH(
            tokenAmount,
            0, // Accepter n'importe quel montant de MATIC
            path,
            msg.sender,
            deadline
        );
    }
}
