// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ConvertMaticToUsdc is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    IUniswapV2Router02 private uniswapRouter;
    address private usdcAddress;
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    int256 public currentPrice;

    // Événements
    event ConversionCompleted(address from, uint maticAmount, uint usdcAmount);
    event RequestFulfilled(bytes32 indexed requestId, int256 indexed price);

    // Adresse du LINK Token sur Sepolia 
    address private constant LINK_TOKEN_ADDRESS = 0x779877A7B0D9E8603169DdbD7836e478b4624789;

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

    function convertMaticToUsdc() external payable {
        require(msg.value > 0, "Must send MATIC to convert");

        address[] memory path = new address[](2);
        path[0] = uniswapRouter.WETH();
        path[1] = usdcAddress;

        uint deadline = block.timestamp + 300; // 5 minutes de délai
        uniswapRouter.swapExactETHForTokens{value: msg.value}(
            0, 
            path,
            address(this),
            deadline
        );

        uint usdcBalance = IERC20(usdcAddress).balanceOf(address(this));
        emit ConversionCompleted(msg.sender, msg.value, usdcBalance);
    }

    function requestPriceData() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        // Exemple: Utilisation de l'API CryptoCompare pour obtenir le prix du MATIC
        request.add("get", "https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD");

        // Spécifier le chemin pour obtenir le prix spécifique du MATIC en USD
        request.add("path", "USD");
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    function fulfill(bytes32 _requestId, int256 _price) public recordChainlinkFulfillment(_requestId) {
        emit RequestFulfilled(_requestId, _price);
        currentPrice = _price;
    }

    function withdrawUsdc(address to, uint amount) external {
        require(IERC20(usdcAddress).balanceOf(address(this)) >= amount, "Not enough USDC");
        IERC20(usdcAddress).transfer(to, amount);
    }
}
