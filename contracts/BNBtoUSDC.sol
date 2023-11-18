// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BNBtoUSDC is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    IUniswapV2Router02 private uniswapRouter;
    address private usdcAddress;
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    int256 public currentBNBPrice;

    event ConversionCompleted(address from, uint bnbAmount, uint usdcAmount);
    event RequestFulfilled(bytes32 indexed requestId, int256 indexed price);

    // Adresse du LINK Token sur BSC (à remplacer par l'adresse correcte)
    address private constant LINK_TOKEN_ADDRESS = 0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD;

    constructor(
        address _uniswapRouterAddress,
        address _usdcAddress,
        address _oracle,
        bytes32 _jobId,
        uint256 _fee
    ) {
        setChainlinkToken(LINK_TOKEN_ADDRESS);
        uniswapRouter = IUniswapV2Router02(_uniswapRouterAddress);
        usdcAddress = _usdcAddress;
        oracle = _oracle;
        jobId = _jobId;
        fee = _fee;
    }

    function convertBNBToUsdc() public payable {
        require(msg.value > 0, "Must send BNB");

        address[] memory path = new address[](2);
        path[0] = uniswapRouter.WETH();
        path[1] = usdcAddress;

        uint deadline = block.timestamp + 300; // 5 minutes de délai
        uniswapRouter.swapExactETHForTokens{value: msg.value}(
            0, 
            path,
            msg.sender,
            deadline
        );

        uint usdcBalance = IERC20(usdcAddress).balanceOf(address(this));
        emit ConversionCompleted(msg.sender, msg.value, usdcBalance);
    }

    function requestBNBPriceData() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        // Ajoutez l'URL et le chemin de l'API pour récupérer le prix du BNB
        // Par exemple: request.add("get", "http://api.example.com/bnbprice");
        // request.add("path", "price");
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    function fulfill(bytes32 _requestId, int256 _price) public recordChainlinkFulfillment(_requestId) {
        emit RequestFulfilled(_requestId, _price);
        currentBNBPrice = _price;
    }

}
