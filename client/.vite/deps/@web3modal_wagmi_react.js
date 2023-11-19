"use client";
import {
  AccountController,
  ApiController,
  AssetController,
  AssetUtil,
  BlockchainApiController,
  ConnectionController,
  ConnectorController,
  ConstantsUtil,
  CoreHelperUtil,
  EventsController,
  LitElement,
  ModalController,
  NetworkController,
  OptionsController,
  PublicStateController,
  RouterController,
  SIWEController,
  SnackController,
  StorageUtil,
  ThemeController,
  TransactionsController,
  css,
  html,
  nothing,
  property,
  state
} from "./chunk-VAPDPXVB.js";
import {
  require_buffer
} from "./chunk-RZQL7WHT.js";
import "./chunk-RZICIBFF.js";
import {
  se
} from "./chunk-IZBDHKJG.js";
import "./chunk-FLEJTHCN.js";
import {
  DateUtil,
  TransactionUtil,
  UiHelperUtil,
  customElement,
  setColorTheme,
  setThemeVariables
} from "./chunk-MMJNTKFS.js";
import "./chunk-TVGVKMHQ.js";
import {
  ChainNotConfiguredForConnectorError,
  Connector,
  InjectedConnector,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  configureChains,
  connect,
  createConfig,
  disconnect,
  fetchBalance,
  fetchEnsAvatar,
  fetchEnsName,
  getAccount,
  getNetwork,
  normalizeChainId,
  switchNetwork,
  watchAccount,
  watchNetwork
} from "./chunk-3HTKCOE2.js";
import "./chunk-3V7TIHOW.js";
import {
  createWalletClient,
  custom,
  mainnet
} from "./chunk-OCX6ZBZK.js";
import "./chunk-PU33QIWG.js";
import "./chunk-LWDAL6LW.js";
import {
  SwitchChainError,
  UserRejectedRequestError,
  getAddress,
  numberToHex
} from "./chunk-KPTOZPA2.js";
import "./chunk-XVXS55ZV.js";
import "./chunk-ZDM6JSZO.js";
import "./chunk-FV3PPQPS.js";
import "./chunk-QBS3YNFQ.js";
import {
  require_react
} from "./chunk-QUQDT3U3.js";
import {
  __toESM
} from "./chunk-XUG3XOB4.js";

// node_modules/@web3modal/scaffold-react/dist/esm/index.js
var import_react = __toESM(require_react());
var modal = void 0;
function getWeb3Modal(web3modal) {
  if (web3modal) {
    modal = web3modal;
  }
}
function useWeb3ModalTheme() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');
  }
  function setThemeMode(themeMode2) {
    modal == null ? void 0 : modal.setThemeMode(themeMode2);
  }
  function setThemeVariables2(themeVariables2) {
    modal == null ? void 0 : modal.setThemeVariables(themeVariables2);
  }
  const [themeMode, setInternalThemeMode] = (0, import_react.useState)(modal.getThemeMode());
  const [themeVariables, setInternalThemeVariables] = (0, import_react.useState)(modal.getThemeVariables());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeTheme((state2) => {
      setInternalThemeMode(state2.themeMode);
      setInternalThemeVariables(state2.themeVariables);
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return {
    themeMode,
    themeVariables,
    setThemeMode,
    setThemeVariables: setThemeVariables2
  };
}
function useWeb3Modal() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');
  }
  async function open(options) {
    await (modal == null ? void 0 : modal.open(options));
  }
  async function close() {
    await (modal == null ? void 0 : modal.close());
  }
  return { open, close };
}
function useWeb3ModalState() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
  }
  const [state2, setState] = (0, import_react.useState)(modal.getState());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeState((newState) => {
      setState({ ...newState });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return state2;
}
function useWeb3ModalEvents() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
  }
  const [event, setEvents] = (0, import_react.useState)(modal.getEvent());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeEvents((newEvent) => {
      setEvents({ ...newEvent });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return event;
}

// node_modules/@web3modal/scaffold/node_modules/lit-html/development/directives/if-defined.js
var ifDefined = (value) => value ?? nothing;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-account-button/index.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountButton = class W3mAccountButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.networkImages = AssetController.state.networkImages;
    this.disabled = false;
    this.balance = "show";
    this.address = AccountController.state.address;
    this.balanceVal = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.profileName = AccountController.state.profileName;
    this.profileImage = AccountController.state.profileImage;
    this.network = NetworkController.state.caipNetwork;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          this.address = val.address;
          this.balanceVal = val.balance;
          this.profileName = val.profileName;
          this.profileImage = val.profileImage;
          this.balanceSymbol = val.balanceSymbol;
        } else {
          this.address = "";
          this.balanceVal = "";
          this.profileName = "";
          this.profileImage = "";
          this.balanceSymbol = "";
        }
      }),
      NetworkController.subscribeKey("caipNetwork", (val) => this.network = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    const networkImage = this.networkImages[((_a2 = this.network) == null ? void 0 : _a2.imageId) ?? ""];
    const showBalance = this.balance === "show";
    return html`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        address=${ifDefined(this.profileName ?? this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${ifDefined(networkImage)}
        avatarSrc=${ifDefined(this.profileImage)}
        balance=${showBalance ? CoreHelperUtil.formatBalance(this.balanceVal, this.balanceSymbol) : ""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `;
  }
  onClick() {
    ModalController.open();
  }
};
__decorate([
  property({ type: Boolean })
], W3mAccountButton.prototype, "disabled", void 0);
__decorate([
  property()
], W3mAccountButton.prototype, "balance", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "address", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceVal", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "balanceSymbol", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileName", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "profileImage", void 0);
__decorate([
  state()
], W3mAccountButton.prototype, "network", void 0);
W3mAccountButton = __decorate([
  customElement("w3m-account-button")
], W3mAccountButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-button/index.js
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mButton = class W3mButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.balance = void 0;
    this.size = void 0;
    this.label = void 0;
    this.loadingLabel = void 0;
    this.isAccount = AccountController.state.isConnected;
    this.unsubscribe.push(AccountController.subscribeKey("isConnected", (val) => {
      this.isAccount = val;
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return this.isAccount ? html`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${ifDefined(this.balance)}
          >
          </w3m-account-button>
        ` : html`
          <w3m-connect-button
            size=${ifDefined(this.size)}
            label=${ifDefined(this.label)}
            loadingLabel=${ifDefined(this.loadingLabel)}
          ></w3m-connect-button>
        `;
  }
};
__decorate2([
  property({ type: Boolean })
], W3mButton.prototype, "disabled", void 0);
__decorate2([
  property()
], W3mButton.prototype, "balance", void 0);
__decorate2([
  property()
], W3mButton.prototype, "size", void 0);
__decorate2([
  property()
], W3mButton.prototype, "label", void 0);
__decorate2([
  property()
], W3mButton.prototype, "loadingLabel", void 0);
__decorate2([
  state()
], W3mButton.prototype, "isAccount", void 0);
W3mButton = __decorate2([
  customElement("w3m-button")
], W3mButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-connect-button/index.js
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectButton = class W3mConnectButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.size = "md";
    this.label = "Connect Wallet";
    this.loadingLabel = "Connecting...";
    this.open = ModalController.state.open;
    this.unsubscribe.push(ModalController.subscribeKey("open", (val) => this.open = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-connect-button
        size=${ifDefined(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open ? this.loadingLabel : this.label}
      </wui-connect-button>
    `;
  }
  onClick() {
    if (this.open) {
      ModalController.close();
    } else {
      ModalController.open();
    }
  }
};
__decorate3([
  property()
], W3mConnectButton.prototype, "size", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "label", void 0);
__decorate3([
  property()
], W3mConnectButton.prototype, "loadingLabel", void 0);
__decorate3([
  state()
], W3mConnectButton.prototype, "open", void 0);
W3mConnectButton = __decorate3([
  customElement("w3m-connect-button")
], W3mConnectButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-network-button/index.js
var __decorate4 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkButton = class W3mNetworkButton2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.disabled = false;
    this.network = NetworkController.state.caipNetwork;
    this.connected = AccountController.state.isConnected;
    this.unsubscribe.push(...[
      NetworkController.subscribeKey("caipNetwork", (val) => this.network = val),
      AccountController.subscribeKey("isConnected", (val) => this.connected = val)
    ]);
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2;
    return html`
      <wui-network-button
        .disabled=${Boolean(this.disabled)}
        imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((_a2 = this.network) == null ? void 0 : _a2.name) ?? (this.connected ? "Unknown Network" : "Select Network")}
      </wui-network-button>
    `;
  }
  onClick() {
    ModalController.open({ view: "Networks" });
  }
};
__decorate4([
  property({ type: Boolean })
], W3mNetworkButton.prototype, "disabled", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "network", void 0);
__decorate4([
  state()
], W3mNetworkButton.prototype, "connected", void 0);
W3mNetworkButton = __decorate4([
  customElement("w3m-network-button")
], W3mNetworkButton);

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-router/styles.js
var styles_default = css`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/modal/w3m-router/index.js
var __decorate5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mRouter = class W3mRouter2 extends LitElement {
  constructor() {
    super();
    this.resizeObserver = void 0;
    this.prevHeight = "0px";
    this.prevHistoryLength = 1;
    this.unsubscribe = [];
    this.view = RouterController.state.view;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => this.onViewChange(val)));
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(async ([content]) => {
      const height = `${content == null ? void 0 : content.contentRect.height}px`;
      if (this.prevHeight !== "0px") {
        await this.animate([{ height: this.prevHeight }, { height }], {
          duration: 150,
          easing: "ease",
          fill: "forwards"
        }).finished;
        this.style.height = "auto";
      }
      this.prevHeight = height;
    });
    this.resizeObserver.observe(this.getWrapper());
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this.resizeObserver) == null ? void 0 : _a2.unobserve(this.getWrapper());
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`<div>${this.viewTemplate()}</div>`;
  }
  viewTemplate() {
    switch (this.view) {
      case "Connect":
        return html`<w3m-connect-view></w3m-connect-view>`;
      case "ConnectingWalletConnect":
        return html`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
      case "ConnectingExternal":
        return html`<w3m-connecting-external-view></w3m-connecting-external-view>`;
      case "ConnectingSiwe":
        return html`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
      case "AllWallets":
        return html`<w3m-all-wallets-view></w3m-all-wallets-view>`;
      case "Networks":
        return html`<w3m-networks-view></w3m-networks-view>`;
      case "SwitchNetwork":
        return html`<w3m-network-switch-view></w3m-network-switch-view>`;
      case "Account":
        return html`<w3m-account-view></w3m-account-view>`;
      case "WhatIsAWallet":
        return html`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
      case "WhatIsANetwork":
        return html`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
      case "GetWallet":
        return html`<w3m-get-wallet-view></w3m-get-wallet-view>`;
      case "Downloads":
        return html`<w3m-downloads-view></w3m-downloads-view>`;
      case "Transactions":
        return html`<w3m-transactions-view></w3m-transactions-view>`;
      default:
        return html`<w3m-connect-view></w3m-connect-view>`;
    }
  }
  async onViewChange(newView) {
    const { history } = RouterController.state;
    let xOut = -10;
    let xIn = 10;
    if (history.length < this.prevHistoryLength) {
      xOut = 10;
      xIn = -10;
    }
    this.prevHistoryLength = history.length;
    await this.animate([
      { opacity: 1, transform: "translateX(0px)" },
      { opacity: 0, transform: `translateX(${xOut}px)` }
    ], { duration: 150, easing: "ease", fill: "forwards" }).finished;
    this.view = newView;
    await this.animate([
      { opacity: 0, transform: `translateX(${xIn}px)` },
      { opacity: 1, transform: "translateX(0px)" }
    ], { duration: 150, easing: "ease", fill: "forwards", delay: 50 }).finished;
  }
  getWrapper() {
    var _a2;
    return (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("div");
  }
};
W3mRouter.styles = styles_default;
__decorate5([
  state()
], W3mRouter.prototype, "view", void 0);
W3mRouter = __decorate5([
  customElement("w3m-router")
], W3mRouter);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-view/styles.js
var styles_default2 = css`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-account-view/index.js
var __decorate6 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAccountView = class W3mAccountView2 extends LitElement {
  constructor() {
    super();
    this.usubscribe = [];
    this.networkImages = AssetController.state.networkImages;
    this.address = AccountController.state.address;
    this.profileImage = AccountController.state.profileImage;
    this.profileName = AccountController.state.profileName;
    this.balance = AccountController.state.balance;
    this.balanceSymbol = AccountController.state.balanceSymbol;
    this.network = NetworkController.state.caipNetwork;
    this.disconecting = false;
    this.usubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.address) {
          this.address = val.address;
          this.profileImage = val.profileImage;
          this.profileName = val.profileName;
          this.balance = val.balance;
          this.balanceSymbol = val.balanceSymbol;
        } else {
          ModalController.close();
        }
      })
    ], NetworkController.subscribeKey("caipNetwork", (val) => {
      if (val == null ? void 0 : val.id) {
        this.network = val;
      }
    }));
  }
  disconnectedCallback() {
    this.usubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    var _a2, _b;
    if (!this.address) {
      throw new Error("w3m-account-view: No account provided");
    }
    const networkImage = this.networkImages[((_a2 = this.network) == null ? void 0 : _a2.imageId) ?? ""];
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["0", "s", "m", "s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ifDefined(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName ? UiHelperUtil.getTruncateString({
      string: this.profileName,
      charsStart: 20,
      charsEnd: 0,
      truncate: "end"
    }) : UiHelperUtil.getTruncateString({
      string: this.address,
      charsStart: 4,
      charsEnd: 6,
      truncate: "middle"
    })}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${CoreHelperUtil.formatBalance(this.balance, this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0", "s", "s", "s"]}>
        <wui-list-item
          .variant=${networkImage ? "image" : "icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ifDefined(networkImage)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((_b = this.network) == null ? void 0 : _b.name) ?? "Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${true}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${false}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `;
  }
  explorerBtnTemplate() {
    const { addressExplorerUrl } = AccountController.state;
    if (!addressExplorerUrl) {
      return null;
    }
    return html`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `;
  }
  isAllowedNetworkSwitch() {
    const { requestedCaipNetworks } = NetworkController.state;
    const isMultiNetwork = requestedCaipNetworks ? requestedCaipNetworks.length > 1 : false;
    const isValidNetwork = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.find(({ id }) => {
      var _a2;
      return id === ((_a2 = this.network) == null ? void 0 : _a2.id);
    });
    return isMultiNetwork || !isValidNetwork;
  }
  onCopyAddress() {
    try {
      if (this.address) {
        CoreHelperUtil.copyToClopboard(this.address);
        SnackController.showSuccess("Address copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
  onNetworks() {
    if (this.isAllowedNetworkSwitch()) {
      RouterController.push("Networks");
    }
  }
  onTransactions() {
    EventsController.sendEvent({ type: "track", event: "CLICK_TRANSACTIONS" });
    RouterController.push("Transactions");
  }
  async onDisconnect() {
    try {
      this.disconecting = true;
      await ConnectionController.disconnect();
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_SUCCESS" });
      ModalController.close();
    } catch {
      EventsController.sendEvent({ type: "track", event: "DISCONNECT_ERROR" });
      SnackController.showError("Failed to disconnect");
    } finally {
      this.disconecting = false;
    }
  }
  onExplorer() {
    const { addressExplorerUrl } = AccountController.state;
    if (addressExplorerUrl) {
      CoreHelperUtil.openHref(addressExplorerUrl, "_blank");
    }
  }
};
W3mAccountView.styles = styles_default2;
__decorate6([
  state()
], W3mAccountView.prototype, "address", void 0);
__decorate6([
  state()
], W3mAccountView.prototype, "profileImage", void 0);
__decorate6([
  state()
], W3mAccountView.prototype, "profileName", void 0);
__decorate6([
  state()
], W3mAccountView.prototype, "balance", void 0);
__decorate6([
  state()
], W3mAccountView.prototype, "balanceSymbol", void 0);
__decorate6([
  state()
], W3mAccountView.prototype, "network", void 0);
__decorate6([
  state()
], W3mAccountView.prototype, "disconecting", void 0);
W3mAccountView = __decorate6([
  customElement("w3m-account-view")
], W3mAccountView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-all-wallets-view/index.js
var __decorate7 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsView = class W3mAllWalletsView2 extends LitElement {
  constructor() {
    super(...arguments);
    this.search = "";
    this.onDebouncedSearch = CoreHelperUtil.debounce((value) => {
      this.search = value;
    });
  }
  render() {
    const isSearch = this.search.length >= 2;
    return html`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${isSearch ? html`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>` : html`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `;
  }
  onInputChange(event) {
    this.onDebouncedSearch(event.detail);
  }
  qrButtonTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return html`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `;
    }
    return null;
  }
  onWalletConnectQr() {
    RouterController.push("ConnectingWalletConnect");
  }
};
__decorate7([
  state()
], W3mAllWalletsView.prototype, "search", void 0);
W3mAllWalletsView = __decorate7([
  customElement("w3m-all-wallets-view")
], W3mAllWalletsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-view/styles.js
var styles_default3 = css`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connect-view/index.js
var __decorate8 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectView = class W3mConnectView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.connectors = ConnectorController.state.connectors;
    this.unsubscribe.push(ConnectorController.subscribeKey("connectors", (val) => this.connectors = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `;
  }
  walletConnectConnectorTemplate() {
    if (CoreHelperUtil.isMobile()) {
      return null;
    }
    const connector = this.connectors.find((c) => c.type === "WALLET_CONNECT");
    if (!connector) {
      return null;
    }
    return html`
      <wui-list-wallet
        imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
        name=${connector.name ?? "Unknown"}
        @click=${() => this.onConnector(connector)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `;
  }
  customTemplate() {
    const { customWallets } = OptionsController.state;
    if (!(customWallets == null ? void 0 : customWallets.length)) {
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(customWallets);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${wallet.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `);
  }
  featuredTemplate() {
    const { featured } = ApiController.state;
    if (!featured.length) {
      return null;
    }
    const wallets = this.filterOutDuplicateWallets(featured);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${wallet.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `);
  }
  recentTemplate() {
    const recent = StorageUtil.getRecentWallets();
    return recent.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${wallet.name ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `);
  }
  announcedTemplate() {
    return this.connectors.map((connector) => {
      if (connector.type !== "ANNOUNCED") {
        return null;
      }
      return html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
          name=${connector.name ?? "Unknown"}
          @click=${() => this.onConnector(connector)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `;
    });
  }
  injectedTemplate() {
    const announced = this.connectors.find((c) => c.type === "ANNOUNCED");
    return this.connectors.map((connector) => {
      if (connector.type !== "INJECTED") {
        return null;
      }
      if (!ConnectionController.checkInstalled()) {
        return null;
      }
      return html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
          name=${connector.name ?? "Unknown"}
          @click=${() => this.onConnector(connector)}
          tagLabel=${ifDefined(announced ? void 0 : "installed")}
          tagVariant=${ifDefined(announced ? void 0 : "success")}
        >
        </wui-list-wallet>
      `;
    });
  }
  connectorsTemplate() {
    return this.connectors.map((connector) => {
      if (["WALLET_CONNECT", "INJECTED", "ANNOUNCED"].includes(connector.type)) {
        return null;
      }
      return html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getConnectorImage(connector))}
          name=${connector.name ?? "Unknown"}
          @click=${() => this.onConnector(connector)}
        >
        </wui-list-wallet>
      `;
    });
  }
  allWalletsTemplate() {
    const roundedCount = Math.floor(ApiController.state.count / 10) * 10;
    return html`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${roundedCount}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `;
  }
  recommendedTemplate() {
    const { recommended } = ApiController.state;
    const { customWallets, featuredWalletIds } = OptionsController.state;
    const { connectors } = ConnectorController.state;
    const recent = StorageUtil.getRecentWallets();
    const eip6963 = connectors.filter((c) => c.type === "ANNOUNCED");
    if (featuredWalletIds || customWallets || !recommended.length) {
      return null;
    }
    const overrideLength = eip6963.length + recent.length;
    const maxRecommended = Math.max(0, 2 - overrideLength);
    const wallets = this.filterOutDuplicateWallets(recommended).slice(0, maxRecommended);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          name=${(wallet == null ? void 0 : wallet.name) ?? "Unknown"}
          @click=${() => this.onConnectWallet(wallet)}
        >
        </wui-list-wallet>
      `);
  }
  onConnector(connector) {
    if (connector.type === "WALLET_CONNECT") {
      if (CoreHelperUtil.isMobile()) {
        RouterController.push("AllWallets");
      } else {
        RouterController.push("ConnectingWalletConnect");
      }
    } else {
      RouterController.push("ConnectingExternal", { connector });
    }
  }
  filterOutDuplicateWallets(wallets) {
    const { connectors } = ConnectorController.state;
    const recent = StorageUtil.getRecentWallets();
    const recentIds = recent.map((wallet) => wallet.id);
    const rdnsIds = connectors.map((c) => {
      var _a2;
      return (_a2 = c.info) == null ? void 0 : _a2.rdns;
    }).filter(Boolean);
    const filtered = wallets.filter((wallet) => !recentIds.includes(wallet.id) && !rdnsIds.includes(wallet.rdns ?? void 0));
    return filtered;
  }
  onAllWallets() {
    EventsController.sendEvent({ type: "track", event: "CLICK_ALL_WALLETS" });
    RouterController.push("AllWallets");
  }
  onConnectWallet(wallet) {
    RouterController.push("ConnectingWalletConnect", { wallet });
  }
};
W3mConnectView.styles = styles_default3;
__decorate8([
  state()
], W3mConnectView.prototype, "connectors", void 0);
W3mConnectView = __decorate8([
  customElement("w3m-connect-view")
], W3mConnectView);

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/styles.js
var styles_default4 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/utils/w3m-connecting-widget/index.js
var __decorate9 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWidget = class extends LitElement {
  constructor() {
    var _a2, _b, _c, _d;
    super();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    this.connector = (_b = RouterController.state.data) == null ? void 0 : _b.connector;
    this.timeout = void 0;
    this.secondaryBtnLabel = "Try again";
    this.secondaryBtnIcon = "refresh";
    this.secondaryLabel = "Accept connection request in the wallet";
    this.onConnect = void 0;
    this.onRender = void 0;
    this.onAutoConnect = void 0;
    this.isWalletConnect = true;
    this.unsubscribe = [];
    this.imageSrc = AssetUtil.getWalletImage(this.wallet) ?? AssetUtil.getConnectorImage(this.connector);
    this.name = ((_c = this.wallet) == null ? void 0 : _c.name) ?? ((_d = this.connector) == null ? void 0 : _d.name) ?? "Wallet";
    this.isRetrying = false;
    this.uri = ConnectionController.state.wcUri;
    this.error = ConnectionController.state.wcError;
    this.ready = false;
    this.showRetry = false;
    this.buffering = false;
    this.isMobile = false;
    this.onRetry = void 0;
    this.unsubscribe.push(...[
      ConnectionController.subscribeKey("wcUri", (val) => {
        var _a3;
        this.uri = val;
        if (this.isRetrying && this.onRetry) {
          this.isRetrying = false;
          (_a3 = this.onConnect) == null ? void 0 : _a3.call(this);
        }
      }),
      ConnectionController.subscribeKey("wcError", (val) => this.error = val),
      ConnectionController.subscribeKey("buffering", (val) => this.buffering = val)
    ]);
  }
  firstUpdated() {
    var _a2;
    (_a2 = this.onAutoConnect) == null ? void 0 : _a2.call(this);
    this.showRetry = !this.onAutoConnect;
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    clearTimeout(this.timeout);
  }
  render() {
    var _a2;
    (_a2 = this.onRender) == null ? void 0 : _a2.call(this);
    this.onShowRetry();
    const subLabel = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel;
    let label = `Continue in ${this.name}`;
    if (this.buffering) {
      label = "Connecting...";
    }
    if (this.error) {
      label = "Connection declined";
    }
    return html`
      <wui-flex
        data-error=${ifDefined(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ifDefined(this.imageSrc)}></wui-wallet-image>

          ${this.error ? null : this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error ? "error-100" : "fg-100"}>
            ${label}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error && this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect ? html`
            <wui-flex .padding=${["0", "xl", "xl", "xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          ` : null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onShowRetry() {
    var _a2;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-button");
      retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  onTryAgain() {
    var _a2, _b;
    if (!this.buffering) {
      ConnectionController.setWcError(false);
      if (this.onRetry) {
        this.isRetrying = true;
        (_a2 = this.onRetry) == null ? void 0 : _a2.call(this);
      } else {
        (_b = this.onConnect) == null ? void 0 : _b.call(this);
      }
    }
  }
  loaderTemplate() {
    const borderRadiusMaster = ThemeController.state.themeVariables["--w3m-border-radius-master"];
    const radius = borderRadiusMaster ? parseInt(borderRadiusMaster.replace("px", ""), 10) : 4;
    return html`<wui-loading-thumbnail radius=${radius * 9}></wui-loading-thumbnail>`;
  }
  onCopyUri() {
    try {
      if (this.uri) {
        CoreHelperUtil.copyToClopboard(this.uri);
        SnackController.showSuccess("Link copied");
      }
    } catch {
      SnackController.showError("Failed to copy");
    }
  }
};
W3mConnectingWidget.styles = styles_default4;
__decorate9([
  state()
], W3mConnectingWidget.prototype, "uri", void 0);
__decorate9([
  state()
], W3mConnectingWidget.prototype, "error", void 0);
__decorate9([
  state()
], W3mConnectingWidget.prototype, "ready", void 0);
__decorate9([
  state()
], W3mConnectingWidget.prototype, "showRetry", void 0);
__decorate9([
  state()
], W3mConnectingWidget.prototype, "buffering", void 0);
__decorate9([
  property({ type: Boolean })
], W3mConnectingWidget.prototype, "isMobile", void 0);
__decorate9([
  property()
], W3mConnectingWidget.prototype, "onRetry", void 0);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-external-view/index.js
var __decorate10 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platformMap = {
  INJECTED: "browser",
  ANNOUNCED: "browser"
};
var W3mConnectingExternalView = class W3mConnectingExternalView2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.connector) {
      throw new Error("w3m-connecting-view: No connector provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: {
        name: this.connector.name ?? "Unknown",
        platform: platformMap[this.connector.type] ?? "external"
      }
    });
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    this.isWalletConnect = false;
  }
  async onConnectProxy() {
    try {
      this.error = false;
      if (this.connector) {
        if (this.connector.imageUrl) {
          StorageUtil.setConnectedWalletImageUrl(this.connector.imageUrl);
        }
        await ConnectionController.connectExternal(this.connector);
        ModalController.close();
        EventsController.sendEvent({
          type: "track",
          event: "CONNECT_SUCCESS",
          properties: { method: "external" }
        });
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingExternalView = __decorate10([
  customElement("w3m-connecting-external-view")
], W3mConnectingExternalView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-siwe-view/index.js
var __decorate11 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingSiweView = class W3mConnectingSiweView2 extends LitElement {
  constructor() {
    var _a2, _b;
    super(...arguments);
    this.dappUrl = (_a2 = OptionsController.state.metadata) == null ? void 0 : _a2.url;
    this.dappName = (_b = OptionsController.state.metadata) == null ? void 0 : _b.name;
  }
  render() {
    return html`
      <wui-flex justifyContent="center" .padding=${["2xl", "0", "xxl", "0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0", "4xl", "l", "4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName ?? "Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0", "3xl", "l", "3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l", "xl", "xl", "xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${true} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${true} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `;
  }
  urlTemplate() {
    if (this.dappUrl) {
      return html`<wui-flex .padding=${["0", "0", "l", "0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`;
    }
    return null;
  }
  onDappLink() {
    if (this.dappUrl) {
      CoreHelperUtil.openHref(this.dappUrl, "_blank");
    }
  }
  onSign() {
  }
  onCancel() {
    RouterController.goBack();
  }
};
W3mConnectingSiweView = __decorate11([
  customElement("w3m-connecting-siwe-view")
], W3mConnectingSiweView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-connecting-wc-view/index.js
var __decorate12 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcView = class W3mConnectingWcView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.interval = void 0;
    this.lastRetry = Date.now();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    this.platform = void 0;
    this.platforms = [];
    this.initializeConnection();
    this.interval = setInterval(this.initializeConnection.bind(this), ConstantsUtil.TEN_SEC_MS);
  }
  disconnectedCallback() {
    clearTimeout(this.interval);
  }
  render() {
    if (!this.wallet) {
      return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
    }
    this.determinePlatforms();
    return html`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `;
  }
  async initializeConnection(retry = false) {
    try {
      const { wcPairingExpiry } = ConnectionController.state;
      if (retry || CoreHelperUtil.isPairingExpired(wcPairingExpiry)) {
        ConnectionController.connectWalletConnect();
        if (this.wallet) {
          const url = AssetUtil.getWalletImage(this.wallet);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        } else {
          const connectors = ConnectorController.state.connectors;
          const connector = connectors.find((c) => c.type === "WALLET_CONNECT");
          const url = AssetUtil.getConnectorImage(connector);
          if (url) {
            StorageUtil.setConnectedWalletImageUrl(url);
          }
        }
        await ConnectionController.state.wcPromise;
        this.finalizeConnection();
        ModalController.close();
      }
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      ConnectionController.setWcError(true);
      if (CoreHelperUtil.isAllowedRetry(this.lastRetry)) {
        SnackController.showError("Declined");
        this.lastRetry = Date.now();
        this.initializeConnection(true);
      }
    }
  }
  finalizeConnection() {
    const { wcLinking, recentWallet } = ConnectionController.state;
    if (wcLinking) {
      StorageUtil.setWalletConnectDeepLink(wcLinking);
    }
    if (recentWallet) {
      StorageUtil.setWeb3ModalRecent(recentWallet);
    }
    EventsController.sendEvent({
      type: "track",
      event: "CONNECT_SUCCESS",
      properties: {
        method: wcLinking ? "mobile" : "qrcode"
      }
    });
  }
  determinePlatforms() {
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");
    }
    if (this.platform) {
      return;
    }
    const { mobile_link, desktop_link, webapp_link, injected, rdns } = this.wallet;
    const injectedIds = injected == null ? void 0 : injected.map(({ injected_id }) => injected_id).filter(Boolean);
    const browserIds = rdns ? [rdns] : injectedIds ?? [];
    const isBrowser = browserIds.length;
    const isMobileWc = mobile_link;
    const isWebWc = webapp_link;
    const isBrowserInstalled = ConnectionController.checkInstalled(browserIds);
    const isBrowserWc = isBrowser && isBrowserInstalled;
    const isDesktopWc = desktop_link && !CoreHelperUtil.isMobile();
    if (isBrowserWc) {
      this.platforms.push("browser");
    }
    if (isMobileWc) {
      this.platforms.push(CoreHelperUtil.isMobile() ? "mobile" : "qrcode");
    }
    if (isWebWc) {
      this.platforms.push("web");
    }
    if (isDesktopWc) {
      this.platforms.push("desktop");
    }
    if (!isBrowserWc && isBrowser) {
      this.platforms.push("unsupported");
    }
    this.platform = this.platforms[0];
  }
  platformTemplate() {
    switch (this.platform) {
      case "browser":
        return html`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
      case "desktop":
        return html`
          <w3m-connecting-wc-desktop .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-desktop>
        `;
      case "web":
        return html`
          <w3m-connecting-wc-web .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-web>
        `;
      case "mobile":
        return html`
          <w3m-connecting-wc-mobile isMobile .onRetry=${() => this.initializeConnection(true)}>
          </w3m-connecting-wc-mobile>
        `;
      case "qrcode":
        return html`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
      default:
        return html`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`;
    }
  }
  headerTemplate() {
    const multiPlatform = this.platforms.length > 1;
    if (!multiPlatform) {
      return null;
    }
    return html`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `;
  }
  async onSelectPlatform(platform) {
    var _a2;
    const container = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("div");
    if (container) {
      await container.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.platform = platform;
      container.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
__decorate12([
  state()
], W3mConnectingWcView.prototype, "platform", void 0);
__decorate12([
  state()
], W3mConnectingWcView.prototype, "platforms", void 0);
W3mConnectingWcView = __decorate12([
  customElement("w3m-connecting-wc-view")
], W3mConnectingWcView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-downloads-view/index.js
var __decorate13 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mDownloadsView = class W3mDownloadsView2 extends LitElement {
  constructor() {
    var _a2;
    super(...arguments);
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
  }
  render() {
    if (!this.wallet) {
      throw new Error("w3m-downloads-view");
    }
    return html`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s", "s", "l", "s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `;
  }
  chromeTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.chrome_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`;
  }
  iosTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.app_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`;
  }
  androidTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.play_store)) {
      return null;
    }
    return html`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`;
  }
  homepageTemplate() {
    var _a2;
    if (!((_a2 = this.wallet) == null ? void 0 : _a2.homepage)) {
      return null;
    }
    return html`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `;
  }
  onChromeStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.chrome_store) {
      CoreHelperUtil.openHref(this.wallet.chrome_store, "_blank");
    }
  }
  onAppStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mDownloadsView = __decorate13([
  customElement("w3m-downloads-view")
], W3mDownloadsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-get-wallet-view/index.js
var __decorate14 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EXPLORER = "https://walletconnect.com/explorer";
var W3mGetWalletView = class W3mGetWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${() => {
      CoreHelperUtil.openHref("https://walletconnect.com/explorer?type=wallet", "_blank");
    }}
        ></wui-list-wallet>
      </wui-flex>
    `;
  }
  recommendedWalletsTemplate() {
    const { recommended, featured } = ApiController.state;
    const { customWallets } = OptionsController.state;
    const wallets = [...featured, ...customWallets ?? [], ...recommended].slice(0, 4);
    return wallets.map((wallet) => html`
        <wui-list-wallet
          name=${wallet.name ?? "Unknown"}
          tagVariant="main"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          @click=${() => {
      CoreHelperUtil.openHref(wallet.homepage ?? EXPLORER, "_blank");
    }}
        ></wui-list-wallet>
      `);
  }
};
W3mGetWalletView = __decorate14([
  customElement("w3m-get-wallet-view")
], W3mGetWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-network-switch-view/styles.js
var styles_default5 = css`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-network-switch-view/index.js
var __decorate15 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworkSwitchView = class W3mNetworkSwitchView2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.network = (_a2 = RouterController.state.data) == null ? void 0 : _a2.network;
    this.unsubscribe = [];
    this.showRetry = false;
    this.error = false;
    this.currentNetwork = NetworkController.state.caipNetwork;
    this.unsubscribe.push(NetworkController.subscribeKey("caipNetwork", (val) => {
      var _a3;
      if ((val == null ? void 0 : val.id) !== ((_a3 = this.currentNetwork) == null ? void 0 : _a3.id)) {
        RouterController.goBack();
      }
    }));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  firstUpdated() {
    this.onSwitchNetwork();
  }
  render() {
    if (!this.network) {
      throw new Error("w3m-network-switch-view: No network provided");
    }
    this.onShowRetry();
    const label = this.error ? "Switch declined" : "Approve in wallet";
    const subLabel = this.error ? "Switch can be declined if chain is not supported by a wallet or previous request is still active" : "Accept connection request in your wallet";
    return html`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ifDefined(AssetUtil.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error ? null : html`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${true}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${label}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${subLabel}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `;
  }
  onShowRetry() {
    var _a2;
    if (this.error && !this.showRetry) {
      this.showRetry = true;
      const retryButton = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-button");
      retryButton.animate([{ opacity: 0 }, { opacity: 1 }], {
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onSwitchNetwork() {
    try {
      this.error = false;
      if (this.network) {
        await NetworkController.switchActiveNetwork(this.network);
        RouterController.goBack();
      }
    } catch {
      this.error = true;
    }
  }
};
W3mNetworkSwitchView.styles = styles_default5;
__decorate15([
  state()
], W3mNetworkSwitchView.prototype, "showRetry", void 0);
__decorate15([
  state()
], W3mNetworkSwitchView.prototype, "error", void 0);
__decorate15([
  state()
], W3mNetworkSwitchView.prototype, "currentNetwork", void 0);
W3mNetworkSwitchView = __decorate15([
  customElement("w3m-network-switch-view")
], W3mNetworkSwitchView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-networks-view/index.js
var __decorate16 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mNetworksView = class W3mNetworksView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.caipNetwork = NetworkController.state.caipNetwork;
    this.unsubscribe.push(NetworkController.subscribeKey("caipNetwork", (val) => this.caipNetwork = val));
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `;
  }
  onNetworkHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_NETWORK_HELP" });
    RouterController.push("WhatIsANetwork");
  }
  networksTemplate() {
    const { approvedCaipNetworkIds, requestedCaipNetworks, supportsAllNetworks } = NetworkController.state;
    const approvedIds = approvedCaipNetworkIds;
    const requested = requestedCaipNetworks;
    if (approvedIds == null ? void 0 : approvedIds.length) {
      requested == null ? void 0 : requested.sort((a, b) => approvedIds.indexOf(b.id) - approvedIds.indexOf(a.id));
    }
    return requested == null ? void 0 : requested.map((network) => {
      var _a2;
      return html`
        <wui-card-select
          .selected=${((_a2 = this.caipNetwork) == null ? void 0 : _a2.id) === network.id}
          imageSrc=${ifDefined(AssetUtil.getNetworkImage(network))}
          type="network"
          name=${network.name ?? network.id}
          @click=${() => this.onSwitchNetwork(network)}
          .disabled=${!supportsAllNetworks && !(approvedIds == null ? void 0 : approvedIds.includes(network.id))}
        ></wui-card-select>
      `;
    });
  }
  async onSwitchNetwork(network) {
    const { isConnected } = AccountController.state;
    const { approvedCaipNetworkIds, supportsAllNetworks, caipNetwork } = NetworkController.state;
    if (isConnected && (caipNetwork == null ? void 0 : caipNetwork.id) !== network.id) {
      if (approvedCaipNetworkIds == null ? void 0 : approvedCaipNetworkIds.includes(network.id)) {
        await NetworkController.switchActiveNetwork(network);
      } else if (supportsAllNetworks) {
        RouterController.push("SwitchNetwork", { network });
      }
    } else if (!isConnected) {
      NetworkController.setCaipNetwork(network);
      RouterController.push("Connect");
    }
  }
};
__decorate16([
  state()
], W3mNetworksView.prototype, "caipNetwork", void 0);
W3mNetworksView = __decorate16([
  customElement("w3m-networks-view")
], W3mNetworksView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-transactions-view/styles.js
var styles_default6 = css`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-transactions-view/index.js
var __decorate17 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID = "last-transaction";
var LOADING_ITEM_COUNT = 7;
var W3mTransactionsView = class W3mTransactionsView2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.address = AccountController.state.address;
    this.transactions = TransactionsController.state.transactions;
    this.transactionsByYear = TransactionsController.state.transactionsByYear;
    this.loading = TransactionsController.state.loading;
    this.empty = TransactionsController.state.empty;
    this.next = TransactionsController.state.next;
    this.unsubscribe.push(...[
      AccountController.subscribe((val) => {
        if (val.isConnected) {
          if (this.address !== val.address) {
            this.address = val.address;
            TransactionsController.resetTransactions();
            TransactionsController.fetchTransactions(val.address);
          }
        }
      }),
      TransactionsController.subscribe((val) => {
        this.transactions = val.transactions;
        this.transactionsByYear = val.transactionsByYear;
        this.loading = val.loading;
        this.empty = val.empty;
        this.next = val.next;
      })
    ]);
  }
  firstUpdated() {
    if (this.transactions.length === 0) {
      TransactionsController.fetchTransactions(this.address);
    }
    this.createPaginationObserver();
  }
  updated() {
    this.setPaginationObserver();
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty ? null : this.templateTransactionsByYear()}
        ${this.loading ? this.templateLoading() : null}
        ${!this.loading && this.empty ? this.templateEmpty() : null}
      </wui-flex>
    `;
  }
  templateTransactionsByYear() {
    const sortedYearKeys = Object.keys(this.transactionsByYear).sort().reverse();
    return sortedYearKeys.map((year, index) => {
      const isLastGroup = index === sortedYearKeys.length - 1;
      const yearInt = parseInt(year, 10);
      const groupTitle = TransactionUtil.getTransactionGroupTitle(yearInt);
      const transactions = this.transactionsByYear[yearInt];
      if (!transactions) {
        return null;
      }
      return html`
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs", "s", "s", "s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${groupTitle}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(transactions, isLastGroup)}
          </wui-flex>
        </wui-flex>
      `;
    });
  }
  templateRenderTransaction(transaction, isLastTransaction) {
    const { date, descriptions, direction, isAllNFT, images, status, transfers, type } = this.getTransactionListItemProps(transaction);
    const haveMultipleTransfers = (transfers == null ? void 0 : transfers.length) > 1;
    const haveTwoTransfers = (transfers == null ? void 0 : transfers.length) === 2;
    if (haveTwoTransfers && !isAllNFT) {
      return html`
        <wui-transaction-list-item
          date=${date}
          direction=${direction}
          id=${isLastTransaction && this.next ? PAGINATOR_ID : ""}
          status=${status}
          type=${type}
          .images=${images}
          .descriptions=${descriptions}
        ></wui-transaction-list-item>
      `;
    }
    if (haveMultipleTransfers) {
      return transfers.map((transfer, index) => {
        const description = TransactionUtil.getTransferDescription(transfer);
        const isLastTransfer = isLastTransaction && index === transfers.length - 1;
        return html` <wui-transaction-list-item
          date=${date}
          direction=${transfer.direction}
          id=${isLastTransfer && this.next ? PAGINATOR_ID : ""}
          status=${status}
          type=${type}
          onlyDirectionIcon=${true}
          .images=${[images == null ? void 0 : images[index]]}
          .descriptions=${[description]}
        ></wui-transaction-list-item>`;
      });
    }
    return html`
      <wui-transaction-list-item
        date=${date}
        direction=${direction}
        id=${isLastTransaction && this.next ? PAGINATOR_ID : ""}
        status=${status}
        type=${type}
        .images=${images}
        .descriptions=${descriptions}
      ></wui-transaction-list-item>
    `;
  }
  templateTransactions(transactions, isLastGroup) {
    return transactions.map((transaction, index) => {
      const isLastTransaction = isLastGroup && index === transactions.length - 1;
      return html`${this.templateRenderTransaction(transaction, isLastTransaction)}`;
    });
  }
  templateEmpty() {
    return html`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl", "xl", "3xl", "xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${true}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `;
  }
  templateLoading() {
    return Array(LOADING_ITEM_COUNT).fill(html` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((item) => item);
  }
  createPaginationObserver() {
    const { projectId } = OptionsController.state;
    this.paginationObserver = new IntersectionObserver(([element]) => {
      if ((element == null ? void 0 : element.isIntersecting) && !this.loading) {
        TransactionsController.fetchTransactions(this.address);
        EventsController.sendEvent({
          type: "track",
          event: "LOAD_MORE_TRANSACTIONS",
          properties: {
            address: this.address,
            projectId,
            cursor: this.next
          }
        });
      }
    }, {});
    this.setPaginationObserver();
  }
  setPaginationObserver() {
    var _a2, _b, _c;
    (_a2 = this.paginationObserver) == null ? void 0 : _a2.disconnect();
    const lastItem = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(`#${PAGINATOR_ID}`);
    if (lastItem) {
      (_c = this.paginationObserver) == null ? void 0 : _c.observe(lastItem);
    }
  }
  getTransactionListItemProps(transaction) {
    var _a2, _b, _c, _d, _e;
    const date = DateUtil.getRelativeDateFromNow((_a2 = transaction == null ? void 0 : transaction.metadata) == null ? void 0 : _a2.minedAt);
    const descriptions = TransactionUtil.getTransactionDescriptions(transaction);
    const transfers = transaction == null ? void 0 : transaction.transfers;
    const transfer = (_b = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _b[0];
    const isAllNFT = Boolean(transfer) && ((_c = transaction == null ? void 0 : transaction.transfers) == null ? void 0 : _c.every((item) => Boolean(item.nft_info)));
    const images = TransactionUtil.getTransactionImages(transfers);
    return {
      date,
      direction: transfer == null ? void 0 : transfer.direction,
      descriptions,
      isAllNFT,
      images,
      status: (_d = transaction.metadata) == null ? void 0 : _d.status,
      transfers,
      type: (_e = transaction.metadata) == null ? void 0 : _e.operationType
    };
  }
};
W3mTransactionsView.styles = styles_default6;
__decorate17([
  state()
], W3mTransactionsView.prototype, "address", void 0);
__decorate17([
  state()
], W3mTransactionsView.prototype, "transactions", void 0);
__decorate17([
  state()
], W3mTransactionsView.prototype, "transactionsByYear", void 0);
__decorate17([
  state()
], W3mTransactionsView.prototype, "loading", void 0);
__decorate17([
  state()
], W3mTransactionsView.prototype, "empty", void 0);
__decorate17([
  state()
], W3mTransactionsView.prototype, "next", void 0);
W3mTransactionsView = __decorate17([
  customElement("w3m-transactions-view")
], W3mTransactionsView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-network-view/index.js
var __decorate18 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data = [
  {
    images: ["network", "layers", "system"],
    title: "The system’s nuts and bolts",
    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."
  },
  {
    images: ["noun", "defiAlt", "dao"],
    title: "Designed for different uses",
    text: "Each network is designed differently, and may therefore suit certain apps and experiences."
  }
];
var W3mWhatIsANetworkView = class W3mWhatIsANetworkView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${() => {
      CoreHelperUtil.openHref("https://ethereum.org/en/developers/docs/networks/", "_blank");
    }}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `;
  }
};
W3mWhatIsANetworkView = __decorate18([
  customElement("w3m-what-is-a-network-view")
], W3mWhatIsANetworkView);

// node_modules/@web3modal/scaffold/dist/esm/src/views/w3m-what-is-a-wallet-view/index.js
var __decorate19 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var data2 = [
  {
    images: ["login", "profile", "lock"],
    title: "One login for all of web3",
    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
  },
  {
    images: ["defi", "nft", "eth"],
    title: "A home for your digital assets",
    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
  },
  {
    images: ["browser", "noun", "dao"],
    title: "Your gateway to a new web",
    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
  }
];
var W3mWhatIsAWalletView = class W3mWhatIsAWalletView2 extends LitElement {
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl", "xl", "xl", "xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${data2}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `;
  }
  onGetWallet() {
    EventsController.sendEvent({ type: "track", event: "CLICK_GET_WALLET" });
    RouterController.push("GetWallet");
  }
};
W3mWhatIsAWalletView = __decorate19([
  customElement("w3m-what-is-a-wallet-view")
], W3mWhatIsAWalletView);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-list/styles.js
var styles_default7 = css`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-list/index.js
var __decorate20 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PAGINATOR_ID2 = "local-paginator";
var W3mAllWalletsList = class W3mAllWalletsList2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.paginationObserver = void 0;
    this.initial = !ApiController.state.wallets.length;
    this.wallets = ApiController.state.wallets;
    this.recommended = ApiController.state.recommended;
    this.featured = ApiController.state.featured;
    this.unsubscribe.push(...[
      ApiController.subscribeKey("wallets", (val) => this.wallets = val),
      ApiController.subscribeKey("recommended", (val) => this.recommended = val),
      ApiController.subscribeKey("featured", (val) => this.featured = val)
    ]);
  }
  firstUpdated() {
    this.initialFetch();
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var _a2;
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
    (_a2 = this.paginationObserver) == null ? void 0 : _a2.disconnect();
  }
  render() {
    return html`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0", "s", "s", "s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial ? this.shimmerTemplate(16) : this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `;
  }
  async initialFetch() {
    var _a2;
    const gridEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-grid");
    if (this.initial && gridEl) {
      await ApiController.fetchWallets({ page: 1 });
      await gridEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.initial = false;
      gridEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  shimmerTemplate(items, id) {
    return [...Array(items)].map(() => html`
        <wui-card-select-loader type="wallet" id=${ifDefined(id)}></wui-card-select-loader>
      `);
  }
  walletsTemplate() {
    const wallets = [...this.featured, ...this.recommended, ...this.wallets];
    return wallets.map((wallet) => html`
        <wui-card-select
          imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
          type="wallet"
          name=${wallet.name}
          @click=${() => this.onConnectWallet(wallet)}
        ></wui-card-select>
      `);
  }
  paginationLoaderTemplate() {
    const { wallets, recommended, featured, count } = ApiController.state;
    const columns = window.innerWidth < 352 ? 3 : 4;
    const currentWallets = wallets.length + recommended.length;
    const minimumRows = Math.ceil(currentWallets / columns);
    let shimmerCount = minimumRows * columns - currentWallets + columns;
    shimmerCount -= wallets.length ? featured.length % columns : 0;
    if (count === 0 || [...featured, ...wallets, ...recommended].length < count) {
      return this.shimmerTemplate(shimmerCount, PAGINATOR_ID2);
    }
    return null;
  }
  createPaginationObserver() {
    var _a2;
    const loaderEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(`#${PAGINATOR_ID2}`);
    if (loaderEl) {
      this.paginationObserver = new IntersectionObserver(([element]) => {
        if ((element == null ? void 0 : element.isIntersecting) && !this.initial) {
          const { page, count, wallets } = ApiController.state;
          if (wallets.length < count) {
            ApiController.fetchWallets({ page: page + 1 });
          }
        }
      });
      this.paginationObserver.observe(loaderEl);
    }
  }
  onConnectWallet(wallet) {
    const { connectors } = ConnectorController.state;
    const connector = connectors.find(({ explorerId }) => explorerId === wallet.id);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsList.styles = styles_default7;
__decorate20([
  state()
], W3mAllWalletsList.prototype, "initial", void 0);
__decorate20([
  state()
], W3mAllWalletsList.prototype, "wallets", void 0);
__decorate20([
  state()
], W3mAllWalletsList.prototype, "recommended", void 0);
__decorate20([
  state()
], W3mAllWalletsList.prototype, "featured", void 0);
W3mAllWalletsList = __decorate20([
  customElement("w3m-all-wallets-list")
], W3mAllWalletsList);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-search/styles.js
var styles_default8 = css`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-all-wallets-search/index.js
var __decorate21 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mAllWalletsSearch = class W3mAllWalletsSearch2 extends LitElement {
  constructor() {
    super(...arguments);
    this.prevQuery = "";
    this.loading = true;
    this.query = "";
  }
  render() {
    this.onSearch();
    return this.loading ? html`<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate();
  }
  async onSearch() {
    if (this.query !== this.prevQuery) {
      this.prevQuery = this.query;
      this.loading = true;
      await ApiController.searchWallet({ search: this.query });
      this.loading = false;
    }
  }
  walletsTemplate() {
    const { search } = ApiController.state;
    if (!search.length) {
      return html`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `;
    }
    return html`
      <wui-grid
        .padding=${["0", "s", "s", "s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${search.map((wallet) => html`
            <wui-card-select
              imageSrc=${ifDefined(AssetUtil.getWalletImage(wallet))}
              type="wallet"
              name=${wallet.name}
              @click=${() => this.onConnectWallet(wallet)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `;
  }
  onConnectWallet(wallet) {
    const { connectors } = ConnectorController.state;
    const connector = connectors.find(({ explorerId }) => explorerId === wallet.id);
    if (connector) {
      RouterController.push("ConnectingExternal", { connector });
    } else {
      RouterController.push("ConnectingWalletConnect", { wallet });
    }
  }
};
W3mAllWalletsSearch.styles = styles_default8;
__decorate21([
  state()
], W3mAllWalletsSearch.prototype, "loading", void 0);
__decorate21([
  property()
], W3mAllWalletsSearch.prototype, "query", void 0);
W3mAllWalletsSearch = __decorate21([
  customElement("w3m-all-wallets-search")
], W3mAllWalletsSearch);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-header/index.js
var __decorate22 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingHeader = class W3mConnectingHeader2 extends LitElement {
  constructor() {
    super();
    this.platformTabs = [];
    this.unsubscribe = [];
    this.platforms = [];
    this.onSelectPlatfrom = void 0;
    this.buffering = false;
    this.unsubscribe.push(ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const tabs = this.generateTabs();
    return html`
      <wui-flex justifyContent="center" .padding=${["l", "0", "0", "0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${tabs}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `;
  }
  generateTabs() {
    const tabs = this.platforms.map((platform) => {
      if (platform === "browser") {
        return { label: "Browser", icon: "extension", platform: "browser" };
      } else if (platform === "mobile") {
        return { label: "Mobile", icon: "mobile", platform: "mobile" };
      } else if (platform === "qrcode") {
        return { label: "Mobile", icon: "mobile", platform: "qrcode" };
      } else if (platform === "web") {
        return { label: "Webapp", icon: "browser", platform: "web" };
      } else if (platform === "desktop") {
        return { label: "Desktop", icon: "desktop", platform: "desktop" };
      }
      return { label: "Browser", icon: "extension", platform: "unsupported" };
    });
    this.platformTabs = tabs.map(({ platform }) => platform);
    return tabs;
  }
  onTabChange(index) {
    var _a2;
    const tab = this.platformTabs[index];
    if (tab) {
      (_a2 = this.onSelectPlatfrom) == null ? void 0 : _a2.call(this, tab);
    }
  }
};
__decorate22([
  property({ type: Array })
], W3mConnectingHeader.prototype, "platforms", void 0);
__decorate22([
  property()
], W3mConnectingHeader.prototype, "onSelectPlatfrom", void 0);
__decorate22([
  state()
], W3mConnectingHeader.prototype, "buffering", void 0);
W3mConnectingHeader = __decorate22([
  customElement("w3m-connecting-header")
], W3mConnectingHeader);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-browser/index.js
var __decorate23 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcBrowser = class W3mConnectingWcBrowser2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-browser: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onAutoConnect = this.onConnectProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  async onConnectProxy() {
    try {
      this.error = false;
      const { connectors } = ConnectorController.state;
      const announcedConnector = connectors.find((c) => {
        var _a2, _b;
        return c.type === "ANNOUNCED" && ((_a2 = c.info) == null ? void 0 : _a2.rdns) === ((_b = this.wallet) == null ? void 0 : _b.rdns);
      });
      const injectedConnector = connectors.find((c) => c.type === "INJECTED");
      if (announcedConnector) {
        await ConnectionController.connectExternal(announcedConnector);
      } else if (injectedConnector) {
        await ConnectionController.connectExternal(injectedConnector);
      }
      ModalController.close();
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_SUCCESS",
        properties: { method: "browser" }
      });
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "CONNECT_ERROR",
        properties: { message: (error == null ? void 0 : error.message) ?? "Unknown" }
      });
      this.error = true;
    }
  }
};
W3mConnectingWcBrowser = __decorate23([
  customElement("w3m-connecting-wc-browser")
], W3mConnectingWcBrowser);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-desktop/index.js
var __decorate24 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcDesktop = class W3mConnectingWcDesktop2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-desktop: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "desktop" }
    });
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.ready = true;
      this.timeout = setTimeout(() => {
        var _a2;
        (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
      }, 200);
    }
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.desktop_link) && this.uri) {
      try {
        this.error = false;
        const { desktop_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(desktop_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_self");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcDesktop = __decorate24([
  customElement("w3m-connecting-wc-desktop")
], W3mConnectingWcDesktop);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-mobile/index.js
var __decorate25 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcMobile = class W3mConnectingWcMobile2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-mobile: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.onRender = this.onRenderProxy.bind(this);
    document.addEventListener("visibilitychange", this.onBuffering.bind(this));
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "mobile" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("visibilitychange", this.onBuffering.bind(this));
  }
  onRenderProxy() {
    var _a2;
    if (!this.ready && this.uri) {
      this.ready = true;
      (_a2 = this.onConnect) == null ? void 0 : _a2.call(this);
    }
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.mobile_link) && this.uri) {
      try {
        this.error = false;
        const { mobile_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatNativeUrl(mobile_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_self");
      } catch {
        this.error = true;
      }
    }
  }
  onBuffering() {
    const isIos = CoreHelperUtil.isIos();
    if ((document == null ? void 0 : document.visibilityState) === "visible" && !this.error && isIos) {
      ConnectionController.setBuffering(true);
      setTimeout(() => {
        ConnectionController.setBuffering(false);
      }, 5e3);
    }
  }
};
W3mConnectingWcMobile = __decorate25([
  customElement("w3m-connecting-wc-mobile")
], W3mConnectingWcMobile);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-qrcode/styles.js
var styles_default9 = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-qrcode/index.js
var __decorate26 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcQrcode = class W3mConnectingWcQrcode2 extends W3mConnectingWidget {
  constructor() {
    var _a2;
    super();
    this.forceUpdate = () => {
      this.requestUpdate();
    };
    window.addEventListener("resize", this.forceUpdate);
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: ((_a2 = this.wallet) == null ? void 0 : _a2.name) ?? "WalletConnect", platform: "qrcode" }
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.forceUpdate);
  }
  render() {
    this.onRenderProxy();
    return html`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
  onRenderProxy() {
    if (!this.ready && this.uri) {
      this.timeout = setTimeout(() => {
        this.ready = true;
      }, 200);
    }
  }
  qrCodeTemplate() {
    if (!this.uri || !this.ready) {
      return null;
    }
    const size = this.getBoundingClientRect().width - 40;
    const alt = this.wallet ? this.wallet.name : void 0;
    ConnectionController.setWcLinking(void 0);
    ConnectionController.setRecentWallet(this.wallet);
    return html`<wui-qr-code
      size=${size}
      theme=${ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
      alt=${ifDefined(alt)}
    ></wui-qr-code>`;
  }
};
W3mConnectingWcQrcode.styles = styles_default9;
W3mConnectingWcQrcode = __decorate26([
  customElement("w3m-connecting-wc-qrcode")
], W3mConnectingWcQrcode);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-siwe/styles.js
var styles_default10 = css`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-siwe/index.js
var __decorate27 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingSiwe = class W3mConnectingSiwe2 extends LitElement {
  constructor() {
    var _a2;
    super(...arguments);
    this.dappImageUrl = (_a2 = OptionsController.state.metadata) == null ? void 0 : _a2.icons;
    this.walletImageUrl = StorageUtil.getConnectedWalletImageUrl();
  }
  firstUpdated() {
    var _a2;
    const visuals = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelectorAll("wui-visual-thumbnail");
    if (visuals == null ? void 0 : visuals[0]) {
      this.createAnimation(visuals[0], "translate(18px)");
    }
    if (visuals == null ? void 0 : visuals[1]) {
      this.createAnimation(visuals[1], "translate(-18px)");
    }
  }
  render() {
    var _a2;
    return html`
      <wui-visual-thumbnail
        ?borderRadiusFull=${true}
        .imageSrc=${(_a2 = this.dappImageUrl) == null ? void 0 : _a2[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `;
  }
  createAnimation(element, translation) {
    element.animate([{ transform: "translateX(0px)" }, { transform: translation }], {
      duration: 1600,
      easing: "cubic-bezier(0.56, 0, 0.48, 1)",
      direction: "alternate",
      iterations: Infinity
    });
  }
};
W3mConnectingSiwe.styles = styles_default10;
W3mConnectingSiwe = __decorate27([
  customElement("w3m-connecting-siwe")
], W3mConnectingSiwe);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-unsupported/index.js
var __decorate28 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcUnsupported = class W3mConnectingWcUnsupported2 extends LitElement {
  constructor() {
    var _a2;
    super();
    this.wallet = (_a2 = RouterController.state.data) == null ? void 0 : _a2.wallet;
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-unsupported: No wallet provided");
    }
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "browser" }
    });
  }
  render() {
    return html`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl", "xl", "xl", "xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ifDefined(AssetUtil.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `;
  }
};
W3mConnectingWcUnsupported = __decorate28([
  customElement("w3m-connecting-wc-unsupported")
], W3mConnectingWcUnsupported);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-connecting-wc-web/index.js
var __decorate29 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mConnectingWcWeb = class W3mConnectingWcWeb2 extends W3mConnectingWidget {
  constructor() {
    super();
    if (!this.wallet) {
      throw new Error("w3m-connecting-wc-web: No wallet provided");
    }
    this.onConnect = this.onConnectProxy.bind(this);
    this.secondaryBtnLabel = "Open";
    this.secondaryLabel = "Open and continue in a new browser tab";
    this.secondaryBtnIcon = "externalLink";
    EventsController.sendEvent({
      type: "track",
      event: "SELECT_WALLET",
      properties: { name: this.wallet.name, platform: "web" }
    });
  }
  onConnectProxy() {
    var _a2;
    if (((_a2 = this.wallet) == null ? void 0 : _a2.webapp_link) && this.uri) {
      try {
        this.error = false;
        const { webapp_link, name } = this.wallet;
        const { redirect, href } = CoreHelperUtil.formatUniversalUrl(webapp_link, this.uri);
        ConnectionController.setWcLinking({ name, href });
        ConnectionController.setRecentWallet(this.wallet);
        CoreHelperUtil.openHref(redirect, "_blank");
      } catch {
        this.error = true;
      }
    }
  }
};
W3mConnectingWcWeb = __decorate29([
  customElement("w3m-connecting-wc-web")
], W3mConnectingWcWeb);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-header/styles.js
var styles_default11 = css`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-header/index.js
var __decorate30 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function headings() {
  var _a2, _b, _c, _d, _e, _f;
  const connectorName = (_b = (_a2 = RouterController.state.data) == null ? void 0 : _a2.connector) == null ? void 0 : _b.name;
  const walletName = (_d = (_c = RouterController.state.data) == null ? void 0 : _c.wallet) == null ? void 0 : _d.name;
  const networkName = (_f = (_e = RouterController.state.data) == null ? void 0 : _e.network) == null ? void 0 : _f.name;
  const name = walletName ?? connectorName;
  return {
    Connect: "Connect Wallet",
    Account: void 0,
    ConnectingExternal: name ?? "Connect Wallet",
    ConnectingWalletConnect: name ?? "WalletConnect",
    ConnectingSiwe: "Sign In",
    Networks: "Choose Network",
    SwitchNetwork: networkName ?? "Switch Network",
    AllWallets: "All Wallets",
    WhatIsANetwork: "What is a network?",
    WhatIsAWallet: "What is a wallet?",
    GetWallet: "Get a Wallet",
    Downloads: name ? `Get ${name}` : "Downloads",
    Transactions: "Activity"
  };
}
var W3mHeader = class W3mHeader2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.heading = headings()[RouterController.state.view];
    this.buffering = false;
    this.showBack = false;
    this.unsubscribe.push(RouterController.subscribeKey("view", (val) => {
      this.onViewChange(val);
      this.onHistoryChange();
    }), ConnectionController.subscribeKey("buffering", (val) => this.buffering = val));
  }
  disconnectCallback() {
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    return html`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${ModalController.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `;
  }
  onWalletHelp() {
    EventsController.sendEvent({ type: "track", event: "CLICK_WALLET_HELP" });
    RouterController.push("WhatIsAWallet");
  }
  titleTemplate() {
    return html`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`;
  }
  dynamicButtonTemplate() {
    const { view } = RouterController.state;
    const isConnectHelp = view === "Connect";
    if (this.showBack) {
      return html`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${RouterController.goBack}
      ></wui-icon-link>`;
    }
    return html`<wui-icon-link
      data-hidden=${!isConnectHelp}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`;
  }
  separatorTemplate() {
    if (!this.heading) {
      return null;
    }
    return html`<wui-separator></wui-separator>`;
  }
  getPadding() {
    if (this.heading) {
      return ["l", "2l", "l", "2l"];
    }
    return ["l", "2l", "0", "2l"];
  }
  async onViewChange(view) {
    var _a2;
    const headingEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("wui-text");
    if (headingEl) {
      const preset = headings()[view];
      await headingEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.heading = preset;
      headingEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
  async onHistoryChange() {
    var _a2;
    const { history } = RouterController.state;
    const buttonEl = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("#dynamic");
    if (history.length > 1 && !this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = true;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    } else if (history.length <= 1 && this.showBack && buttonEl) {
      await buttonEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      }).finished;
      this.showBack = false;
      buttonEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 200,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mHeader.styles = [styles_default11];
__decorate30([
  state()
], W3mHeader.prototype, "heading", void 0);
__decorate30([
  state()
], W3mHeader.prototype, "buffering", void 0);
__decorate30([
  state()
], W3mHeader.prototype, "showBack", void 0);
W3mHeader = __decorate30([
  customElement("w3m-header")
], W3mHeader);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-help-widget/index.js
var __decorate31 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mHelpWidget = class W3mHelpWidget2 extends LitElement {
  constructor() {
    super(...arguments);
    this.data = [];
  }
  render() {
    return html`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((item) => html`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${item.images.map((image) => html`<wui-visual name=${image}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${item.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${item.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `;
  }
};
__decorate31([
  property({ type: Array })
], W3mHelpWidget.prototype, "data", void 0);
W3mHelpWidget = __decorate31([
  customElement("w3m-help-widget")
], W3mHelpWidget);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-legal-footer/styles.js
var styles_default12 = css`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-legal-footer/index.js
var __decorate32 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mLegalFooter = class W3mLegalFooter2 extends LitElement {
  render() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    if (!termsConditionsUrl && !privacyPolicyUrl) {
      return null;
    }
    return html`
      <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl, privacyPolicyUrl } = OptionsController.state;
    return termsConditionsUrl && privacyPolicyUrl ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl } = OptionsController.state;
    if (!termsConditionsUrl) {
      return null;
    }
    return html`<a href=${termsConditionsUrl}>Terms of Service</a>`;
  }
  privacyTemplate() {
    const { privacyPolicyUrl } = OptionsController.state;
    if (!privacyPolicyUrl) {
      return null;
    }
    return html`<a href=${privacyPolicyUrl}>Privacy Policy</a>`;
  }
};
W3mLegalFooter.styles = [styles_default12];
W3mLegalFooter = __decorate32([
  customElement("w3m-legal-footer")
], W3mLegalFooter);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-mobile-download-links/styles.js
var styles_default13 = css`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-mobile-download-links/index.js
var __decorate33 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var W3mMobileDownloadLinks = class W3mMobileDownloadLinks2 extends LitElement {
  constructor() {
    super(...arguments);
    this.wallet = void 0;
  }
  render() {
    if (!this.wallet) {
      this.style.display = "none";
      return null;
    }
    const { name, app_store, play_store, chrome_store, homepage } = this.wallet;
    const isMobile = CoreHelperUtil.isMobile();
    const isIos = CoreHelperUtil.isIos();
    const isAndroid = CoreHelperUtil.isAndroid();
    const isMultiple = [app_store, play_store, homepage, chrome_store].filter(Boolean).length > 1;
    const shortName = UiHelperUtil.getTruncateString({
      string: name,
      charsStart: 12,
      charsEnd: 0,
      truncate: "end"
    });
    if (isMultiple && !isMobile) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${() => RouterController.push("Downloads", { wallet: this.wallet })}
        ></wui-cta-button>
      `;
    }
    if (!isMultiple && homepage) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (app_store && isIos) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    if (play_store && isAndroid) {
      return html`
        <wui-cta-button
          label=${`Don't have ${shortName}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `;
    }
    this.style.display = "none";
    return null;
  }
  onAppStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.app_store) {
      CoreHelperUtil.openHref(this.wallet.app_store, "_blank");
    }
  }
  onPlayStore() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.play_store) {
      CoreHelperUtil.openHref(this.wallet.play_store, "_blank");
    }
  }
  onHomePage() {
    var _a2;
    if ((_a2 = this.wallet) == null ? void 0 : _a2.homepage) {
      CoreHelperUtil.openHref(this.wallet.homepage, "_blank");
    }
  }
};
W3mMobileDownloadLinks.styles = [styles_default13];
__decorate33([
  property({ type: Object })
], W3mMobileDownloadLinks.prototype, "wallet", void 0);
W3mMobileDownloadLinks = __decorate33([
  customElement("w3m-mobile-download-links")
], W3mMobileDownloadLinks);

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-snackbar/styles.js
var styles_default14 = css`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;

// node_modules/@web3modal/scaffold/dist/esm/src/partials/w3m-snackbar/index.js
var __decorate34 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var presets = {
  success: {
    backgroundColor: "success-100",
    iconColor: "success-100",
    icon: "checkmark"
  },
  error: {
    backgroundColor: "error-100",
    iconColor: "error-100",
    icon: "close"
  }
};
var W3mSnackBar = class W3mSnackBar2 extends LitElement {
  constructor() {
    super();
    this.unsubscribe = [];
    this.timeout = void 0;
    this.open = SnackController.state.open;
    this.unsubscribe.push(SnackController.subscribeKey("open", (val) => {
      this.open = val;
      this.onOpen();
    }));
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
    this.unsubscribe.forEach((unsubscribe) => unsubscribe());
  }
  render() {
    const { message, variant } = SnackController.state;
    const preset = presets[variant];
    return html`
      <wui-snackbar
        message=${message}
        backgroundColor=${preset.backgroundColor}
        iconColor=${preset.iconColor}
        icon=${preset.icon}
      ></wui-snackbar>
    `;
  }
  onOpen() {
    clearTimeout(this.timeout);
    if (this.open) {
      this.animate([
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" },
        { opacity: 1, transform: "translateX(-50%) scale(1)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
      this.timeout = setTimeout(() => SnackController.hide(), 2500);
    } else {
      this.animate([
        { opacity: 1, transform: "translateX(-50%) scale(1)" },
        { opacity: 0, transform: "translateX(-50%) scale(0.85)" }
      ], {
        duration: 150,
        fill: "forwards",
        easing: "ease"
      });
    }
  }
};
W3mSnackBar.styles = styles_default14;
__decorate34([
  state()
], W3mSnackBar.prototype, "open", void 0);
W3mSnackBar = __decorate34([
  customElement("w3m-snackbar")
], W3mSnackBar);

// node_modules/@web3modal/scaffold/dist/esm/src/client.js
var isInitialized = false;
var Web3ModalScaffold = class {
  constructor(options) {
    this.initPromise = void 0;
    this.setIsConnected = (isConnected) => {
      AccountController.setIsConnected(isConnected);
    };
    this.setCaipAddress = (caipAddress) => {
      AccountController.setCaipAddress(caipAddress);
    };
    this.setBalance = (balance, balanceSymbol) => {
      AccountController.setBalance(balance, balanceSymbol);
    };
    this.setProfileName = (profileName) => {
      AccountController.setProfileName(profileName);
    };
    this.setProfileImage = (profileImage) => {
      AccountController.setProfileImage(profileImage);
    };
    this.resetAccount = () => {
      AccountController.resetAccount();
    };
    this.setCaipNetwork = (caipNetwork) => {
      NetworkController.setCaipNetwork(caipNetwork);
    };
    this.getCaipNetwork = () => NetworkController.state.caipNetwork;
    this.setRequestedCaipNetworks = (requestedCaipNetworks) => {
      NetworkController.setRequestedCaipNetworks(requestedCaipNetworks);
    };
    this.getApprovedCaipNetworksData = () => NetworkController.getApprovedCaipNetworksData();
    this.resetNetwork = () => {
      NetworkController.resetNetwork();
    };
    this.setConnectors = (connectors) => {
      ConnectorController.setConnectors(connectors);
    };
    this.addConnector = (connector) => {
      ConnectorController.addConnector(connector);
    };
    this.getConnectors = () => ConnectorController.getConnectors();
    this.resetWcConnection = () => {
      ConnectionController.resetWcConnection();
    };
    this.fetchIdentity = (request) => BlockchainApiController.fetchIdentity(request);
    this.setAddressExplorerUrl = (addressExplorerUrl) => {
      AccountController.setAddressExplorerUrl(addressExplorerUrl);
    };
    this.setSIWENonce = (nonce) => {
      SIWEController.setNonce(nonce);
    };
    this.setSIWESession = (session) => {
      SIWEController.setSession(session);
    };
    this.setSIWEStatus = (status) => {
      SIWEController.setStatus(status);
    };
    this.setSIWEMessage = (message) => {
      SIWEController.setMessage(message);
    };
    this.getSIWENonce = () => SIWEController.state.nonce;
    this.getSIWESession = () => SIWEController.state.session;
    this.getSIWEStatus = () => SIWEController.state.status;
    this.getSIWEMessage = () => SIWEController.state.message;
    this.initControllers(options);
    this.initOrContinue();
  }
  async open(options) {
    await this.initOrContinue();
    ModalController.open(options);
  }
  async close() {
    await this.initOrContinue();
    ModalController.close();
  }
  getThemeMode() {
    return ThemeController.state.themeMode;
  }
  getThemeVariables() {
    return ThemeController.state.themeVariables;
  }
  setThemeMode(themeMode) {
    ThemeController.setThemeMode(themeMode);
    setColorTheme(ThemeController.state.themeMode);
  }
  setThemeVariables(themeVariables) {
    ThemeController.setThemeVariables(themeVariables);
    setThemeVariables(ThemeController.state.themeVariables);
  }
  subscribeTheme(callback) {
    return ThemeController.subscribe(callback);
  }
  getState() {
    return { ...PublicStateController.state };
  }
  subscribeState(callback) {
    return PublicStateController.subscribe(callback);
  }
  getEvent() {
    return { ...EventsController.state };
  }
  subscribeEvents(callback) {
    return EventsController.subscribe(callback);
  }
  subscribeSIWEState(callback) {
    return SIWEController.subscribe(callback);
  }
  initControllers(options) {
    NetworkController.setClient(options.networkControllerClient);
    NetworkController.setDefaultCaipNetwork(options.defaultChain);
    OptionsController.setProjectId(options.projectId);
    OptionsController.setIncludeWalletIds(options.includeWalletIds);
    OptionsController.setExcludeWalletIds(options.excludeWalletIds);
    OptionsController.setFeaturedWalletIds(options.featuredWalletIds);
    OptionsController.setTokens(options.tokens);
    OptionsController.setTermsConditionsUrl(options.termsConditionsUrl);
    OptionsController.setPrivacyPolicyUrl(options.privacyPolicyUrl);
    OptionsController.setCustomWallets(options.customWallets);
    OptionsController.setEnableAnalytics(options.enableAnalytics);
    OptionsController.setSdkVersion(options._sdkVersion);
    ConnectionController.setClient(options.connectionControllerClient);
    if (options.siweControllerClient) {
      SIWEController.setSIWEClient(options.siweControllerClient);
    }
    if (options.metadata) {
      OptionsController.setMetadata(options.metadata);
    }
    if (options.themeMode) {
      ThemeController.setThemeMode(options.themeMode);
    }
    if (options.themeVariables) {
      ThemeController.setThemeVariables(options.themeVariables);
    }
  }
  async initOrContinue() {
    if (!this.initPromise && !isInitialized && CoreHelperUtil.isClient()) {
      isInitialized = true;
      this.initPromise = new Promise(async (resolve) => {
        await Promise.all([import("./esm-XIQX64KU.js"), import("./w3m-modal-SHJZQNFN.js")]);
        const modal3 = document.createElement("w3m-modal");
        document.body.insertAdjacentElement("beforeend", modal3);
        resolve();
      });
    }
    return this.initPromise;
  }
};

// node_modules/@web3modal/utils/dist/esm/src/ConstantsUtil.js
var ConstantsUtil2 = {
  WALLET_CONNECT_CONNECTOR_ID: "walletConnect",
  INJECTED_CONNECTOR_ID: "injected",
  COINBASE_CONNECTOR_ID: "coinbaseWallet",
  SAFE_CONNECTOR_ID: "safe",
  LEDGER_CONNECTOR_ID: "ledger",
  EIP6963_CONNECTOR_ID: "eip6963",
  EIP155: "eip155",
  ADD_CHAIN_METHOD: "wallet_addEthereumChain",
  EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
  EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
  VERSION: "3.3.2"
};

// node_modules/@web3modal/utils/dist/esm/src/PresetsUtil.js
var PresetsUtil = {
  ConnectorExplorerIds: {
    [ConstantsUtil2.COINBASE_CONNECTOR_ID]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
    [ConstantsUtil2.SAFE_CONNECTOR_ID]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
    [ConstantsUtil2.LEDGER_CONNECTOR_ID]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"
  },
  EIP155NetworkImageIds: {
    1: "692ed6ba-e569-459a-556a-776476829e00",
    42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
    43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
    56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
    250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
    10: "ab9c186a-c52f-464b-2906-ca59d760a400",
    137: "41d04d42-da3b-4453-8506-668cc0727900",
    100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
    9001: "f926ff41-260d-4028-635e-91913fc28e00",
    324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
    314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
    4689: "34e68754-e536-40da-c153-6ef2e7188a00",
    1088: "3897a66d-40b9-4833-162f-a2c90531c900",
    1284: "161038da-44ae-4ec7-1208-0ea569454b00",
    1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
    7777777: "845c60df-d429-4991-e687-91ae45791600",
    42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
    8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
    1313161554: "3ff73439-a619-4894-9262-4470c773a100"
  },
  ConnectorImageIds: {
    [ConstantsUtil2.COINBASE_CONNECTOR_ID]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
    [ConstantsUtil2.SAFE_CONNECTOR_ID]: "461db637-8616-43ce-035a-d89b8a1d5800",
    [ConstantsUtil2.LEDGER_CONNECTOR_ID]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
    [ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
    [ConstantsUtil2.INJECTED_CONNECTOR_ID]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
  },
  ConnectorNamesMap: {
    [ConstantsUtil2.INJECTED_CONNECTOR_ID]: "Browser Wallet",
    [ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID]: "WalletConnect",
    [ConstantsUtil2.COINBASE_CONNECTOR_ID]: "Coinbase",
    [ConstantsUtil2.LEDGER_CONNECTOR_ID]: "Ledger",
    [ConstantsUtil2.SAFE_CONNECTOR_ID]: "Safe"
  },
  ConnectorTypesMap: {
    [ConstantsUtil2.INJECTED_CONNECTOR_ID]: "INJECTED",
    [ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID]: "WALLET_CONNECT",
    [ConstantsUtil2.EIP6963_CONNECTOR_ID]: "ANNOUNCED"
  }
};

// node_modules/@web3modal/utils/dist/esm/src/HelpersUtil.js
var HelpersUtil = {
  caipNetworkIdToNumber(caipnetworkId) {
    return caipnetworkId ? Number(caipnetworkId.split(":")[1]) : void 0;
  },
  getCaipTokens(tokens) {
    if (!tokens) {
      return void 0;
    }
    const caipTokens = {};
    Object.entries(tokens).forEach(([id, token]) => {
      caipTokens[`${ConstantsUtil2.EIP155}:${id}`] = token;
    });
    return caipTokens;
  }
};

// node_modules/@web3modal/wagmi/dist/esm/src/utils/helpers.js
function getCaipDefaultChain(chain) {
  if (!chain) {
    return void 0;
  }
  return {
    id: `${ConstantsUtil2.EIP155}:${chain.id}`,
    name: chain.name,
    imageId: PresetsUtil.EIP155NetworkImageIds[chain.id]
  };
}

// node_modules/@web3modal/wagmi/dist/esm/src/utils/constants.js
var WALLET_CHOICE_KEY = "wagmi.wallet";

// node_modules/@web3modal/wagmi/dist/esm/src/client.js
var Web3Modal = class extends Web3ModalScaffold {
  constructor(options) {
    const { wagmiConfig, siweConfig, chains, defaultChain, tokens, _sdkVersion, ...w3mOptions } = options;
    if (!wagmiConfig) {
      throw new Error("web3modal:constructor - wagmiConfig is undefined");
    }
    if (!w3mOptions.projectId) {
      throw new Error("web3modal:constructor - projectId is undefined");
    }
    if (!wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID)) {
      throw new Error("web3modal:constructor - WalletConnectConnector is required");
    }
    const networkControllerClient = {
      switchCaipNetwork: async (caipNetwork) => {
        const chainId = HelpersUtil.caipNetworkIdToNumber(caipNetwork == null ? void 0 : caipNetwork.id);
        if (chainId) {
          await switchNetwork({ chainId });
        }
      },
      async getApprovedCaipNetworksData() {
        var _a2, _b, _c, _d;
        const walletChoice = localStorage.getItem(WALLET_CHOICE_KEY);
        if (walletChoice == null ? void 0 : walletChoice.includes(ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID)) {
          const connector = wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID);
          if (!connector) {
            throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
          }
          const provider = await connector.getProvider();
          const ns = (_b = (_a2 = provider.signer) == null ? void 0 : _a2.session) == null ? void 0 : _b.namespaces;
          const nsMethods = (_c = ns == null ? void 0 : ns[ConstantsUtil2.EIP155]) == null ? void 0 : _c.methods;
          const nsChains = (_d = ns == null ? void 0 : ns[ConstantsUtil2.EIP155]) == null ? void 0 : _d.chains;
          return {
            supportsAllNetworks: nsMethods == null ? void 0 : nsMethods.includes(ConstantsUtil2.ADD_CHAIN_METHOD),
            approvedCaipNetworkIds: nsChains
          };
        }
        return { approvedCaipNetworkIds: void 0, supportsAllNetworks: true };
      }
    };
    const connectionControllerClient = {
      connectWalletConnect: async (onUri) => {
        var _a2;
        const connector = wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.WALLET_CONNECT_CONNECTOR_ID);
        if (!connector) {
          throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");
        }
        connector.on("message", (event) => {
          if (event.type === "display_uri") {
            onUri(event.data);
            connector.removeAllListeners();
          }
        });
        const chainId = HelpersUtil.caipNetworkIdToNumber((_a2 = this.getCaipNetwork()) == null ? void 0 : _a2.id);
        await connect({ connector, chainId });
      },
      connectExternal: async ({ id, provider, info }) => {
        var _a2, _b;
        const connector = wagmiConfig.connectors.find((c) => c.id === id);
        if (!connector) {
          throw new Error("connectionControllerClient:connectExternal - connector is undefined");
        }
        if (provider && info && connector.id === ConstantsUtil2.EIP6963_CONNECTOR_ID) {
          (_a2 = connector.setEip6963Wallet) == null ? void 0 : _a2.call(connector, { provider, info });
        }
        const chainId = HelpersUtil.caipNetworkIdToNumber((_b = this.getCaipNetwork()) == null ? void 0 : _b.id);
        await connect({ connector, chainId });
      },
      checkInstalled: (ids) => {
        const eip6963Connectors = this.getConnectors().filter((c) => c.type === "ANNOUNCED");
        const injectedConnector = this.getConnectors().find((c) => c.type === "INJECTED");
        if (!ids) {
          return Boolean(window.ethereum);
        }
        if (eip6963Connectors.length) {
          const installed = ids.some((id) => eip6963Connectors.some((c) => {
            var _a2;
            return ((_a2 = c.info) == null ? void 0 : _a2.rdns) === id;
          }));
          if (installed) {
            return true;
          }
        }
        if (injectedConnector) {
          if (!(window == null ? void 0 : window.ethereum)) {
            return false;
          }
          return ids.some((id) => {
            var _a2;
            return Boolean((_a2 = window.ethereum) == null ? void 0 : _a2[String(id)]);
          });
        }
        return false;
      },
      disconnect
    };
    super({
      networkControllerClient,
      connectionControllerClient,
      siweControllerClient: siweConfig,
      defaultChain: getCaipDefaultChain(defaultChain),
      tokens: HelpersUtil.getCaipTokens(tokens),
      _sdkVersion: _sdkVersion ?? `html-wagmi-${ConstantsUtil2.VERSION}`,
      ...w3mOptions
    });
    this.hasSyncedConnectedAccount = false;
    this.options = void 0;
    this.options = options;
    this.syncRequestedNetworks(chains);
    this.syncConnectors(wagmiConfig);
    this.listenConnectors(wagmiConfig);
    watchAccount(() => this.syncAccount());
    watchNetwork(() => this.syncNetwork());
  }
  getState() {
    const state2 = super.getState();
    return {
      ...state2,
      selectedNetworkId: HelpersUtil.caipNetworkIdToNumber(state2.selectedNetworkId)
    };
  }
  subscribeState(callback) {
    return super.subscribeState((state2) => callback({
      ...state2,
      selectedNetworkId: HelpersUtil.caipNetworkIdToNumber(state2.selectedNetworkId)
    }));
  }
  syncRequestedNetworks(chains) {
    const requestedCaipNetworks = chains == null ? void 0 : chains.map((chain) => {
      var _a2, _b;
      return {
        id: `${ConstantsUtil2.EIP155}:${chain.id}`,
        name: chain.name,
        imageId: PresetsUtil.EIP155NetworkImageIds[chain.id],
        imageUrl: (_b = (_a2 = this.options) == null ? void 0 : _a2.chainImages) == null ? void 0 : _b[chain.id]
      };
    });
    this.setRequestedCaipNetworks(requestedCaipNetworks ?? []);
  }
  async syncAccount() {
    const { address, isConnected } = getAccount();
    const { chain } = getNetwork();
    this.resetAccount();
    if (isConnected && address && chain) {
      const caipAddress = `${ConstantsUtil2.EIP155}:${chain.id}:${address}`;
      this.setIsConnected(isConnected);
      this.setCaipAddress(caipAddress);
      await Promise.all([
        this.syncProfile(address),
        this.syncBalance(address, chain),
        this.getApprovedCaipNetworksData()
      ]);
      this.hasSyncedConnectedAccount = true;
    } else if (!isConnected && this.hasSyncedConnectedAccount) {
      this.resetWcConnection();
      this.resetNetwork();
    }
  }
  async syncNetwork() {
    var _a2, _b, _c, _d;
    const { address, isConnected } = getAccount();
    const { chain } = getNetwork();
    if (chain) {
      const chainId = String(chain.id);
      const caipChainId = `${ConstantsUtil2.EIP155}:${chainId}`;
      this.setCaipNetwork({
        id: caipChainId,
        name: chain.name,
        imageId: PresetsUtil.EIP155NetworkImageIds[chain.id],
        imageUrl: (_b = (_a2 = this.options) == null ? void 0 : _a2.chainImages) == null ? void 0 : _b[chain.id]
      });
      if (isConnected && address) {
        const caipAddress = `${ConstantsUtil2.EIP155}:${chain.id}:${address}`;
        this.setCaipAddress(caipAddress);
        if ((_d = (_c = chain.blockExplorers) == null ? void 0 : _c.default) == null ? void 0 : _d.url) {
          const url = `${chain.blockExplorers.default.url}/address/${address}`;
          this.setAddressExplorerUrl(url);
        } else {
          this.setAddressExplorerUrl(void 0);
        }
        if (this.hasSyncedConnectedAccount) {
          await this.syncBalance(address, chain);
        }
      }
    }
  }
  async syncProfile(address) {
    try {
      const { name, avatar } = await this.fetchIdentity({
        caipChainId: `${ConstantsUtil2.EIP155}:${mainnet.id}`,
        address
      });
      this.setProfileName(name);
      this.setProfileImage(avatar);
    } catch {
      const profileName = await fetchEnsName({ address, chainId: mainnet.id });
      if (profileName) {
        this.setProfileName(profileName);
        const profileImage = await fetchEnsAvatar({ name: profileName, chainId: mainnet.id });
        if (profileImage) {
          this.setProfileImage(profileImage);
        }
      }
    }
  }
  async syncBalance(address, chain) {
    var _a2, _b, _c;
    const balance = await fetchBalance({
      address,
      chainId: chain.id,
      token: (_c = (_b = (_a2 = this.options) == null ? void 0 : _a2.tokens) == null ? void 0 : _b[chain.id]) == null ? void 0 : _c.address
    });
    this.setBalance(balance.formatted, balance.symbol);
  }
  syncConnectors(wagmiConfig) {
    const w3mConnectors = [];
    wagmiConfig.connectors.forEach(({ id, name }) => {
      var _a2, _b;
      if (id !== ConstantsUtil2.EIP6963_CONNECTOR_ID) {
        w3mConnectors.push({
          id,
          explorerId: PresetsUtil.ConnectorExplorerIds[id],
          imageId: PresetsUtil.ConnectorImageIds[id],
          imageUrl: (_b = (_a2 = this.options) == null ? void 0 : _a2.connectorImages) == null ? void 0 : _b[id],
          name: PresetsUtil.ConnectorNamesMap[id] ?? name,
          type: PresetsUtil.ConnectorTypesMap[id] ?? "EXTERNAL"
        });
      }
    });
    this.setConnectors(w3mConnectors);
  }
  eip6963EventHandler(connector, event) {
    var _a2, _b;
    if (event.detail) {
      const { info, provider } = event.detail;
      const connectors = this.getConnectors();
      const existingConnector = connectors.find((c) => c.name === info.name);
      if (!existingConnector) {
        this.addConnector({
          id: ConstantsUtil2.EIP6963_CONNECTOR_ID,
          type: "ANNOUNCED",
          imageUrl: info.icon ?? ((_b = (_a2 = this.options) == null ? void 0 : _a2.connectorImages) == null ? void 0 : _b[ConstantsUtil2.EIP6963_CONNECTOR_ID]),
          name: info.name,
          provider,
          info
        });
        connector.isAuthorized({ info, provider });
      }
    }
  }
  listenConnectors(wagmiConfig) {
    const connector = wagmiConfig.connectors.find((c) => c.id === ConstantsUtil2.EIP6963_CONNECTOR_ID);
    if (typeof window !== "undefined" && connector) {
      const handler = this.eip6963EventHandler.bind(this, connector);
      window.addEventListener(ConstantsUtil2.EIP6963_ANNOUNCE_EVENT, handler);
      window.dispatchEvent(new Event(ConstantsUtil2.EIP6963_REQUEST_EVENT));
    }
  }
};

// node_modules/@web3modal/wagmi/dist/esm/src/connectors/EIP6963Connector.js
var __classPrivateFieldSet = function(receiver, state2, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state2.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state2, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state2 === "function" ? receiver !== state2 || !f : !state2.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state2.get(receiver);
};
var _EIP6963Connector_defaultProvider;
var _EIP6963Connector_eip6963Wallet;
var connectedRdnsKey = "connectedRdns";
var EIP6963Connector = class extends InjectedConnector {
  constructor(config) {
    super({ chains: config.chains, options: { shimDisconnect: true } });
    this.id = "eip6963";
    this.name = "EIP6963";
    _EIP6963Connector_defaultProvider.set(this, void 0);
    _EIP6963Connector_eip6963Wallet.set(this, void 0);
    __classPrivateFieldSet(this, _EIP6963Connector_defaultProvider, this.options.getProvider(), "f");
  }
  async connect(options) {
    var _a2;
    const data3 = await super.connect(options);
    if (__classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f")) {
      (_a2 = this.storage) == null ? void 0 : _a2.setItem(connectedRdnsKey, __classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f").info.rdns);
    }
    return data3;
  }
  async disconnect() {
    var _a2;
    await super.disconnect();
    (_a2 = this.storage) == null ? void 0 : _a2.removeItem(connectedRdnsKey);
    __classPrivateFieldSet(this, _EIP6963Connector_eip6963Wallet, void 0, "f");
  }
  async isAuthorized(eip6963Wallet) {
    var _a2;
    const connectedEIP6963Rdns = (_a2 = this.storage) == null ? void 0 : _a2.getItem(connectedRdnsKey);
    if (connectedEIP6963Rdns) {
      if (!eip6963Wallet || connectedEIP6963Rdns !== eip6963Wallet.info.rdns) {
        return true;
      }
      __classPrivateFieldSet(this, _EIP6963Connector_eip6963Wallet, eip6963Wallet, "f");
    }
    return super.isAuthorized();
  }
  async getProvider() {
    var _a2;
    return Promise.resolve(((_a2 = __classPrivateFieldGet(this, _EIP6963Connector_eip6963Wallet, "f")) == null ? void 0 : _a2.provider) ?? __classPrivateFieldGet(this, _EIP6963Connector_defaultProvider, "f"));
  }
  setEip6963Wallet(eip6963Wallet) {
    __classPrivateFieldSet(this, _EIP6963Connector_eip6963Wallet, eip6963Wallet, "f");
  }
};
_EIP6963Connector_defaultProvider = /* @__PURE__ */ new WeakMap(), _EIP6963Connector_eip6963Wallet = /* @__PURE__ */ new WeakMap();

// node_modules/@web3modal/polyfills/dist/esm/index.js
var import_buffer = __toESM(require_buffer());
var _a;
if (typeof window !== "undefined") {
  if (!window.Buffer) {
    window.Buffer = import_buffer.Buffer;
  }
  if (!window.global) {
    window.global = window;
  }
  if (!window.process) {
    window.process = {};
  }
  if (!((_a = window.process) == null ? void 0 : _a.env)) {
    window.process = { env: {} };
  }
}

// node_modules/@wagmi/connectors/dist/coinbaseWallet.js
var _client;
var _provider;
var CoinbaseWalletConnector = class extends Connector {
  constructor({ chains, options }) {
    super({
      chains,
      options: {
        reloadOnDisconnect: false,
        ...options
      }
    });
    this.id = "coinbaseWallet";
    this.name = "Coinbase Wallet";
    this.ready = true;
    __privateAdd(this, _client, void 0);
    __privateAdd(this, _provider, void 0);
    this.onAccountsChanged = (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", { account: getAddress(accounts[0]) });
    };
    this.onChainChanged = (chainId) => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    };
    this.onDisconnect = () => {
      this.emit("disconnect");
    };
  }
  async connect({ chainId } = {}) {
    try {
      const provider = await this.getProvider();
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
      this.emit("message", { type: "connecting" });
      const accounts = await provider.enable();
      const account = getAddress(accounts[0]);
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }
      return {
        account,
        chain: { id, unsupported }
      };
    } catch (error) {
      if (/(user closed modal|accounts received is empty)/i.test(
        error.message
      ))
        throw new UserRejectedRequestError(error);
      throw error;
    }
  }
  async disconnect() {
    if (!__privateGet(this, _provider))
      return;
    const provider = await this.getProvider();
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    provider.disconnect();
    provider.close();
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    var _a2;
    if (!__privateGet(this, _provider)) {
      let CoinbaseWalletSDK = (await import("./dist-ZUDASNDQ.js")).default;
      if (typeof CoinbaseWalletSDK !== "function" && typeof CoinbaseWalletSDK.default === "function")
        CoinbaseWalletSDK = CoinbaseWalletSDK.default;
      __privateSet(this, _client, new CoinbaseWalletSDK(this.options));
      class WalletProvider {
      }
      class Client {
      }
      const walletExtensionChainId = (_a2 = __privateGet(this, _client).walletExtension) == null ? void 0 : _a2.getChainId();
      const chain = this.chains.find(
        (chain2) => this.options.chainId ? chain2.id === this.options.chainId : chain2.id === walletExtensionChainId
      ) || this.chains[0];
      const chainId = this.options.chainId || (chain == null ? void 0 : chain.id);
      const jsonRpcUrl = this.options.jsonRpcUrl || (chain == null ? void 0 : chain.rpcUrls.default.http[0]);
      __privateSet(this, _provider, __privateGet(this, _client).makeWeb3Provider(jsonRpcUrl, chainId));
    }
    return __privateGet(this, _provider);
  }
  async getWalletClient({
    chainId
  } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider(),
      this.getAccount()
    ]);
    const chain = this.chains.find((x) => x.id === chainId);
    if (!provider)
      throw new Error("provider is required.");
    return createWalletClient({
      account,
      chain,
      transport: custom(provider)
    });
  }
  async isAuthorized() {
    try {
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    var _a2;
    const provider = await this.getProvider();
    const id = numberToHex(chainId);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: id }]
      });
      return this.chains.find((x) => x.id === chainId) ?? {
        id: chainId,
        name: `Chain ${id}`,
        network: `${id}`,
        nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
        rpcUrls: { default: { http: [""] }, public: { http: [""] } }
      };
    } catch (error) {
      const chain = this.chains.find((x) => x.id === chainId);
      if (!chain)
        throw new ChainNotConfiguredForConnectorError({
          chainId,
          connectorId: this.id
        });
      if (error.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: id,
                chainName: chain.name,
                nativeCurrency: chain.nativeCurrency,
                rpcUrls: [((_a2 = chain.rpcUrls.public) == null ? void 0 : _a2.http[0]) ?? ""],
                blockExplorerUrls: this.getBlockExplorerUrls(chain)
              }
            ]
          });
          return chain;
        } catch (error2) {
          throw new UserRejectedRequestError(error2);
        }
      }
      throw new SwitchChainError(error);
    }
  }
  async watchAsset({
    address,
    decimals = 18,
    image,
    symbol
  }) {
    const provider = await this.getProvider();
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol
        }
      }
    });
  }
};
_client = /* @__PURE__ */ new WeakMap();
_provider = /* @__PURE__ */ new WeakMap();

// node_modules/@wagmi/connectors/dist/walletConnect.js
var NAMESPACE = "eip155";
var STORE_KEY = "store";
var REQUESTED_CHAINS_KEY = "requestedChains";
var ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
var _provider2;
var _initProviderPromise;
var _createProvider;
var createProvider_fn;
var _initProvider;
var initProvider_fn;
var _isChainsStale;
var isChainsStale_fn;
var _setupListeners;
var setupListeners_fn;
var _removeListeners;
var removeListeners_fn;
var _setRequestedChainsIds;
var setRequestedChainsIds_fn;
var _getRequestedChainsIds;
var getRequestedChainsIds_fn;
var _getNamespaceChainsIds;
var getNamespaceChainsIds_fn;
var _getNamespaceMethods;
var getNamespaceMethods_fn;
var WalletConnectConnector = class extends Connector {
  constructor(config) {
    super({
      ...config,
      options: { isNewChainsStale: true, ...config.options }
    });
    __privateAdd(this, _createProvider);
    __privateAdd(this, _initProvider);
    __privateAdd(this, _isChainsStale);
    __privateAdd(this, _setupListeners);
    __privateAdd(this, _removeListeners);
    __privateAdd(this, _setRequestedChainsIds);
    __privateAdd(this, _getRequestedChainsIds);
    __privateAdd(this, _getNamespaceChainsIds);
    __privateAdd(this, _getNamespaceMethods);
    this.id = "walletConnect";
    this.name = "WalletConnect";
    this.ready = true;
    __privateAdd(this, _provider2, void 0);
    __privateAdd(this, _initProviderPromise, void 0);
    this.onAccountsChanged = (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", { account: getAddress(accounts[0]) });
    };
    this.onChainChanged = (chainId) => {
      const id = Number(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    };
    this.onDisconnect = () => {
      __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
      this.emit("disconnect");
    };
    this.onDisplayUri = (uri) => {
      this.emit("message", { type: "display_uri", data: uri });
    };
    this.onConnect = () => {
      this.emit("connect", {});
    };
    __privateMethod(this, _createProvider, createProvider_fn).call(this);
  }
  async connect({ chainId, pairingTopic } = {}) {
    var _a2, _b, _c, _d, _e;
    try {
      let targetChainId = chainId;
      if (!targetChainId) {
        const store = (_a2 = this.storage) == null ? void 0 : _a2.getItem(STORE_KEY);
        const lastUsedChainId = (_d = (_c = (_b = store == null ? void 0 : store.state) == null ? void 0 : _b.data) == null ? void 0 : _c.chain) == null ? void 0 : _d.id;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId))
          targetChainId = lastUsedChainId;
        else
          targetChainId = (_e = this.chains[0]) == null ? void 0 : _e.id;
      }
      if (!targetChainId)
        throw new Error("No chains found on connector.");
      const provider = await this.getProvider();
      __privateMethod(this, _setupListeners, setupListeners_fn).call(this);
      const isChainsStale = __privateMethod(this, _isChainsStale, isChainsStale_fn).call(this);
      if (provider.session && isChainsStale)
        await provider.disconnect();
      if (!provider.session || isChainsStale) {
        const optionalChains = this.chains.filter((chain) => chain.id !== targetChainId).map((optionalChain) => optionalChain.id);
        this.emit("message", { type: "connecting" });
        await provider.connect({
          pairingTopic,
          chains: [targetChainId],
          optionalChains: optionalChains.length ? optionalChains : void 0
        });
        __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, this.chains.map(({ id: id2 }) => id2));
      }
      const accounts = await provider.enable();
      const account = getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      return {
        account,
        chain: { id, unsupported }
      };
    } catch (error) {
      if (/user rejected/i.test(error == null ? void 0 : error.message)) {
        throw new UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    try {
      await provider.disconnect();
    } catch (error) {
      if (!/No matching key/i.test(error.message))
        throw error;
    } finally {
      __privateMethod(this, _removeListeners, removeListeners_fn).call(this);
      __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, []);
    }
  }
  async getAccount() {
    const { accounts } = await this.getProvider();
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const { chainId } = await this.getProvider();
    return chainId;
  }
  async getProvider({ chainId } = {}) {
    if (!__privateGet(this, _provider2))
      await __privateMethod(this, _createProvider, createProvider_fn).call(this);
    if (chainId)
      await this.switchChain(chainId);
    return __privateGet(this, _provider2);
  }
  async getWalletClient({
    chainId
  } = {}) {
    const [provider, account] = await Promise.all([
      this.getProvider({ chainId }),
      this.getAccount()
    ]);
    const chain = this.chains.find((x) => x.id === chainId);
    if (!provider)
      throw new Error("provider is required.");
    return createWalletClient({
      account,
      chain,
      transport: custom(provider)
    });
  }
  async isAuthorized() {
    try {
      const [account, provider] = await Promise.all([
        this.getAccount(),
        this.getProvider()
      ]);
      const isChainsStale = __privateMethod(this, _isChainsStale, isChainsStale_fn).call(this);
      if (!account)
        return false;
      if (isChainsStale && provider.session) {
        try {
          await provider.disconnect();
        } catch {
        }
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    var _a2, _b;
    const chain = this.chains.find((chain2) => chain2.id === chainId);
    if (!chain)
      throw new SwitchChainError(new Error("chain not found on connector."));
    try {
      const provider = await this.getProvider();
      const namespaceChains = __privateMethod(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
      const namespaceMethods = __privateMethod(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
      const isChainApproved = namespaceChains.includes(chainId);
      if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
        await provider.request({
          method: ADD_ETH_CHAIN_METHOD,
          params: [
            {
              chainId: numberToHex(chain.id),
              blockExplorerUrls: [(_b = (_a2 = chain.blockExplorers) == null ? void 0 : _a2.default) == null ? void 0 : _b.url],
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: [...chain.rpcUrls.default.http]
            }
          ]
        });
        const requestedChains = __privateMethod(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
        requestedChains.push(chainId);
        __privateMethod(this, _setRequestedChainsIds, setRequestedChainsIds_fn).call(this, requestedChains);
      }
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: numberToHex(chainId) }]
      });
      return chain;
    } catch (error) {
      const message = typeof error === "string" ? error : error == null ? void 0 : error.message;
      if (/user rejected request/i.test(message)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }
};
_provider2 = /* @__PURE__ */ new WeakMap();
_initProviderPromise = /* @__PURE__ */ new WeakMap();
_createProvider = /* @__PURE__ */ new WeakSet();
createProvider_fn = async function() {
  if (!__privateGet(this, _initProviderPromise) && typeof window !== "undefined") {
    __privateSet(this, _initProviderPromise, __privateMethod(this, _initProvider, initProvider_fn).call(this));
  }
  return __privateGet(this, _initProviderPromise);
};
_initProvider = /* @__PURE__ */ new WeakSet();
initProvider_fn = async function() {
  const { EthereumProvider, OPTIONAL_EVENTS, OPTIONAL_METHODS } = await import("./index.es-HCTAAU27.js");
  const [defaultChain, ...optionalChains] = this.chains.map(({ id }) => id);
  if (defaultChain) {
    const {
      projectId,
      showQrModal = true,
      qrModalOptions,
      metadata,
      relayUrl
    } = this.options;
    __privateSet(this, _provider2, await EthereumProvider.init({
      showQrModal,
      qrModalOptions,
      projectId,
      optionalMethods: OPTIONAL_METHODS,
      optionalEvents: OPTIONAL_EVENTS,
      chains: [defaultChain],
      optionalChains: optionalChains.length ? optionalChains : void 0,
      rpcMap: Object.fromEntries(
        this.chains.map((chain) => [
          chain.id,
          chain.rpcUrls.default.http[0]
        ])
      ),
      metadata,
      relayUrl
    }));
  }
};
_isChainsStale = /* @__PURE__ */ new WeakSet();
isChainsStale_fn = function() {
  const namespaceMethods = __privateMethod(this, _getNamespaceMethods, getNamespaceMethods_fn).call(this);
  if (namespaceMethods.includes(ADD_ETH_CHAIN_METHOD))
    return false;
  if (!this.options.isNewChainsStale)
    return false;
  const requestedChains = __privateMethod(this, _getRequestedChainsIds, getRequestedChainsIds_fn).call(this);
  const connectorChains = this.chains.map(({ id }) => id);
  const namespaceChains = __privateMethod(this, _getNamespaceChainsIds, getNamespaceChainsIds_fn).call(this);
  if (namespaceChains.length && !namespaceChains.some((id) => connectorChains.includes(id)))
    return false;
  return !connectorChains.every((id) => requestedChains.includes(id));
};
_setupListeners = /* @__PURE__ */ new WeakSet();
setupListeners_fn = function() {
  if (!__privateGet(this, _provider2))
    return;
  __privateMethod(this, _removeListeners, removeListeners_fn).call(this);
  __privateGet(this, _provider2).on("accountsChanged", this.onAccountsChanged);
  __privateGet(this, _provider2).on("chainChanged", this.onChainChanged);
  __privateGet(this, _provider2).on("disconnect", this.onDisconnect);
  __privateGet(this, _provider2).on("session_delete", this.onDisconnect);
  __privateGet(this, _provider2).on("display_uri", this.onDisplayUri);
  __privateGet(this, _provider2).on("connect", this.onConnect);
};
_removeListeners = /* @__PURE__ */ new WeakSet();
removeListeners_fn = function() {
  if (!__privateGet(this, _provider2))
    return;
  __privateGet(this, _provider2).removeListener("accountsChanged", this.onAccountsChanged);
  __privateGet(this, _provider2).removeListener("chainChanged", this.onChainChanged);
  __privateGet(this, _provider2).removeListener("disconnect", this.onDisconnect);
  __privateGet(this, _provider2).removeListener("session_delete", this.onDisconnect);
  __privateGet(this, _provider2).removeListener("display_uri", this.onDisplayUri);
  __privateGet(this, _provider2).removeListener("connect", this.onConnect);
};
_setRequestedChainsIds = /* @__PURE__ */ new WeakSet();
setRequestedChainsIds_fn = function(chains) {
  var _a2;
  (_a2 = this.storage) == null ? void 0 : _a2.setItem(REQUESTED_CHAINS_KEY, chains);
};
_getRequestedChainsIds = /* @__PURE__ */ new WeakSet();
getRequestedChainsIds_fn = function() {
  var _a2;
  return ((_a2 = this.storage) == null ? void 0 : _a2.getItem(REQUESTED_CHAINS_KEY)) ?? [];
};
_getNamespaceChainsIds = /* @__PURE__ */ new WeakSet();
getNamespaceChainsIds_fn = function() {
  var _a2, _b, _c;
  if (!__privateGet(this, _provider2))
    return [];
  const namespaces = (_a2 = __privateGet(this, _provider2).session) == null ? void 0 : _a2.namespaces;
  if (!namespaces)
    return [];
  const normalizedNamespaces = se(namespaces);
  const chainIds = (_c = (_b = normalizedNamespaces[NAMESPACE]) == null ? void 0 : _b.chains) == null ? void 0 : _c.map(
    (chain) => parseInt(chain.split(":")[1] || "")
  );
  return chainIds ?? [];
};
_getNamespaceMethods = /* @__PURE__ */ new WeakSet();
getNamespaceMethods_fn = function() {
  var _a2, _b;
  if (!__privateGet(this, _provider2))
    return [];
  const namespaces = (_a2 = __privateGet(this, _provider2).session) == null ? void 0 : _a2.namespaces;
  if (!namespaces)
    return [];
  const normalizedNamespaces = se(namespaces);
  const methods = (_b = normalizedNamespaces[NAMESPACE]) == null ? void 0 : _b.methods;
  return methods ?? [];
};

// node_modules/@wagmi/core/dist/providers/public.js
function publicProvider() {
  return function(chain) {
    if (!chain.rpcUrls.public.http[0])
      return null;
    return {
      chain,
      rpcUrls: chain.rpcUrls.public
    };
  };
}

// node_modules/@web3modal/wagmi/dist/esm/src/utils/provider.js
var RPC_URL = CoreHelperUtil.getBlockchainApiUrl();
function walletConnectProvider({ projectId }) {
  return function provider(chain) {
    const supported = [
      1,
      5,
      11155111,
      10,
      420,
      42161,
      421613,
      137,
      80001,
      42220,
      1313161554,
      1313161555,
      56,
      97,
      43114,
      43113,
      100,
      8453,
      84531,
      7777777,
      999,
      324,
      280
    ];
    if (!supported.includes(chain.id)) {
      return null;
    }
    const baseHttpUrl = `${RPC_URL}/v1/?chainId=${ConstantsUtil2.EIP155}:${chain.id}&projectId=${projectId}`;
    return {
      chain: {
        ...chain,
        rpcUrls: {
          ...chain.rpcUrls,
          default: { http: [baseHttpUrl] }
        }
      },
      rpcUrls: {
        http: [baseHttpUrl]
      }
    };
  };
}

// node_modules/@web3modal/wagmi/dist/esm/src/utils/defaultWagmiReactConfig.js
function defaultWagmiConfig({ projectId, chains, metadata }) {
  const { publicClient } = configureChains(chains, [
    walletConnectProvider({ projectId }),
    publicProvider()
  ]);
  return createConfig({
    autoConnect: true,
    connectors: [
      new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
      new EIP6963Connector({ chains }),
      new InjectedConnector({ chains, options: { shimDisconnect: true } }),
      new CoinbaseWalletConnector({ chains, options: { appName: (metadata == null ? void 0 : metadata.name) ?? "Unknown" } })
    ],
    publicClient
  });
}

// node_modules/@web3modal/wagmi/dist/esm/exports/react.js
var modal2 = void 0;
function createWeb3Modal(options) {
  if (!modal2) {
    modal2 = new Web3Modal({
      ...options,
      _sdkVersion: `react-wagmi-${ConstantsUtil2.VERSION}`
    });
    getWeb3Modal(modal2);
  }
  return modal2;
}
export {
  EIP6963Connector,
  createWeb3Modal,
  defaultWagmiConfig,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme
};
/*! Bundled license information:

lit-html/development/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=@web3modal_wagmi_react.js.map
