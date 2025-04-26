import {
  getAction,
  getContractError,
  getEnsAddress,
  getEnsAvatar,
  getEnsName,
  getEnsResolver,
  getEnsText,
  readContract
} from "./chunk-LWDAL6LW.js";
import {
  AbiConstructorNotFoundError,
  AbiConstructorParamsNotFoundError,
  AbiDecodingDataSizeTooSmallError,
  AbiDecodingZeroDataError,
  AbiEventNotFoundError,
  AbiEventSignatureEmptyTopicsError,
  AbiEventSignatureNotFoundError,
  BaseError,
  BytesSizeMismatchError,
  CallExecutionError,
  ChainDisconnectedError,
  ChainMismatchError,
  ChainNotFoundError,
  DecodeLogDataMismatch,
  DecodeLogTopicsMismatch,
  FeeCapTooHighError,
  HttpRequestError,
  InternalRpcError,
  InvalidAddressError,
  InvalidChainIdError,
  InvalidInputRpcError,
  InvalidLegacyVError,
  InvalidParamsRpcError,
  InvalidRequestRpcError,
  InvalidSerializableTransactionError,
  InvalidStorageKeySizeError,
  JsonRpcVersionUnsupportedError,
  LimitExceededRpcError,
  MethodNotFoundRpcError,
  MethodNotSupportedRpcError,
  ParseRpcError,
  ProviderDisconnectedError,
  RawContractError,
  ResourceNotFoundRpcError,
  ResourceUnavailableRpcError,
  RpcRequestError,
  SwitchChainError,
  TimeoutError,
  TipAboveFeeCapError,
  TransactionExecutionError,
  TransactionNotFoundError,
  TransactionReceiptNotFoundError,
  TransactionRejectedRpcError,
  UnauthorizedProviderError,
  UnknownNodeError,
  UnknownRpcError,
  UnsupportedProviderMethodError,
  UserRejectedRequestError,
  WaitForTransactionReceiptTimeoutError,
  WebSocketRequestError,
  assertRequest,
  bytesToHex,
  call,
  checksumAddress,
  concat,
  concatHex,
  createBatchScheduler,
  decodeAbiParameters,
  decodeFunctionResult,
  defineFormatter,
  defineTransactionRequest,
  encodeAbiParameters,
  encodeFunctionData,
  extract,
  formatAbiItem,
  formatEther,
  formatGwei,
  formatTransactionRequest,
  getAbiItem,
  getAddress,
  getChainContractAddress,
  getEventSelector,
  getNodeError,
  gweiUnits,
  hexToBigInt,
  hexToBytes,
  hexToNumber,
  isAddress,
  isHex,
  keccak256,
  multicall3Abi,
  numberToHex,
  parseAccount,
  prettyPrint,
  size,
  stringToBytes,
  stringToHex,
  stringify,
  toBytes,
  toHex,
  trim,
  universalSignatureValidatorAbi
} from "./chunk-KPTOZPA2.js";
import {
  equalBytes
} from "./chunk-XVXS55ZV.js";

// node_modules/viem/_esm/utils/chain/defineChain.js
function defineChain(chain, config = {}) {
  const { fees = chain.fees, formatters = chain.formatters, serializers = chain.serializers } = config;
  return {
    ...chain,
    fees,
    formatters,
    serializers
  };
}

// node_modules/viem/_esm/chains/definitions/arbitrum.js
var arbitrum = defineChain({
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-mainnet.infura.io/v3"],
      webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://arb1.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://arbiscan.io" },
    default: { name: "Arbiscan", url: "https://arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707
    }
  }
});

// node_modules/viem/_esm/chains/definitions/arbitrumGoerli.js
var arbitrumGoerli = defineChain({
  id: 421613,
  name: "Arbitrum Goerli",
  network: "arbitrum-goerli",
  nativeCurrency: {
    name: "Arbitrum Goerli Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://arb-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://arbitrum-goerli.infura.io/v3"],
      webSocket: ["wss://arbitrum-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://goerli.arbiscan.io" },
    default: { name: "Arbiscan", url: "https://goerli.arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 88114
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/arbitrumNova.js
var arbitrumNova = defineChain({
  id: 42170,
  name: "Arbitrum Nova",
  network: "arbitrum-nova",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    blast: {
      http: ["https://arbitrum-nova.public.blastapi.io"],
      webSocket: ["wss://arbitrum-nova.public.blastapi.io"]
    },
    default: {
      http: ["https://nova.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://nova.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://nova.arbiscan.io" },
    blockScout: {
      name: "BlockScout",
      url: "https://nova-explorer.arbitrum.io/"
    },
    default: { name: "Arbiscan", url: "https://nova.arbiscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1746963
    }
  }
});

// node_modules/viem/_esm/chains/definitions/astar.js
var astar = defineChain({
  id: 592,
  name: "Astar",
  network: "astar-mainnet",
  nativeCurrency: {
    name: "Astar",
    symbol: "ASTR",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://astar.api.onfinality.io/public"] },
    default: { http: ["https://astar.api.onfinality.io/public"] }
  },
  blockExplorers: {
    default: { name: "Astar Subscan", url: "https://astar.subscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 761794
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/arbitrumSepolia.js
var arbitrumSepolia = defineChain({
  id: 421614,
  name: "Arbitrum Sepolia",
  network: "arbitrum-sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    },
    public: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-explorer.arbitrum.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 81930
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/astarZkatana.js
var astarZkatana = defineChain({
  id: 1261120,
  name: "Astar zkEVM Testnet zKatana",
  network: "zKatana",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://rpc.zkatana.gelato.digital",
        "https://rpc.startale.com/zkatana"
      ]
    },
    public: {
      http: [
        "https://rpc.zkatana.gelato.digital",
        "https://rpc.startale.com/zkatana"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout zKatana chain explorer",
      url: "https://zkatana.blockscout.com"
    },
    default: {
      name: "zKatana Explorer",
      url: "https://zkatana.explorer.startale.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 31317
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/aurora.js
var aurora = defineChain({
  id: 1313161554,
  name: "Aurora",
  network: "aurora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    infura: { http: ["https://aurora-mainnet.infura.io/v3"] },
    default: { http: ["https://mainnet.aurora.dev"] },
    public: { http: ["https://mainnet.aurora.dev"] }
  },
  blockExplorers: {
    etherscan: { name: "Aurorascan", url: "https://aurorascan.dev" },
    default: { name: "Aurorascan", url: "https://aurorascan.dev" }
  }
});

// node_modules/viem/_esm/chains/definitions/auroraTestnet.js
var auroraTestnet = defineChain({
  id: 1313161555,
  name: "Aurora Testnet",
  network: "aurora-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    infura: { http: ["https://aurora-testnet.infura.io/v3"] },
    default: { http: ["https://testnet.aurora.dev"] },
    public: { http: ["https://testnet.aurora.dev"] }
  },
  blockExplorers: {
    etherscan: { name: "Aurorascan", url: "https://testnet.aurorascan.dev" },
    default: { name: "Aurorascan", url: "https://testnet.aurorascan.dev" }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/avalanche.js
var avalanche = defineChain({
  id: 43114,
  name: "Avalanche",
  network: "avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
    default: { name: "SnowTrace", url: "https://snowtrace.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934
    }
  }
});

// node_modules/viem/_esm/chains/definitions/avalancheFuji.js
var avalancheFuji = defineChain({
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX"
  },
  rpcUrls: {
    default: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] },
    public: { http: ["https://api.avax-test.network/ext/bc/C/rpc"] }
  },
  blockExplorers: {
    etherscan: { name: "SnowTrace", url: "https://testnet.snowtrace.io" },
    default: { name: "SnowTrace", url: "https://testnet.snowtrace.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959
    }
  },
  testnet: true
});

// node_modules/viem/_esm/utils/formatters/transaction.js
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559"
};
function formatTransaction(transaction) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  return transaction_;
}
var defineTransaction = defineFormatter("transaction", formatTransaction);

// node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block) {
  var _a;
  const transactions = (_a = block.transactions) == null ? void 0 : _a.map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = defineFormatter("block", formatBlock);

// node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var statuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt) {
  return {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? statuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
}
var defineTransactionReceipt = defineFormatter("transactionReceipt", formatTransactionReceipt);

// node_modules/viem/_esm/chains/optimism/formatters.js
var formattersOptimism = {
  block: defineBlock({
    format(args) {
      var _a;
      const transactions = (_a = args.transactions) == null ? void 0 : _a.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formatTransaction(transaction);
        if (formatted.typeHex === "0x7e") {
          formatted.isSystemTx = transaction.isSystemTx;
          formatted.mint = transaction.mint ? hexToBigInt(transaction.mint) : void 0;
          formatted.sourceHash = transaction.sourceHash;
          formatted.type = "deposit";
        }
        return formatted;
      });
      return {
        transactions,
        stateRoot: args.stateRoot
      };
    }
  }),
  transaction: defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x7e") {
        transaction.isSystemTx = args.isSystemTx;
        transaction.mint = args.mint ? hexToBigInt(args.mint) : void 0;
        transaction.sourceHash = args.sourceHash;
        transaction.type = "deposit";
      }
      return transaction;
    }
  }),
  transactionReceipt: defineTransactionReceipt({
    format(args) {
      return {
        l1GasPrice: args.l1GasPrice ? hexToBigInt(args.l1GasPrice) : null,
        l1GasUsed: args.l1GasUsed ? hexToBigInt(args.l1GasUsed) : null,
        l1Fee: args.l1Fee ? hexToBigInt(args.l1Fee) : null,
        l1FeeScalar: args.l1FeeScalar ? Number(args.l1FeeScalar) : null
      };
    }
  })
};

// node_modules/viem/_esm/chains/definitions/base.js
var base = defineChain({
  id: 8453,
  network: "base",
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://base-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://base-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://base-mainnet.infura.io/v3"],
      webSocket: ["wss://base-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://mainnet.base.org"]
    },
    public: {
      http: ["https://mainnet.base.org"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Basescout",
      url: "https://base.blockscout.com"
    },
    default: {
      name: "Basescan",
      url: "https://basescan.org"
    },
    etherscan: {
      name: "Basescan",
      url: "https://basescan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 5022
    }
  }
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/baseGoerli.js
var baseGoerli = defineChain({
  id: 84531,
  network: "base-goerli",
  name: "Base Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://base-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://base-goerli.g.alchemy.com/v2"]
    },
    default: {
      http: ["https://goerli.base.org"]
    },
    public: {
      http: ["https://goerli.base.org"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Basescan",
      url: "https://goerli.basescan.org"
    },
    default: {
      name: "Basescan",
      url: "https://goerli.basescan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1376988
    }
  },
  testnet: true,
  sourceId: 5
  // goerli
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/baseSepolia.js
var baseSepolia = defineChain({
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"]
    },
    public: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://base-sepolia.blockscout.com"
    },
    default: {
      name: "Blockscout",
      url: "https://base-sepolia.blockscout.com"
    }
  },
  testnet: true,
  sourceId: 11155111
  // sepolia
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/bearNetworkChainMainnet.js
var bearNetworkChainMainnet = defineChain({
  id: 641230,
  name: "Bear Network Chain Mainnet",
  network: "BearNetworkChainMainnet",
  nativeCurrency: {
    decimals: 18,
    name: "BearNetworkChain",
    symbol: "BRNKC"
  },
  rpcUrls: {
    public: { http: ["https://brnkc-mainnet.bearnetwork.net"] },
    default: { http: ["https://brnkc-mainnet.bearnetwork.net"] }
  },
  blockExplorers: {
    default: { name: "BrnkScan", url: "https://brnkscan.bearnetwork.net" }
  }
});

// node_modules/viem/_esm/chains/definitions/bearNetworkChainTestnet.js
var bearNetworkChainTestnet = defineChain({
  id: 751230,
  name: "Bear Network Chain Testnet",
  network: "BearNetworkChainTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBRNKC",
    symbol: "tBRNKC"
  },
  rpcUrls: {
    public: { http: ["https://brnkc-test.bearnetwork.net"] },
    default: { http: ["https://brnkc-test.bearnetwork.net"] }
  },
  blockExplorers: {
    default: {
      name: "BrnkTestScan",
      url: "https://brnktest-scan.bearnetwork.net"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/boba.js
var boba = defineChain({
  id: 288,
  name: "Boba Network",
  network: "boba",
  nativeCurrency: {
    decimals: 18,
    name: "Boba",
    symbol: "BOBA"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.boba.network"] },
    public: { http: ["https://mainnet.boba.network"] }
  },
  blockExplorers: {
    etherscan: { name: "BOBAScan", url: "https://bobascan.com" },
    default: { name: "BOBAScan", url: "https://bobascan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 446859
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bronos.js
var bronos = defineChain({
  id: 1039,
  name: "Bronos",
  network: "bronos",
  nativeCurrency: {
    decimals: 18,
    name: "BRO",
    symbol: "BRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.bronos.org"] },
    public: { http: ["https://evm.bronos.org"] }
  },
  blockExplorers: {
    default: { name: "BronoScan", url: "https://broscan.bronos.org" }
  }
});

// node_modules/viem/_esm/chains/definitions/bronosTestnet.js
var bronosTestnet = defineChain({
  id: 1038,
  name: "Bronos Testnet",
  network: "bronos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Bronos Coin",
    symbol: "tBRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-testnet.bronos.org"] },
    public: { http: ["https://evm-testnet.bronos.org"] }
  },
  blockExplorers: {
    default: { name: "BronoScan", url: "https://tbroscan.bronos.org" }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/bsc.js
var bsc = defineChain({
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/bsc"] },
    public: { http: ["https://rpc.ankr.com/bsc"] }
  },
  blockExplorers: {
    etherscan: { name: "BscScan", url: "https://bscscan.com" },
    default: { name: "BscScan", url: "https://bscscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15921452
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bscTestnet.js
var bscTestnet = defineChain({
  id: 97,
  name: "Binance Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    default: { http: ["https://data-seed-prebsc-1-s1.binance.org:8545"] },
    public: { http: ["https://data-seed-prebsc-1-s1.binance.org:8545"] }
  },
  blockExplorers: {
    etherscan: { name: "BscScan", url: "https://testnet.bscscan.com" },
    default: { name: "BscScan", url: "https://testnet.bscscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/bxn.js
var bxn = defineChain({
  id: 4999,
  name: "BlackFort Exchange Network",
  network: "bxn",
  nativeCurrency: { name: "BlackFort Token", symbol: "BXN", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.blackfort.network/rpc"]
    },
    public: {
      http: ["https://mainnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.blackfort.network"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/bxnTestnet.js
var bxnTestnet = defineChain({
  id: 4777,
  name: "BlackFort Exchange Network Testnet",
  network: "bxnTestnet",
  nativeCurrency: {
    name: "BlackFort Testnet Token",
    symbol: "TBXN",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.blackfort.network/rpc"]
    },
    public: {
      http: ["https://testnet.blackfort.network/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet-explorer.blackfort.network"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/canto.js
var canto = defineChain({
  id: 7700,
  name: "Canto",
  network: "canto",
  nativeCurrency: {
    decimals: 18,
    name: "Canto",
    symbol: "CANTO"
  },
  rpcUrls: {
    default: { http: ["https://canto.gravitychain.io"] },
    public: { http: ["https://canto.gravitychain.io"] }
  },
  blockExplorers: {
    default: {
      name: "Tuber.Build (Blockscout)",
      url: "https://tuber.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2905789
    }
  }
});

// node_modules/viem/_esm/chains/celo/utils.js
function isEmpty(value) {
  return value === 0 || value === 0n || value === void 0 || value === null || value === "0" || value === "" || typeof value === "string" && (trim(value).toLowerCase() === "0x" || trim(value).toLowerCase() === "0x00");
}
function isPresent(value) {
  return !isEmpty(value);
}
function isEIP1559(transaction) {
  return isPresent(transaction.maxFeePerGas) && isPresent(transaction.maxPriorityFeePerGas);
}
function isCIP42(transaction) {
  if (transaction.type)
    return transaction.type === "cip42";
  return isEIP1559(transaction) && (isPresent(transaction.feeCurrency) || isPresent(transaction.gatewayFeeRecipient) || isPresent(transaction.gatewayFee));
}
function isCIP64(transaction) {
  if (transaction.type)
    return transaction.type === "cip64";
  return isEIP1559(transaction) && isPresent(transaction.feeCurrency) && isEmpty(transaction.gatewayFee) && isEmpty(transaction.gatewayFeeRecipient);
}

// node_modules/viem/_esm/chains/celo/formatters.js
var formattersCelo = {
  block: defineBlock({
    exclude: ["difficulty", "gasLimit", "mixHash", "nonce", "uncles"],
    format(args) {
      var _a;
      const transactions = (_a = args.transactions) == null ? void 0 : _a.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        return {
          ...formatTransaction(transaction),
          feeCurrency: transaction.feeCurrency,
          ...transaction.type !== "0x7b" ? {
            gatewayFee: transaction.gatewayFee ? hexToBigInt(transaction.gatewayFee) : null,
            gatewayFeeRecipient: transaction.gatewayFeeRecipient || null
          } : {}
        };
      });
      return {
        randomness: args.randomness,
        transactions
      };
    }
  }),
  transaction: defineTransaction({
    format(args) {
      const transaction = { feeCurrency: args.feeCurrency };
      if (args.type === "0x7b")
        transaction.type = "cip64";
      else {
        if (args.type === "0x7c")
          transaction.type = "cip42";
        transaction.gatewayFee = args.gatewayFee ? hexToBigInt(args.gatewayFee) : null;
        transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
      }
      return transaction;
    }
  }),
  transactionReceipt: defineTransactionReceipt({
    format(args) {
      return {
        feeCurrency: args.feeCurrency,
        gatewayFee: args.gatewayFee ? hexToBigInt(args.gatewayFee) : null,
        gatewayFeeRecipient: args.gatewayFeeRecipient
      };
    }
  }),
  transactionRequest: defineTransactionRequest({
    format(args) {
      const request = {
        feeCurrency: args.feeCurrency
      };
      if (isCIP64(args))
        request.type = "0x7b";
      else {
        if (isCIP42(args))
          request.type = "0x7c";
        request.gatewayFee = typeof args.gatewayFee !== "undefined" ? numberToHex(args.gatewayFee) : void 0;
        request.gatewayFeeRecipient = args.gatewayFeeRecipient;
      }
      return request;
    }
  })
};

// node_modules/viem/_esm/errors/log.js
var FilterTypeNotSupportedError = class extends BaseError {
  constructor(type) {
    super(`Filter type "${type}" is not supported.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "FilterTypeNotSupportedError"
    });
  }
};

// node_modules/viem/_esm/utils/abi/encodeEventTopics.js
function encodeEventTopics({ abi, eventName, args }) {
  var _a;
  let abiItem = abi[0];
  if (eventName) {
    abiItem = getAbiItem({
      abi,
      args,
      name: eventName
    });
    if (!abiItem)
      throw new AbiEventNotFoundError(eventName, {
        docsPath: "/docs/contract/encodeEventTopics"
      });
  }
  if (abiItem.type !== "event")
    throw new AbiEventNotFoundError(void 0, {
      docsPath: "/docs/contract/encodeEventTopics"
    });
  const definition = formatAbiItem(abiItem);
  const signature = getEventSelector(definition);
  let topics = [];
  if (args && "inputs" in abiItem) {
    const indexedInputs = (_a = abiItem.inputs) == null ? void 0 : _a.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? (indexedInputs == null ? void 0 : indexedInputs.map((x) => args[x.name])) ?? [] : [];
    if (args_.length > 0) {
      topics = (indexedInputs == null ? void 0 : indexedInputs.map((param, i) => Array.isArray(args_[i]) ? args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] })) : args_[i] ? encodeArg({ param, value: args_[i] }) : null)) ?? [];
    }
  }
  return [signature, ...topics];
}
function encodeArg({ param, value }) {
  if (param.type === "string" || param.type === "bytes")
    return keccak256(toBytes(value));
  if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    throw new FilterTypeNotSupportedError(param.type);
  return encodeAbiParameters([param], [value]);
}

// node_modules/viem/_esm/utils/filters/createFilterRequestScope.js
function createFilterRequestScope(client, { method }) {
  var _a, _b;
  const requestMap = {};
  if (client.transport.type === "fallback")
    (_b = (_a = client.transport).onResponse) == null ? void 0 : _b.call(_a, ({ method: method_, response: id2, status, transport }) => {
      if (status === "success" && method === method_)
        requestMap[id2] = transport.request;
    });
  return (id2) => requestMap[id2] || client.request;
}

// node_modules/viem/_esm/actions/public/createContractEventFilter.js
async function createContractEventFilter(client, { address, abi, args, eventName, fromBlock, strict, toBlock }) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  const topics = eventName ? encodeEventTopics({
    abi,
    args,
    eventName
  }) : void 0;
  const id2 = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        topics
      }
    ]
  });
  return {
    abi,
    args,
    eventName,
    id: id2,
    request: getRequest(id2),
    strict,
    type: "event"
  };
}

// node_modules/viem/_esm/errors/account.js
var AccountNotFoundError = class extends BaseError {
  constructor({ docsPath: docsPath3 } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."
    ].join("\n"), {
      docsPath: docsPath3,
      docsSlug: "account"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AccountNotFoundError"
    });
  }
};

// node_modules/viem/_esm/errors/estimateGas.js
var EstimateGasExecutionError = class extends BaseError {
  constructor(cause, { account, docsPath: docsPath3, chain, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
    var _a;
    const prettyArgs = prettyPrint({
      from: account == null ? void 0 : account.address,
      to,
      value: typeof value !== "undefined" && `${formatEther(value)} ${((_a = chain == null ? void 0 : chain.nativeCurrency) == null ? void 0 : _a.symbol) || "ETH"}`,
      data,
      gas,
      gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
      maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
      maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
      nonce
    });
    super(cause.shortMessage, {
      cause,
      docsPath: docsPath3,
      metaMessages: [
        ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        prettyArgs
      ].filter(Boolean)
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "EstimateGasExecutionError"
    });
    this.cause = cause;
  }
};

// node_modules/viem/_esm/utils/errors/getEstimateGasError.js
function getEstimateGasError(err, { docsPath: docsPath3, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new EstimateGasExecutionError(cause, {
    docsPath: docsPath3,
    ...args
  });
}

// node_modules/viem/_esm/errors/fee.js
var BaseFeeScalarError = class extends BaseError {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BaseFeeScalarError"
    });
  }
};
var Eip1559FeesNotSupportedError = class extends BaseError {
  constructor() {
    super("Chain does not support EIP-1559 fees.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Eip1559FeesNotSupportedError"
    });
  }
};
var MaxFeePerGasTooLowError = class extends BaseError {
  constructor({ maxPriorityFeePerGas }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${formatGwei(maxPriorityFeePerGas)} gwei).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "MaxFeePerGasTooLowError"
    });
  }
};

// node_modules/viem/_esm/errors/block.js
var BlockNotFoundError = class extends BaseError {
  constructor({ blockHash, blockNumber }) {
    let identifier = "Block";
    if (blockHash)
      identifier = `Block at hash "${blockHash}"`;
    if (blockNumber)
      identifier = `Block at number "${blockNumber}"`;
    super(`${identifier} could not be found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "BlockNotFoundError"
    });
  }
};

// node_modules/viem/_esm/actions/public/getBlock.js
async function getBlock(client, { blockHash, blockNumber, blockTag: blockTag_, includeTransactions: includeTransactions_ } = {}) {
  var _a, _b, _c;
  const blockTag = blockTag_ ?? "latest";
  const includeTransactions = includeTransactions_ ?? false;
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let block = null;
  if (blockHash) {
    block = await client.request({
      method: "eth_getBlockByHash",
      params: [blockHash, includeTransactions]
    });
  } else {
    block = await client.request({
      method: "eth_getBlockByNumber",
      params: [blockNumberHex || blockTag, includeTransactions]
    });
  }
  if (!block)
    throw new BlockNotFoundError({ blockHash, blockNumber });
  const format = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.block) == null ? void 0 : _c.format) || formatBlock;
  return format(block);
}

// node_modules/viem/_esm/actions/public/getGasPrice.js
async function getGasPrice(client) {
  const gasPrice = await client.request({
    method: "eth_gasPrice"
  });
  return BigInt(gasPrice);
}

// node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
async function estimateMaxPriorityFeePerGas(client, args) {
  return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
  var _a, _b, _c;
  const { block: block_, chain = client.chain, request } = args || {};
  if (typeof ((_a = chain == null ? void 0 : chain.fees) == null ? void 0 : _a.defaultPriorityFee) === "function") {
    const block = block_ || await getAction(client, getBlock, "getBlock")({});
    return chain.fees.defaultPriorityFee({
      block,
      client,
      request
    });
  } else if (typeof ((_b = chain == null ? void 0 : chain.fees) == null ? void 0 : _b.defaultPriorityFee) !== "undefined")
    return (_c = chain == null ? void 0 : chain.fees) == null ? void 0 : _c.defaultPriorityFee;
  try {
    const maxPriorityFeePerGasHex = await client.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return hexToBigInt(maxPriorityFeePerGasHex);
  } catch {
    const [block, gasPrice] = await Promise.all([
      block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}),
      getAction(client, getGasPrice, "getGasPrice")({})
    ]);
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
    if (maxPriorityFeePerGas < 0n)
      return 0n;
    return maxPriorityFeePerGas;
  }
}

// node_modules/viem/_esm/actions/public/estimateFeesPerGas.js
async function estimateFeesPerGas(client, args) {
  return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
  var _a, _b;
  const { block: block_, chain = client.chain, request, type = "eip1559" } = args || {};
  const baseFeeMultiplier = await (async () => {
    var _a2, _b2;
    if (typeof ((_a2 = chain == null ? void 0 : chain.fees) == null ? void 0 : _a2.baseFeeMultiplier) === "function")
      return chain.fees.baseFeeMultiplier({
        block: block_,
        client,
        request
      });
    return ((_b2 = chain == null ? void 0 : chain.fees) == null ? void 0 : _b2.baseFeeMultiplier) ?? 1.2;
  })();
  if (baseFeeMultiplier < 1)
    throw new BaseFeeScalarError();
  const decimals = ((_a = baseFeeMultiplier.toString().split(".")[1]) == null ? void 0 : _a.length) ?? 0;
  const denominator = 10 ** decimals;
  const multiply = (base2) => base2 * BigInt(Math.ceil(baseFeeMultiplier * denominator)) / BigInt(denominator);
  const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
  if (typeof ((_b = chain == null ? void 0 : chain.fees) == null ? void 0 : _b.estimateFeesPerGas) === "function")
    return chain.fees.estimateFeesPerGas({
      block: block_,
      client,
      multiply,
      request,
      type
    });
  if (type === "eip1559") {
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = (request == null ? void 0 : request.maxPriorityFeePerGas) ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
      block,
      chain,
      request
    });
    const baseFeePerGas = multiply(block.baseFeePerGas);
    const maxFeePerGas = (request == null ? void 0 : request.maxFeePerGas) ?? baseFeePerGas + maxPriorityFeePerGas;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const gasPrice = (request == null ? void 0 : request.gasPrice) ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({}));
  return {
    gasPrice
  };
}

// node_modules/viem/_esm/actions/public/getTransactionCount.js
async function getTransactionCount(client, { address, blockTag = "latest", blockNumber }) {
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, blockNumber ? numberToHex(blockNumber) : blockTag]
  });
  return hexToNumber(count);
}

// node_modules/viem/_esm/utils/transaction/getTransactionType.js
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined")
    return "eip1559";
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new InvalidSerializableTransactionError({ transaction });
}

// node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
async function prepareTransactionRequest(client, args) {
  const { account: account_ = client.account, chain, gas, nonce, type } = args;
  if (!account_)
    throw new AccountNotFoundError();
  const account = parseAccount(account_);
  const block = await getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
  const request = { ...args, from: account.address };
  if (typeof nonce === "undefined")
    request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
      address: account.address,
      blockTag: "pending"
    });
  if (typeof type === "undefined") {
    try {
      request.type = getTransactionType(request);
    } catch {
      request.type = typeof block.baseFeePerGas === "bigint" ? "eip1559" : "legacy";
    }
  }
  if (request.type === "eip1559") {
    const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
      block,
      chain,
      request
    });
    if (typeof args.maxPriorityFeePerGas === "undefined" && args.maxFeePerGas && args.maxFeePerGas < maxPriorityFeePerGas)
      throw new MaxFeePerGasTooLowError({
        maxPriorityFeePerGas
      });
    request.maxPriorityFeePerGas = maxPriorityFeePerGas;
    request.maxFeePerGas = maxFeePerGas;
  } else {
    if (typeof args.maxFeePerGas !== "undefined" || typeof args.maxPriorityFeePerGas !== "undefined")
      throw new Eip1559FeesNotSupportedError();
    const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
      block,
      chain,
      request,
      type: "legacy"
    });
    request.gasPrice = gasPrice_;
  }
  if (typeof gas === "undefined")
    request.gas = await getAction(client, estimateGas, "estimateGas")({
      ...request,
      account: { address: account.address, type: "json-rpc" }
    });
  assertRequest(request);
  return request;
}

// node_modules/viem/_esm/actions/public/estimateGas.js
async function estimateGas(client, args) {
  var _a, _b, _c;
  const account_ = args.account ?? client.account;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/public/estimateGas"
    });
  const account = parseAccount(account_);
  try {
    const { accessList, blockNumber, blockTag, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = account.type === "local" ? await prepareTransactionRequest(client, args) : args;
    const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    assertRequest(args);
    const chainFormat = (_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionRequest) == null ? void 0 : _c.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      from: account.address,
      accessList,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    const balance = await client.request({
      method: "eth_estimateGas",
      params: block ? [request, block] : [request]
    });
    return BigInt(balance);
  } catch (err) {
    throw getEstimateGasError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// node_modules/viem/_esm/actions/public/estimateContractGas.js
async function estimateContractGas(client, { abi, address, args, functionName, ...request }) {
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const gas = await getAction(client, estimateGas, "estimateGas")({
      data,
      to: address,
      ...request
    });
    return gas;
  } catch (err) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(err, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/estimateContractGas",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/utils/abi/decodeEventLog.js
var docsPath = "/docs/contract/decodeEventLog";
function decodeEventLog({ abi, data, strict: strict_, topics }) {
  const strict = strict_ ?? true;
  const [signature, ...argTopics] = topics;
  if (!signature)
    throw new AbiEventSignatureEmptyTopicsError({
      docsPath
    });
  const abiItem = abi.find((x) => x.type === "event" && signature === getEventSelector(formatAbiItem(x)));
  if (!(abiItem && "name" in abiItem) || abiItem.type !== "event")
    throw new AbiEventSignatureNotFoundError(signature, {
      docsPath
    });
  const { name, inputs } = abiItem;
  const isUnnamed = inputs == null ? void 0 : inputs.some((x) => !("name" in x && x.name));
  let args = isUnnamed ? [] : {};
  const indexedInputs = inputs.filter((x) => "indexed" in x && x.indexed);
  for (let i = 0; i < indexedInputs.length; i++) {
    const param = indexedInputs[i];
    const topic = argTopics[i];
    if (!topic)
      throw new DecodeLogTopicsMismatch({
        abiItem,
        param
      });
    args[param.name || i] = decodeTopic({ param, value: topic });
  }
  const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
  if (nonIndexedInputs.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = decodeAbiParameters(nonIndexedInputs, data);
        if (decodedData) {
          if (isUnnamed)
            args = [...args, ...decodedData];
          else {
            for (let i = 0; i < nonIndexedInputs.length; i++) {
              args[nonIndexedInputs[i].name] = decodedData[i];
            }
          }
        }
      } catch (err) {
        if (strict) {
          if (err instanceof AbiDecodingDataSizeTooSmallError)
            throw new DecodeLogDataMismatch({
              abiItem,
              data: err.data,
              params: err.params,
              size: err.size
            });
          throw err;
        }
      }
    } else if (strict) {
      throw new DecodeLogDataMismatch({
        abiItem,
        data: "0x",
        params: nonIndexedInputs,
        size: 0
      });
    }
  }
  return {
    eventName: name,
    args: Object.values(args).length > 0 ? args : void 0
  };
}
function decodeTopic({ param, value }) {
  if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    return value;
  const decodedArg = decodeAbiParameters([param], value) || [];
  return decodedArg[0];
}

// node_modules/viem/_esm/actions/public/getLogs.js
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
  const strict = strict_ ?? false;
  const events = events_ ?? (event ? [event] : void 0);
  let topics = [];
  if (events) {
    topics = [
      events.flatMap((event2) => encodeEventTopics({
        abi: [event2],
        eventName: event2.name,
        args
      }))
    ];
    if (event)
      topics = topics[0];
  }
  let logs;
  if (blockHash) {
    logs = await client.request({
      method: "eth_getLogs",
      params: [{ address, topics, blockHash }]
    });
  } else {
    logs = await client.request({
      method: "eth_getLogs",
      params: [
        {
          address,
          topics,
          fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
          toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock
        }
      ]
    });
  }
  return logs.map((log) => {
    var _a;
    try {
      const { eventName, args: args2 } = events ? decodeEventLog({
        abi: events,
        data: log.data,
        topics: log.topics,
        strict
      }) : { eventName: void 0, args: void 0 };
      return formatLog(log, { args: args2, eventName });
    } catch (err) {
      let eventName;
      let isUnnamed;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if (strict)
          return;
        eventName = err.abiItem.name;
        isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
      }
      return formatLog(log, { args: isUnnamed ? [] : {}, eventName });
    }
  }).filter(Boolean);
}

// node_modules/viem/_esm/actions/public/getContractEvents.js
async function getContractEvents(client, { abi, address, args, blockHash, eventName, fromBlock, toBlock, strict }) {
  const event = eventName ? getAbiItem({ abi, name: eventName }) : void 0;
  const events = !event ? abi.filter((x) => x.type === "event") : void 0;
  return getAction(client, getLogs, "getLogs")({
    address,
    args,
    blockHash,
    event,
    events,
    fromBlock,
    toBlock,
    strict
  });
}

// node_modules/viem/_esm/actions/public/simulateContract.js
async function simulateContract(client, { abi, address, args, dataSuffix, functionName, ...callRequest }) {
  const account = callRequest.account ? parseAccount(callRequest.account) : void 0;
  const calldata = encodeFunctionData({
    abi,
    args,
    functionName
  });
  try {
    const { data } = await getAction(client, call, "call")({
      batch: false,
      data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...callRequest
    });
    const result = decodeFunctionResult({
      abi,
      args,
      functionName,
      data: data || "0x"
    });
    return {
      result,
      request: {
        abi,
        address,
        args,
        dataSuffix,
        functionName,
        ...callRequest
      }
    };
  } catch (err) {
    throw getContractError(err, {
      abi,
      address,
      args,
      docsPath: "/docs/contract/simulateContract",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/utils/observe.js
var listenersCache = /* @__PURE__ */ new Map();
var cleanupCache = /* @__PURE__ */ new Map();
var callbackCount = 0;
function observe(observerId, callbacks, fn) {
  const callbackId = ++callbackCount;
  const getListeners = () => listenersCache.get(observerId) || [];
  const unsubscribe = () => {
    const listeners2 = getListeners();
    listenersCache.set(observerId, listeners2.filter((cb) => cb.id !== callbackId));
  };
  const unwatch = () => {
    const cleanup2 = cleanupCache.get(observerId);
    if (getListeners().length === 1 && cleanup2)
      cleanup2();
    unsubscribe();
  };
  const listeners = getListeners();
  listenersCache.set(observerId, [
    ...listeners,
    { id: callbackId, fns: callbacks }
  ]);
  if (listeners && listeners.length > 0)
    return unwatch;
  const emit = {};
  for (const key in callbacks) {
    emit[key] = (...args) => {
      var _a, _b;
      const listeners2 = getListeners();
      if (listeners2.length === 0)
        return;
      for (const listener of listeners2)
        (_b = (_a = listener.fns)[key]) == null ? void 0 : _b.call(_a, ...args);
    };
  }
  const cleanup = fn(emit);
  if (typeof cleanup === "function")
    cleanupCache.set(observerId, cleanup);
  return unwatch;
}

// node_modules/viem/_esm/utils/wait.js
async function wait(time) {
  return new Promise((res) => setTimeout(res, time));
}

// node_modules/viem/_esm/utils/poll.js
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
  let active = true;
  const unwatch = () => active = false;
  const watch = async () => {
    let data = void 0;
    if (emitOnBegin)
      data = await fn({ unpoll: unwatch });
    const initialWait = await (initialWaitTime == null ? void 0 : initialWaitTime(data)) ?? interval;
    await wait(initialWait);
    const poll2 = async () => {
      if (!active)
        return;
      await fn({ unpoll: unwatch });
      await wait(interval);
      poll2();
    };
    poll2();
  };
  watch();
  return unwatch;
}

// node_modules/viem/_esm/utils/promise/withCache.js
var promiseCache = /* @__PURE__ */ new Map();
var responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey2) {
  const buildCache = (cacheKey3, cache) => ({
    clear: () => cache.delete(cacheKey3),
    get: () => cache.get(cacheKey3),
    set: (data) => cache.set(cacheKey3, data)
  });
  const promise = buildCache(cacheKey2, promiseCache);
  const response = buildCache(cacheKey2, responseCache);
  return {
    clear: () => {
      promise.clear();
      response.clear();
    },
    promise,
    response
  };
}
async function withCache(fn, { cacheKey: cacheKey2, cacheTime = Infinity }) {
  const cache = getCache(cacheKey2);
  const response = cache.response.get();
  if (response && cacheTime > 0) {
    const age = (/* @__PURE__ */ new Date()).getTime() - response.created.getTime();
    if (age < cacheTime)
      return response.data;
  }
  let promise = cache.promise.get();
  if (!promise) {
    promise = fn();
    cache.promise.set(promise);
  }
  try {
    const data = await promise;
    cache.response.set({ created: /* @__PURE__ */ new Date(), data });
    return data;
  } finally {
    cache.promise.clear();
  }
}

// node_modules/viem/_esm/actions/public/getBlockNumber.js
var cacheKey = (id2) => `blockNumber.${id2}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime, maxAge } = {}) {
  const blockNumberHex = await withCache(() => client.request({
    method: "eth_blockNumber"
  }), { cacheKey: cacheKey(client.uid), cacheTime: maxAge ?? cacheTime });
  return BigInt(blockNumberHex);
}

// node_modules/viem/_esm/actions/public/getFilterChanges.js
async function getFilterChanges(_client, { filter }) {
  const strict = "strict" in filter && filter.strict;
  const logs = await filter.request({
    method: "eth_getFilterChanges",
    params: [filter.id]
  });
  return logs.map((log) => {
    var _a;
    if (typeof log === "string")
      return log;
    try {
      const { eventName, args } = "abi" in filter && filter.abi ? decodeEventLog({
        abi: filter.abi,
        data: log.data,
        topics: log.topics,
        strict
      }) : { eventName: void 0, args: void 0 };
      return formatLog(log, { args, eventName });
    } catch (err) {
      let eventName;
      let isUnnamed;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if ("strict" in filter && filter.strict)
          return;
        eventName = err.abiItem.name;
        isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
      }
      return formatLog(log, { args: isUnnamed ? [] : {}, eventName });
    }
  }).filter(Boolean);
}

// node_modules/viem/_esm/actions/public/uninstallFilter.js
async function uninstallFilter(_client, { filter }) {
  return filter.request({
    method: "eth_uninstallFilter",
    params: [filter.id]
  });
}

// node_modules/viem/_esm/actions/public/watchContractEvent.js
function watchContractEvent(client, { abi, address, args, batch = true, eventName, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const pollContractEvent = () => {
    const observerId = stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval
    ]);
    const strict = strict_ ?? false;
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        var _a;
        if (!initialized) {
          try {
            filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
              abi,
              address,
              args,
              eventName,
              strict
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getContractEvents, "getContractEvents")({
                abi,
                address,
                args,
                eventName,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber,
                strict
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeContractEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const topics = eventName ? encodeEventTopics({
          abi,
          eventName,
          args
        }) : [];
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            var _a;
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName: eventName2, args: args2 } = decodeEventLog({
                abi,
                data: log.data,
                topics: log.topics,
                strict: strict_
              });
              const formatted = formatLog(log, {
                args: args2,
                eventName: eventName2
              });
              onLogs([formatted]);
            } catch (err) {
              let eventName2;
              let isUnnamed;
              if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName2 = err.abiItem.name;
                isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName: eventName2
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollContractEvent() : subscribeContractEvent();
}

// node_modules/viem/_esm/utils/chain/assertCurrentChain.js
function assertCurrentChain({ chain, currentChainId }) {
  if (!chain)
    throw new ChainNotFoundError();
  if (currentChainId !== chain.id)
    throw new ChainMismatchError({ chain, currentChainId });
}

// node_modules/viem/_esm/utils/errors/getTransactionError.js
function getTransactionError(err, { docsPath: docsPath3, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new TransactionExecutionError(cause, {
    docsPath: docsPath3,
    ...args
  });
}

// node_modules/viem/_esm/actions/public/getChainId.js
async function getChainId(client) {
  const chainIdHex = await client.request({
    method: "eth_chainId"
  });
  return hexToNumber(chainIdHex);
}

// node_modules/viem/_esm/actions/wallet/sendRawTransaction.js
async function sendRawTransaction(client, { serializedTransaction }) {
  return client.request({
    method: "eth_sendRawTransaction",
    params: [serializedTransaction]
  });
}

// node_modules/viem/_esm/actions/wallet/sendTransaction.js
async function sendTransaction(client, args) {
  var _a, _b, _c, _d;
  const { account: account_ = client.account, chain = client.chain, accessList, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value, ...rest } = args;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const account = parseAccount(account_);
  try {
    assertRequest(args);
    let chainId;
    if (chain !== null) {
      chainId = await getAction(client, getChainId, "getChainId")({});
      assertCurrentChain({
        currentChainId: chainId,
        chain
      });
    }
    if (account.type === "local") {
      const request2 = await getAction(client, prepareTransactionRequest, "prepareTransactionRequest")({
        account,
        accessList,
        chain,
        data,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value,
        ...rest
      });
      if (!chainId)
        chainId = await getAction(client, getChainId, "getChainId")({});
      const serializer = (_a = chain == null ? void 0 : chain.serializers) == null ? void 0 : _a.transaction;
      const serializedTransaction = await account.signTransaction({
        ...request2,
        chainId
      }, { serializer });
      return await getAction(client, sendRawTransaction, "sendRawTransaction")({
        serializedTransaction
      });
    }
    const chainFormat = (_d = (_c = (_b = client.chain) == null ? void 0 : _b.formatters) == null ? void 0 : _c.transactionRequest) == null ? void 0 : _d.format;
    const format = chainFormat || formatTransactionRequest;
    const request = format({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      accessList,
      data,
      from: account.address,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
    return await client.request({
      method: "eth_sendTransaction",
      params: [request]
    });
  } catch (err) {
    throw getTransactionError(err, {
      ...args,
      account,
      chain: args.chain || void 0
    });
  }
}

// node_modules/viem/_esm/actions/wallet/writeContract.js
async function writeContract(client, { abi, address, args, dataSuffix, functionName, ...request }) {
  const data = encodeFunctionData({
    abi,
    args,
    functionName
  });
  const hash = await getAction(client, sendTransaction, "sendTransaction")({
    data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
    to: address,
    ...request
  });
  return hash;
}

// node_modules/viem/_esm/actions/wallet/addChain.js
async function addChain(client, { chain }) {
  const { id: id2, name, nativeCurrency, rpcUrls, blockExplorers } = chain;
  await client.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: numberToHex(id2),
        chainName: name,
        nativeCurrency,
        rpcUrls: rpcUrls.default.http,
        blockExplorerUrls: blockExplorers ? Object.values(blockExplorers).map(({ url }) => url) : void 0
      }
    ]
  });
}

// node_modules/viem/_esm/utils/uid.js
var size2 = 256;
var index = size2;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size2 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size2; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/viem/_esm/clients/createClient.js
function createClient(parameters) {
  const { batch, cacheTime = parameters.pollingInterval ?? 4e3, key = "base", name = "Base Client", pollingInterval = 4e3, type = "base" } = parameters;
  const chain = parameters.chain;
  const account = parameters.account ? parseAccount(parameters.account) : void 0;
  const { config, request, value } = parameters.transport({
    chain,
    pollingInterval
  });
  const transport = { ...config, ...value };
  const client = {
    account,
    batch,
    cacheTime,
    chain,
    key,
    name,
    pollingInterval,
    request,
    transport,
    type,
    uid: uid()
  };
  function extend(base2) {
    return (extendFn) => {
      const extended = extendFn(base2);
      for (const key2 in client)
        delete extended[key2];
      const combined = { ...base2, ...extended };
      return Object.assign(combined, { extend: extend(combined) });
    };
  }
  return Object.assign(client, { extend: extend(client) });
}

// node_modules/viem/_esm/utils/promise/withRetry.js
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry = () => true } = {}) {
  return new Promise((resolve, reject) => {
    const attemptRetry = async ({ count = 0 } = {}) => {
      const retry = async ({ error }) => {
        const delay = typeof delay_ === "function" ? delay_({ count, error }) : delay_;
        if (delay)
          await wait(delay);
        attemptRetry({ count: count + 1 });
      };
      try {
        const data = await fn();
        resolve(data);
      } catch (err) {
        if (count < retryCount && await shouldRetry({ count, error: err }))
          return retry({ error: err });
        reject(err);
      }
    };
    attemptRetry();
  });
}

// node_modules/viem/_esm/utils/buildRequest.js
var isDeterministicError = (error) => {
  if ("code" in error)
    return error.code !== -1 && error.code !== -32004 && error.code !== -32005 && error.code !== -32042 && error.code !== -32603;
  if (error instanceof HttpRequestError && error.status)
    return error.status !== 403 && error.status !== 408 && error.status !== 413 && error.status !== 429 && error.status !== 500 && error.status !== 502 && error.status !== 503 && error.status !== 504;
  return false;
};
function buildRequest(request, { retryDelay = 150, retryCount = 3 } = {}) {
  return async (args) => withRetry(async () => {
    try {
      return await request(args);
    } catch (err_) {
      const err = err_;
      switch (err.code) {
        case ParseRpcError.code:
          throw new ParseRpcError(err);
        case InvalidRequestRpcError.code:
          throw new InvalidRequestRpcError(err);
        case MethodNotFoundRpcError.code:
          throw new MethodNotFoundRpcError(err);
        case InvalidParamsRpcError.code:
          throw new InvalidParamsRpcError(err);
        case InternalRpcError.code:
          throw new InternalRpcError(err);
        case InvalidInputRpcError.code:
          throw new InvalidInputRpcError(err);
        case ResourceNotFoundRpcError.code:
          throw new ResourceNotFoundRpcError(err);
        case ResourceUnavailableRpcError.code:
          throw new ResourceUnavailableRpcError(err);
        case TransactionRejectedRpcError.code:
          throw new TransactionRejectedRpcError(err);
        case MethodNotSupportedRpcError.code:
          throw new MethodNotSupportedRpcError(err);
        case LimitExceededRpcError.code:
          throw new LimitExceededRpcError(err);
        case JsonRpcVersionUnsupportedError.code:
          throw new JsonRpcVersionUnsupportedError(err);
        case UserRejectedRequestError.code:
          throw new UserRejectedRequestError(err);
        case UnauthorizedProviderError.code:
          throw new UnauthorizedProviderError(err);
        case UnsupportedProviderMethodError.code:
          throw new UnsupportedProviderMethodError(err);
        case ProviderDisconnectedError.code:
          throw new ProviderDisconnectedError(err);
        case ChainDisconnectedError.code:
          throw new ChainDisconnectedError(err);
        case SwitchChainError.code:
          throw new SwitchChainError(err);
        case 5e3:
          throw new UserRejectedRequestError(err);
        default:
          if (err_ instanceof BaseError)
            throw err_;
          throw new UnknownRpcError(err);
      }
    }
  }, {
    delay: ({ count, error }) => {
      var _a;
      if (error && error instanceof HttpRequestError) {
        const retryAfter = (_a = error == null ? void 0 : error.headers) == null ? void 0 : _a.get("Retry-After");
        if (retryAfter == null ? void 0 : retryAfter.match(/\d/))
          return parseInt(retryAfter) * 1e3;
      }
      return ~~(1 << count) * retryDelay;
    },
    retryCount,
    shouldRetry: ({ error }) => !isDeterministicError(error)
  });
}

// node_modules/viem/_esm/clients/transports/createTransport.js
function createTransport({ key, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
  return {
    config: { key, name, request, retryCount, retryDelay, timeout, type },
    request: buildRequest(request, { retryCount, retryDelay }),
    value
  };
}

// node_modules/viem/_esm/clients/transports/custom.js
function custom(provider, config = {}) {
  const { key = "custom", name = "Custom Provider", retryDelay } = config;
  return ({ retryCount: defaultRetryCount }) => createTransport({
    key,
    name,
    request: provider.request.bind(provider),
    retryCount: config.retryCount ?? defaultRetryCount,
    retryDelay,
    type: "custom"
  });
}

// node_modules/viem/_esm/clients/transports/fallback.js
function fallback(transports_, config = {}) {
  const { key = "fallback", name = "Fallback", rank = false, retryCount, retryDelay } = config;
  return ({ chain, pollingInterval = 4e3, timeout }) => {
    let transports = transports_;
    let onResponse = () => {
    };
    const transport = createTransport({
      key,
      name,
      async request({ method, params }) {
        const fetch2 = async (i = 0) => {
          const transport2 = transports[i]({ chain, retryCount: 0, timeout });
          try {
            const response = await transport2.request({
              method,
              params
            });
            onResponse({
              method,
              params,
              response,
              transport: transport2,
              status: "success"
            });
            return response;
          } catch (err) {
            onResponse({
              error: err,
              method,
              params,
              transport: transport2,
              status: "error"
            });
            if (isDeterministicError(err))
              throw err;
            if (i === transports.length - 1)
              throw err;
            return fetch2(i + 1);
          }
        };
        return fetch2();
      },
      retryCount,
      retryDelay,
      type: "fallback"
    }, {
      onResponse: (fn) => onResponse = fn,
      transports: transports.map((fn) => fn({ chain, retryCount: 0 }))
    });
    if (rank) {
      const rankOptions = typeof rank === "object" ? rank : {};
      rankTransports({
        chain,
        interval: rankOptions.interval ?? pollingInterval,
        onTransports: (transports_2) => transports = transports_2,
        sampleCount: rankOptions.sampleCount,
        timeout: rankOptions.timeout,
        transports,
        weights: rankOptions.weights
      });
    }
    return transport;
  };
}
function rankTransports({ chain, interval = 4e3, onTransports, sampleCount = 10, timeout = 1e3, transports, weights = {} }) {
  const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
  const samples = [];
  const rankTransports_ = async () => {
    const sample = await Promise.all(transports.map(async (transport) => {
      const transport_ = transport({ chain, retryCount: 0, timeout });
      const start = Date.now();
      let end;
      let success;
      try {
        await transport_.request({ method: "net_listening" });
        success = 1;
      } catch {
        success = 0;
      } finally {
        end = Date.now();
      }
      const latency = end - start;
      return { latency, success };
    }));
    samples.push(sample);
    if (samples.length > sampleCount)
      samples.shift();
    const maxLatency = Math.max(...samples.map((sample2) => Math.max(...sample2.map(({ latency }) => latency))));
    const scores = transports.map((_, i) => {
      const latencies = samples.map((sample2) => sample2[i].latency);
      const meanLatency = latencies.reduce((acc, latency) => acc + latency, 0) / latencies.length;
      const latencyScore = 1 - meanLatency / maxLatency;
      const successes = samples.map((sample2) => sample2[i].success);
      const stabilityScore = successes.reduce((acc, success) => acc + success, 0) / successes.length;
      if (stabilityScore === 0)
        return [0, i];
      return [
        latencyWeight * latencyScore + stabilityWeight * stabilityScore,
        i
      ];
    }).sort((a, b) => b[0] - a[0]);
    onTransports(scores.map(([, i]) => transports[i]));
    await wait(interval);
    rankTransports_();
  };
  rankTransports_();
}

// node_modules/viem/_esm/errors/transport.js
var UrlRequiredError = class extends BaseError {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro"
    });
  }
};

// node_modules/isows/_esm/utils.js
function getNativeWebSocket() {
  if (typeof WebSocket !== "undefined")
    return WebSocket;
  if (typeof global.WebSocket !== "undefined")
    return global.WebSocket;
  if (typeof window.WebSocket !== "undefined")
    return window.WebSocket;
  if (typeof self.WebSocket !== "undefined")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}

// node_modules/isows/_esm/native.js
var WebSocket2 = getNativeWebSocket();

// node_modules/viem/_esm/utils/promise/withTimeout.js
function withTimeout(fn, { errorInstance = new Error("timed out"), timeout, signal }) {
  return new Promise((resolve, reject) => {
    ;
    (async () => {
      let timeoutId;
      try {
        const controller = new AbortController();
        if (timeout > 0) {
          timeoutId = setTimeout(() => {
            if (signal) {
              controller.abort();
            } else {
              reject(errorInstance);
            }
          }, timeout);
        }
        resolve(await fn({ signal: controller == null ? void 0 : controller.signal }));
      } catch (err) {
        if (err.name === "AbortError")
          reject(errorInstance);
        reject(err);
      } finally {
        clearTimeout(timeoutId);
      }
    })();
  });
}

// node_modules/viem/_esm/utils/rpc.js
var id = 0;
async function http(url, { body, fetchOptions = {}, timeout = 1e4 }) {
  var _a;
  const { headers, method, signal: signal_ } = fetchOptions;
  try {
    const response = await withTimeout(async ({ signal }) => {
      const response2 = await fetch(url, {
        ...fetchOptions,
        body: Array.isArray(body) ? stringify(body.map((body2) => ({
          jsonrpc: "2.0",
          id: body2.id ?? id++,
          ...body2
        }))) : stringify({ jsonrpc: "2.0", id: body.id ?? id++, ...body }),
        headers: {
          ...headers,
          "Content-Type": "application/json"
        },
        method: method || "POST",
        signal: signal_ || (timeout > 0 ? signal : void 0)
      });
      return response2;
    }, {
      errorInstance: new TimeoutError({ body, url }),
      timeout,
      signal: true
    });
    let data;
    if ((_a = response.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    if (!response.ok) {
      throw new HttpRequestError({
        body,
        details: stringify(data.error) || response.statusText,
        headers: response.headers,
        status: response.status,
        url
      });
    }
    return data;
  } catch (err) {
    if (err instanceof HttpRequestError)
      throw err;
    if (err instanceof TimeoutError)
      throw err;
    throw new HttpRequestError({
      body,
      details: err.message,
      url
    });
  }
}
var socketsCache = /* @__PURE__ */ new Map();
async function getSocket(url) {
  let socket = socketsCache.get(url);
  if (socket)
    return socket;
  const { schedule } = createBatchScheduler({
    id: url,
    fn: async () => {
      const webSocket3 = new WebSocket2(url);
      const requests = /* @__PURE__ */ new Map();
      const subscriptions = /* @__PURE__ */ new Map();
      const onMessage = ({ data }) => {
        const message = JSON.parse(data);
        const isSubscription = message.method === "eth_subscription";
        const id2 = isSubscription ? message.params.subscription : message.id;
        const cache = isSubscription ? subscriptions : requests;
        const callback = cache.get(id2);
        if (callback)
          callback({ data });
        if (!isSubscription)
          cache.delete(id2);
      };
      const onClose = () => {
        socketsCache.delete(url);
        webSocket3.removeEventListener("close", onClose);
        webSocket3.removeEventListener("message", onMessage);
      };
      webSocket3.addEventListener("close", onClose);
      webSocket3.addEventListener("message", onMessage);
      if (webSocket3.readyState === WebSocket2.CONNECTING) {
        await new Promise((resolve, reject) => {
          if (!webSocket3)
            return;
          webSocket3.onopen = resolve;
          webSocket3.onerror = reject;
        });
      }
      socket = Object.assign(webSocket3, {
        requests,
        subscriptions
      });
      socketsCache.set(url, socket);
      return [socket];
    }
  });
  const [_, [socket_]] = await schedule();
  return socket_;
}
function webSocket(socket, { body, onResponse }) {
  if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING)
    throw new WebSocketRequestError({
      body,
      url: socket.url,
      details: "Socket is closed."
    });
  const id_ = id++;
  const callback = ({ data }) => {
    var _a;
    const message = JSON.parse(data);
    if (typeof message.id === "number" && id_ !== message.id)
      return;
    onResponse == null ? void 0 : onResponse(message);
    if (body.method === "eth_subscribe" && typeof message.result === "string") {
      socket.subscriptions.set(message.result, callback);
    }
    if (body.method === "eth_unsubscribe") {
      socket.subscriptions.delete((_a = body.params) == null ? void 0 : _a[0]);
    }
  };
  socket.requests.set(id_, callback);
  socket.send(JSON.stringify({ jsonrpc: "2.0", ...body, id: id_ }));
  return socket;
}
async function webSocketAsync(socket, { body, timeout = 1e4 }) {
  return withTimeout(() => new Promise((onResponse) => rpc.webSocket(socket, {
    body,
    onResponse
  })), {
    errorInstance: new TimeoutError({ body, url: socket.url }),
    timeout
  });
}
var rpc = {
  http,
  webSocket,
  webSocketAsync
};

// node_modules/viem/_esm/clients/transports/http.js
function http2(url, config = {}) {
  const { batch, fetchOptions, key = "http", name = "HTTP JSON-RPC", retryDelay } = config;
  return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
    const { batchSize = 1e3, wait: wait2 = 0 } = typeof batch === "object" ? batch : {};
    const retryCount = config.retryCount ?? retryCount_;
    const timeout = timeout_ ?? config.timeout ?? 1e4;
    const url_ = url || (chain == null ? void 0 : chain.rpcUrls.default.http[0]);
    if (!url_)
      throw new UrlRequiredError();
    return createTransport({
      key,
      name,
      async request({ method, params }) {
        const body = { method, params };
        const { schedule } = createBatchScheduler({
          id: `${url}`,
          wait: wait2,
          shouldSplitBatch(requests) {
            return requests.length > batchSize;
          },
          fn: (body2) => rpc.http(url_, {
            body: body2,
            fetchOptions,
            timeout
          }),
          sort: (a, b) => a.id - b.id
        });
        const fn = async (body2) => batch ? schedule(body2) : [await rpc.http(url_, { body: body2, fetchOptions, timeout })];
        const [{ error, result }] = await fn(body);
        if (error)
          throw new RpcRequestError({
            body,
            error,
            url: url_
          });
        return result;
      },
      retryCount,
      retryDelay,
      timeout,
      type: "http"
    }, {
      fetchOptions,
      url
    });
  };
}

// node_modules/viem/_esm/actions/public/createBlockFilter.js
async function createBlockFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newBlockFilter"
  });
  const id2 = await client.request({
    method: "eth_newBlockFilter"
  });
  return { id: id2, request: getRequest(id2), type: "block" };
}

// node_modules/viem/_esm/actions/public/createEventFilter.js
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
  const events = events_ ?? (event ? [event] : void 0);
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  let topics = [];
  if (events) {
    topics = [
      events.flatMap((event2) => encodeEventTopics({
        abi: [event2],
        eventName: event2.name,
        args
      }))
    ];
    if (event)
      topics = topics[0];
  }
  const id2 = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        ...topics.length ? { topics } : {}
      }
    ]
  });
  return {
    abi: events,
    args,
    eventName: event ? event.name : void 0,
    fromBlock,
    id: id2,
    request: getRequest(id2),
    strict,
    toBlock,
    type: "event"
  };
}

// node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js
async function createPendingTransactionFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newPendingTransactionFilter"
  });
  const id2 = await client.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id: id2, request: getRequest(id2), type: "transaction" };
}

// node_modules/viem/_esm/actions/public/getBalance.js
async function getBalance(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const balance = await client.request({
    method: "eth_getBalance",
    params: [address, blockNumberHex || blockTag]
  });
  return BigInt(balance);
}

// node_modules/viem/_esm/actions/public/getBlockTransactionCount.js
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let count;
  if (blockHash) {
    count = await client.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [blockHash]
    });
  } else {
    count = await client.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [blockNumberHex || blockTag]
    });
  }
  return hexToNumber(count);
}

// node_modules/viem/_esm/actions/public/getBytecode.js
async function getBytecode(client, { address, blockNumber, blockTag = "latest" }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const hex = await client.request({
    method: "eth_getCode",
    params: [address, blockNumberHex || blockTag]
  });
  if (hex === "0x")
    return void 0;
  return hex;
}

// node_modules/viem/_esm/utils/formatters/feeHistory.js
function formatFeeHistory(feeHistory) {
  var _a;
  return {
    baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
    gasUsedRatio: feeHistory.gasUsedRatio,
    oldestBlock: BigInt(feeHistory.oldestBlock),
    reward: (_a = feeHistory.reward) == null ? void 0 : _a.map((reward) => reward.map((value) => BigInt(value)))
  };
}

// node_modules/viem/_esm/actions/public/getFeeHistory.js
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
  const blockNumberHex = blockNumber ? numberToHex(blockNumber) : void 0;
  const feeHistory = await client.request({
    method: "eth_feeHistory",
    params: [
      numberToHex(blockCount),
      blockNumberHex || blockTag,
      rewardPercentiles
    ]
  });
  return formatFeeHistory(feeHistory);
}

// node_modules/viem/_esm/actions/public/getFilterLogs.js
async function getFilterLogs(_client, { filter }) {
  const strict = filter.strict ?? false;
  const logs = await filter.request({
    method: "eth_getFilterLogs",
    params: [filter.id]
  });
  return logs.map((log) => {
    var _a;
    try {
      const { eventName, args } = "abi" in filter && filter.abi ? decodeEventLog({
        abi: filter.abi,
        data: log.data,
        topics: log.topics,
        strict
      }) : { eventName: void 0, args: void 0 };
      return formatLog(log, { args, eventName });
    } catch (err) {
      let eventName;
      let isUnnamed;
      if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
        if ("strict" in filter && filter.strict)
          return;
        eventName = err.abiItem.name;
        isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
      }
      return formatLog(log, { args: isUnnamed ? [] : {}, eventName });
    }
  }).filter(Boolean);
}

// node_modules/viem/_esm/utils/regex.js
var bytesRegex = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

// node_modules/viem/_esm/utils/signature/hashTypedData.js
function hashTypedData({ domain: domain_, message, primaryType, types: types_ }) {
  const domain = typeof domain_ === "undefined" ? {} : domain_;
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...types_
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain") {
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  }
  return keccak256(concat(parts));
}
function hashDomain({ domain, types }) {
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types
  });
}
function hashStruct({ data, primaryType, types }) {
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
function encodeData({ data, primaryType, types }) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
  const encodedHashType = toHex(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeType({ primaryType, types }) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match == null ? void 0 : match[0];
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeField({ types, name, type, value }) {
  if (types[type] !== void 0) {
    return [
      { type: "bytes32" },
      keccak256(encodeData({ data: value, primaryType: type, types }))
    ];
  }
  if (type === "bytes") {
    const prepend = value.length % 2 ? "0" : "";
    value = `0x${prepend + value.slice(2)}`;
    return [{ type: "bytes32" }, keccak256(value)];
  }
  if (type === "string")
    return [{ type: "bytes32" }, keccak256(toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// node_modules/viem/_esm/utils/typedData.js
function validateTypedData({ domain, message, primaryType, types: types_ }) {
  const types = types_;
  const validateData = (struct, value_) => {
    for (const param of struct) {
      const { name, type: type_ } = param;
      const type = type_;
      const value = value_[name];
      const integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
        const [_type, base2, size_] = integerMatch;
        numberToHex(value, {
          signed: base2 === "int",
          size: parseInt(size_) / 8
        });
      }
      if (type === "address" && typeof value === "string" && !isAddress(value))
        throw new InvalidAddressError({ address: value });
      const bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        const [_type, size_] = bytesMatch;
        if (size_ && size(value) !== parseInt(size_))
          throw new BytesSizeMismatchError({
            expectedSize: parseInt(size_),
            givenSize: size(value)
          });
      }
      const struct2 = types[type];
      if (struct2)
        validateData(struct2, value);
    }
  };
  if (types.EIP712Domain && domain)
    validateData(types.EIP712Domain, domain);
  if (primaryType !== "EIP712Domain") {
    const type = types[primaryType];
    validateData(type, message);
  }
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof (domain == null ? void 0 : domain.name) === "string" && { name: "name", type: "string" },
    (domain == null ? void 0 : domain.version) && { name: "version", type: "string" },
    typeof (domain == null ? void 0 : domain.chainId) === "number" && {
      name: "chainId",
      type: "uint256"
    },
    (domain == null ? void 0 : domain.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (domain == null ? void 0 : domain.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}

// node_modules/viem/_esm/utils/abi/encodeDeployData.js
var docsPath2 = "/docs/contract/encodeDeployData";
function encodeDeployData({ abi, args, bytecode }) {
  if (!args || args.length === 0)
    return bytecode;
  const description = abi.find((x) => "type" in x && x.type === "constructor");
  if (!description)
    throw new AbiConstructorNotFoundError({ docsPath: docsPath2 });
  if (!("inputs" in description))
    throw new AbiConstructorParamsNotFoundError({ docsPath: docsPath2 });
  if (!description.inputs || description.inputs.length === 0)
    throw new AbiConstructorParamsNotFoundError({ docsPath: docsPath2 });
  const data = encodeAbiParameters(description.inputs, args);
  return concatHex([bytecode, data]);
}

// node_modules/viem/_esm/errors/cursor.js
var NegativeOffsetError = class extends BaseError {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "NegativeOffsetError"
    });
  }
};
var PositionOutOfBoundsError = class extends BaseError {
  constructor({ length, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PositionOutOfBoundsError"
    });
  }
};

// node_modules/viem/_esm/utils/cursor.js
var staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length - 1);
    return this.bytes.subarray(position, position + length);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes) {
    this.assertPosition(this.position + bytes.length - 1);
    this.bytes.set(bytes, this.position);
    this.position += bytes.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & ~4294967040);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length) {
    const value = this.inspectBytes(length);
    this.position += length;
    return value;
  },
  readUint8() {
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  setPosition(position) {
    this.assertPosition(position);
    this.position = position;
  }
};
function createCursor(bytes) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes;
  cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return cursor;
}

// node_modules/viem/_esm/constants/strings.js
var presignMessagePrefix = "Ethereum Signed Message:\n";

// node_modules/viem/_esm/utils/signature/hashMessage.js
function hashMessage(message, to_) {
  const messageBytes = (() => {
    if (typeof message === "string")
      return stringToBytes(message);
    if (message.raw instanceof Uint8Array)
      return message.raw;
    return toBytes(message.raw);
  })();
  const prefixBytes = stringToBytes(`${presignMessagePrefix}${messageBytes.length}`);
  return keccak256(concat([prefixBytes, messageBytes]), to_);
}

// node_modules/viem/_esm/utils/transaction/assertTransaction.js
function assertTransactionEIP1559(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (gasPrice)
    throw new BaseError("`gasPrice` is not a valid EIP-1559 Transaction attribute.");
  if (maxFeePerGas && maxFeePerGas > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (maxPriorityFeePerGas && maxFeePerGas && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
}
function assertTransactionEIP2930(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");
  if (gasPrice && gasPrice > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
}
function assertTransactionLegacy(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, accessList } = transaction;
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (typeof chainId !== "undefined" && chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (maxPriorityFeePerGas || maxFeePerGas)
    throw new BaseError("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");
  if (gasPrice && gasPrice > 2n ** 256n - 1n)
    throw new FeeCapTooHighError({ maxFeePerGas: gasPrice });
  if (accessList)
    throw new BaseError("`accessList` is not a valid Legacy Transaction attribute.");
}

// node_modules/viem/_esm/utils/transaction/serializeAccessList.js
function serializeAccessList(accessList) {
  if (!accessList || accessList.length === 0)
    return [];
  const serializedAccessList = [];
  for (let i = 0; i < accessList.length; i++) {
    const { address, storageKeys } = accessList[i];
    for (let j = 0; j < storageKeys.length; j++) {
      if (storageKeys[j].length - 2 !== 64) {
        throw new InvalidStorageKeySizeError({ storageKey: storageKeys[j] });
      }
    }
    if (!isAddress(address)) {
      throw new InvalidAddressError({ address });
    }
    serializedAccessList.push([address, storageKeys]);
  }
  return serializedAccessList;
}

// node_modules/viem/_esm/utils/transaction/serializeTransaction.js
function serializeTransaction(transaction, signature) {
  const type = getTransactionType(transaction);
  if (type === "eip1559")
    return serializeTransactionEIP1559(transaction, signature);
  if (type === "eip2930")
    return serializeTransactionEIP2930(transaction, signature);
  return serializeTransactionLegacy(transaction, signature);
}
function serializeTransactionEIP1559(transaction, signature) {
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, data } = transaction;
  assertTransactionEIP1559(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList
  ];
  if (signature) {
    const yParity = (() => {
      if (signature.v === 0n)
        return "0x";
      if (signature.v === 1n)
        return toHex(1);
      return signature.v === 27n ? "0x" : toHex(1);
    })();
    serializedTransaction.push(yParity, trim(signature.r), trim(signature.s));
  }
  return concatHex([
    "0x02",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionEIP2930(transaction, signature) {
  const { chainId, gas, data, nonce, to, value, accessList, gasPrice } = transaction;
  assertTransactionEIP2930(transaction);
  const serializedAccessList = serializeAccessList(accessList);
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    gasPrice ? toHex(gasPrice) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializedAccessList
  ];
  if (signature) {
    const yParity = (() => {
      if (signature.v === 0n)
        return "0x";
      if (signature.v === 1n)
        return toHex(1);
      return signature.v === 27n ? "0x" : toHex(1);
    })();
    serializedTransaction.push(yParity, trim(signature.r), trim(signature.s));
  }
  return concatHex([
    "0x01",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionLegacy(transaction, signature) {
  const { chainId = 0, gas, data, nonce, to, value, gasPrice } = transaction;
  assertTransactionLegacy(transaction);
  let serializedTransaction = [
    nonce ? toHex(nonce) : "0x",
    gasPrice ? toHex(gasPrice) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x"
  ];
  if (signature) {
    const v = (() => {
      if (chainId > 0)
        return BigInt(chainId * 2) + BigInt(35n + signature.v - 27n);
      if (signature.v >= 35n) {
        const inferredChainId = (signature.v - 35n) / 2n;
        if (inferredChainId > 0)
          return signature.v;
        return 27n + (signature.v === 35n ? 0n : 1n);
      }
      const v2 = 27n + (signature.v === 27n ? 0n : 1n);
      if (signature.v !== v2)
        throw new InvalidLegacyVError({ v: signature.v });
      return v2;
    })();
    serializedTransaction = [
      ...serializedTransaction,
      toHex(v),
      signature.r,
      signature.s
    ];
  } else if (chainId > 0) {
    serializedTransaction = [
      ...serializedTransaction,
      toHex(chainId),
      "0x",
      "0x"
    ];
  }
  return toRlp(serializedTransaction);
}

// node_modules/viem/_esm/utils/unit/parseUnits.js
function parseUnits(value, decimals) {
  let [integer, fraction = "0"] = value.split(".");
  const negative = integer.startsWith("-");
  if (negative)
    integer = integer.slice(1);
  fraction = fraction.replace(/(0+)$/, "");
  if (decimals === 0) {
    if (Math.round(Number(`.${fraction}`)) === 1)
      integer = `${BigInt(integer) + 1n}`;
    fraction = "";
  } else if (fraction.length > decimals) {
    const [left, unit, right] = [
      fraction.slice(0, decimals - 1),
      fraction.slice(decimals - 1, decimals),
      fraction.slice(decimals)
    ];
    const rounded = Math.round(Number(`${unit}.${right}`));
    if (rounded > 9)
      fraction = `${BigInt(left) + BigInt(1)}0`.padStart(left.length + 1, "0");
    else
      fraction = `${left}${rounded}`;
    if (fraction.length > decimals) {
      fraction = fraction.slice(1);
      integer = `${BigInt(integer) + 1n}`;
    }
    fraction = fraction.slice(0, decimals);
  } else {
    fraction = fraction.padEnd(decimals, "0");
  }
  return BigInt(`${negative ? "-" : ""}${integer}${fraction}`);
}

// node_modules/viem/_esm/utils/unit/parseGwei.js
function parseGwei(ether, unit = "wei") {
  return parseUnits(ether, gweiUnits[unit]);
}

// node_modules/viem/_esm/utils/formatters/proof.js
function formatStorageProof(storageProof) {
  return storageProof.map((proof) => ({
    ...proof,
    value: BigInt(proof.value)
  }));
}
function formatProof(proof) {
  return {
    ...proof,
    balance: proof.balance ? BigInt(proof.balance) : void 0,
    nonce: proof.nonce ? hexToNumber(proof.nonce) : void 0,
    storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
  };
}

// node_modules/viem/_esm/actions/public/getProof.js
async function getProof(client, { address, blockNumber, blockTag: blockTag_, storageKeys }) {
  const blockTag = blockTag_ ?? "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const proof = await client.request({
    method: "eth_getProof",
    params: [address, storageKeys, blockNumberHex || blockTag]
  });
  return formatProof(proof);
}

// node_modules/viem/_esm/actions/public/getStorageAt.js
async function getStorageAt(client, { address, blockNumber, blockTag = "latest", slot }) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const data = await client.request({
    method: "eth_getStorageAt",
    params: [address, slot, blockNumberHex || blockTag]
  });
  return data;
}

// node_modules/viem/_esm/actions/public/getTransaction.js
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash, index: index2 }) {
  var _a, _b, _c;
  const blockTag = blockTag_ || "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let transaction = null;
  if (hash) {
    transaction = await client.request({
      method: "eth_getTransactionByHash",
      params: [hash]
    });
  } else if (blockHash) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [blockHash, numberToHex(index2)]
    });
  } else if (blockNumberHex || blockTag) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [blockNumberHex || blockTag, numberToHex(index2)]
    });
  }
  if (!transaction)
    throw new TransactionNotFoundError({
      blockHash,
      blockNumber,
      blockTag,
      hash,
      index: index2
    });
  const format = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transaction) == null ? void 0 : _c.format) || formatTransaction;
  return format(transaction);
}

// node_modules/viem/_esm/actions/public/getTransactionConfirmations.js
async function getTransactionConfirmations(client, { hash, transactionReceipt }) {
  const [blockNumber, transaction] = await Promise.all([
    getAction(client, getBlockNumber, "getBlockNumber")({}),
    hash ? getAction(client, getTransaction, "getBlockNumber")({ hash }) : void 0
  ]);
  const transactionBlockNumber = (transactionReceipt == null ? void 0 : transactionReceipt.blockNumber) || (transaction == null ? void 0 : transaction.blockNumber);
  if (!transactionBlockNumber)
    return 0n;
  return blockNumber - transactionBlockNumber + 1n;
}

// node_modules/viem/_esm/actions/public/getTransactionReceipt.js
async function getTransactionReceipt(client, { hash }) {
  var _a, _b, _c;
  const receipt = await client.request({
    method: "eth_getTransactionReceipt",
    params: [hash]
  });
  if (!receipt)
    throw new TransactionReceiptNotFoundError({ hash });
  const format = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionReceipt) == null ? void 0 : _c.format) || formatTransactionReceipt;
  return format(receipt);
}

// node_modules/viem/_esm/actions/public/multicall.js
async function multicall(client, args) {
  var _a;
  const { allowFailure = true, batchSize: batchSize_, blockNumber, blockTag, contracts, multicallAddress: multicallAddress_ } = args;
  const batchSize = batchSize_ ?? (typeof ((_a = client.batch) == null ? void 0 : _a.multicall) === "object" && client.batch.multicall.batchSize || 1024);
  let multicallAddress = multicallAddress_;
  if (!multicallAddress) {
    if (!client.chain)
      throw new Error("client chain not configured. multicallAddress is required.");
    multicallAddress = getChainContractAddress({
      blockNumber,
      chain: client.chain,
      contract: "multicall3"
    });
  }
  const chunkedCalls = [[]];
  let currentChunk = 0;
  let currentChunkSize = 0;
  for (let i = 0; i < contracts.length; i++) {
    const { abi, address, args: args2, functionName } = contracts[i];
    try {
      const callData = encodeFunctionData({
        abi,
        args: args2,
        functionName
      });
      currentChunkSize += (callData.length - 2) / 2;
      if (
        // Check if batching is enabled.
        batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
        currentChunkSize > batchSize && // Check if the current chunk is not already empty.
        chunkedCalls[currentChunk].length > 0
      ) {
        currentChunk++;
        currentChunkSize = (callData.length - 2) / 2;
        chunkedCalls[currentChunk] = [];
      }
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData,
          target: address
        }
      ];
    } catch (err) {
      const error = getContractError(err, {
        abi,
        address,
        args: args2,
        docsPath: "/docs/contract/multicall",
        functionName
      });
      if (!allowFailure)
        throw error;
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData: "0x",
          target: address
        }
      ];
    }
  }
  const aggregate3Results = await Promise.allSettled(chunkedCalls.map((calls) => getAction(client, readContract, "readContract")({
    abi: multicall3Abi,
    address: multicallAddress,
    args: [calls],
    blockNumber,
    blockTag,
    functionName: "aggregate3"
  })));
  const results = [];
  for (let i = 0; i < aggregate3Results.length; i++) {
    const result = aggregate3Results[i];
    if (result.status === "rejected") {
      if (!allowFailure)
        throw result.reason;
      for (let j = 0; j < chunkedCalls[i].length; j++) {
        results.push({
          status: "failure",
          error: result.reason,
          result: void 0
        });
      }
      continue;
    }
    const aggregate3Result = result.value;
    for (let j = 0; j < aggregate3Result.length; j++) {
      const { returnData, success } = aggregate3Result[j];
      const { callData } = chunkedCalls[i][j];
      const { abi, address, functionName, args: args2 } = contracts[results.length];
      try {
        if (callData === "0x")
          throw new AbiDecodingZeroDataError();
        if (!success)
          throw new RawContractError({ data: returnData });
        const result2 = decodeFunctionResult({
          abi,
          args: args2,
          data: returnData,
          functionName
        });
        results.push(allowFailure ? { result: result2, status: "success" } : result2);
      } catch (err) {
        const error = getContractError(err, {
          abi,
          address,
          args: args2,
          docsPath: "/docs/contract/multicall",
          functionName
        });
        if (!allowFailure)
          throw error;
        results.push({ error, result: void 0, status: "failure" });
      }
    }
  }
  if (results.length !== contracts.length)
    throw new BaseError("multicall results mismatch");
  return results;
}

// node_modules/viem/_esm/constants/contracts.js
var universalSignatureValidatorByteCode = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";

// node_modules/viem/_esm/utils/data/isBytesEqual.js
function isBytesEqual(a_, b_) {
  const a = isHex(a_) ? toBytes(a_) : a_;
  const b = isHex(b_) ? toBytes(b_) : b_;
  return equalBytes(a, b);
}

// node_modules/viem/_esm/actions/public/verifyHash.js
async function verifyHash(client, { address, hash, signature, ...callRequest }) {
  const signatureHex = isHex(signature) ? signature : toHex(signature);
  try {
    const { data } = await getAction(client, call, "call")({
      data: encodeDeployData({
        abi: universalSignatureValidatorAbi,
        args: [address, hash, signatureHex],
        bytecode: universalSignatureValidatorByteCode
      }),
      ...callRequest
    });
    return isBytesEqual(data ?? "0x0", "0x1");
  } catch (error) {
    if (error instanceof CallExecutionError) {
      return false;
    }
    throw error;
  }
}

// node_modules/viem/_esm/actions/public/verifyMessage.js
async function verifyMessage2(client, { address, message, signature, ...callRequest }) {
  const hash = hashMessage(message);
  return verifyHash(client, {
    address,
    hash,
    signature,
    ...callRequest
  });
}

// node_modules/viem/_esm/actions/public/verifyTypedData.js
async function verifyTypedData2(client, { address, signature, message, primaryType, types, domain, ...callRequest }) {
  const hash = hashTypedData({ message, primaryType, types, domain });
  return verifyHash(client, {
    address,
    hash,
    signature,
    ...callRequest
  });
}

// node_modules/viem/_esm/actions/public/watchBlockNumber.js
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  let prevBlockNumber;
  const pollBlockNumber = () => {
    const observerId = stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed,
      pollingInterval
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => poll(async () => {
      var _a;
      try {
        const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
        if (prevBlockNumber) {
          if (blockNumber === prevBlockNumber)
            return;
          if (blockNumber - prevBlockNumber > 1 && emitMissed) {
            for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
              emit.onBlockNumber(i, prevBlockNumber);
              prevBlockNumber = i;
            }
          }
        }
        if (!prevBlockNumber || blockNumber > prevBlockNumber) {
          emit.onBlockNumber(blockNumber, prevBlockNumber);
          prevBlockNumber = blockNumber;
        }
      } catch (err) {
        (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlockNumber = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newHeads"],
          onData(data) {
            var _a;
            if (!active)
              return;
            const blockNumber = hexToBigInt((_a = data.result) == null ? void 0 : _a.number);
            onBlockNumber(blockNumber, prevBlockNumber);
            prevBlockNumber = blockNumber;
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}

// node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js
async function waitForTransactionReceipt(client, { confirmations = 1, hash, onReplaced, pollingInterval = client.pollingInterval, timeout }) {
  const observerId = stringify(["waitForTransactionReceipt", client.uid, hash]);
  let transaction;
  let replacedTransaction;
  let receipt;
  let retrying = false;
  return new Promise((resolve, reject) => {
    if (timeout)
      setTimeout(() => reject(new WaitForTransactionReceiptTimeoutError({ hash })), timeout);
    const _unobserve = observe(observerId, { onReplaced, resolve, reject }, (emit) => {
      const _unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
        emitMissed: true,
        emitOnBegin: true,
        poll: true,
        pollingInterval,
        async onBlockNumber(blockNumber_) {
          if (retrying)
            return;
          let blockNumber = blockNumber_;
          const done = (fn) => {
            _unwatch();
            fn();
            _unobserve();
          };
          try {
            if (receipt) {
              if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                return;
              done(() => emit.resolve(receipt));
              return;
            }
            if (!transaction) {
              retrying = true;
              await withRetry(async () => {
                transaction = await getAction(client, getTransaction, "getTransaction")({ hash });
                if (transaction.blockNumber)
                  blockNumber = transaction.blockNumber;
              }, {
                // exponential backoff
                delay: ({ count }) => ~~(1 << count) * 200,
                retryCount: 6
              });
              retrying = false;
            }
            receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash });
            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
              return;
            done(() => emit.resolve(receipt));
          } catch (err) {
            if (transaction && (err instanceof TransactionNotFoundError || err instanceof TransactionReceiptNotFoundError)) {
              try {
                replacedTransaction = transaction;
                const block = await getAction(client, getBlock, "getBlock")({
                  blockNumber,
                  includeTransactions: true
                });
                const replacementTransaction = block.transactions.find(({ from, nonce }) => from === replacedTransaction.from && nonce === replacedTransaction.nonce);
                if (!replacementTransaction)
                  return;
                receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({
                  hash: replacementTransaction.hash
                });
                if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                  return;
                let reason = "replaced";
                if (replacementTransaction.to === replacedTransaction.to && replacementTransaction.value === replacedTransaction.value) {
                  reason = "repriced";
                } else if (replacementTransaction.from === replacementTransaction.to && replacementTransaction.value === 0n) {
                  reason = "cancelled";
                }
                done(() => {
                  var _a;
                  (_a = emit.onReplaced) == null ? void 0 : _a.call(emit, {
                    reason,
                    replacedTransaction,
                    transaction: replacementTransaction,
                    transactionReceipt: receipt
                  });
                  emit.resolve(receipt);
                });
              } catch (err_) {
                done(() => emit.reject(err_));
              }
            } else {
              done(() => emit.reject(err));
            }
          }
        }
      });
    });
  });
}

// node_modules/viem/_esm/actions/public/watchBlocks.js
function watchBlocks(client, { blockTag = "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const includeTransactions = includeTransactions_ ?? false;
  let prevBlock;
  const pollBlocks = () => {
    const observerId = stringify([
      "watchBlocks",
      client.uid,
      emitMissed,
      emitOnBegin,
      includeTransactions,
      pollingInterval
    ]);
    return observe(observerId, { onBlock, onError }, (emit) => poll(async () => {
      var _a;
      try {
        const block = await getAction(client, getBlock, "getBlock")({
          blockTag,
          includeTransactions
        });
        if (block.number && (prevBlock == null ? void 0 : prevBlock.number)) {
          if (block.number === prevBlock.number)
            return;
          if (block.number - prevBlock.number > 1 && emitMissed) {
            for (let i = (prevBlock == null ? void 0 : prevBlock.number) + 1n; i < block.number; i++) {
              const block2 = await getAction(client, getBlock, "getBlock")({
                blockNumber: i,
                includeTransactions
              });
              emit.onBlock(block2, prevBlock);
              prevBlock = block2;
            }
          }
        }
        if (
          // If no previous block exists, emit.
          !(prevBlock == null ? void 0 : prevBlock.number) || // If the block tag is "pending" with no block number, emit.
          blockTag === "pending" && !(block == null ? void 0 : block.number) || // If the next block number is greater than the previous block number, emit.
          // We don't want to emit blocks in the past.
          block.number && block.number > prevBlock.number
        ) {
          emit.onBlock(block, prevBlock);
          prevBlock = block;
        }
      } catch (err) {
        (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlocks = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newHeads"],
          onData(data) {
            var _a, _b, _c;
            if (!active)
              return;
            const format = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.block) == null ? void 0 : _c.format) || formatBlock;
            const block = format(data.result);
            onBlock(block, prevBlock);
            prevBlock = block;
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollBlocks() : subscribeBlocks();
}

// node_modules/viem/_esm/actions/public/watchEvent.js
function watchEvent(client, { address, args, batch = true, event, events, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const strict = strict_ ?? false;
  const pollEvent = () => {
    const observerId = stringify([
      "watchEvent",
      address,
      args,
      batch,
      client.uid,
      event,
      pollingInterval
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        var _a;
        if (!initialized) {
          try {
            filter = await getAction(client, createEventFilter, "createEventFilter")({
              address,
              args,
              event,
              events,
              strict
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getLogs, "getLogs")({
                address,
                args,
                event,
                events,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const events_ = events ?? (event ? [event] : void 0);
        let topics = [];
        if (events_) {
          topics = [
            events_.flatMap((event2) => encodeEventTopics({
              abi: [event2],
              eventName: event2.name,
              args
            }))
          ];
          if (event)
            topics = topics[0];
        }
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            var _a;
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName, args: args2 } = decodeEventLog({
                abi: events_,
                data: log.data,
                topics: log.topics,
                strict
              });
              const formatted = formatLog(log, {
                args: args2,
                eventName
              });
              onLogs([formatted]);
            } catch (err) {
              let eventName;
              let isUnnamed;
              if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName = err.abiItem.name;
                isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollEvent() : subscribeEvent();
}

// node_modules/viem/_esm/actions/public/watchPendingTransactions.js
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket";
  const pollPendingTransactions = () => {
    const observerId = stringify([
      "watchPendingTransactions",
      client.uid,
      batch,
      pollingInterval
    ]);
    return observe(observerId, { onTransactions, onError }, (emit) => {
      let filter;
      const unwatch = poll(async () => {
        var _a;
        try {
          if (!filter) {
            try {
              filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
              return;
            } catch (err) {
              unwatch();
              throw err;
            }
          }
          const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          if (hashes.length === 0)
            return;
          if (batch)
            emit.onTransactions(hashes);
          else
            for (const hash of hashes)
              emit.onTransactions([hash]);
        } catch (err) {
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribePendingTransactions = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(data) {
            if (!active)
              return;
            const transaction = data.result;
            onTransactions([transaction]);
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return unsubscribe;
  };
  return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}

// node_modules/viem/_esm/clients/decorators/public.js
function publicActions(client) {
  return {
    call: (args) => call(client, args),
    createBlockFilter: () => createBlockFilter(client),
    createContractEventFilter: (args) => createContractEventFilter(client, args),
    createEventFilter: (args) => createEventFilter(client, args),
    createPendingTransactionFilter: () => createPendingTransactionFilter(client),
    estimateContractGas: (args) => estimateContractGas(client, args),
    estimateGas: (args) => estimateGas(client, args),
    getBalance: (args) => getBalance(client, args),
    getBlock: (args) => getBlock(client, args),
    getBlockNumber: (args) => getBlockNumber(client, args),
    getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
    getBytecode: (args) => getBytecode(client, args),
    getChainId: () => getChainId(client),
    getContractEvents: (args) => getContractEvents(client, args),
    getEnsAddress: (args) => getEnsAddress(client, args),
    getEnsAvatar: (args) => getEnsAvatar(client, args),
    getEnsName: (args) => getEnsName(client, args),
    getEnsResolver: (args) => getEnsResolver(client, args),
    getEnsText: (args) => getEnsText(client, args),
    getFeeHistory: (args) => getFeeHistory(client, args),
    estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
    getFilterChanges: (args) => getFilterChanges(client, args),
    getFilterLogs: (args) => getFilterLogs(client, args),
    getGasPrice: () => getGasPrice(client),
    getLogs: (args) => getLogs(client, args),
    getProof: (args) => getProof(client, args),
    estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
    getStorageAt: (args) => getStorageAt(client, args),
    getTransaction: (args) => getTransaction(client, args),
    getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
    getTransactionCount: (args) => getTransactionCount(client, args),
    getTransactionReceipt: (args) => getTransactionReceipt(client, args),
    multicall: (args) => multicall(client, args),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    readContract: (args) => readContract(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    simulateContract: (args) => simulateContract(client, args),
    verifyMessage: (args) => verifyMessage2(client, args),
    verifyTypedData: (args) => verifyTypedData2(client, args),
    uninstallFilter: (args) => uninstallFilter(client, args),
    waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
    watchBlocks: (args) => watchBlocks(client, args),
    watchBlockNumber: (args) => watchBlockNumber(client, args),
    watchContractEvent: (args) => watchContractEvent(client, args),
    watchEvent: (args) => watchEvent(client, args),
    watchPendingTransactions: (args) => watchPendingTransactions(client, args)
  };
}

// node_modules/viem/_esm/clients/createPublicClient.js
function createPublicClient(parameters) {
  const { key = "public", name = "Public Client" } = parameters;
  const client = createClient({
    ...parameters,
    key,
    name,
    type: "publicClient"
  });
  return client.extend(publicActions);
}

// node_modules/viem/_esm/actions/wallet/deployContract.js
function deployContract(walletClient, { abi, args, bytecode, ...request }) {
  const calldata = encodeDeployData({
    abi,
    args,
    bytecode
  });
  return sendTransaction(walletClient, {
    ...request,
    data: calldata
  });
}

// node_modules/viem/_esm/actions/wallet/getAddresses.js
async function getAddresses(client) {
  var _a;
  if (((_a = client.account) == null ? void 0 : _a.type) === "local")
    return [client.account.address];
  const addresses = await client.request({ method: "eth_accounts" });
  return addresses.map((address) => checksumAddress(address));
}

// node_modules/viem/_esm/actions/wallet/getPermissions.js
async function getPermissions(client) {
  const permissions = await client.request({ method: "wallet_getPermissions" });
  return permissions;
}

// node_modules/viem/_esm/actions/wallet/requestAddresses.js
async function requestAddresses(client) {
  const addresses = await client.request({ method: "eth_requestAccounts" });
  return addresses.map((address) => getAddress(address));
}

// node_modules/viem/_esm/actions/wallet/requestPermissions.js
async function requestPermissions(client, permissions) {
  return client.request({
    method: "wallet_requestPermissions",
    params: [permissions]
  });
}

// node_modules/viem/_esm/actions/wallet/signMessage.js
async function signMessage(client, { account: account_ = client.account, message }) {
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const account = parseAccount(account_);
  if (account.type === "local")
    return account.signMessage({ message });
  const message_ = (() => {
    if (typeof message === "string")
      return stringToHex(message);
    if (message.raw instanceof Uint8Array)
      return toHex(message.raw);
    return message.raw;
  })();
  return client.request({
    method: "personal_sign",
    params: [message_, account.address]
  });
}

// node_modules/viem/_esm/actions/wallet/signTransaction.js
async function signTransaction(client, args) {
  var _a, _b, _c, _d;
  const { account: account_ = client.account, chain = client.chain, ...transaction } = args;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const account = parseAccount(account_);
  assertRequest({
    account,
    ...args
  });
  const chainId = await getAction(client, getChainId, "getChainId")({});
  if (chain !== null)
    assertCurrentChain({
      currentChainId: chainId,
      chain
    });
  const formatters = (chain == null ? void 0 : chain.formatters) || ((_a = client.chain) == null ? void 0 : _a.formatters);
  const format = ((_b = formatters == null ? void 0 : formatters.transactionRequest) == null ? void 0 : _b.format) || formatTransactionRequest;
  if (account.type === "local")
    return account.signTransaction({
      ...transaction,
      chainId
    }, { serializer: (_d = (_c = client.chain) == null ? void 0 : _c.serializers) == null ? void 0 : _d.transaction });
  return await client.request({
    method: "eth_signTransaction",
    params: [
      {
        ...format(transaction),
        chainId: numberToHex(chainId),
        from: account.address
      }
    ]
  });
}

// node_modules/viem/_esm/actions/wallet/signTypedData.js
async function signTypedData(client, { account: account_ = client.account, domain, message, primaryType, types: types_ }) {
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const account = parseAccount(account_);
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...types_
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  if (account.type === "local")
    return account.signTypedData({
      domain,
      primaryType,
      types,
      message
    });
  const typedData = stringify({ domain: domain ?? {}, primaryType, types, message }, (_, value) => isHex(value) ? value.toLowerCase() : value);
  return client.request({
    method: "eth_signTypedData_v4",
    params: [account.address, typedData]
  });
}

// node_modules/viem/_esm/actions/wallet/switchChain.js
async function switchChain(client, { id: id2 }) {
  await client.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: numberToHex(id2)
      }
    ]
  });
}

// node_modules/viem/_esm/actions/wallet/watchAsset.js
async function watchAsset(client, params) {
  const added = await client.request({
    method: "wallet_watchAsset",
    params
  });
  return added;
}

// node_modules/viem/_esm/clients/decorators/wallet.js
function walletActions(client) {
  return {
    addChain: (args) => addChain(client, args),
    deployContract: (args) => deployContract(client, args),
    getAddresses: () => getAddresses(client),
    getChainId: () => getChainId(client),
    getPermissions: () => getPermissions(client),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    requestAddresses: () => requestAddresses(client),
    requestPermissions: (args) => requestPermissions(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    sendTransaction: (args) => sendTransaction(client, args),
    signMessage: (args) => signMessage(client, args),
    signTransaction: (args) => signTransaction(client, args),
    signTypedData: (args) => signTypedData(client, args),
    switchChain: (args) => switchChain(client, args),
    watchAsset: (args) => watchAsset(client, args),
    writeContract: (args) => writeContract(client, args)
  };
}

// node_modules/viem/_esm/clients/createWalletClient.js
function createWalletClient(parameters) {
  const { key = "wallet", name = "Wallet Client", transport } = parameters;
  const client = createClient({
    ...parameters,
    key,
    name,
    transport: (opts) => transport({ ...opts, retryCount: 0 }),
    type: "walletClient"
  });
  return client.extend(walletActions);
}

// node_modules/viem/_esm/clients/transports/webSocket.js
function webSocket2(url, config = {}) {
  const { key = "webSocket", name = "WebSocket JSON-RPC", retryDelay } = config;
  return ({ chain, retryCount: retryCount_, timeout: timeout_ }) => {
    var _a;
    const retryCount = config.retryCount ?? retryCount_;
    const timeout = timeout_ ?? config.timeout ?? 1e4;
    const url_ = url || ((_a = chain == null ? void 0 : chain.rpcUrls.default.webSocket) == null ? void 0 : _a[0]);
    if (!url_)
      throw new UrlRequiredError();
    return createTransport({
      key,
      name,
      async request({ method, params }) {
        const body = { method, params };
        const socket = await getSocket(url_);
        const { error, result } = await rpc.webSocketAsync(socket, {
          body,
          timeout
        });
        if (error)
          throw new RpcRequestError({
            body,
            error,
            url: url_
          });
        return result;
      },
      retryCount,
      retryDelay,
      timeout,
      type: "webSocket"
    }, {
      getSocket() {
        return getSocket(url_);
      },
      async subscribe({ params, onData, onError }) {
        const socket = await getSocket(url_);
        const { result: subscriptionId } = await new Promise((resolve, reject) => rpc.webSocket(socket, {
          body: {
            method: "eth_subscribe",
            params
          },
          onResponse(response) {
            if (response.error) {
              reject(response.error);
              onError == null ? void 0 : onError(response.error);
              return;
            }
            if (typeof response.id === "number") {
              resolve(response);
              return;
            }
            if (response.method !== "eth_subscription")
              return;
            onData(response.params);
          }
        }));
        return {
          subscriptionId,
          async unsubscribe() {
            return new Promise((resolve) => rpc.webSocket(socket, {
              body: {
                method: "eth_unsubscribe",
                params: [subscriptionId]
              },
              onResponse: resolve
            }));
          }
        };
      }
    });
  };
}

// node_modules/viem/_esm/constants/number.js
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint256 = 2n ** 256n - 1n;

// node_modules/viem/_esm/utils/encoding/toRlp.js
function toRlp(bytes, to = "hex") {
  const encodable = getEncodable(bytes);
  const cursor = createCursor(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (to === "hex")
    return bytesToHex(cursor.bytes);
  return cursor.bytes;
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode } of list) {
        encode(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/viem/_esm/chains/celo/serializers.js
var serializeTransactionCelo = (tx, signature) => {
  if (isCIP64(tx)) {
    return serializeTransactionCIP64(tx, signature);
  } else if (isCIP42(tx)) {
    return serializeTransactionCIP42(tx, signature);
  } else {
    return serializeTransaction(tx, signature);
  }
};
var serializersCelo = {
  transaction: serializeTransactionCelo
};
function serializeTransactionCIP42(transaction, signature) {
  assertTransactionCIP42(transaction);
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, gatewayFeeRecipient, gatewayFee, data } = transaction;
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    feeCurrency ?? "0x",
    gatewayFeeRecipient ?? "0x",
    gatewayFee ? toHex(gatewayFee) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializeAccessList(accessList)
  ];
  if (signature) {
    serializedTransaction.push(
      signature.v === 27n ? "0x" : toHex(1),
      // yParity
      trim(signature.r),
      trim(signature.s)
    );
  }
  return concatHex([
    "0x7c",
    toRlp(serializedTransaction)
  ]);
}
function serializeTransactionCIP64(transaction, signature) {
  assertTransactionCIP64(transaction);
  const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
  const serializedTransaction = [
    toHex(chainId),
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    serializeAccessList(accessList),
    feeCurrency
  ];
  if (signature) {
    serializedTransaction.push(
      signature.v === 27n ? "0x" : toHex(1),
      // yParity
      trim(signature.r),
      trim(signature.s)
    );
  }
  return concatHex([
    "0x7b",
    toRlp(serializedTransaction)
  ]);
}
var MAX_MAX_FEE_PER_GAS = 2n ** 256n - 1n;
function assertTransactionCIP42(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency, gatewayFee, gatewayFeeRecipient } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (gasPrice)
    throw new BaseError("`gasPrice` is not a valid CIP-42 Transaction attribute.");
  if (isPresent(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (isPresent(maxPriorityFeePerGas) && isPresent(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
  if (isPresent(gatewayFee) && isEmpty(gatewayFeeRecipient) || isPresent(gatewayFeeRecipient) && isEmpty(gatewayFee)) {
    throw new BaseError("`gatewayFee` and `gatewayFeeRecipient` must be provided together.");
  }
  if (isPresent(feeCurrency) && !isAddress(feeCurrency)) {
    throw new BaseError("`feeCurrency` MUST be a token address for CIP-42 transactions.");
  }
  if (isPresent(gatewayFeeRecipient) && !isAddress(gatewayFeeRecipient)) {
    throw new InvalidAddressError(gatewayFeeRecipient);
  }
  if (isEmpty(feeCurrency) && isEmpty(gatewayFeeRecipient)) {
    throw new BaseError("Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.");
  }
}
function assertTransactionCIP64(transaction) {
  const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (gasPrice)
    throw new BaseError("`gasPrice` is not a valid CIP-64 Transaction attribute.");
  if (isPresent(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS)
    throw new FeeCapTooHighError({ maxFeePerGas });
  if (isPresent(maxPriorityFeePerGas) && isPresent(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas)
    throw new TipAboveFeeCapError({ maxFeePerGas, maxPriorityFeePerGas });
  if (isPresent(feeCurrency) && !(feeCurrency == null ? void 0 : feeCurrency.startsWith("0x"))) {
    throw new BaseError("`feeCurrency` MUST be a token address for CIP-64 transactions.");
  }
  if (isEmpty(feeCurrency)) {
    throw new BaseError("`feeCurrency` must be provided for CIP-64 transactions.");
  }
}

// node_modules/viem/_esm/chains/definitions/celo.js
var celo = defineChain({
  id: 42220,
  name: "Celo",
  network: "celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO"
  },
  rpcUrls: {
    default: { http: ["https://forno.celo.org"] },
    infura: {
      http: ["https://celo-mainnet.infura.io/v3"]
    },
    public: {
      http: ["https://forno.celo.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/mainnet"
    },
    etherscan: { name: "CeloScan", url: "https://celoscan.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599
    }
  },
  testnet: false
}, {
  formatters: formattersCelo,
  serializers: serializersCelo
});

// node_modules/viem/_esm/chains/definitions/celoAlfajores.js
var celoAlfajores = defineChain({
  id: 44787,
  name: "Alfajores",
  network: "celo-alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "A-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    },
    infura: {
      http: ["https://celo-alfajores.infura.io/v3"]
    },
    public: {
      http: ["https://alfajores-forno.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/alfajores"
    },
    etherscan: { name: "CeloScan", url: "https://alfajores.celoscan.io/" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14569001
    }
  },
  testnet: true
}, {
  formatters: formattersCelo,
  serializers: serializersCelo
});

// node_modules/viem/_esm/chains/definitions/chiliz.js
var chiliz = defineChain({
  id: 88888,
  name: "Chiliz Chain",
  network: "chiliz-chain",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"]
    },
    public: {
      http: ["https://rpc.ankr.com/chiliz", "https://chiliz.publicnode.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "https://scan.chiliz.com"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/celoCannoli.js
var celoCannoli = defineChain({
  id: 17323,
  name: "Cannoli",
  network: "celo-cannoli",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "C-CELO"
  },
  rpcUrls: {
    default: {
      http: ["https://forno.cannoli.celo-testnet.org"]
    },
    public: {
      http: ["https://forno.cannoli.celo-testnet.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/cannoli"
    }
  },
  contracts: {
    multicall3: {
      address: "0x5Acb0aa8BF4E8Ff0d882Ee187140713C12BF9718",
      blockCreated: 87429
    }
  },
  testnet: true
}, {
  formatters: formattersCelo,
  serializers: serializersCelo
});

// node_modules/viem/_esm/chains/definitions/classic.js
var classic = defineChain({
  id: 61,
  name: "Ethereum Classic",
  network: "classic",
  nativeCurrency: {
    decimals: 18,
    name: "ETC",
    symbol: "ETC"
  },
  rpcUrls: {
    default: { http: ["https://etc.rivet.link"] },
    public: { http: ["https://etc.rivet.link"] }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.com/etc/mainnet"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/confluxESpace.js
var confluxESpace = defineChain({
  id: 1030,
  name: "Conflux eSpace",
  network: "cfx-espace",
  nativeCurrency: { name: "Conflux", symbol: "CFX", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://evm.confluxrpc.org"]
    },
    public: {
      http: ["https://evm.confluxrpc.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evm.confluxscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 68602935
    }
  }
});

// node_modules/viem/_esm/chains/definitions/coreDao.js
var coreDao = defineChain({
  id: 1116,
  name: "Core Dao",
  network: "coreDao",
  nativeCurrency: {
    decimals: 18,
    name: "Core",
    symbol: "CORE"
  },
  rpcUrls: {
    public: { http: ["https://rpc.coredao.org"] },
    default: { http: ["https://rpc.coredao.org"] }
  },
  blockExplorers: {
    default: { name: "CoreDao", url: "https://scan.coredao.org" },
    etherscan: { name: "CoreDao", url: "https://scan.coredao.org" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 11907934
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/cronos.js
var cronos = defineChain({
  id: 25,
  name: "Cronos Mainnet",
  network: "cronos",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos",
    symbol: "CRO"
  },
  rpcUrls: {
    default: { http: ["https://evm.cronos.org"] },
    public: { http: ["https://evm.cronos.org"] }
  },
  blockExplorers: {
    default: { name: "Cronoscan", url: "https://cronoscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1963112
    }
  }
});

// node_modules/viem/_esm/chains/definitions/cronosTestnet.js
var cronosTestnet = defineChain({
  id: 338,
  name: "Cronos Testnet",
  network: "cronos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CRO",
    symbol: "tCRO"
  },
  rpcUrls: {
    default: { http: ["https://evm-t3.cronos.org"] },
    public: { http: ["https://evm-t3.cronos.org"] }
  },
  blockExplorers: {
    default: {
      name: "Cronos Explorer",
      url: "https://cronos.org/explorer/testnet3"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 10191251
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/crossbell.js
var crossbell = defineChain({
  id: 3737,
  network: "crossbell",
  name: "Crossbell",
  nativeCurrency: {
    decimals: 18,
    name: "CSB",
    symbol: "CSB"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.crossbell.io"]
    },
    public: {
      http: ["https://rpc.crossbell.io"]
    }
  },
  blockExplorers: {
    default: { name: "CrossScan", url: "https://scan.crossbell.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 38246031
    }
  }
});

// node_modules/viem/_esm/chains/definitions/dfk.js
var dfk = defineChain({
  id: 53935,
  name: "DFK Chain",
  network: "dfk",
  nativeCurrency: {
    decimals: 18,
    name: "Jewel",
    symbol: "JEWEL"
  },
  rpcUrls: {
    default: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]
    },
    public: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms"
    },
    default: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/dogechain.js
var dogechain = defineChain({
  id: 2e3,
  name: "Dogechain",
  network: "dogechain",
  nativeCurrency: {
    decimals: 18,
    name: "Dogechain",
    symbol: "DC"
  },
  rpcUrls: {
    default: { http: ["https://rpc.dogechain.dog"] },
    public: { http: ["https://rpc.dogechain.dog"] }
  },
  blockExplorers: {
    etherscan: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog"
    },
    default: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/edgeware.js
var edgeware = defineChain({
  id: 2021,
  name: "Edgeware EdgeEVM Mainnet",
  network: "edgeware",
  nativeCurrency: {
    decimals: 18,
    name: "Edgeware",
    symbol: "EDG"
  },
  rpcUrls: {
    default: { http: ["https://edgeware-evm.jelliedowl.net"] },
    public: { http: ["https://edgeware-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    etherscan: { name: "Edgscan by Bharathcoorg", url: "https://edgscan.live" },
    default: { name: "Edgscan by Bharathcoorg", url: "https://edgscan.live" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18117872
    }
  }
});

// node_modules/viem/_esm/chains/definitions/edgewareTestnet.js
var edgewareTestnet = defineChain({
  id: 2022,
  name: "Beresheet BereEVM Testnet",
  network: "edgewareTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Testnet EDG",
    symbol: "tEDG"
  },
  rpcUrls: {
    default: { http: ["https://beresheet-evm.jelliedowl.net"] },
    public: { http: ["https://beresheet-evm.jelliedowl.net"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Edgscan by Bharathcoorg",
      url: "https://testnet.edgscan.live"
    },
    default: {
      name: "Edgscan by Bharathcoorg",
      url: "https://testnet.edgscan.live"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/eos.js
var eos = defineChain({
  id: 17777,
  name: "EOS EVM",
  network: "eos",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.evm.eosnetwork.com"] },
    public: { http: ["https://api.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    etherscan: {
      name: "EOS EVM Explorer",
      url: "https://explorer.evm.eosnetwork.com"
    },
    default: {
      name: "EOS EVM Explorer",
      url: "https://explorer.evm.eosnetwork.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7943933
    }
  }
});

// node_modules/viem/_esm/chains/definitions/eosTestnet.js
var eosTestnet = defineChain({
  id: 15557,
  name: "EOS EVM Testnet",
  network: "eos",
  nativeCurrency: {
    decimals: 18,
    name: "EOS",
    symbol: "EOS"
  },
  rpcUrls: {
    default: { http: ["https://api.testnet.evm.eosnetwork.com"] },
    public: { http: ["https://api.testnet.evm.eosnetwork.com"] }
  },
  blockExplorers: {
    etherscan: {
      name: "EOS EVM Testnet Explorer",
      url: "https://explorer.testnet.evm.eosnetwork.com"
    },
    default: {
      name: "EOS EVM Testnet Explorer",
      url: "https://explorer.testnet.evm.eosnetwork.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9067940
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/evmos.js
var evmos = defineChain({
  id: 9001,
  name: "Evmos",
  network: "evmos",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.org:8545"] },
    public: { http: ["https://eth.bd.evmos.org:8545"] }
  },
  blockExplorers: {
    default: { name: "Evmos Block Explorer", url: "https://escan.live" }
  }
});

// node_modules/viem/_esm/chains/definitions/evmosTestnet.js
var evmosTestnet = defineChain({
  id: 9e3,
  name: "Evmos Testnet",
  network: "evmos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS"
  },
  rpcUrls: {
    default: { http: ["https://eth.bd.evmos.dev:8545"] },
    public: { http: ["https://eth.bd.evmos.dev:8545"] }
  },
  blockExplorers: {
    default: {
      name: "Evmos Testnet Block Explorer",
      url: "https://evm.evmos.dev/"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/ekta.js
var ekta = defineChain({
  id: 1994,
  name: "Ekta",
  network: "ekta",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    public: { http: ["https://main.ekta.io"] },
    default: { http: ["https://main.ekta.io"] }
  },
  blockExplorers: {
    default: { name: "Ektascan", url: "https://ektascan.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/ektaTestnet.js
var ektaTestnet = defineChain({
  id: 1004,
  name: "Ekta Testnet",
  network: "ekta-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "EKTA",
    symbol: "EKTA"
  },
  rpcUrls: {
    public: { http: ["https://test.ekta.io:8545"] },
    default: { http: ["https://test.ekta.io:8545"] }
  },
  blockExplorers: {
    default: { name: "Test Ektascan", url: "https://test.ektascan.io" }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/fantom.js
var fantom = defineChain({
  id: 250,
  name: "Fantom",
  network: "fantom",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.ankr.com/fantom"] },
    public: { http: ["https://rpc.ankr.com/fantom"] }
  },
  blockExplorers: {
    etherscan: { name: "FTMScan", url: "https://ftmscan.com" },
    default: { name: "FTMScan", url: "https://ftmscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 33001987
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fantomTestnet.js
var fantomTestnet = defineChain({
  id: 4002,
  name: "Fantom Testnet",
  network: "fantom-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.fantom.network"] },
    public: { http: ["https://rpc.testnet.fantom.network"] }
  },
  blockExplorers: {
    etherscan: { name: "FTMScan", url: "https://testnet.ftmscan.com" },
    default: { name: "FTMScan", url: "https://testnet.ftmscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 8328688
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fibo.js
var fibo = defineChain({
  id: 12306,
  name: "Fibo Chain",
  network: "fibochain",
  nativeCurrency: {
    decimals: 18,
    name: "fibo",
    symbol: "FIBO"
  },
  rpcUrls: {
    default: { http: ["https://network.hzroc.art"] },
    public: { http: ["https://network.hzroc.art"] }
  },
  blockExplorers: {
    default: { name: "FiboScan", url: "https://scan.fibochain.org" }
  }
});

// node_modules/viem/_esm/chains/definitions/filecoin.js
var filecoin = defineChain({
  id: 314,
  name: "Filecoin Mainnet",
  network: "filecoin-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "filecoin",
    symbol: "FIL"
  },
  rpcUrls: {
    default: { http: ["https://api.node.glif.io/rpc/v1"] },
    public: { http: ["https://api.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: { name: "Filfox", url: "https://filfox.info/en" },
    filscan: { name: "Filscan", url: "https://filscan.io" },
    filscout: { name: "Filscout", url: "https://filscout.io/en" },
    glif: { name: "Glif", url: "https://explorer.glif.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/filecoinCalibration.js
var filecoinCalibration = defineChain({
  id: 314159,
  name: "Filecoin Calibration",
  network: "filecoin-calibration",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.calibration.node.glif.io/rpc/v1"] },
    public: { http: ["https://api.calibration.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: { name: "Filscan", url: "https://calibration.filscan.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/filecoinHyperspace.js
var filecoinHyperspace = defineChain({
  id: 3141,
  name: "Filecoin Hyperspace",
  network: "filecoin-hyperspace",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL"
  },
  rpcUrls: {
    default: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] },
    public: { http: ["https://api.hyperspace.node.glif.io/rpc/v1"] }
  },
  blockExplorers: {
    default: { name: "Filfox", url: "https://hyperspace.filfox.info/en" },
    filscan: { name: "Filscan", url: "https://hyperspace.filscan.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/flare.js
var flare = defineChain({
  id: 14,
  name: "Flare Mainnet",
  network: "flare-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "flare",
    symbol: "FLR"
  },
  rpcUrls: {
    default: { http: ["https://flare-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://flare-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Flare Explorer",
      url: "https://flare-explorer.flare.network"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/flareTestnet.js
var flareTestnet = defineChain({
  id: 114,
  name: "Coston2",
  network: "coston2",
  nativeCurrency: {
    decimals: 18,
    name: "coston2flare",
    symbol: "C2FLR"
  },
  rpcUrls: {
    default: { http: ["https://coston2-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://coston2-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston2 Explorer",
      url: "https://coston2-explorer.flare.network"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/foundry.js
var foundry = defineChain({
  id: 31337,
  name: "Foundry",
  network: "foundry",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    },
    public: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"]
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fuse.js
var fuse = defineChain({
  id: 122,
  name: "Fuse",
  network: "fuse",
  nativeCurrency: { name: "Fuse", symbol: "FUSE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fuse.io"] },
    public: { http: ["https://rpc.fuse.io"] }
  },
  blockExplorers: {
    default: { name: "Fuse Explorer", url: "https://explorer.fuse.io" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 16146628
    }
  }
});

// node_modules/viem/_esm/chains/definitions/fuseSparknet.js
var fuseSparknet = defineChain({
  id: 123,
  name: "Fuse Sparknet",
  network: "fuse",
  nativeCurrency: { name: "Spark", symbol: "SPARK", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc.fusespark.io"] },
    public: { http: ["https://rpc.fusespark.io"] }
  },
  blockExplorers: {
    default: {
      name: "Sparkent Explorer",
      url: "https://explorer.fusespark.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/iotex.js
var iotex = defineChain({
  id: 4689,
  name: "IoTeX",
  network: "iotex",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"]
    },
    public: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: { name: "IoTeXScan", url: "https://iotexscan.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/iotexTestnet.js
var iotexTestnet = defineChain({
  id: 4690,
  name: "IoTeX Testnet",
  network: "iotex-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX"
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"]
    },
    public: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"]
    }
  },
  blockExplorers: {
    default: { name: "IoTeXScan", url: "https://testnet.iotexscan.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/gobi.js
var gobi = defineChain({
  id: 1663,
  name: "Horizen Gobi Testnet",
  network: "gobi",
  nativeCurrency: {
    decimals: 18,
    name: "Test ZEN",
    symbol: "tZEN"
  },
  rpcUrls: {
    public: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] },
    default: { http: ["https://gobi-testnet.horizenlabs.io/ethv1"] }
  },
  blockExplorers: {
    default: { name: "Gobi Explorer", url: "https://gobi-explorer.horizen.io" }
  },
  contracts: {},
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/goerli.js
var goerli = defineChain({
  id: 5,
  network: "goerli",
  name: "Goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://goerli.infura.io/v3"],
      webSocket: ["wss://goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    },
    public: {
      http: ["https://rpc.ankr.com/eth_goerli"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0x56522D00C410a43BFfDF00a9A569489297385790",
      blockCreated: 8765204
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/gnosis.js
var gnosis = defineChain({
  id: 100,
  name: "Gnosis",
  network: "gnosis",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.gnosischain.com"],
      webSocket: ["wss://rpc.gnosischain.com/wss"]
    },
    public: {
      http: ["https://rpc.gnosischain.com"],
      webSocket: ["wss://rpc.gnosischain.com/wss"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Gnosisscan",
      url: "https://gnosisscan.io"
    },
    default: {
      name: "Gnosis Chain Explorer",
      url: "https://blockscout.com/xdai/mainnet"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 21022491
    }
  }
});

// node_modules/viem/_esm/chains/definitions/gnosisChiado.js
var gnosisChiado = defineChain({
  id: 10200,
  name: "Gnosis Chiado",
  network: "chiado",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.chiadochain.net"],
      webSocket: ["wss://rpc.chiadochain.net/wss"]
    },
    public: {
      http: ["https://rpc.chiadochain.net"],
      webSocket: ["wss://rpc.chiadochain.net/wss"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.chiadochain.net"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 4967313
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/hardhat.js
var hardhat = defineChain({
  id: 31337,
  name: "Hardhat",
  network: "hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
    public: { http: ["http://127.0.0.1:8545"] }
  }
});

// node_modules/viem/_esm/chains/definitions/harmonyOne.js
var harmonyOne = defineChain({
  id: 16666e5,
  name: "Harmony One",
  network: "harmony",
  nativeCurrency: {
    name: "Harmony",
    symbol: "ONE",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://rpc.ankr.com/harmony"] },
    default: { http: ["https://rpc.ankr.com/harmony"] }
  },
  blockExplorers: {
    default: { name: "Harmony Explorer", url: "https://explorer.harmony.one" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 24185753
    }
  }
});

// node_modules/viem/_esm/chains/definitions/haqqMainnet.js
var haqqMainnet = defineChain({
  id: 11235,
  name: "HAQQ Mainnet",
  network: "haqq-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLM"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.haqq.network"]
    },
    public: {
      http: ["https://rpc.eth.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.haqq.network"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/haqqTestedge2.js
var haqqTestedge2 = defineChain({
  id: 54211,
  name: "HAQQ Testedge 2",
  network: "haqq-testedge-2",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLMT"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.testedge2.haqq.network"]
    },
    public: {
      http: ["https://rpc.eth.testedge2.haqq.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.testedge2.haqq.network"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/holesky.js
var holesky = defineChain({
  id: 17e3,
  network: "holesky",
  name: "Holesky",
  nativeCurrency: { name: "Holesky Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky.publicnode.com"]
    },
    public: {
      http: ["https://ethereum-holesky.publicnode.com"]
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 77
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/kava.js
var kava = defineChain({
  id: 2222,
  name: "Kava EVM",
  network: "kava-mainnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://evm.kava.io"] },
    default: { http: ["https://evm.kava.io"] }
  },
  blockExplorers: {
    default: { name: "Kava EVM Explorer", url: "https://kavascan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3661165
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/kavaTestnet.js
var kavaTestnet = defineChain({
  id: 2221,
  name: "Kava EVM Testnet",
  network: "kava-testnet",
  nativeCurrency: {
    name: "Kava",
    symbol: "KAVA",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://evm.testnet.kava.io"] },
    default: { http: ["https://evm.testnet.kava.io"] }
  },
  blockExplorers: {
    default: {
      name: "Kava EVM Testnet Explorer",
      url: "https://testnet.kavascan.com/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xDf1D724A7166261eEB015418fe8c7679BBEa7fd6",
      blockCreated: 7242179
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/klaytn.js
var klaytn = defineChain({
  id: 8217,
  name: "Klaytn",
  network: "klaytn",
  nativeCurrency: {
    decimals: 18,
    name: "Klaytn",
    symbol: "KLAY"
  },
  rpcUrls: {
    default: { http: ["https://klaytn.drpc.org"] },
    public: { http: ["https://klaytn.drpc.org"] }
  },
  blockExplorers: {
    etherscan: { name: "KlaytnScope", url: "https://scope.klaytn.com" },
    default: { name: "KlaytnScope", url: "https://scope.klaytn.com" }
  }
});

// node_modules/viem/_esm/chains/definitions/kroma.js
var kroma = defineChain({
  id: 255,
  network: "kroma",
  name: "Kroma",
  nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.kroma.network"]
    },
    public: {
      http: ["https://api.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Explorer",
      url: "https://blockscout.kroma.network"
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/kromaSepolia.js
var kromaSepolia = defineChain({
  id: 2358,
  network: "kroma-sepolia",
  name: "Kroma Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.sepolia.kroma.network"]
    },
    public: {
      http: ["https://api.sepolia.kroma.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Kroma Sepolia Explorer",
      url: "https://blockscout.sepolia.kroma.network"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/linea.js
var linea = defineChain({
  id: 59144,
  name: "Linea Mainnet",
  network: "linea-mainnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    infura: {
      http: ["https://linea-mainnet.infura.io/v3"],
      webSocket: ["wss://linea-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    },
    public: {
      http: ["https://rpc.linea.build"],
      webSocket: ["wss://rpc.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://lineascan.build"
    },
    etherscan: {
      name: "Etherscan",
      url: "https://lineascan.build"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://explorer.linea.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 42
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/lineaTestnet.js
var lineaTestnet = defineChain({
  id: 59140,
  name: "Linea Goerli Testnet",
  network: "linea-testnet",
  nativeCurrency: { name: "Linea Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    infura: {
      http: ["https://linea-goerli.infura.io/v3"],
      webSocket: ["wss://linea-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"]
    },
    public: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://goerli.lineascan.build"
    },
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.lineascan.build"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://explorer.goerli.linea.build"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 498623
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/localhost.js
var localhost = defineChain({
  id: 1337,
  name: "Localhost",
  network: "localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["http://127.0.0.1:8545"] },
    public: { http: ["http://127.0.0.1:8545"] }
  }
});

// node_modules/viem/_esm/chains/definitions/lukso.js
var lukso = defineChain({
  id: 42,
  network: "lukso",
  name: "LUKSO",
  nativeCurrency: {
    name: "LUKSO",
    symbol: "LYX",
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
    },
    public: {
      http: ["https://rpc.mainnet.lukso.network"],
      webSocket: ["wss://ws-rpc.mainnet.lukso.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "LUKSO Mainnet Explorer",
      url: "https://explorer.execution.mainnet.lukso.network"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mainnet.js
var mainnet = defineChain({
  id: 1,
  network: "homestead",
  name: "Ethereum",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://mainnet.infura.io/v3"],
      webSocket: ["wss://mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://cloudflare-eth.com"]
    },
    public: {
      http: ["https://cloudflare-eth.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://etherscan.io"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    ensUniversalResolver: {
      address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
      blockCreated: 16966585
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/viem/_esm/chains/definitions/manta.js
var manta = defineChain({
  id: 169,
  name: "Manta Pacific Mainnet",
  network: "manta",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://pacific-rpc.manta.network/http"] },
    public: { http: ["https://pacific-rpc.manta.network/http"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Manta Explorer",
      url: "https://pacific-explorer.manta.network"
    },
    default: {
      name: "Manta Explorer",
      url: "https://pacific-explorer.manta.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 332890
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mantaTestnet.js
var mantaTestnet = defineChain({
  id: 3441005,
  name: "Manta Pacific Testnet",
  network: "manta-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH"
  },
  rpcUrls: {
    default: { http: ["https://manta-testnet.calderachain.xyz/http"] },
    public: { http: ["https://manta-testnet.calderachain.xyz/http"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Manta Testnet Explorer",
      url: "https://pacific-explorer.testnet.manta.network"
    },
    default: {
      name: "Manta Testnet Explorer",
      url: "https://pacific-explorer.testnet.manta.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",
      blockCreated: 419915
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/mantle.js
var mantle = defineChain({
  id: 5e3,
  name: "Mantle",
  network: "mantle",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.mantle.xyz"] },
    public: { http: ["https://rpc.mantle.xyz"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Mantle Explorer",
      url: "https://explorer.mantle.xyz"
    },
    default: {
      name: "Mantle Explorer",
      url: "https://explorer.mantle.xyz"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 304717
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mantleTestnet.js
var mantleTestnet = defineChain({
  id: 5001,
  name: "Mantle Testnet",
  network: "mantle",
  nativeCurrency: {
    decimals: 18,
    name: "MNT",
    symbol: "MNT"
  },
  rpcUrls: {
    default: { http: ["https://rpc.testnet.mantle.xyz"] },
    public: { http: ["https://rpc.testnet.mantle.xyz"] }
  },
  blockExplorers: {
    etherscan: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz"
    },
    default: {
      name: "Mantle Testnet Explorer",
      url: "https://explorer.testnet.mantle.xyz"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/meter.js
var meter = defineChain({
  id: 82,
  name: "Meter",
  network: "meter",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpc.meter.io"] },
    public: { http: ["https://rpc.meter.io"] }
  },
  blockExplorers: {
    default: { name: "MeterScan", url: "https://scan.meter.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/meterTestnet.js
var meterTestnet = defineChain({
  id: 83,
  name: "Meter Testnet",
  network: "meter-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MTR",
    symbol: "MTR"
  },
  rpcUrls: {
    default: { http: ["https://rpctest.meter.io"] },
    public: { http: ["https://rpctest.meter.io"] }
  },
  blockExplorers: {
    default: {
      name: "MeterTestnetScan",
      url: "https://scan-warringstakes.meter.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/metis.js
var metis = defineChain({
  id: 1088,
  name: "Metis",
  network: "andromeda",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://andromeda.metis.io/?owner=1088"] },
    public: { http: ["https://andromeda.metis.io/?owner=1088"] }
  },
  blockExplorers: {
    default: {
      name: "Andromeda Explorer",
      url: "https://andromeda-explorer.metis.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2338552
    }
  }
});

// node_modules/viem/_esm/chains/definitions/metisGoerli.js
var metisGoerli = defineChain({
  id: 599,
  name: "Metis Goerli",
  network: "metis-goerli",
  nativeCurrency: {
    decimals: 18,
    name: "Metis Goerli",
    symbol: "METIS"
  },
  rpcUrls: {
    default: { http: ["https://goerli.gateway.metisdevops.link"] },
    public: { http: ["https://goerli.gateway.metisdevops.link"] }
  },
  blockExplorers: {
    default: {
      name: "Metis Goerli Explorer",
      url: "https://goerli.explorer.metisdevops.link"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1006207
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mev.js
var mev = defineChain({
  id: 7518,
  network: "MEVerse",
  name: "MEVerse Chain Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversemainnet.io"]
    },
    public: {
      http: ["https://rpc.meversemainnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://www.meversescan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 86881340
    }
  }
});

// node_modules/viem/_esm/chains/definitions/mevTestnet.js
var mevTestnet = defineChain({
  id: 4759,
  network: "MEVerse Testnet",
  name: "MEVerse Chain Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "MEVerse",
    symbol: "MEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.meversetestnet.io"]
    },
    public: {
      http: ["https://rpc.meversetestnet.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.meversescan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 64371115
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/modeTestnet.js
var modeTestnet = defineChain({
  id: 919,
  name: "Mode Testnet",
  network: "mode-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.mode.network"]
    },
    public: {
      http: ["https://sepolia.mode.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia.explorer.mode.network"
    }
  },
  contracts: {
    multicall3: {
      address: "0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",
      blockCreated: 3019007
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/moonbaseAlpha.js
var moonbaseAlpha = defineChain({
  id: 1287,
  name: "Moonbase Alpha",
  network: "moonbase-alpha",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"]
    },
    public: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io"
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1850686
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/moonbeam.js
var moonbeam = defineChain({
  id: 1284,
  name: "Moonbeam",
  network: "moonbeam",
  nativeCurrency: {
    decimals: 18,
    name: "GLMR",
    symbol: "GLMR"
  },
  rpcUrls: {
    public: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"]
    },
    default: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonscan.io"
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 609002
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/moonbeamDev.js
var moonbeamDev = defineChain({
  id: 1281,
  name: "Moonbeam Development Node",
  network: "development",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV"
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:9944"],
      webSocket: ["wss://127.0.0.1:9944"]
    },
    public: {
      http: ["http://127.0.0.1:9944"],
      webSocket: ["wss://127.0.0.1:9944"]
    }
  }
});

// node_modules/viem/_esm/chains/definitions/moonriver.js
var moonriver = defineChain({
  id: 1285,
  name: "Moonriver",
  network: "moonriver",
  nativeCurrency: {
    decimals: 18,
    name: "MOVR",
    symbol: "MOVR"
  },
  rpcUrls: {
    public: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"]
    },
    default: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io"
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1597904
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/neonDevnet.js
var neonDevnet = defineChain({
  id: 245022926,
  network: "neonDevnet",
  name: "Neon EVM DevNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://devnet.neonevm.org"]
    },
    public: {
      http: ["https://devnet.neonevm.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://devnet.neonscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 205206112
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/neonMainnet.js
var neonMainnet = defineChain({
  id: 245022934,
  network: "neonMainnet",
  name: "Neon EVM MainNet",
  nativeCurrency: { name: "NEON", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://neon-proxy-mainnet.solana.p2p.org"]
    },
    public: {
      http: ["https://neon-proxy-mainnet.solana.p2p.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://neonscan.org"
    }
  },
  contracts: {},
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/nexi.js
var nexi = defineChain({
  id: 4242,
  name: "Nexi",
  network: "nexi",
  nativeCurrency: { name: "Nexi", symbol: "NEXI", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.chain.nexi.technology"]
    },
    public: {
      http: ["https://rpc.chain.nexi.technology"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "NexiScan",
      url: "https://www.nexiscan.com"
    },
    default: {
      name: "NexiScan",
      url: "https://www.nexiscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
      blockCreated: 25770160
    }
  }
});

// node_modules/viem/_esm/chains/definitions/nexilix.js
var nexilix = defineChain({
  id: 240,
  name: "Nexilix Smart Chain",
  network: "nexilix",
  nativeCurrency: {
    decimals: 18,
    name: "Nexilix",
    symbol: "NEXILIX"
  },
  rpcUrls: {
    default: { http: ["https://rpcurl.pos.nexilix.com"] },
    public: { http: ["https://rpcurl.pos.nexilix.com"] }
  },
  blockExplorers: {
    etherscan: { name: "NexilixScan", url: "https://scan.nexilix.com" },
    default: { name: "NexilixScan", url: "https://scan.nexilix.com" }
  },
  contracts: {
    multicall3: {
      address: "0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",
      blockCreated: 74448
    }
  }
});

// node_modules/viem/_esm/chains/definitions/oasys.js
var oasys = defineChain({
  id: 248,
  name: "Oasys",
  network: "oasys",
  nativeCurrency: { name: "Oasys", symbol: "OAS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.oasys.games"]
    },
    public: {
      http: ["https://rpc.mainnet.oasys.games"]
    }
  },
  blockExplorers: {
    default: {
      name: "OasysScan",
      url: "https://scan.oasys.games"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/okc.js
var okc = defineChain({
  id: 66,
  name: "OKC",
  network: "okc",
  nativeCurrency: {
    decimals: 18,
    name: "OKT",
    symbol: "OKT"
  },
  rpcUrls: {
    default: { http: ["https://exchainrpc.okex.org"] },
    public: { http: ["https://exchainrpc.okex.org"] }
  },
  blockExplorers: {
    default: { name: "oklink", url: "https://www.oklink.com/okc" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 10364792
    }
  }
});

// node_modules/viem/_esm/chains/definitions/optimism.js
var optimism = defineChain({
  id: 10,
  name: "OP Mainnet",
  network: "optimism",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://optimism-mainnet.infura.io/v3"],
      webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://mainnet.optimism.io"]
    },
    public: {
      http: ["https://mainnet.optimism.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://optimistic.etherscan.io"
    },
    default: {
      name: "Optimism Explorer",
      url: "https://explorer.optimism.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263
    }
  }
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/optimismGoerli.js
var optimismGoerli = defineChain({
  id: 420,
  name: "Optimism Goerli",
  network: "optimism-goerli",
  nativeCurrency: { name: "Goerli Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://opt-goerli.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://optimism-goerli.infura.io/v3"],
      webSocket: ["wss://optimism-goerli.infura.io/ws/v3"]
    },
    default: {
      http: ["https://goerli.optimism.io"]
    },
    public: {
      http: ["https://goerli.optimism.io"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 49461
    }
  },
  testnet: true
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/optimismSepolia.js
var optimismSepolia = defineChain({
  id: 11155420,
  name: "Optimism Sepolia",
  network: "optimism-sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.optimism.io"]
    },
    public: {
      http: ["https://sepolia.optimism.io"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com"
    },
    default: {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1620204
    }
  },
  testnet: true
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/opBNB.js
var opBNB = defineChain({
  id: 204,
  name: "opBNB",
  network: "opBNB Mainnet",
  nativeCurrency: {
    name: "BNB",
    symbol: "BNB",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] },
    default: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: { name: "opbnbscan", url: "https://mainnet.opbnbscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 512881
    }
  }
});

// node_modules/viem/_esm/chains/definitions/opBNBTestnet.js
var opBNBTestnet = defineChain({
  id: 5611,
  name: "opBNB Testnet",
  network: "opBNB Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "tBNB",
    symbol: "tBNB"
  },
  rpcUrls: {
    public: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] },
    default: { http: ["https://opbnb-testnet-rpc.bnbchain.org"] }
  },
  blockExplorers: {
    default: { name: "opbnbscan", url: "https://opbnbscan.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3705108
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/plinga.js
var plinga = defineChain({
  id: 242,
  name: "Plinga",
  network: "plinga",
  nativeCurrency: { name: "Plinga", symbol: "PLINGA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpcurl.mainnet.plgchain.com"]
    },
    public: {
      http: ["https://rpcurl.mainnet.plgchain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "Plgscan",
      url: "https://www.plgscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0x0989576160f2e7092908BB9479631b901060b6e4",
      blockCreated: 204489
    }
  }
});

// node_modules/viem/_esm/chains/definitions/polygon.js
var polygon = defineChain({
  id: 137,
  name: "Polygon",
  network: "matic",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mainnet.infura.io/v3"],
      webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"]
    },
    default: {
      http: ["https://polygon-rpc.com"]
    },
    public: {
      http: ["https://polygon-rpc.com"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  }
});

// node_modules/viem/_esm/chains/definitions/polygonMumbai.js
var polygonMumbai = defineChain({
  id: 80001,
  name: "Polygon Mumbai",
  network: "maticmum",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mumbai.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mumbai.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://polygon-mumbai.infura.io/v3"],
      webSocket: ["wss://polygon-mumbai.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    },
    public: {
      http: ["https://rpc.ankr.com/polygon_mumbai"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    },
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/polygonZkEvmTestnet.js
var polygonZkEvmTestnet = defineChain({
  id: 1442,
  name: "Polygon zkEVM Testnet",
  network: "polygon-zkevm-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.public.zkevm-test.net"]
    },
    public: {
      http: ["https://rpc.public.zkevm-test.net"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "Blockscout",
      url: "https://explorer.public.zkevm-test.net"
    },
    default: {
      name: "PolygonScan",
      url: "https://testnet-zkevm.polygonscan.com"
    }
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 525686
    }
  }
});

// node_modules/viem/_esm/chains/definitions/polygonZkEvm.js
var polygonZkEvm = defineChain({
  id: 1101,
  name: "Polygon zkEVM",
  network: "polygon-zkevm",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://zkevm-rpc.com"]
    },
    public: {
      http: ["https://zkevm-rpc.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://zkevm.polygonscan.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 57746
    }
  }
});

// node_modules/viem/_esm/chains/definitions/pulsechain.js
var pulsechain = defineChain({
  id: 369,
  network: "pulsechain",
  name: "PulseChain",
  nativeCurrency: { name: "Pulse", symbol: "PLS", decimals: 18 },
  testnet: false,
  rpcUrls: {
    default: {
      http: ["https://rpc.pulsechain.com"],
      webSocket: ["wss://ws.pulsechain.com"]
    },
    public: {
      http: ["https://rpc.pulsechain.com"],
      webSocket: ["wss://ws.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.pulsechain.com"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/viem/_esm/chains/definitions/pulsechainV4.js
var pulsechainV4 = defineChain({
  id: 943,
  network: "pulsechainV4",
  name: "PulseChain V4",
  testnet: true,
  nativeCurrency: { name: "V4 Pulse", symbol: "v4PLS", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"]
    },
    public: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"]
    }
  },
  blockExplorers: {
    default: {
      name: "PulseScan",
      url: "https://scan.v4.testnet.pulsechain.com"
    }
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601
    }
  }
});

// node_modules/viem/_esm/chains/definitions/qMainnet.js
var qMainnet = defineChain({
  id: 35441,
  name: "Q Mainnet",
  network: "q-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.q.org"] },
    public: { http: ["https://rpc.q.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Mainnet Explorer",
      url: "https://explorer.q.org"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/qTestnet.js
var qTestnet = defineChain({
  id: 35443,
  name: "Q Testnet",
  network: "q-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Q",
    symbol: "Q"
  },
  rpcUrls: {
    default: { http: ["https://rpc.qtestnet.org"] },
    public: { http: ["https://rpc.qtestnet.org"] }
  },
  blockExplorers: {
    default: {
      name: "Q Testnet Explorer",
      url: "https://explorer.qtestnet.org"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/rollux.js
var rollux = defineChain({
  id: 570,
  name: "Rollux Mainnet",
  network: "rollux",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.rollux.com"],
      webSocket: ["wss://rpc.rollux.com/wss"]
    },
    public: { http: ["https://rollux.public-rpc.com"] }
  },
  blockExplorers: {
    default: { name: "RolluxExplorer", url: "https://explorer.rollux.com" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 119222
    }
  }
});

// node_modules/viem/_esm/chains/definitions/rolluxTestnet.js
var rolluxTestnet = defineChain({
  id: 57e3,
  name: "Rollux Testnet",
  network: "rollux-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-tanenbaum.rollux.com/"],
      webSocket: ["wss://rpc-tanenbaum.rollux.com/wss"]
    },
    public: { http: ["https://rpc-tanenbaum.rollux.com/"] }
  },
  blockExplorers: {
    default: {
      name: "RolluxTestnetExplorer",
      url: "https://rollux.tanenbaum.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1813675
    }
  }
});

// node_modules/viem/_esm/chains/definitions/ronin.js
var ronin = defineChain({
  id: 2020,
  name: "Ronin",
  network: "ronin",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://api.roninchain.com/rpc"]
    },
    public: {
      http: ["https://api.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: { name: "Ronin Explorer", url: "https://app.roninchain.com" }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 26023535
    }
  }
});

// node_modules/viem/_esm/chains/definitions/saigon.js
var saigon = defineChain({
  id: 2021,
  name: "Saigon Testnet",
  network: "saigon",
  nativeCurrency: { name: "RON", symbol: "RON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://saigon-testnet.roninchain.com/rpc"]
    },
    public: {
      http: ["https://saigon-testnet.roninchain.com/rpc"]
    }
  },
  blockExplorers: {
    default: {
      name: "Saigon Explorer",
      url: "https://saigon-explorer.roninchain.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 18736871
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/scroll.js
var scroll = defineChain({
  id: 534352,
  name: "Scroll",
  network: "scroll",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.scroll.io"],
      webSocket: ["wss://wss-rpc.scroll.io/ws"]
    },
    public: {
      http: ["https://rpc.scroll.io"],
      webSocket: ["wss://wss-rpc.scroll.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://scrollscan.com"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://blockscout.scroll.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14
    }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/scrollSepolia.js
var scrollSepolia = defineChain({
  id: 534351,
  name: "Scroll Sepolia",
  network: "scroll-sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia-rpc.scroll.io"]
    },
    public: {
      http: ["https://sepolia-rpc.scroll.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.scroll.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 9473
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/scrollTestnet.js
var scrollTestnet = defineChain({
  id: 534353,
  name: "Scroll Testnet",
  network: "scroll-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://alpha-rpc.scroll.io/l2"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"]
    },
    public: {
      http: ["https://alpha-rpc.scroll.io/l2"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.scroll.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/sepolia.js
var sepolia = defineChain({
  id: 11155111,
  network: "sepolia",
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "SEP", decimals: 18 },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"]
    },
    infura: {
      http: ["https://sepolia.infura.io/v3"],
      webSocket: ["wss://sepolia.infura.io/ws/v3"]
    },
    default: {
      http: ["https://rpc.sepolia.org"]
    },
    public: {
      http: ["https://rpc.sepolia.org"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    },
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
      blockCreated: 3914906
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/brawl.js
var skaleBlockBrawlers = defineChain({
  id: 391845894,
  name: "SKALE | Block Brawlers",
  network: "skale-brawl",
  nativeCurrency: { name: "BRAWL", symbol: "BRAWL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/calypso.js
var skaleCalypso = defineChain({
  id: 1564830818,
  name: "SKALE | Calypso NFT Hub",
  network: "skale-calypso",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
      ]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3107626
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/calypsoTestnet.js
var skaleCalypsoTestnet = defineChain({
  id: 344106930,
  name: "SKALE | Calypso NFT Hub Testnet",
  network: "skale-calypso-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"
      ]
    },
    public: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2131424
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/chaosTestnet.js
var skaleChaosTestnet = defineChain({
  id: 1351057110,
  name: "SKALE | Chaos Testnet",
  network: "skale-chaos-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"
      ]
    },
    public: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1192202
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/cryptoBlades.js
var skaleCryptoBlades = defineChain({
  id: 1026062157,
  name: "SKALE | CryptoBlades",
  network: "skale-cryptoblades",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
      ]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
      webSocket: [
        "wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/cryptoColosseum.js
var skaleCryptoColosseum = defineChain({
  id: 2046399126,
  name: "SKALE | Crypto Colosseum",
  network: "skale-crypto-coloseeum",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/europa.js
var skaleEuropa = defineChain({
  id: 2046399126,
  name: "SKALE | Europa Liquidity Hub",
  network: "skale-europa",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 3113495
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/europaTestnet.js
var skaleEuropaTestnet = defineChain({
  id: 476158412,
  name: "SKALE | Europa Liquidity Hub Testnet",
  network: "skale-europa-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"
      ]
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2071911
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/exorde.js
var skaleExorde = defineChain({
  id: 2139927552,
  name: "SKALE | Exorde",
  network: "skale-exorde",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/humanProtocol.js
var skaleHumanProtocol = defineChain({
  id: 1273227453,
  name: "SKALE | Human Protocol",
  network: "skale-human-protocol",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/nebula.js
var skaleNebula = defineChain({
  id: 1482601649,
  name: "SKALE | Nebula Gaming Hub",
  network: "skale-nebula",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2372986
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/nebulaTestnet.js
var skaleNebulaTestnet = defineChain({
  id: 503129905,
  name: "SKALE | Nebula Gaming Hub Testnet",
  network: "skale-nebula-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"
      ]
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2205882
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/skale/razor.js
var skaleRazor = defineChain({
  id: 278611351,
  name: "SKALE | Razor Network",
  network: "skale-razor",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {}
});

// node_modules/viem/_esm/chains/definitions/skale/titan.js
var skaleTitan = defineChain({
  id: 1350216234,
  name: "SKALE | Titan Community Hub",
  network: "skale-titan",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
      webSocket: ["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2076458
    }
  }
});

// node_modules/viem/_esm/chains/definitions/skale/titanTestnet.js
var skaleTitanTestnet = defineChain({
  id: 1517929550,
  name: "SKALE | Titan Community Hub Testnet",
  network: "skale-titan-testnet",
  nativeCurrency: { name: "sFUEL", symbol: "sFUEL", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"
      ]
    },
    public: {
      http: [
        "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"
      ],
      webSocket: [
        "wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"
      ]
    }
  },
  blockExplorers: {
    blockscout: {
      name: "SKALE Explorer",
      url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2085155
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/songbird.js
var songbird = defineChain({
  id: 19,
  name: "Songbird Mainnet",
  network: "songbird-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "songbird",
    symbol: "SGB"
  },
  rpcUrls: {
    default: { http: ["https://songbird-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://songbird-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Songbird Explorer",
      url: "https://songbird-explorer.flare.network"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/songbirdTestnet.js
var songbirdTestnet = defineChain({
  id: 16,
  name: "Coston",
  network: "coston",
  nativeCurrency: {
    decimals: 18,
    name: "costonflare",
    symbol: "CFLR"
  },
  rpcUrls: {
    default: { http: ["https://coston-api.flare.network/ext/C/rpc"] },
    public: { http: ["https://coston-api.flare.network/ext/C/rpc"] }
  },
  blockExplorers: {
    default: {
      name: "Coston Explorer",
      url: "https://coston-explorer.flare.network"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/spicy.js
var spicy = defineChain({
  id: 88882,
  name: "Chiliz Spicy Testnet",
  network: "chiliz-spicy-Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "CHZ",
    symbol: "CHZ"
  },
  rpcUrls: {
    default: {
      http: [
        "https://spicy-rpc.chiliz.com",
        "https://chiliz-spicy.publicnode.com"
      ],
      webSocket: [
        "wss://spicy-rpc-ws.chiliz.com",
        "wss://chiliz-spicy.publicnode.com"
      ]
    },
    public: {
      http: [
        "https://spicy-rpc.chiliz.com",
        "https://chiliz-spicy.publicnode.com"
      ],
      webSocket: [
        "wss://spicy-rpc-ws.chiliz.com",
        "wss://chiliz-spicy.publicnode.com"
      ]
    }
  },
  blockExplorers: {
    default: {
      name: "Chiliz Explorer",
      url: "http://spicy-explorer.chiliz.com"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/shardeumSphinx.js
var shardeumSphinx = defineChain({
  id: 8082,
  name: "Shardeum Sphinx",
  network: "shmSphinx",
  nativeCurrency: { name: "SHARDEUM", symbol: "SHM", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sphinx.shardeum.org"]
    },
    public: {
      http: ["https://sphinx.shardeum.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Shardeum Explorer",
      url: "https://explorer-sphinx.shardeum.org"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/syscoin.js
var syscoin = defineChain({
  id: 57,
  name: "Syscoin Mainnet",
  network: "syscoin",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.syscoin.org"],
      webSocket: ["wss://rpc.syscoin.org/wss"]
    },
    public: {
      http: ["https://rpc.syscoin.org"],
      webSocket: ["wss://rpc.syscoin.org/wss"]
    }
  },
  blockExplorers: {
    default: { name: "SyscoinExplorer", url: "https://explorer.syscoin.org" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 287139
    }
  }
});

// node_modules/viem/_esm/chains/definitions/syscoinTestnet.js
var syscoinTestnet = defineChain({
  id: 5700,
  name: "Syscoin Tanenbaum Testnet",
  network: "syscoin-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Syscoin",
    symbol: "SYS"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.tanenbaum.io"],
      webSocket: ["wss://rpc.tanenbaum.io/wss"]
    },
    public: {
      http: ["https://rpc.tanenbaum.io"],
      webSocket: ["wss://rpc.tanenbaum.io/wss"]
    }
  },
  blockExplorers: {
    default: { name: "SyscoinTestnetExplorer", url: "https://tanenbaum.io" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 271288
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taraxa.js
var taraxa = defineChain({
  id: 841,
  name: "Taraxa Mainnet",
  network: "taraxa",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.taraxa.io"]
    },
    public: {
      http: ["https://rpc.mainnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.mainnet.taraxa.io"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taikoJolnir.js
var taikoJolnir = defineChain({
  id: 167007,
  name: "Taiko Jolnir L2",
  network: "tko-jolnir",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://jolnir.taiko.xyz"]
    },
    public: {
      http: ["https://jolnir.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.jolnir.taiko.xyz"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taikoTestnetSepolia.js
var taikoTestnetSepolia = defineChain({
  id: 167005,
  name: "Taiko (Alpha-3 Testnet)",
  network: "taiko-sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.test.taiko.xyz"]
    },
    public: {
      http: ["https://rpc.test.taiko.xyz"]
    }
  },
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://explorer.test.taiko.xyz"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/taraxaTestnet.js
var taraxaTestnet = defineChain({
  id: 842,
  name: "Taraxa Testnet",
  network: "taraxa-testnet",
  nativeCurrency: { name: "Tara", symbol: "TARA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.taraxa.io"]
    },
    public: {
      http: ["https://rpc.testnet.taraxa.io"]
    }
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.testnet.taraxa.io"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/telos.js
var telos = defineChain({
  id: 40,
  name: "Telos",
  network: "telos",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://mainnet.telos.net/evm"] },
    public: { http: ["https://mainnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan",
      url: "https://www.teloscan.io/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 246530709
    }
  }
});

// node_modules/viem/_esm/chains/definitions/telosTestnet.js
var telosTestnet = defineChain({
  id: 41,
  name: "Telos",
  network: "telosTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS"
  },
  rpcUrls: {
    default: { http: ["https://testnet.telos.net/evm"] },
    public: { http: ["https://testnet.telos.net/evm"] }
  },
  blockExplorers: {
    default: {
      name: "Teloscan (testnet)",
      url: "https://testnet.teloscan.io/"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/tenet.js
var tenet = defineChain({
  id: 1559,
  name: "Tenet",
  network: "tenet-mainnet",
  nativeCurrency: {
    name: "TENET",
    symbol: "TENET",
    decimals: 18
  },
  rpcUrls: {
    public: { http: ["https://rpc.tenet.org"] },
    default: { http: ["https://rpc.tenet.org"] }
  },
  blockExplorers: {
    default: { name: "TenetScan Mainnet", url: "https://tenetscan.io" }
  },
  testnet: false
});

// node_modules/viem/_esm/chains/definitions/thunderTestnet.js
var thunderTestnet = defineChain({
  id: 997,
  name: "5ireChain Thunder Testnet",
  network: "5ireChain",
  nativeCurrency: { name: "5ire Token", symbol: "5IRE", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.5ire.network"]
    },
    public: {
      http: ["https://rpc-testnet.5ire.network"]
    }
  },
  blockExplorers: {
    default: {
      name: "5ireChain Explorer",
      url: "https://explorer.5ire.network"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/vechain.js
var vechain = defineChain({
  id: 100009,
  name: "Vechain",
  network: "vechain",
  nativeCurrency: { name: "VeChain", symbol: "VET", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://mainnet.vechain.org"]
    },
    public: {
      http: ["https://mainnet.vechain.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Vechain Explorer",
      url: "https://explore.vechain.org"
    },
    vechainStats: {
      name: "Vechain Stats",
      url: "https://vechainstats.com"
    }
  }
});

// node_modules/viem/_esm/chains/definitions/wanchain.js
var wanchain = defineChain({
  id: 888,
  name: "Wanchain",
  network: "wanchain",
  nativeCurrency: { name: "WANCHAIN", symbol: "WAN", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://gwan-ssl.wandevs.org:56891",
        "https://gwan2-ssl.wandevs.org"
      ]
    },
    public: {
      http: [
        "https://gwan-ssl.wandevs.org:56891",
        "https://gwan2-ssl.wandevs.org"
      ]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "WanScan",
      url: "https://wanscan.org"
    },
    default: {
      name: "WanScan",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
      blockCreated: 25312390
    }
  }
});

// node_modules/viem/_esm/chains/definitions/wanchainTestnet.js
var wanchainTestnet = defineChain({
  id: 999,
  name: "Wanchain Testnet",
  network: "wanchainTestnet",
  nativeCurrency: { name: "WANCHAIN", symbol: "WANt", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://gwan-ssl.wandevs.org:46891"]
    },
    public: {
      http: ["https://gwan-ssl.wandevs.org:46891"]
    }
  },
  blockExplorers: {
    etherscan: {
      name: "WanScanTest",
      url: "https://wanscan.org"
    },
    default: {
      name: "WanScanTest",
      url: "https://wanscan.org"
    }
  },
  contracts: {
    multicall3: {
      address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
      blockCreated: 24743448
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/xdc.js
var xdc = defineChain({
  id: 50,
  name: "XinFin Network",
  network: "xdc",
  nativeCurrency: {
    decimals: 18,
    name: "XDC",
    symbol: "XDC"
  },
  rpcUrls: {
    default: { http: ["https://rpc.xinfin.network"] },
    public: { http: ["https://rpc.xinfin.network"] }
  },
  blockExplorers: {
    xinfin: { name: "XinFin", url: "https://explorer.xinfin.network" },
    default: { name: "Blocksscan", url: "https://xdc.blocksscan.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/xdcTestnet.js
var xdcTestnet = defineChain({
  id: 51,
  name: "Apothem Network",
  network: "xdc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "TXDC",
    symbol: "TXDC"
  },
  rpcUrls: {
    default: { http: ["https://erpc.apothem.network"] },
    public: { http: ["https://erpc.apothem.network"] }
  },
  blockExplorers: {
    xinfin: { name: "XinFin", url: "https://explorer.apothem.network" },
    default: { name: "Blocksscan", url: "https://apothem.blocksscan.io" }
  }
});

// node_modules/viem/_esm/chains/definitions/zhejiang.js
var zhejiang = defineChain({
  id: 1337803,
  network: "zhejiang",
  name: "Zhejiang",
  nativeCurrency: { name: "Zhejiang Ether", symbol: "ZhejETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.zhejiang.ethpandaops.io"]
    },
    public: {
      http: ["https://rpc.zhejiang.ethpandaops.io"]
    }
  },
  blockExplorers: {
    beaconchain: {
      name: "Etherscan",
      url: "https://zhejiang.beaconcha.in"
    },
    blockscout: {
      name: "Blockscout",
      url: "https://blockscout.com/eth/zhejiang-testnet"
    },
    default: {
      name: "Beaconchain",
      url: "https://zhejiang.beaconcha.in"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/zksync/formatters.js
var formattersZkSync = {
  block: defineBlock({
    format(args) {
      var _a;
      const transactions = (_a = args.transactions) == null ? void 0 : _a.map((transaction) => {
        if (typeof transaction === "string")
          return transaction;
        const formatted = formattersZkSync.transaction.format(transaction);
        if (formatted.typeHex === "0x71")
          formatted.type = "eip712";
        else if (formatted.typeHex === "0xff")
          formatted.type = "priority";
        return formatted;
      });
      return {
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTimestamp: args.l1BatchTimestamp ? hexToBigInt(args.l1BatchTimestamp) : null,
        transactions
      };
    }
  }),
  transaction: defineTransaction({
    format(args) {
      const transaction = {};
      if (args.type === "0x71")
        transaction.type = "eip712";
      else if (args.type === "0xff")
        transaction.type = "priority";
      return {
        ...transaction,
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTxIndex: args.l1BatchTxIndex ? hexToBigInt(args.l1BatchTxIndex) : null
      };
    }
  }),
  transactionReceipt: defineTransactionReceipt({
    format(args) {
      return {
        l1BatchNumber: args.l1BatchNumber ? hexToBigInt(args.l1BatchNumber) : null,
        l1BatchTxIndex: args.l1BatchTxIndex ? hexToBigInt(args.l1BatchTxIndex) : null,
        logs: args.logs.map((log) => {
          return {
            ...formatLog(log),
            l1BatchNumber: log.l1BatchNumber ? hexToBigInt(log.l1BatchNumber) : null,
            transactionLogIndex: hexToNumber(log.transactionLogIndex),
            logType: log.logType
          };
        }),
        l2ToL1Logs: args.l2ToL1Logs.map((l2ToL1Log) => {
          return {
            blockNumber: hexToBigInt(l2ToL1Log.blockHash),
            blockHash: l2ToL1Log.blockHash,
            l1BatchNumber: hexToBigInt(l2ToL1Log.l1BatchNumber),
            transactionIndex: hexToBigInt(l2ToL1Log.transactionIndex),
            shardId: hexToBigInt(l2ToL1Log.shardId),
            isService: l2ToL1Log.isService,
            sender: l2ToL1Log.sender,
            key: l2ToL1Log.key,
            value: l2ToL1Log.value,
            transactionHash: l2ToL1Log.transactionHash,
            logIndex: hexToBigInt(l2ToL1Log.logIndex)
          };
        })
      };
    }
  }),
  transactionRequest: defineTransactionRequest({
    exclude: [
      "customSignature",
      "factoryDeps",
      "gasPerPubdata",
      "paymaster",
      "paymasterInput"
    ],
    format(args) {
      if (args.gasPerPubdata || args.paymaster && args.paymasterInput || args.factoryDeps || args.customSignature)
        return {
          eip712Meta: {
            ...args.gasPerPubdata ? { gasPerPubdata: toHex(args.gasPerPubdata) } : {},
            ...args.paymaster && args.paymasterInput ? {
              paymasterParams: {
                paymaster: args.paymaster,
                paymasterInput: Array.from(hexToBytes(args.paymasterInput))
              }
            } : {},
            ...args.factoryDeps ? { factoryDeps: args.factoryDeps } : {},
            ...args.customSignature ? { customSignature: args.customSignature } : {}
          },
          type: args.type === "eip712" ? "0x71" : "0xff"
        };
      return {};
    }
  })
};

// node_modules/viem/_esm/chains/zksync/serializers.js
var serializeTransactionZkSync = (tx, signature) => {
  if (isEIP712(tx))
    return serializeTransactionZkSyncEIP712(tx);
  return serializeTransaction(tx, signature);
};
var serializersZkSync = {
  transaction: serializeTransactionZkSync
};
function serializeTransactionZkSyncEIP712(transaction) {
  const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data } = transaction;
  assertTransactionEIP712(transaction);
  const serializedTransaction = [
    nonce ? toHex(nonce) : "0x",
    maxPriorityFeePerGas ? toHex(maxPriorityFeePerGas) : "0x",
    maxFeePerGas ? toHex(maxFeePerGas) : "0x",
    gas ? toHex(gas) : "0x",
    to ?? "0x",
    value ? toHex(value) : "0x",
    data ?? "0x",
    toHex(chainId),
    toHex(""),
    toHex(""),
    toHex(chainId),
    from ?? "0x",
    gasPerPubdata ? toHex(gasPerPubdata) : "0x",
    factoryDeps ?? [],
    customSignature ?? "0x",
    paymaster && paymasterInput ? [paymaster, paymasterInput] : []
  ];
  return concatHex([
    "0x71",
    toRlp(serializedTransaction)
  ]);
}
function isEIP712(transaction) {
  if ("customSignature" in transaction || "paymaster" in transaction || "paymasterInput" in transaction || "gasPerPubdata" in transaction || "factoryDeps" in transaction)
    return true;
  return false;
}
function assertTransactionEIP712(transaction) {
  const { chainId, to, from, paymaster, paymasterInput } = transaction;
  if (chainId <= 0)
    throw new InvalidChainIdError({ chainId });
  if (to && !isAddress(to))
    throw new InvalidAddressError({ address: to });
  if (from && !isAddress(from))
    throw new InvalidAddressError({ address: from });
  if (paymaster && !isAddress(paymaster))
    throw new InvalidAddressError({ address: paymaster });
  if (paymaster && !paymasterInput) {
    throw new BaseError("`paymasterInput` must be provided when `paymaster` is defined");
  }
  if (!paymaster && paymasterInput) {
    throw new BaseError("`paymaster` must be provided when `paymasterInput` is defined");
  }
}

// node_modules/viem/_esm/chains/definitions/zkSync.js
var zkSync = defineChain({
  id: 324,
  name: "zkSync Era",
  network: "zksync-era",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"]
    },
    public: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://explorer.zksync.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  }
}, {
  serializers: serializersZkSync,
  formatters: formattersZkSync
});

// node_modules/viem/_esm/chains/definitions/zkSyncTestnet.js
var zkSyncTestnet = defineChain({
  id: 280,
  name: "zkSync Era Testnet",
  network: "zksync-era-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://testnet.era.zksync.dev"],
      webSocket: ["wss://testnet.era.zksync.dev/ws"]
    },
    public: {
      http: ["https://testnet.era.zksync.dev"],
      webSocket: ["wss://testnet.era.zksync.dev/ws"]
    }
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://goerli.explorer.zksync.io"
    }
  },
  contracts: {
    multicall3: {
      address: "0xF9cda624FBC7e059355ce98a31693d299FACd963"
    }
  },
  testnet: true
}, {
  serializers: serializersZkSync,
  formatters: formattersZkSync
});

// node_modules/viem/_esm/chains/definitions/zetachainAthensTestnet.js
var zetachainAthensTestnet = defineChain({
  id: 7001,
  name: "ZetaChain Athens Testnet",
  network: "zetachain-athens-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zeta",
    symbol: "aZETA"
  },
  rpcUrls: {
    public: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    },
    default: {
      http: ["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]
    }
  },
  blockExplorers: {
    default: {
      name: "ZetaScan",
      url: "https://athens3.explorer.zetachain.com"
    }
  },
  testnet: true
});

// node_modules/viem/_esm/chains/definitions/zora.js
var zora = defineChain({
  id: 7777777,
  name: "Zora",
  network: "zora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zora.energy"],
      webSocket: ["wss://rpc.zora.energy"]
    },
    public: {
      http: ["https://rpc.zora.energy"],
      webSocket: ["wss://rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.zora.energy" }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 5882
    }
  }
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/zoraSepolia.js
var zoraSepolia = defineChain({
  id: 999999999,
  name: "Zora Sepolia",
  network: "zora-sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Sepolia",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.rpc.zora.energy"],
      webSocket: ["wss://sepolia.rpc.zora.energy"]
    },
    public: {
      http: ["https://sepolia.rpc.zora.energy"],
      webSocket: ["wss://sepolia.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Zora Sepolia Explorer",
      url: "https://sepolia.explorer.zora.energy/"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 83160
    }
  },
  testnet: true
}, {
  formatters: formattersOptimism
});

// node_modules/viem/_esm/chains/definitions/zoraTestnet.js
var zoraTestnet = defineChain({
  id: 999,
  name: "Zora Goerli Testnet",
  network: "zora-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Goerli",
    symbol: "ETH"
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.zora.energy"],
      webSocket: ["wss://testnet.rpc.zora.energy"]
    },
    public: {
      http: ["https://testnet.rpc.zora.energy"],
      webSocket: ["wss://testnet.rpc.zora.energy"]
    }
  },
  blockExplorers: {
    default: {
      name: "Explorer",
      url: "https://testnet.explorer.zora.energy"
    }
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 189123
    }
  },
  testnet: true
}, {
  formatters: formattersOptimism
});

export {
  arbitrum,
  arbitrumGoerli,
  arbitrumNova,
  astar,
  arbitrumSepolia,
  astarZkatana,
  aurora,
  auroraTestnet,
  avalanche,
  avalancheFuji,
  base,
  baseGoerli,
  baseSepolia,
  bearNetworkChainMainnet,
  bearNetworkChainTestnet,
  boba,
  bronos,
  bronosTestnet,
  bsc,
  bscTestnet,
  bxn,
  bxnTestnet,
  canto,
  custom,
  fallback,
  http2 as http,
  parseGwei,
  createPublicClient,
  createWalletClient,
  webSocket2 as webSocket,
  celo,
  celoAlfajores,
  chiliz,
  celoCannoli,
  classic,
  confluxESpace,
  coreDao,
  cronos,
  cronosTestnet,
  crossbell,
  dfk,
  dogechain,
  edgeware,
  edgewareTestnet,
  eos,
  eosTestnet,
  evmos,
  evmosTestnet,
  ekta,
  ektaTestnet,
  fantom,
  fantomTestnet,
  fibo,
  filecoin,
  filecoinCalibration,
  filecoinHyperspace,
  flare,
  flareTestnet,
  foundry,
  fuse,
  fuseSparknet,
  iotex,
  iotexTestnet,
  gobi,
  goerli,
  gnosis,
  gnosisChiado,
  hardhat,
  harmonyOne,
  haqqMainnet,
  haqqTestedge2,
  holesky,
  kava,
  kavaTestnet,
  klaytn,
  kroma,
  kromaSepolia,
  linea,
  lineaTestnet,
  localhost,
  lukso,
  mainnet,
  manta,
  mantaTestnet,
  mantle,
  mantleTestnet,
  meter,
  meterTestnet,
  metis,
  metisGoerli,
  mev,
  mevTestnet,
  modeTestnet,
  moonbaseAlpha,
  moonbeam,
  moonbeamDev,
  moonriver,
  neonDevnet,
  neonMainnet,
  nexi,
  nexilix,
  oasys,
  okc,
  optimism,
  optimismGoerli,
  optimismSepolia,
  opBNB,
  opBNBTestnet,
  plinga,
  polygon,
  polygonMumbai,
  polygonZkEvmTestnet,
  polygonZkEvm,
  pulsechain,
  pulsechainV4,
  qMainnet,
  qTestnet,
  rollux,
  rolluxTestnet,
  ronin,
  saigon,
  scroll,
  scrollSepolia,
  scrollTestnet,
  sepolia,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
  songbird,
  songbirdTestnet,
  spicy,
  shardeumSphinx,
  syscoin,
  syscoinTestnet,
  taraxa,
  taikoJolnir,
  taikoTestnetSepolia,
  taraxaTestnet,
  telos,
  telosTestnet,
  tenet,
  thunderTestnet,
  vechain,
  wanchain,
  wanchainTestnet,
  xdc,
  xdcTestnet,
  zhejiang,
  zkSync,
  zkSyncTestnet,
  zetachainAthensTestnet,
  zora,
  zoraSepolia,
  zoraTestnet
};
//# sourceMappingURL=chunk-OCX6ZBZK.js.map
