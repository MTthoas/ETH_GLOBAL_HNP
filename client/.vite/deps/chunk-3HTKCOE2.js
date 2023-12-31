import {
  require_shim
} from "./chunk-3V7TIHOW.js";
import {
  createPublicClient,
  createWalletClient,
  custom,
  fallback,
  goerli,
  http,
  mainnet,
  parseGwei,
  webSocket
} from "./chunk-OCX6ZBZK.js";
import {
  ContractFunctionExecutionError,
  ResourceUnavailableRpcError,
  SwitchChainError,
  UserRejectedRequestError,
  formatUnits,
  getAddress,
  hexToString,
  isAddress,
  numberToHex,
  trim,
  weiUnits
} from "./chunk-KPTOZPA2.js";
import {
  require_react_dom
} from "./chunk-QBS3YNFQ.js";
import {
  require_react
} from "./chunk-QUQDT3U3.js";
import {
  __commonJS,
  __toESM
} from "./chunk-XUG3XOB4.js";

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React23 = require_react();
        var shim = require_shim();
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore3 = shim.useSyncExternalStore;
        var useRef6 = React23.useRef, useEffect14 = React23.useEffect, useMemo9 = React23.useMemo, useDebugValue = React23.useDebugValue;
        function useSyncExternalStoreWithSelector4(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef6(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo9(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            };
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = function() {
              return memoizedSelector(getSnapshot());
            };
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore3(subscribe, getSelection, getServerSelection);
          useEffect14(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue(value);
          return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector4;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/@tanstack/query-sync-storage-persister/build/lib/index.mjs
function createSyncStoragePersister({
  storage,
  key = "REACT_QUERY_OFFLINE_CACHE",
  throttleTime = 1e3,
  serialize: serialize2 = JSON.stringify,
  deserialize: deserialize2 = JSON.parse,
  retry
}) {
  if (storage) {
    const trySave = (persistedClient) => {
      try {
        storage.setItem(key, serialize2(persistedClient));
        return;
      } catch (error) {
        return error;
      }
    };
    return {
      persistClient: throttle((persistedClient) => {
        let client = persistedClient;
        let error = trySave(client);
        let errorCount = 0;
        while (error && client) {
          errorCount++;
          client = retry == null ? void 0 : retry({
            persistedClient: client,
            error,
            errorCount
          });
          if (client) {
            error = trySave(client);
          }
        }
      }, throttleTime),
      restoreClient: () => {
        const cacheString = storage.getItem(key);
        if (!cacheString) {
          return;
        }
        return deserialize2(cacheString);
      },
      removeClient: () => {
        storage.removeItem(key);
      }
    };
  }
  return {
    persistClient: noop,
    restoreClient: () => void 0,
    removeClient: noop
  };
}
function throttle(func, wait = 100) {
  let timer = null;
  let params;
  return function(...args) {
    params = args;
    if (timer === null) {
      timer = setTimeout(() => {
        func(...params);
        timer = null;
      }, wait);
    }
  };
}
function noop() {
}

// node_modules/@tanstack/query-core/build/lib/subscribable.mjs
var Subscribable = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set();
    this.subscribe = this.subscribe.bind(this);
  }
  subscribe(listener) {
    const identity = {
      listener
    };
    this.listeners.add(identity);
    this.onSubscribe();
    return () => {
      this.listeners.delete(identity);
      this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
};

// node_modules/@tanstack/query-core/build/lib/utils.mjs
var isServer = typeof window === "undefined" || "Deno" in window;
function noop2() {
  return void 0;
}
function functionalUpdate(updater, input) {
  return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
  return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
  return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function parseQueryArgs(arg1, arg2, arg3) {
  if (!isQueryKey(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return {
      ...arg3,
      queryKey: arg1,
      queryFn: arg2
    };
  }
  return {
    ...arg2,
    queryKey: arg1
  };
}
function parseMutationArgs(arg1, arg2, arg3) {
  if (isQueryKey(arg1)) {
    if (typeof arg2 === "function") {
      return {
        ...arg3,
        mutationKey: arg1,
        mutationFn: arg2
      };
    }
    return {
      ...arg2,
      mutationKey: arg1
    };
  }
  if (typeof arg1 === "function") {
    return {
      ...arg2,
      mutationFn: arg1
    };
  }
  return {
    ...arg1
  };
}
function parseFilterArgs(arg1, arg2, arg3) {
  return isQueryKey(arg1) ? [{
    ...arg2,
    queryKey: arg1
  }, arg3] : [arg1 || {}, arg2];
}
function matchQuery(filters, query) {
  const {
    type = "all",
    exact,
    fetchStatus,
    predicate,
    queryKey: queryKey17,
    stale
  } = filters;
  if (isQueryKey(queryKey17)) {
    if (exact) {
      if (query.queryHash !== hashQueryKeyByOptions(queryKey17, query.options)) {
        return false;
      }
    } else if (!partialMatchKey(query.queryKey, queryKey17)) {
      return false;
    }
  }
  if (type !== "all") {
    const isActive = query.isActive();
    if (type === "active" && !isActive) {
      return false;
    }
    if (type === "inactive" && isActive) {
      return false;
    }
  }
  if (typeof stale === "boolean" && query.isStale() !== stale) {
    return false;
  }
  if (typeof fetchStatus !== "undefined" && fetchStatus !== query.state.fetchStatus) {
    return false;
  }
  if (predicate && !predicate(query)) {
    return false;
  }
  return true;
}
function matchMutation(filters, mutation) {
  const {
    exact,
    fetching,
    predicate,
    mutationKey: mutationKey8
  } = filters;
  if (isQueryKey(mutationKey8)) {
    if (!mutation.options.mutationKey) {
      return false;
    }
    if (exact) {
      if (hashQueryKey(mutation.options.mutationKey) !== hashQueryKey(mutationKey8)) {
        return false;
      }
    } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey8)) {
      return false;
    }
  }
  if (typeof fetching === "boolean" && mutation.state.status === "loading" !== fetching) {
    return false;
  }
  if (predicate && !predicate(mutation)) {
    return false;
  }
  return true;
}
function hashQueryKeyByOptions(queryKey17, options) {
  const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashQueryKey;
  return hashFn(queryKey17);
}
function hashQueryKey(queryKey17) {
  return JSON.stringify(queryKey17, (_, val) => isPlainObject(val) ? Object.keys(val).sort().reduce((result, key) => {
    result[key] = val[key];
    return result;
  }, {}) : val);
}
function partialMatchKey(a, b) {
  return partialDeepEqual(a, b);
}
function partialDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    return !Object.keys(b).some((key) => !partialDeepEqual(a[key], b[key]));
  }
  return false;
}
function replaceEqualDeep(a, b) {
  if (a === b) {
    return a;
  }
  const array = isPlainArray(a) && isPlainArray(b);
  if (array || isPlainObject(a) && isPlainObject(b)) {
    const aSize = array ? a.length : Object.keys(a).length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? [] : {};
    let equalItems = 0;
    for (let i = 0; i < bSize; i++) {
      const key = array ? i : bItems[i];
      copy[key] = replaceEqualDeep(a[key], b[key]);
      if (copy[key] === a[key]) {
        equalItems++;
      }
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
  }
  return b;
}
function shallowEqualObjects(a, b) {
  if (a && !b || b && !a) {
    return false;
  }
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isQueryKey(value) {
  return Array.isArray(value);
}
function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
function scheduleMicrotask(callback) {
  sleep(0).then(callback);
}
function getAbortController() {
  if (typeof AbortController === "function") {
    return new AbortController();
  }
  return;
}
function replaceData(prevData, data, options) {
  if (options.isDataEqual != null && options.isDataEqual(prevData, data)) {
    return prevData;
  } else if (typeof options.structuralSharing === "function") {
    return options.structuralSharing(prevData, data);
  } else if (options.structuralSharing !== false) {
    return replaceEqualDeep(prevData, data);
  }
  return data;
}

// node_modules/@tanstack/query-core/build/lib/focusManager.mjs
var FocusManager = class extends Subscribable {
  constructor() {
    super();
    this.setup = (onFocus) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onFocus();
        window.addEventListener("visibilitychange", listener, false);
        window.addEventListener("focus", listener, false);
        return () => {
          window.removeEventListener("visibilitychange", listener);
          window.removeEventListener("focus", listener);
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _this$cleanup2;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup((focused) => {
      if (typeof focused === "boolean") {
        this.setFocused(focused);
      } else {
        this.onFocus();
      }
    });
  }
  setFocused(focused) {
    const changed = this.focused !== focused;
    if (changed) {
      this.focused = focused;
      this.onFocus();
    }
  }
  onFocus() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }
  isFocused() {
    if (typeof this.focused === "boolean") {
      return this.focused;
    }
    if (typeof document === "undefined") {
      return true;
    }
    return [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
};
var focusManager = new FocusManager();

// node_modules/@tanstack/query-core/build/lib/onlineManager.mjs
var onlineEvents = ["online", "offline"];
var OnlineManager = class extends Subscribable {
  constructor() {
    super();
    this.setup = (onOnline) => {
      if (!isServer && window.addEventListener) {
        const listener = () => onOnline();
        onlineEvents.forEach((event) => {
          window.addEventListener(event, listener, false);
        });
        return () => {
          onlineEvents.forEach((event) => {
            window.removeEventListener(event, listener);
          });
        };
      }
      return;
    };
  }
  onSubscribe() {
    if (!this.cleanup) {
      this.setEventListener(this.setup);
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$cleanup;
      (_this$cleanup = this.cleanup) == null ? void 0 : _this$cleanup.call(this);
      this.cleanup = void 0;
    }
  }
  setEventListener(setup) {
    var _this$cleanup2;
    this.setup = setup;
    (_this$cleanup2 = this.cleanup) == null ? void 0 : _this$cleanup2.call(this);
    this.cleanup = setup((online) => {
      if (typeof online === "boolean") {
        this.setOnline(online);
      } else {
        this.onOnline();
      }
    });
  }
  setOnline(online) {
    const changed = this.online !== online;
    if (changed) {
      this.online = online;
      this.onOnline();
    }
  }
  onOnline() {
    this.listeners.forEach(({
      listener
    }) => {
      listener();
    });
  }
  isOnline() {
    if (typeof this.online === "boolean") {
      return this.online;
    }
    if (typeof navigator === "undefined" || typeof navigator.onLine === "undefined") {
      return true;
    }
    return navigator.onLine;
  }
};
var onlineManager = new OnlineManager();

// node_modules/@tanstack/query-core/build/lib/retryer.mjs
function defaultRetryDelay(failureCount) {
  return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
  return (networkMode != null ? networkMode : "online") === "online" ? onlineManager.isOnline() : true;
}
var CancelledError = class {
  constructor(options) {
    this.revert = options == null ? void 0 : options.revert;
    this.silent = options == null ? void 0 : options.silent;
  }
};
function isCancelledError(value) {
  return value instanceof CancelledError;
}
function createRetryer(config2) {
  let isRetryCancelled = false;
  let failureCount = 0;
  let isResolved = false;
  let continueFn;
  let promiseResolve;
  let promiseReject;
  const promise = new Promise((outerResolve, outerReject) => {
    promiseResolve = outerResolve;
    promiseReject = outerReject;
  });
  const cancel = (cancelOptions) => {
    if (!isResolved) {
      reject(new CancelledError(cancelOptions));
      config2.abort == null ? void 0 : config2.abort();
    }
  };
  const cancelRetry = () => {
    isRetryCancelled = true;
  };
  const continueRetry = () => {
    isRetryCancelled = false;
  };
  const shouldPause = () => !focusManager.isFocused() || config2.networkMode !== "always" && !onlineManager.isOnline();
  const resolve = (value) => {
    if (!isResolved) {
      isResolved = true;
      config2.onSuccess == null ? void 0 : config2.onSuccess(value);
      continueFn == null ? void 0 : continueFn();
      promiseResolve(value);
    }
  };
  const reject = (value) => {
    if (!isResolved) {
      isResolved = true;
      config2.onError == null ? void 0 : config2.onError(value);
      continueFn == null ? void 0 : continueFn();
      promiseReject(value);
    }
  };
  const pause = () => {
    return new Promise((continueResolve) => {
      continueFn = (value) => {
        const canContinue = isResolved || !shouldPause();
        if (canContinue) {
          continueResolve(value);
        }
        return canContinue;
      };
      config2.onPause == null ? void 0 : config2.onPause();
    }).then(() => {
      continueFn = void 0;
      if (!isResolved) {
        config2.onContinue == null ? void 0 : config2.onContinue();
      }
    });
  };
  const run = () => {
    if (isResolved) {
      return;
    }
    let promiseOrValue;
    try {
      promiseOrValue = config2.fn();
    } catch (error) {
      promiseOrValue = Promise.reject(error);
    }
    Promise.resolve(promiseOrValue).then(resolve).catch((error) => {
      var _config$retry, _config$retryDelay;
      if (isResolved) {
        return;
      }
      const retry = (_config$retry = config2.retry) != null ? _config$retry : 3;
      const retryDelay = (_config$retryDelay = config2.retryDelay) != null ? _config$retryDelay : defaultRetryDelay;
      const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
      const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
      if (isRetryCancelled || !shouldRetry) {
        reject(error);
        return;
      }
      failureCount++;
      config2.onFail == null ? void 0 : config2.onFail(failureCount, error);
      sleep(delay).then(() => {
        if (shouldPause()) {
          return pause();
        }
        return;
      }).then(() => {
        if (isRetryCancelled) {
          reject(error);
        } else {
          run();
        }
      });
    });
  };
  if (canFetch(config2.networkMode)) {
    run();
  } else {
    pause().then(run);
  }
  return {
    promise,
    cancel,
    continue: () => {
      const didContinue = continueFn == null ? void 0 : continueFn();
      return didContinue ? promise : Promise.resolve();
    },
    cancelRetry,
    continueRetry
  };
}

// node_modules/@tanstack/query-core/build/lib/logger.mjs
var defaultLogger = console;

// node_modules/@tanstack/query-core/build/lib/notifyManager.mjs
function createNotifyManager() {
  let queue = [];
  let transactions = 0;
  let notifyFn = (callback) => {
    callback();
  };
  let batchNotifyFn = (callback) => {
    callback();
  };
  const batch = (callback) => {
    let result;
    transactions++;
    try {
      result = callback();
    } finally {
      transactions--;
      if (!transactions) {
        flush();
      }
    }
    return result;
  };
  const schedule = (callback) => {
    if (transactions) {
      queue.push(callback);
    } else {
      scheduleMicrotask(() => {
        notifyFn(callback);
      });
    }
  };
  const batchCalls = (callback) => {
    return (...args) => {
      schedule(() => {
        callback(...args);
      });
    };
  };
  const flush = () => {
    const originalQueue = queue;
    queue = [];
    if (originalQueue.length) {
      scheduleMicrotask(() => {
        batchNotifyFn(() => {
          originalQueue.forEach((callback) => {
            notifyFn(callback);
          });
        });
      });
    }
  };
  const setNotifyFunction = (fn) => {
    notifyFn = fn;
  };
  const setBatchNotifyFunction = (fn) => {
    batchNotifyFn = fn;
  };
  return {
    batch,
    batchCalls,
    schedule,
    setNotifyFunction,
    setBatchNotifyFunction
  };
}
var notifyManager = createNotifyManager();

// node_modules/@tanstack/query-core/build/lib/removable.mjs
var Removable = class {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.cacheTime);
    }
  }
  updateCacheTime(newCacheTime) {
    this.cacheTime = Math.max(this.cacheTime || 0, newCacheTime != null ? newCacheTime : isServer ? Infinity : 5 * 60 * 1e3);
  }
  clearGcTimeout() {
    if (this.gcTimeout) {
      clearTimeout(this.gcTimeout);
      this.gcTimeout = void 0;
    }
  }
};

// node_modules/@tanstack/query-core/build/lib/query.mjs
var Query = class extends Removable {
  constructor(config2) {
    super();
    this.abortSignalConsumed = false;
    this.defaultOptions = config2.defaultOptions;
    this.setOptions(config2.options);
    this.observers = [];
    this.cache = config2.cache;
    this.logger = config2.logger || defaultLogger;
    this.queryKey = config2.queryKey;
    this.queryHash = config2.queryHash;
    this.initialState = config2.state || getDefaultState(this.options);
    this.state = this.initialState;
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(options) {
    this.options = {
      ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    if (!this.observers.length && this.state.fetchStatus === "idle") {
      this.cache.remove(this);
    }
  }
  setData(newData, options) {
    const data = replaceData(this.state.data, newData, this.options);
    this.dispatch({
      data,
      type: "success",
      dataUpdatedAt: options == null ? void 0 : options.updatedAt,
      manual: options == null ? void 0 : options.manual
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.dispatch({
      type: "setState",
      state,
      setStateOptions
    });
  }
  cancel(options) {
    var _this$retryer;
    const promise = this.promise;
    (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.cancel(options);
    return promise ? promise.then(noop2).catch(noop2) : Promise.resolve();
  }
  destroy() {
    super.destroy();
    this.cancel({
      silent: true
    });
  }
  reset() {
    this.destroy();
    this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((observer) => observer.options.enabled !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((observer) => observer.getCurrentResult().isStale);
  }
  isStaleByTime(staleTime = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    var _this$retryer2;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    }
    (_this$retryer2 = this.retryer) == null ? void 0 : _this$retryer2.continue();
  }
  onOnline() {
    var _this$retryer3;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    if (observer) {
      observer.refetch({
        cancelRefetch: false
      });
    }
    (_this$retryer3 = this.retryer) == null ? void 0 : _this$retryer3.continue();
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.cache.notify({
        type: "observerAdded",
        query: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    if (this.observers.includes(observer)) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.abortSignalConsumed) {
            this.retryer.cancel({
              revert: true
            });
          } else {
            this.retryer.cancelRetry();
          }
        }
        this.scheduleGc();
      }
      this.cache.notify({
        type: "observerRemoved",
        query: this,
        observer
      });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({
        type: "invalidate"
      });
    }
  }
  fetch(options, fetchOptions) {
    var _this$options$behavio, _context$fetchOptions;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && fetchOptions != null && fetchOptions.cancelRefetch) {
        this.cancel({
          silent: true
        });
      } else if (this.promise) {
        var _this$retryer4;
        (_this$retryer4 = this.retryer) == null ? void 0 : _this$retryer4.continueRetry();
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    if (true) {
      if (!Array.isArray(this.options.queryKey)) {
        this.logger.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']");
      }
    }
    const abortController = getAbortController();
    const queryFnContext = {
      queryKey: this.queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    const addSignalProperty = (object) => {
      Object.defineProperty(object, "signal", {
        enumerable: true,
        get: () => {
          if (abortController) {
            this.abortSignalConsumed = true;
            return abortController.signal;
          }
          return void 0;
        }
      });
    };
    addSignalProperty(queryFnContext);
    const fetchFn = () => {
      if (!this.options.queryFn) {
        return Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'");
      }
      this.abortSignalConsumed = false;
      return this.options.queryFn(queryFnContext);
    };
    const context = {
      fetchOptions,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn
    };
    addSignalProperty(context);
    (_this$options$behavio = this.options.behavior) == null ? void 0 : _this$options$behavio.onFetch(context);
    this.revertState = this.state;
    if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_context$fetchOptions = context.fetchOptions) == null ? void 0 : _context$fetchOptions.meta)) {
      var _context$fetchOptions2;
      this.dispatch({
        type: "fetch",
        meta: (_context$fetchOptions2 = context.fetchOptions) == null ? void 0 : _context$fetchOptions2.meta
      });
    }
    const onError = (error) => {
      if (!(isCancelledError(error) && error.silent)) {
        this.dispatch({
          type: "error",
          error
        });
      }
      if (!isCancelledError(error)) {
        var _this$cache$config$on, _this$cache$config, _this$cache$config$on2, _this$cache$config2;
        (_this$cache$config$on = (_this$cache$config = this.cache.config).onError) == null ? void 0 : _this$cache$config$on.call(_this$cache$config, error, this);
        (_this$cache$config$on2 = (_this$cache$config2 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on2.call(_this$cache$config2, this.state.data, error, this);
        if (true) {
          this.logger.error(error);
        }
      }
      if (!this.isFetchingOptimistic) {
        this.scheduleGc();
      }
      this.isFetchingOptimistic = false;
    };
    this.retryer = createRetryer({
      fn: context.fetchFn,
      abort: abortController == null ? void 0 : abortController.abort.bind(abortController),
      onSuccess: (data) => {
        var _this$cache$config$on3, _this$cache$config3, _this$cache$config$on4, _this$cache$config4;
        if (typeof data === "undefined") {
          if (true) {
            this.logger.error("Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: " + this.queryHash);
          }
          onError(new Error(this.queryHash + " data is undefined"));
          return;
        }
        this.setData(data);
        (_this$cache$config$on3 = (_this$cache$config3 = this.cache.config).onSuccess) == null ? void 0 : _this$cache$config$on3.call(_this$cache$config3, data, this);
        (_this$cache$config$on4 = (_this$cache$config4 = this.cache.config).onSettled) == null ? void 0 : _this$cache$config$on4.call(_this$cache$config4, data, this.state.error, this);
        if (!this.isFetchingOptimistic) {
          this.scheduleGc();
        }
        this.isFetchingOptimistic = false;
      },
      onError,
      onFail: (failureCount, error) => {
        this.dispatch({
          type: "failed",
          failureCount,
          error
        });
      },
      onPause: () => {
        this.dispatch({
          type: "pause"
        });
      },
      onContinue: () => {
        this.dispatch({
          type: "continue"
        });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay,
      networkMode: context.options.networkMode
    });
    this.promise = this.retryer.promise;
    return this.promise;
  }
  dispatch(action) {
    const reducer = (state) => {
      var _action$meta, _action$dataUpdatedAt;
      switch (action.type) {
        case "failed":
          return {
            ...state,
            fetchFailureCount: action.failureCount,
            fetchFailureReason: action.error
          };
        case "pause":
          return {
            ...state,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...state,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...state,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (_action$meta = action.meta) != null ? _action$meta : null,
            fetchStatus: canFetch(this.options.networkMode) ? "fetching" : "paused",
            ...!state.dataUpdatedAt && {
              error: null,
              status: "loading"
            }
          };
        case "success":
          return {
            ...state,
            data: action.data,
            dataUpdateCount: state.dataUpdateCount + 1,
            dataUpdatedAt: (_action$dataUpdatedAt = action.dataUpdatedAt) != null ? _action$dataUpdatedAt : Date.now(),
            error: null,
            isInvalidated: false,
            status: "success",
            ...!action.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
        case "error":
          const error = action.error;
          if (isCancelledError(error) && error.revert && this.revertState) {
            return {
              ...this.revertState,
              fetchStatus: "idle"
            };
          }
          return {
            ...state,
            error,
            errorUpdateCount: state.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: state.fetchFailureCount + 1,
            fetchFailureReason: error,
            fetchStatus: "idle",
            status: "error"
          };
        case "invalidate":
          return {
            ...state,
            isInvalidated: true
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate(action);
      });
      this.cache.notify({
        query: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState(options) {
  const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
  const hasData = typeof data !== "undefined";
  const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
  return {
    data,
    dataUpdateCount: 0,
    dataUpdatedAt: hasData ? initialDataUpdatedAt != null ? initialDataUpdatedAt : Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: false,
    status: hasData ? "success" : "loading",
    fetchStatus: "idle"
  };
}

// node_modules/@tanstack/query-core/build/lib/queryCache.mjs
var QueryCache = class extends Subscribable {
  constructor(config2) {
    super();
    this.config = config2 || {};
    this.queries = [];
    this.queriesMap = {};
  }
  build(client, options, state) {
    var _options$queryHash;
    const queryKey17 = options.queryKey;
    const queryHash = (_options$queryHash = options.queryHash) != null ? _options$queryHash : hashQueryKeyByOptions(queryKey17, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        logger: client.getLogger(),
        queryKey: queryKey17,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey17)
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "added",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter((x) => x !== query);
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({
        type: "removed",
        query
      });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.queriesMap[queryHash];
  }
  getAll() {
    return this.queries;
  }
  find(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find((query) => matchQuery(filters, query));
  }
  findAll(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    return Object.keys(filters).length > 0 ? this.queries.filter((query) => matchQuery(filters, query)) : this.queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onOnline();
      });
    });
  }
};

// node_modules/@tanstack/query-core/build/lib/mutation.mjs
var Mutation = class extends Removable {
  constructor(config2) {
    super();
    this.defaultOptions = config2.defaultOptions;
    this.mutationId = config2.mutationId;
    this.mutationCache = config2.mutationCache;
    this.logger = config2.logger || defaultLogger;
    this.observers = [];
    this.state = config2.state || getDefaultState2();
    this.setOptions(config2.options);
    this.scheduleGc();
  }
  setOptions(options) {
    this.options = {
      ...this.defaultOptions,
      ...options
    };
    this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(state) {
    this.dispatch({
      type: "setState",
      state
    });
  }
  addObserver(observer) {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      this.clearGcTimeout();
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer
      });
    }
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((x) => x !== observer);
    this.scheduleGc();
    this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer
    });
  }
  optionalRemove() {
    if (!this.observers.length) {
      if (this.state.status === "loading") {
        this.scheduleGc();
      } else {
        this.mutationCache.remove(this);
      }
    }
  }
  continue() {
    var _this$retryer$continu, _this$retryer;
    return (_this$retryer$continu = (_this$retryer = this.retryer) == null ? void 0 : _this$retryer.continue()) != null ? _this$retryer$continu : this.execute();
  }
  async execute() {
    const executeMutation = () => {
      var _this$options$retry;
      this.retryer = createRetryer({
        fn: () => {
          if (!this.options.mutationFn) {
            return Promise.reject("No mutationFn found");
          }
          return this.options.mutationFn(this.state.variables);
        },
        onFail: (failureCount, error) => {
          this.dispatch({
            type: "failed",
            failureCount,
            error
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: (_this$options$retry = this.options.retry) != null ? _this$options$retry : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      });
      return this.retryer.promise;
    };
    const restored = this.state.status === "loading";
    try {
      var _this$mutationCache$c3, _this$mutationCache$c4, _this$options$onSucce, _this$options2, _this$mutationCache$c5, _this$mutationCache$c6, _this$options$onSettl, _this$options3;
      if (!restored) {
        var _this$mutationCache$c, _this$mutationCache$c2, _this$options$onMutat, _this$options;
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        });
        await ((_this$mutationCache$c = (_this$mutationCache$c2 = this.mutationCache.config).onMutate) == null ? void 0 : _this$mutationCache$c.call(_this$mutationCache$c2, this.state.variables, this));
        const context = await ((_this$options$onMutat = (_this$options = this.options).onMutate) == null ? void 0 : _this$options$onMutat.call(_this$options, this.state.variables));
        if (context !== this.state.context) {
          this.dispatch({
            type: "loading",
            context,
            variables: this.state.variables
          });
        }
      }
      const data = await executeMutation();
      await ((_this$mutationCache$c3 = (_this$mutationCache$c4 = this.mutationCache.config).onSuccess) == null ? void 0 : _this$mutationCache$c3.call(_this$mutationCache$c4, data, this.state.variables, this.state.context, this));
      await ((_this$options$onSucce = (_this$options2 = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options2, data, this.state.variables, this.state.context));
      await ((_this$mutationCache$c5 = (_this$mutationCache$c6 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c5.call(_this$mutationCache$c6, data, null, this.state.variables, this.state.context, this));
      await ((_this$options$onSettl = (_this$options3 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options3, data, null, this.state.variables, this.state.context));
      this.dispatch({
        type: "success",
        data
      });
      return data;
    } catch (error) {
      try {
        var _this$mutationCache$c7, _this$mutationCache$c8, _this$options$onError, _this$options4, _this$mutationCache$c9, _this$mutationCache$c10, _this$options$onSettl2, _this$options5;
        await ((_this$mutationCache$c7 = (_this$mutationCache$c8 = this.mutationCache.config).onError) == null ? void 0 : _this$mutationCache$c7.call(_this$mutationCache$c8, error, this.state.variables, this.state.context, this));
        if (true) {
          this.logger.error(error);
        }
        await ((_this$options$onError = (_this$options4 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options4, error, this.state.variables, this.state.context));
        await ((_this$mutationCache$c9 = (_this$mutationCache$c10 = this.mutationCache.config).onSettled) == null ? void 0 : _this$mutationCache$c9.call(_this$mutationCache$c10, void 0, error, this.state.variables, this.state.context, this));
        await ((_this$options$onSettl2 = (_this$options5 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options5, void 0, error, this.state.variables, this.state.context));
        throw error;
      } finally {
        this.dispatch({
          type: "error",
          error
        });
      }
    }
  }
  dispatch(action) {
    const reducer = (state) => {
      switch (action.type) {
        case "failed":
          return {
            ...state,
            failureCount: action.failureCount,
            failureReason: action.error
          };
        case "pause":
          return {
            ...state,
            isPaused: true
          };
        case "continue":
          return {
            ...state,
            isPaused: false
          };
        case "loading":
          return {
            ...state,
            context: action.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !canFetch(this.options.networkMode),
            status: "loading",
            variables: action.variables
          };
        case "success":
          return {
            ...state,
            data: action.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: false
          };
        case "error":
          return {
            ...state,
            data: void 0,
            error: action.error,
            failureCount: state.failureCount + 1,
            failureReason: action.error,
            isPaused: false,
            status: "error"
          };
        case "setState":
          return {
            ...state,
            ...action.state
          };
      }
    };
    this.state = reducer(this.state);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action
      });
    });
  }
};
function getDefaultState2() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}

// node_modules/@tanstack/query-core/build/lib/mutationCache.mjs
var MutationCache = class extends Subscribable {
  constructor(config2) {
    super();
    this.config = config2 || {};
    this.mutations = [];
    this.mutationId = 0;
  }
  build(client, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      logger: client.getLogger(),
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.mutations.push(mutation);
    this.notify({
      type: "added",
      mutation
    });
  }
  remove(mutation) {
    this.mutations = this.mutations.filter((x) => x !== mutation);
    this.notify({
      type: "removed",
      mutation
    });
  }
  clear() {
    notifyManager.batch(() => {
      this.mutations.forEach((mutation) => {
        this.remove(mutation);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find((mutation) => matchMutation(filters, mutation));
  }
  findAll(filters) {
    return this.mutations.filter((mutation) => matchMutation(filters, mutation));
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach(({
        listener
      }) => {
        listener(event);
      });
    });
  }
  resumePausedMutations() {
    var _this$resuming;
    this.resuming = ((_this$resuming = this.resuming) != null ? _this$resuming : Promise.resolve()).then(() => {
      const pausedMutations = this.mutations.filter((x) => x.state.isPaused);
      return notifyManager.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(noop2)), Promise.resolve()));
    }).then(() => {
      this.resuming = void 0;
    });
    return this.resuming;
  }
};

// node_modules/@tanstack/query-core/build/lib/infiniteQueryBehavior.mjs
function infiniteQueryBehavior() {
  return {
    onFetch: (context) => {
      context.fetchFn = () => {
        var _context$fetchOptions, _context$fetchOptions2, _context$fetchOptions3, _context$fetchOptions4, _context$state$data, _context$state$data2;
        const refetchPage = (_context$fetchOptions = context.fetchOptions) == null ? void 0 : (_context$fetchOptions2 = _context$fetchOptions.meta) == null ? void 0 : _context$fetchOptions2.refetchPage;
        const fetchMore = (_context$fetchOptions3 = context.fetchOptions) == null ? void 0 : (_context$fetchOptions4 = _context$fetchOptions3.meta) == null ? void 0 : _context$fetchOptions4.fetchMore;
        const pageParam = fetchMore == null ? void 0 : fetchMore.pageParam;
        const isFetchingNextPage = (fetchMore == null ? void 0 : fetchMore.direction) === "forward";
        const isFetchingPreviousPage = (fetchMore == null ? void 0 : fetchMore.direction) === "backward";
        const oldPages = ((_context$state$data = context.state.data) == null ? void 0 : _context$state$data.pages) || [];
        const oldPageParams = ((_context$state$data2 = context.state.data) == null ? void 0 : _context$state$data2.pageParams) || [];
        let newPageParams = oldPageParams;
        let cancelled = false;
        const addSignalProperty = (object) => {
          Object.defineProperty(object, "signal", {
            enumerable: true,
            get: () => {
              var _context$signal;
              if ((_context$signal = context.signal) != null && _context$signal.aborted) {
                cancelled = true;
              } else {
                var _context$signal2;
                (_context$signal2 = context.signal) == null ? void 0 : _context$signal2.addEventListener("abort", () => {
                  cancelled = true;
                });
              }
              return context.signal;
            }
          });
        };
        const queryFn17 = context.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + context.options.queryHash + "'"));
        const buildNewPages = (pages, param, page, previous) => {
          newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
          return previous ? [page, ...pages] : [...pages, page];
        };
        const fetchPage = (pages, manual, param, previous) => {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param === "undefined" && !manual && pages.length) {
            return Promise.resolve(pages);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            pageParam: param,
            meta: context.options.meta
          };
          addSignalProperty(queryFnContext);
          const queryFnResult = queryFn17(queryFnContext);
          const promise2 = Promise.resolve(queryFnResult).then((page) => buildNewPages(pages, param, page, previous));
          return promise2;
        };
        let promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param, true);
        } else {
          newPageParams = [];
          const manual = typeof context.options.getNextPageParam === "undefined";
          const shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
          promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
          for (let i = 1; i < oldPages.length; i++) {
            promise = promise.then((pages) => {
              const shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;
              if (shouldFetchNextPage) {
                const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                return fetchPage(pages, manual, param);
              }
              return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
            });
          }
        }
        const finalPromise = promise.then((pages) => ({
          pages,
          pageParams: newPageParams
        }));
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  return options.getNextPageParam == null ? void 0 : options.getNextPageParam(pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  return options.getPreviousPageParam == null ? void 0 : options.getPreviousPageParam(pages[0], pages);
}
function hasNextPage(options, pages) {
  if (options.getNextPageParam && Array.isArray(pages)) {
    const nextPageParam = getNextPageParam(options, pages);
    return typeof nextPageParam !== "undefined" && nextPageParam !== null && nextPageParam !== false;
  }
  return;
}
function hasPreviousPage(options, pages) {
  if (options.getPreviousPageParam && Array.isArray(pages)) {
    const previousPageParam = getPreviousPageParam(options, pages);
    return typeof previousPageParam !== "undefined" && previousPageParam !== null && previousPageParam !== false;
  }
  return;
}

// node_modules/@tanstack/query-core/build/lib/queryClient.mjs
var QueryClient = class {
  constructor(config2 = {}) {
    this.queryCache = config2.queryCache || new QueryCache();
    this.mutationCache = config2.mutationCache || new MutationCache();
    this.logger = config2.logger || defaultLogger;
    this.defaultOptions = config2.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
    this.mountCount = 0;
    if (config2.logger) {
      this.logger.error("Passing a custom logger has been deprecated and will be removed in the next major version.");
    }
  }
  mount() {
    this.mountCount++;
    if (this.mountCount !== 1)
      return;
    this.unsubscribeFocus = focusManager.subscribe(() => {
      if (focusManager.isFocused()) {
        this.resumePausedMutations();
        this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(() => {
      if (onlineManager.isOnline()) {
        this.resumePausedMutations();
        this.queryCache.onOnline();
      }
    });
  }
  unmount() {
    var _this$unsubscribeFocu, _this$unsubscribeOnli;
    this.mountCount--;
    if (this.mountCount !== 0)
      return;
    (_this$unsubscribeFocu = this.unsubscribeFocus) == null ? void 0 : _this$unsubscribeFocu.call(this);
    this.unsubscribeFocus = void 0;
    (_this$unsubscribeOnli = this.unsubscribeOnline) == null ? void 0 : _this$unsubscribeOnli.call(this);
    this.unsubscribeOnline = void 0;
  }
  isFetching(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    filters.fetchStatus = "fetching";
    return this.queryCache.findAll(filters).length;
  }
  isMutating(filters) {
    return this.mutationCache.findAll({
      ...filters,
      fetching: true
    }).length;
  }
  getQueryData(queryKey17, filters) {
    var _this$queryCache$find;
    return (_this$queryCache$find = this.queryCache.find(queryKey17, filters)) == null ? void 0 : _this$queryCache$find.state.data;
  }
  ensureQueryData(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const cachedData = this.getQueryData(parsedOptions.queryKey);
    return cachedData ? Promise.resolve(cachedData) : this.fetchQuery(parsedOptions);
  }
  getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey: queryKey17,
      state
    }) => {
      const data = state.data;
      return [queryKey17, data];
    });
  }
  setQueryData(queryKey17, updater, options) {
    const query = this.queryCache.find(queryKey17);
    const prevData = query == null ? void 0 : query.state.data;
    const data = functionalUpdate(updater, prevData);
    if (typeof data === "undefined") {
      return void 0;
    }
    const parsedOptions = parseQueryArgs(queryKey17);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(data, {
      ...options,
      manual: true
    });
  }
  setQueriesData(queryKeyOrFilters, updater, options) {
    return notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({
      queryKey: queryKey17
    }) => [queryKey17, this.setQueryData(queryKey17, updater, options)]));
  }
  getQueryState(queryKey17, filters) {
    var _this$queryCache$find2;
    return (_this$queryCache$find2 = this.queryCache.find(queryKey17, filters)) == null ? void 0 : _this$queryCache$find2.state;
  }
  removeQueries(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    const queryCache = this.queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const queryCache = this.queryCache;
    const refetchFilters = {
      type: "active",
      ...filters
    };
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  cancelQueries(arg1, arg2, arg3) {
    const [filters, cancelOptions = {}] = parseFilterArgs(arg1, arg2, arg3);
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.cancel(cancelOptions)));
    return Promise.all(promises).then(noop2).catch(noop2);
  }
  invalidateQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    return notifyManager.batch(() => {
      var _ref, _filters$refetchType;
      this.queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      if (filters.refetchType === "none") {
        return Promise.resolve();
      }
      const refetchFilters = {
        ...filters,
        type: (_ref = (_filters$refetchType = filters.refetchType) != null ? _filters$refetchType : filters.type) != null ? _ref : "active"
      };
      return this.refetchQueries(refetchFilters, options);
    });
  }
  refetchQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).filter((query) => !query.isDisabled()).map((query) => {
      var _options$cancelRefetc;
      return query.fetch(void 0, {
        ...options,
        cancelRefetch: (_options$cancelRefetc = options == null ? void 0 : options.cancelRefetch) != null ? _options$cancelRefetc : true,
        meta: {
          refetchPage: filters.refetchPage
        }
      });
    }));
    let promise = Promise.all(promises).then(noop2);
    if (!(options != null && options.throwOnError)) {
      promise = promise.catch(noop2);
    }
    return promise;
  }
  fetchQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    const query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop2).catch(noop2);
  }
  fetchInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  }
  prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop2).catch(noop2);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(options) {
    this.defaultOptions = options;
  }
  setQueryDefaults(queryKey17, options) {
    const result = this.queryDefaults.find((x) => hashQueryKey(queryKey17) === hashQueryKey(x.queryKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({
        queryKey: queryKey17,
        defaultOptions: options
      });
    }
  }
  getQueryDefaults(queryKey17) {
    if (!queryKey17) {
      return void 0;
    }
    const firstMatchingDefaults = this.queryDefaults.find((x) => partialMatchKey(queryKey17, x.queryKey));
    if (true) {
      const matchingDefaults = this.queryDefaults.filter((x) => partialMatchKey(queryKey17, x.queryKey));
      if (matchingDefaults.length > 1) {
        this.logger.error("[QueryClient] Several query defaults match with key '" + JSON.stringify(queryKey17) + "'. The first matching query defaults are used. Please check how query defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetquerydefaults.");
      }
    }
    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }
  setMutationDefaults(mutationKey8, options) {
    const result = this.mutationDefaults.find((x) => hashQueryKey(mutationKey8) === hashQueryKey(x.mutationKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({
        mutationKey: mutationKey8,
        defaultOptions: options
      });
    }
  }
  getMutationDefaults(mutationKey8) {
    if (!mutationKey8) {
      return void 0;
    }
    const firstMatchingDefaults = this.mutationDefaults.find((x) => partialMatchKey(mutationKey8, x.mutationKey));
    if (true) {
      const matchingDefaults = this.mutationDefaults.filter((x) => partialMatchKey(mutationKey8, x.mutationKey));
      if (matchingDefaults.length > 1) {
        this.logger.error("[QueryClient] Several mutation defaults match with key '" + JSON.stringify(mutationKey8) + "'. The first matching mutation defaults are used. Please check how mutation defaults are registered. Order does matter here. cf. https://react-query.tanstack.com/reference/QueryClient#queryclientsetmutationdefaults.");
      }
    }
    return firstMatchingDefaults == null ? void 0 : firstMatchingDefaults.defaultOptions;
  }
  defaultQueryOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }
    const defaultedOptions = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(options == null ? void 0 : options.queryKey),
      ...options,
      _defaulted: true
    };
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    if (typeof defaultedOptions.refetchOnReconnect === "undefined") {
      defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
    }
    if (typeof defaultedOptions.useErrorBoundary === "undefined") {
      defaultedOptions.useErrorBoundary = !!defaultedOptions.suspense;
    }
    return defaultedOptions;
  }
  defaultMutationOptions(options) {
    if (options != null && options._defaulted) {
      return options;
    }
    return {
      ...this.defaultOptions.mutations,
      ...this.getMutationDefaults(options == null ? void 0 : options.mutationKey),
      ...options,
      _defaulted: true
    };
  }
  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }
};

// node_modules/@tanstack/query-core/build/lib/queryObserver.mjs
var QueryObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.client = client;
    this.options = options;
    this.trackedProps = /* @__PURE__ */ new Set();
    this.selectError = null;
    this.bindMethods();
    this.setOptions(options);
  }
  bindMethods() {
    this.remove = this.remove.bind(this);
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    if (this.listeners.size === 1) {
      this.currentQuery.addObserver(this);
      if (shouldFetchOnMount(this.currentQuery, this.options)) {
        this.executeFetch();
      }
      this.updateTimers();
    }
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      this.destroy();
    }
  }
  shouldFetchOnReconnect() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return shouldFetchOn(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set();
    this.clearStaleTimeout();
    this.clearRefetchInterval();
    this.currentQuery.removeObserver(this);
  }
  setOptions(options, notifyOptions) {
    const prevOptions = this.options;
    const prevQuery = this.currentQuery;
    this.options = this.client.defaultQueryOptions(options);
    if (typeof (options == null ? void 0 : options.isDataEqual) !== "undefined") {
      this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option");
    }
    if (!shallowEqualObjects(prevOptions, this.options)) {
      this.client.getQueryCache().notify({
        type: "observerOptionsUpdated",
        query: this.currentQuery,
        observer: this
      });
    }
    if (typeof this.options.enabled !== "undefined" && typeof this.options.enabled !== "boolean") {
      throw new Error("Expected enabled to be a boolean");
    }
    if (!this.options.queryKey) {
      this.options.queryKey = prevOptions.queryKey;
    }
    this.updateQuery();
    const mounted = this.hasListeners();
    if (mounted && shouldFetchOptionally(this.currentQuery, prevQuery, this.options, prevOptions)) {
      this.executeFetch();
    }
    this.updateResult(notifyOptions);
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || this.options.staleTime !== prevOptions.staleTime)) {
      this.updateStaleTimeout();
    }
    const nextRefetchInterval = this.computeRefetchInterval();
    if (mounted && (this.currentQuery !== prevQuery || this.options.enabled !== prevOptions.enabled || nextRefetchInterval !== this.currentRefetchInterval)) {
      this.updateRefetchInterval(nextRefetchInterval);
    }
  }
  getOptimisticResult(options) {
    const query = this.client.getQueryCache().build(this.client, options);
    const result = this.createResult(query, options);
    if (shouldAssignObserverCurrentProperties(this, result, options)) {
      this.currentResult = result;
      this.currentResultOptions = this.options;
      this.currentResultState = this.currentQuery.state;
    }
    return result;
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(result) {
    const trackedResult = {};
    Object.keys(result).forEach((key) => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.trackedProps.add(key);
          return result[key];
        }
      });
    });
    return trackedResult;
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({
    refetchPage,
    ...options
  } = {}) {
    return this.fetch({
      ...options,
      meta: {
        refetchPage
      }
    });
  }
  fetchOptimistic(options) {
    const defaultedOptions = this.client.defaultQueryOptions(options);
    const query = this.client.getQueryCache().build(this.client, defaultedOptions);
    query.isFetchingOptimistic = true;
    return query.fetch().then(() => this.createResult(query, defaultedOptions));
  }
  fetch(fetchOptions) {
    var _fetchOptions$cancelR;
    return this.executeFetch({
      ...fetchOptions,
      cancelRefetch: (_fetchOptions$cancelR = fetchOptions.cancelRefetch) != null ? _fetchOptions$cancelR : true
    }).then(() => {
      this.updateResult();
      return this.currentResult;
    });
  }
  executeFetch(fetchOptions) {
    this.updateQuery();
    let promise = this.currentQuery.fetch(this.options, fetchOptions);
    if (!(fetchOptions != null && fetchOptions.throwOnError)) {
      promise = promise.catch(noop2);
    }
    return promise;
  }
  updateStaleTimeout() {
    this.clearStaleTimeout();
    if (isServer || this.currentResult.isStale || !isValidTimeout(this.options.staleTime)) {
      return;
    }
    const time = timeUntilStale(this.currentResult.dataUpdatedAt, this.options.staleTime);
    const timeout = time + 1;
    this.staleTimeoutId = setTimeout(() => {
      if (!this.currentResult.isStale) {
        this.updateResult();
      }
    }, timeout);
  }
  computeRefetchInterval() {
    var _this$options$refetch;
    return typeof this.options.refetchInterval === "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (_this$options$refetch = this.options.refetchInterval) != null ? _this$options$refetch : false;
  }
  updateRefetchInterval(nextInterval) {
    this.clearRefetchInterval();
    this.currentRefetchInterval = nextInterval;
    if (isServer || this.options.enabled === false || !isValidTimeout(this.currentRefetchInterval) || this.currentRefetchInterval === 0) {
      return;
    }
    this.refetchIntervalId = setInterval(() => {
      if (this.options.refetchIntervalInBackground || focusManager.isFocused()) {
        this.executeFetch();
      }
    }, this.currentRefetchInterval);
  }
  updateTimers() {
    this.updateStaleTimeout();
    this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    if (this.staleTimeoutId) {
      clearTimeout(this.staleTimeoutId);
      this.staleTimeoutId = void 0;
    }
  }
  clearRefetchInterval() {
    if (this.refetchIntervalId) {
      clearInterval(this.refetchIntervalId);
      this.refetchIntervalId = void 0;
    }
  }
  createResult(query, options) {
    const prevQuery = this.currentQuery;
    const prevOptions = this.options;
    const prevResult = this.currentResult;
    const prevResultState = this.currentResultState;
    const prevResultOptions = this.currentResultOptions;
    const queryChange = query !== prevQuery;
    const queryInitialState = queryChange ? query.state : this.currentQueryInitialState;
    const prevQueryResult = queryChange ? this.currentResult : this.previousQueryResult;
    const {
      state
    } = query;
    let {
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      fetchStatus,
      status
    } = state;
    let isPreviousData = false;
    let isPlaceholderData = false;
    let data;
    if (options._optimisticResults) {
      const mounted = this.hasListeners();
      const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
      const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
      if (fetchOnMount || fetchOptionally) {
        fetchStatus = canFetch(query.options.networkMode) ? "fetching" : "paused";
        if (!dataUpdatedAt) {
          status = "loading";
        }
      }
      if (options._optimisticResults === "isRestoring") {
        fetchStatus = "idle";
      }
    }
    if (options.keepPreviousData && !state.dataUpdatedAt && prevQueryResult != null && prevQueryResult.isSuccess && status !== "error") {
      data = prevQueryResult.data;
      dataUpdatedAt = prevQueryResult.dataUpdatedAt;
      status = prevQueryResult.status;
      isPreviousData = true;
    } else if (options.select && typeof state.data !== "undefined") {
      if (prevResult && state.data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === this.selectFn) {
        data = this.selectResult;
      } else {
        try {
          this.selectFn = options.select;
          data = options.select(state.data);
          data = replaceData(prevResult == null ? void 0 : prevResult.data, data, options);
          this.selectResult = data;
          this.selectError = null;
        } catch (selectError) {
          if (true) {
            this.client.getLogger().error(selectError);
          }
          this.selectError = selectError;
        }
      }
    } else {
      data = state.data;
    }
    if (typeof options.placeholderData !== "undefined" && typeof data === "undefined" && status === "loading") {
      let placeholderData;
      if (prevResult != null && prevResult.isPlaceholderData && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
        placeholderData = prevResult.data;
      } else {
        placeholderData = typeof options.placeholderData === "function" ? options.placeholderData() : options.placeholderData;
        if (options.select && typeof placeholderData !== "undefined") {
          try {
            placeholderData = options.select(placeholderData);
            this.selectError = null;
          } catch (selectError) {
            if (true) {
              this.client.getLogger().error(selectError);
            }
            this.selectError = selectError;
          }
        }
      }
      if (typeof placeholderData !== "undefined") {
        status = "success";
        data = replaceData(prevResult == null ? void 0 : prevResult.data, placeholderData, options);
        isPlaceholderData = true;
      }
    }
    if (this.selectError) {
      error = this.selectError;
      data = this.selectResult;
      errorUpdatedAt = Date.now();
      status = "error";
    }
    const isFetching = fetchStatus === "fetching";
    const isLoading = status === "loading";
    const isError2 = status === "error";
    const result = {
      status,
      fetchStatus,
      isLoading,
      isSuccess: status === "success",
      isError: isError2,
      isInitialLoading: isLoading && isFetching,
      data,
      dataUpdatedAt,
      error,
      errorUpdatedAt,
      failureCount: state.fetchFailureCount,
      failureReason: state.fetchFailureReason,
      errorUpdateCount: state.errorUpdateCount,
      isFetched: state.dataUpdateCount > 0 || state.errorUpdateCount > 0,
      isFetchedAfterMount: state.dataUpdateCount > queryInitialState.dataUpdateCount || state.errorUpdateCount > queryInitialState.errorUpdateCount,
      isFetching,
      isRefetching: isFetching && !isLoading,
      isLoadingError: isError2 && state.dataUpdatedAt === 0,
      isPaused: fetchStatus === "paused",
      isPlaceholderData,
      isPreviousData,
      isRefetchError: isError2 && state.dataUpdatedAt !== 0,
      isStale: isStale(query, options),
      refetch: this.refetch,
      remove: this.remove
    };
    return result;
  }
  updateResult(notifyOptions) {
    const prevResult = this.currentResult;
    const nextResult = this.createResult(this.currentQuery, this.options);
    this.currentResultState = this.currentQuery.state;
    this.currentResultOptions = this.options;
    if (shallowEqualObjects(nextResult, prevResult)) {
      return;
    }
    this.currentResult = nextResult;
    const defaultNotifyOptions = {
      cache: true
    };
    const shouldNotifyListeners = () => {
      if (!prevResult) {
        return true;
      }
      const {
        notifyOnChangeProps
      } = this.options;
      const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
      if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !this.trackedProps.size) {
        return true;
      }
      const includedProps = new Set(notifyOnChangePropsValue != null ? notifyOnChangePropsValue : this.trackedProps);
      if (this.options.useErrorBoundary) {
        includedProps.add("error");
      }
      return Object.keys(this.currentResult).some((key) => {
        const typedKey = key;
        const changed = this.currentResult[typedKey] !== prevResult[typedKey];
        return changed && includedProps.has(typedKey);
      });
    };
    if ((notifyOptions == null ? void 0 : notifyOptions.listeners) !== false && shouldNotifyListeners()) {
      defaultNotifyOptions.listeners = true;
    }
    this.notify({
      ...defaultNotifyOptions,
      ...notifyOptions
    });
  }
  updateQuery() {
    const query = this.client.getQueryCache().build(this.client, this.options);
    if (query === this.currentQuery) {
      return;
    }
    const prevQuery = this.currentQuery;
    this.currentQuery = query;
    this.currentQueryInitialState = query.state;
    this.previousQueryResult = this.currentResult;
    if (this.hasListeners()) {
      prevQuery == null ? void 0 : prevQuery.removeObserver(this);
      query.addObserver(this);
    }
  }
  onQueryUpdate(action) {
    const notifyOptions = {};
    if (action.type === "success") {
      notifyOptions.onSuccess = !action.manual;
    } else if (action.type === "error" && !isCancelledError(action.error)) {
      notifyOptions.onError = true;
    }
    this.updateResult(notifyOptions);
    if (this.hasListeners()) {
      this.updateTimers();
    }
  }
  notify(notifyOptions) {
    notifyManager.batch(() => {
      if (notifyOptions.onSuccess) {
        var _this$options$onSucce, _this$options, _this$options$onSettl, _this$options2;
        (_this$options$onSucce = (_this$options = this.options).onSuccess) == null ? void 0 : _this$options$onSucce.call(_this$options, this.currentResult.data);
        (_this$options$onSettl = (_this$options2 = this.options).onSettled) == null ? void 0 : _this$options$onSettl.call(_this$options2, this.currentResult.data, null);
      } else if (notifyOptions.onError) {
        var _this$options$onError, _this$options3, _this$options$onSettl2, _this$options4;
        (_this$options$onError = (_this$options3 = this.options).onError) == null ? void 0 : _this$options$onError.call(_this$options3, this.currentResult.error);
        (_this$options$onSettl2 = (_this$options4 = this.options).onSettled) == null ? void 0 : _this$options$onSettl2.call(_this$options4, void 0, this.currentResult.error);
      }
      if (notifyOptions.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      }
      if (notifyOptions.cache) {
        this.client.getQueryCache().notify({
          query: this.currentQuery,
          type: "observerResultsUpdated"
        });
      }
    });
  }
};
function shouldLoadOnMount(query, options) {
  return options.enabled !== false && !query.state.dataUpdatedAt && !(query.state.status === "error" && options.retryOnMount === false);
}
function shouldFetchOnMount(query, options) {
  return shouldLoadOnMount(query, options) || query.state.dataUpdatedAt > 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
  if (options.enabled !== false) {
    const value = typeof field === "function" ? field(query) : field;
    return value === "always" || value !== false && isStale(query, options);
  }
  return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
  return options.enabled !== false && (query !== prevQuery || prevOptions.enabled === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
  return query.isStaleByTime(options.staleTime);
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult, options) {
  if (options.keepPreviousData) {
    return false;
  }
  if (options.placeholderData !== void 0) {
    return optimisticResult.isPlaceholderData;
  }
  if (!shallowEqualObjects(observer.getCurrentResult(), optimisticResult)) {
    return true;
  }
  return false;
}

// node_modules/@tanstack/query-core/build/lib/infiniteQueryObserver.mjs
var InfiniteQueryObserver = class extends QueryObserver {
  // Type override
  // Type override
  // Type override
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(client, options) {
    super(client, options);
  }
  bindMethods() {
    super.bindMethods();
    this.fetchNextPage = this.fetchNextPage.bind(this);
    this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(options, notifyOptions) {
    super.setOptions({
      ...options,
      behavior: infiniteQueryBehavior()
    }, notifyOptions);
  }
  getOptimisticResult(options) {
    options.behavior = infiniteQueryBehavior();
    return super.getOptimisticResult(options);
  }
  fetchNextPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: {
          direction: "forward",
          pageParam
        }
      }
    });
  }
  fetchPreviousPage({
    pageParam,
    ...options
  } = {}) {
    return this.fetch({
      ...options,
      meta: {
        fetchMore: {
          direction: "backward",
          pageParam
        }
      }
    });
  }
  createResult(query, options) {
    var _state$fetchMeta, _state$fetchMeta$fetc, _state$fetchMeta2, _state$fetchMeta2$fet, _state$data, _state$data2;
    const {
      state
    } = query;
    const result = super.createResult(query, options);
    const {
      isFetching,
      isRefetching
    } = result;
    const isFetchingNextPage = isFetching && ((_state$fetchMeta = state.fetchMeta) == null ? void 0 : (_state$fetchMeta$fetc = _state$fetchMeta.fetchMore) == null ? void 0 : _state$fetchMeta$fetc.direction) === "forward";
    const isFetchingPreviousPage = isFetching && ((_state$fetchMeta2 = state.fetchMeta) == null ? void 0 : (_state$fetchMeta2$fet = _state$fetchMeta2.fetchMore) == null ? void 0 : _state$fetchMeta2$fet.direction) === "backward";
    return {
      ...result,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: hasNextPage(options, (_state$data = state.data) == null ? void 0 : _state$data.pages),
      hasPreviousPage: hasPreviousPage(options, (_state$data2 = state.data) == null ? void 0 : _state$data2.pages),
      isFetchingNextPage,
      isFetchingPreviousPage,
      isRefetching: isRefetching && !isFetchingNextPage && !isFetchingPreviousPage
    };
  }
};

// node_modules/@tanstack/query-core/build/lib/mutationObserver.mjs
var MutationObserver = class extends Subscribable {
  constructor(client, options) {
    super();
    this.client = client;
    this.setOptions(options);
    this.bindMethods();
    this.updateResult();
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this);
    this.reset = this.reset.bind(this);
  }
  setOptions(options) {
    var _this$currentMutation;
    const prevOptions = this.options;
    this.options = this.client.defaultMutationOptions(options);
    if (!shallowEqualObjects(prevOptions, this.options)) {
      this.client.getMutationCache().notify({
        type: "observerOptionsUpdated",
        mutation: this.currentMutation,
        observer: this
      });
    }
    (_this$currentMutation = this.currentMutation) == null ? void 0 : _this$currentMutation.setOptions(this.options);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var _this$currentMutation2;
      (_this$currentMutation2 = this.currentMutation) == null ? void 0 : _this$currentMutation2.removeObserver(this);
    }
  }
  onMutationUpdate(action) {
    this.updateResult();
    const notifyOptions = {
      listeners: true
    };
    if (action.type === "success") {
      notifyOptions.onSuccess = true;
    } else if (action.type === "error") {
      notifyOptions.onError = true;
    }
    this.notify(notifyOptions);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  reset() {
    this.currentMutation = void 0;
    this.updateResult();
    this.notify({
      listeners: true
    });
  }
  mutate(variables, options) {
    this.mutateOptions = options;
    if (this.currentMutation) {
      this.currentMutation.removeObserver(this);
    }
    this.currentMutation = this.client.getMutationCache().build(this.client, {
      ...this.options,
      variables: typeof variables !== "undefined" ? variables : this.options.variables
    });
    this.currentMutation.addObserver(this);
    return this.currentMutation.execute();
  }
  updateResult() {
    const state = this.currentMutation ? this.currentMutation.state : getDefaultState2();
    const result = {
      ...state,
      isLoading: state.status === "loading",
      isSuccess: state.status === "success",
      isError: state.status === "error",
      isIdle: state.status === "idle",
      mutate: this.mutate,
      reset: this.reset
    };
    this.currentResult = result;
  }
  notify(options) {
    notifyManager.batch(() => {
      if (this.mutateOptions && this.hasListeners()) {
        if (options.onSuccess) {
          var _this$mutateOptions$o, _this$mutateOptions, _this$mutateOptions$o2, _this$mutateOptions2;
          (_this$mutateOptions$o = (_this$mutateOptions = this.mutateOptions).onSuccess) == null ? void 0 : _this$mutateOptions$o.call(_this$mutateOptions, this.currentResult.data, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o2 = (_this$mutateOptions2 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o2.call(_this$mutateOptions2, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        } else if (options.onError) {
          var _this$mutateOptions$o3, _this$mutateOptions3, _this$mutateOptions$o4, _this$mutateOptions4;
          (_this$mutateOptions$o3 = (_this$mutateOptions3 = this.mutateOptions).onError) == null ? void 0 : _this$mutateOptions$o3.call(_this$mutateOptions3, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
          (_this$mutateOptions$o4 = (_this$mutateOptions4 = this.mutateOptions).onSettled) == null ? void 0 : _this$mutateOptions$o4.call(_this$mutateOptions4, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
      }
      if (options.listeners) {
        this.listeners.forEach(({
          listener
        }) => {
          listener(this.currentResult);
        });
      }
    });
  }
};

// node_modules/@tanstack/query-core/build/lib/hydration.mjs
function dehydrateMutation(mutation) {
  return {
    mutationKey: mutation.options.mutationKey,
    state: mutation.state
  };
}
function dehydrateQuery(query) {
  return {
    state: query.state,
    queryKey: query.queryKey,
    queryHash: query.queryHash
  };
}
function defaultShouldDehydrateMutation(mutation) {
  return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
  return query.state.status === "success";
}
function dehydrate(client, options = {}) {
  const mutations = [];
  const queries = [];
  if (options.dehydrateMutations !== false) {
    const shouldDehydrateMutation = options.shouldDehydrateMutation || defaultShouldDehydrateMutation;
    client.getMutationCache().getAll().forEach((mutation) => {
      if (shouldDehydrateMutation(mutation)) {
        mutations.push(dehydrateMutation(mutation));
      }
    });
  }
  if (options.dehydrateQueries !== false) {
    const shouldDehydrateQuery = options.shouldDehydrateQuery || defaultShouldDehydrateQuery;
    client.getQueryCache().getAll().forEach((query) => {
      if (shouldDehydrateQuery(query)) {
        queries.push(dehydrateQuery(query));
      }
    });
  }
  return {
    mutations,
    queries
  };
}
function hydrate(client, dehydratedState, options) {
  if (typeof dehydratedState !== "object" || dehydratedState === null) {
    return;
  }
  const mutationCache = client.getMutationCache();
  const queryCache = client.getQueryCache();
  const mutations = dehydratedState.mutations || [];
  const queries = dehydratedState.queries || [];
  mutations.forEach((dehydratedMutation) => {
    var _options$defaultOptio;
    mutationCache.build(client, {
      ...options == null ? void 0 : (_options$defaultOptio = options.defaultOptions) == null ? void 0 : _options$defaultOptio.mutations,
      mutationKey: dehydratedMutation.mutationKey
    }, dehydratedMutation.state);
  });
  queries.forEach(({
    queryKey: queryKey17,
    state,
    queryHash
  }) => {
    var _options$defaultOptio2;
    const query = queryCache.get(queryHash);
    if (query) {
      if (query.state.dataUpdatedAt < state.dataUpdatedAt) {
        const {
          fetchStatus: _ignored,
          ...dehydratedQueryState
        } = state;
        query.setState(dehydratedQueryState);
      }
      return;
    }
    queryCache.build(
      client,
      {
        ...options == null ? void 0 : (_options$defaultOptio2 = options.defaultOptions) == null ? void 0 : _options$defaultOptio2.queries,
        queryKey: queryKey17,
        queryHash
      },
      // Reset fetch status to idle to avoid
      // query being stuck in fetching state upon hydration
      {
        ...state,
        fetchStatus: "idle"
      }
    );
  });
}

// node_modules/@tanstack/react-query/build/lib/reactBatchedUpdates.mjs
var ReactDOM = __toESM(require_react_dom(), 1);
var unstable_batchedUpdates2 = ReactDOM.unstable_batchedUpdates;

// node_modules/@tanstack/react-query/build/lib/setBatchUpdatesFn.mjs
notifyManager.setBatchNotifyFunction(unstable_batchedUpdates2);

// node_modules/@tanstack/react-query/build/lib/useQueries.mjs
var React5 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useSyncExternalStore.mjs
var import_shim = __toESM(require_shim(), 1);
var useSyncExternalStore = import_shim.useSyncExternalStore;

// node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs
var React = __toESM(require_react(), 1);
var defaultContext = React.createContext(void 0);
var QueryClientSharingContext = React.createContext(false);
function getQueryClientContext(context, contextSharing) {
  if (context) {
    return context;
  }
  if (contextSharing && typeof window !== "undefined") {
    if (!window.ReactQueryClientContext) {
      window.ReactQueryClientContext = defaultContext;
    }
    return window.ReactQueryClientContext;
  }
  return defaultContext;
}
var useQueryClient = ({
  context
} = {}) => {
  const queryClient = React.useContext(getQueryClientContext(context, React.useContext(QueryClientSharingContext)));
  if (!queryClient) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }
  return queryClient;
};
var QueryClientProvider = ({
  client,
  children,
  context,
  contextSharing = false
}) => {
  React.useEffect(() => {
    client.mount();
    return () => {
      client.unmount();
    };
  }, [client]);
  if (contextSharing) {
    client.getLogger().error("The contextSharing option has been deprecated and will be removed in the next major version");
  }
  const Context2 = getQueryClientContext(context, contextSharing);
  return React.createElement(QueryClientSharingContext.Provider, {
    value: !context && contextSharing
  }, React.createElement(Context2.Provider, {
    value: client
  }, children));
};

// node_modules/@tanstack/react-query/build/lib/isRestoring.mjs
var React2 = __toESM(require_react(), 1);
var IsRestoringContext = React2.createContext(false);
var useIsRestoring = () => React2.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

// node_modules/@tanstack/react-query/build/lib/QueryErrorResetBoundary.mjs
var React3 = __toESM(require_react(), 1);
function createValue() {
  let isReset = false;
  return {
    clearReset: () => {
      isReset = false;
    },
    reset: () => {
      isReset = true;
    },
    isReset: () => {
      return isReset;
    }
  };
}
var QueryErrorResetBoundaryContext = React3.createContext(createValue());
var useQueryErrorResetBoundary = () => React3.useContext(QueryErrorResetBoundaryContext);

// node_modules/@tanstack/react-query/build/lib/errorBoundaryUtils.mjs
var React4 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/utils.mjs
function shouldThrowError(_useErrorBoundary, params) {
  if (typeof _useErrorBoundary === "function") {
    return _useErrorBoundary(...params);
  }
  return !!_useErrorBoundary;
}

// node_modules/@tanstack/react-query/build/lib/useBaseQuery.mjs
var React6 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/Hydrate.mjs
var React7 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useIsFetching.mjs
var React8 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useIsMutating.mjs
var React9 = __toESM(require_react(), 1);

// node_modules/@tanstack/react-query/build/lib/useMutation.mjs
var React10 = __toESM(require_react(), 1);
function useMutation(arg1, arg2, arg3) {
  const options = parseMutationArgs(arg1, arg2, arg3);
  const queryClient = useQueryClient({
    context: options.context
  });
  const [observer] = React10.useState(() => new MutationObserver(queryClient, options));
  React10.useEffect(() => {
    observer.setOptions(options);
  }, [observer, options]);
  const result = useSyncExternalStore(React10.useCallback((onStoreChange) => observer.subscribe(notifyManager.batchCalls(onStoreChange)), [observer]), () => observer.getCurrentResult(), () => observer.getCurrentResult());
  const mutate = React10.useCallback((variables, mutateOptions) => {
    observer.mutate(variables, mutateOptions).catch(noop3);
  }, [observer]);
  if (result.error && shouldThrowError(observer.options.useErrorBoundary, [result.error])) {
    throw result.error;
  }
  return {
    ...result,
    mutate,
    mutateAsync: result.mutate
  };
}
function noop3() {
}

// node_modules/@tanstack/query-persist-client-core/build/lib/persist.mjs
var cacheableEventTypes = ["added", "removed", "updated"];
function isCacheableEventType(eventType) {
  return cacheableEventTypes.includes(eventType);
}
async function persistQueryClientRestore({
  queryClient,
  persister,
  maxAge = 1e3 * 60 * 60 * 24,
  buster = "",
  hydrateOptions
}) {
  try {
    const persistedClient = await persister.restoreClient();
    if (persistedClient) {
      if (persistedClient.timestamp) {
        const expired = Date.now() - persistedClient.timestamp > maxAge;
        const busted = persistedClient.buster !== buster;
        if (expired || busted) {
          persister.removeClient();
        } else {
          hydrate(queryClient, persistedClient.clientState, hydrateOptions);
        }
      } else {
        persister.removeClient();
      }
    }
  } catch (err) {
    if (true) {
      queryClient.getLogger().error(err);
      queryClient.getLogger().warn("Encountered an error attempting to restore client cache from persisted location. As a precaution, the persisted cache will be discarded.");
    }
    persister.removeClient();
  }
}
async function persistQueryClientSave({
  queryClient,
  persister,
  buster = "",
  dehydrateOptions
}) {
  const persistClient = {
    buster,
    timestamp: Date.now(),
    clientState: dehydrate(queryClient, dehydrateOptions)
  };
  await persister.persistClient(persistClient);
}
function persistQueryClientSubscribe(props) {
  const unsubscribeQueryCache = props.queryClient.getQueryCache().subscribe((event) => {
    if (isCacheableEventType(event.type)) {
      persistQueryClientSave(props);
    }
  });
  const unusbscribeMutationCache = props.queryClient.getMutationCache().subscribe((event) => {
    if (isCacheableEventType(event.type)) {
      persistQueryClientSave(props);
    }
  });
  return () => {
    unsubscribeQueryCache();
    unusbscribeMutationCache();
  };
}
function persistQueryClient(props) {
  let hasUnsubscribed = false;
  let persistQueryClientUnsubscribe;
  const unsubscribe = () => {
    hasUnsubscribed = true;
    persistQueryClientUnsubscribe == null ? void 0 : persistQueryClientUnsubscribe();
  };
  const restorePromise = persistQueryClientRestore(props).then(() => {
    if (!hasUnsubscribed) {
      persistQueryClientUnsubscribe = persistQueryClientSubscribe(props);
    }
  });
  return [unsubscribe, restorePromise];
}

// node_modules/@tanstack/react-query-persist-client/build/lib/PersistQueryClientProvider.mjs
var React11 = __toESM(require_react(), 1);

// node_modules/@wagmi/connectors/dist/chunk-UGBGYVBH.js
var ChainNotConfiguredForConnectorError = class extends Error {
  constructor({
    chainId,
    connectorId
  }) {
    super(`Chain "${chainId}" not configured for connector "${connectorId}".`);
    this.name = "ChainNotConfiguredForConnectorError";
  }
};
var ConnectorNotFoundError = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "ConnectorNotFoundError";
    this.message = "Connector not found";
  }
};

// node_modules/@wagmi/connectors/dist/chunk-OQILYQDO.js
function normalizeChainId(chainId) {
  if (typeof chainId === "string")
    return Number.parseInt(
      chainId,
      chainId.trim().substring(0, 2) === "0x" ? 16 : 10
    );
  if (typeof chainId === "bigint")
    return Number(chainId);
  return chainId;
}

// node_modules/@wagmi/connectors/dist/chunk-W65LBPLT.js
var import_eventemitter3 = __toESM(require_eventemitter3(), 1);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var Connector = class extends import_eventemitter3.default {
  constructor({
    chains = [mainnet, goerli],
    options
  }) {
    super();
    this.chains = chains;
    this.options = options;
  }
  getBlockExplorerUrls(chain) {
    const { default: blockExplorer, ...blockExplorers } = chain.blockExplorers ?? {};
    if (blockExplorer)
      return [
        blockExplorer.url,
        ...Object.values(blockExplorers).map((x) => x.url)
      ];
  }
  isChainUnsupported(chainId) {
    return !this.chains.some((x) => x.id === chainId);
  }
  setStorage(storage) {
    this.storage = storage;
  }
};

// node_modules/@wagmi/connectors/dist/chunk-JTELPB65.js
function getInjectedName(ethereum) {
  var _a;
  if (!ethereum)
    return "Injected";
  const getName = (provider) => {
    if (provider.isApexWallet)
      return "Apex Wallet";
    if (provider.isAvalanche)
      return "Core Wallet";
    if (provider.isBackpack)
      return "Backpack";
    if (provider.isBifrost)
      return "Bifrost Wallet";
    if (provider.isBitKeep)
      return "BitKeep";
    if (provider.isBitski)
      return "Bitski";
    if (provider.isBlockWallet)
      return "BlockWallet";
    if (provider.isBraveWallet)
      return "Brave Wallet";
    if (provider.isCoin98)
      return "Coin98 Wallet";
    if (provider.isCoinbaseWallet)
      return "Coinbase Wallet";
    if (provider.isDawn)
      return "Dawn Wallet";
    if (provider.isDefiant)
      return "Defiant";
    if (provider.isDesig)
      return "Desig Wallet";
    if (provider.isEnkrypt)
      return "Enkrypt";
    if (provider.isExodus)
      return "Exodus";
    if (provider.isFordefi)
      return "Fordefi";
    if (provider.isFrame)
      return "Frame";
    if (provider.isFrontier)
      return "Frontier Wallet";
    if (provider.isGamestop)
      return "GameStop Wallet";
    if (provider.isHaqqWallet)
      return "HAQQ Wallet";
    if (provider.isHyperPay)
      return "HyperPay Wallet";
    if (provider.isImToken)
      return "ImToken";
    if (provider.isHaloWallet)
      return "Halo Wallet";
    if (provider.isKuCoinWallet)
      return "KuCoin Wallet";
    if (provider.isMathWallet)
      return "MathWallet";
    if (provider.isNovaWallet)
      return "Nova Wallet";
    if (provider.isOkxWallet || provider.isOKExWallet)
      return "OKX Wallet";
    if (provider.isOneInchIOSWallet || provider.isOneInchAndroidWallet)
      return "1inch Wallet";
    if (provider.isOpera)
      return "Opera";
    if (provider.isPhantom)
      return "Phantom";
    if (provider.isPortal)
      return "Ripio Portal";
    if (provider.isRabby)
      return "Rabby Wallet";
    if (provider.isRainbow)
      return "Rainbow";
    if (provider.isSafePal)
      return "SafePal Wallet";
    if (provider.isStatus)
      return "Status";
    if (provider.isSubWallet)
      return "SubWallet";
    if (provider.isTalisman)
      return "Talisman";
    if (provider.isTally)
      return "Taho";
    if (provider.isTokenPocket)
      return "TokenPocket";
    if (provider.isTokenary)
      return "Tokenary";
    if (provider.isTrust || provider.isTrustWallet)
      return "Trust Wallet";
    if (provider.isTTWallet)
      return "TTWallet";
    if (provider.isXDEFI)
      return "XDEFI Wallet";
    if (provider.isZeal)
      return "Zeal";
    if (provider.isZerion)
      return "Zerion";
    if (provider.isMetaMask)
      return "MetaMask";
  };
  if ((_a = ethereum.providers) == null ? void 0 : _a.length) {
    const nameSet = /* @__PURE__ */ new Set();
    let unknownCount = 1;
    for (const provider of ethereum.providers) {
      let name = getName(provider);
      if (!name) {
        name = `Unknown Wallet #${unknownCount}`;
        unknownCount += 1;
      }
      nameSet.add(name);
    }
    const names = [...nameSet];
    if (names.length)
      return names;
    return names[0] ?? "Injected";
  }
  return getName(ethereum) ?? "Injected";
}
var _provider;
var InjectedConnector = class extends Connector {
  constructor({
    chains,
    options: options_
  } = {}) {
    const options = {
      shimDisconnect: true,
      getProvider() {
        if (typeof window === "undefined")
          return;
        const ethereum = window.ethereum;
        if ((ethereum == null ? void 0 : ethereum.providers) && ethereum.providers.length > 0)
          return ethereum.providers[0];
        return ethereum;
      },
      ...options_
    };
    super({ chains, options });
    this.id = "injected";
    __privateAdd(this, _provider, void 0);
    this.shimDisconnectKey = `${this.id}.shimDisconnect`;
    this.onAccountsChanged = (accounts) => {
      if (accounts.length === 0)
        this.emit("disconnect");
      else
        this.emit("change", {
          account: getAddress(accounts[0])
        });
    };
    this.onChainChanged = (chainId) => {
      const id = normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", { chain: { id, unsupported } });
    };
    this.onDisconnect = async (error) => {
      var _a;
      if (error.code === 1013) {
        const provider2 = await this.getProvider();
        if (provider2) {
          const isAuthorized = await this.getAccount();
          if (isAuthorized)
            return;
        }
      }
      this.emit("disconnect");
      if (this.options.shimDisconnect)
        (_a = this.storage) == null ? void 0 : _a.removeItem(this.shimDisconnectKey);
    };
    const provider = options.getProvider();
    if (typeof options.name === "string")
      this.name = options.name;
    else if (provider) {
      const detectedName = getInjectedName(provider);
      if (options.name)
        this.name = options.name(detectedName);
      else {
        if (typeof detectedName === "string")
          this.name = detectedName;
        else
          this.name = detectedName[0];
      }
    } else
      this.name = "Injected";
    this.ready = !!provider;
  }
  async connect({ chainId } = {}) {
    var _a;
    try {
      const provider = await this.getProvider();
      if (!provider)
        throw new ConnectorNotFoundError();
      if (provider.on) {
        provider.on("accountsChanged", this.onAccountsChanged);
        provider.on("chainChanged", this.onChainChanged);
        provider.on("disconnect", this.onDisconnect);
      }
      this.emit("message", { type: "connecting" });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = getAddress(accounts[0]);
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        const chain = await this.switchChain(chainId);
        id = chain.id;
        unsupported = this.isChainUnsupported(id);
      }
      if (this.options.shimDisconnect)
        (_a = this.storage) == null ? void 0 : _a.setItem(this.shimDisconnectKey, true);
      return { account, chain: { id, unsupported } };
    } catch (error) {
      if (this.isUserRejectedRequestError(error))
        throw new UserRejectedRequestError(error);
      if (error.code === -32002)
        throw new ResourceUnavailableRpcError(error);
      throw error;
    }
  }
  async disconnect() {
    var _a;
    const provider = await this.getProvider();
    if (!(provider == null ? void 0 : provider.removeListener))
      return;
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    if (this.options.shimDisconnect)
      (_a = this.storage) == null ? void 0 : _a.removeItem(this.shimDisconnectKey);
  }
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    return getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    return provider.request({ method: "eth_chainId" }).then(normalizeChainId);
  }
  async getProvider() {
    const provider = this.options.getProvider();
    if (provider)
      __privateSet(this, _provider, provider);
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
    var _a;
    try {
      if (this.options.shimDisconnect && !((_a = this.storage) == null ? void 0 : _a.getItem(this.shimDisconnectKey)))
        return false;
      const provider = await this.getProvider();
      if (!provider)
        throw new ConnectorNotFoundError();
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    var _a, _b, _c;
    const provider = await this.getProvider();
    if (!provider)
      throw new ConnectorNotFoundError();
    const id = numberToHex(chainId);
    try {
      await Promise.all([
        provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: id }]
        }),
        new Promise(
          (res) => this.on("change", ({ chain }) => {
            if ((chain == null ? void 0 : chain.id) === chainId)
              res();
          })
        )
      ]);
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
      if (error.code === 4902 || ((_b = (_a = error == null ? void 0 : error.data) == null ? void 0 : _a.originalError) == null ? void 0 : _b.code) === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: id,
                chainName: chain.name,
                nativeCurrency: chain.nativeCurrency,
                rpcUrls: [((_c = chain.rpcUrls.public) == null ? void 0 : _c.http[0]) ?? ""],
                blockExplorerUrls: this.getBlockExplorerUrls(chain)
              }
            ]
          });
          const currentChainId = await this.getChainId();
          if (currentChainId !== chainId)
            throw new UserRejectedRequestError(
              new Error("User rejected switch after adding network.")
            );
          return chain;
        } catch (error2) {
          throw new UserRejectedRequestError(error2);
        }
      }
      if (this.isUserRejectedRequestError(error))
        throw new UserRejectedRequestError(error);
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
    if (!provider)
      throw new ConnectorNotFoundError();
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
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
};
_provider = /* @__PURE__ */ new WeakMap();

// node_modules/@wagmi/core/dist/chunk-MQXBDTVK.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod2 = (obj, member, method) => {
  __accessCheck2(obj, member, "access private method");
  return method;
};

// node_modules/zustand/esm/middleware.mjs
var subscribeWithSelectorImpl = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set, get, api);
  return initialState;
};
var subscribeWithSelector = subscribeWithSelectorImpl;
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, options == null ? void 0 : options.reviver);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, options == null ? void 0 : options.replacer)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
var toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
var oldImpl = (config2, baseOptions) => (set, get, api) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (e) {
  }
  if (!storage) {
    return config2(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e) => {
      errorInSync = e;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config2(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate2 = () => {
    var _a;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate2(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate2();
  return stateFromStorage || configResult;
};
var newImpl = (config2, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config2(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config2(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate2 = () => {
    var _a, _b;
    if (!storage)
      return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate2(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate2();
  }
  return stateFromStorage || configResult;
};
var persistImpl = (config2, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config2, baseOptions);
  }
  return newImpl(config2, baseOptions);
};
var persist = persistImpl;

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/zustand/esm/shallow.mjs
function shallow$1(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  if (objA instanceof Map && objB instanceof Map) {
    if (objA.size !== objB.size)
      return false;
    for (const [key, value] of objA) {
      if (!Object.is(value, objB.get(key))) {
        return false;
      }
    }
    return true;
  }
  if (objA instanceof Set && objB instanceof Set) {
    if (objA.size !== objB.size)
      return false;
    for (const value of objA) {
      if (!objB.has(value)) {
        return false;
      }
    }
    return true;
  }
  const keysA = Object.keys(objA);
  if (keysA.length !== Object.keys(objB).length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}

// node_modules/@wagmi/core/dist/chunk-TSH6VVF4.js
function configureChains(defaultChains, providers, {
  batch = { multicall: { wait: 32 } },
  pollingInterval = 4e3,
  rank,
  retryCount,
  retryDelay,
  stallTimeout
} = {}) {
  if (!defaultChains.length)
    throw new Error("must have at least one chain");
  let chains = [];
  const httpUrls = {};
  const wsUrls = {};
  for (const chain of defaultChains) {
    let configExists = false;
    for (const provider of providers) {
      const apiConfig = provider(chain);
      if (!apiConfig)
        continue;
      configExists = true;
      if (!chains.some(({ id }) => id === chain.id)) {
        chains = [...chains, apiConfig.chain];
      }
      httpUrls[chain.id] = [
        ...httpUrls[chain.id] || [],
        ...apiConfig.rpcUrls.http
      ];
      if (apiConfig.rpcUrls.webSocket) {
        wsUrls[chain.id] = [
          ...wsUrls[chain.id] || [],
          ...apiConfig.rpcUrls.webSocket
        ];
      }
    }
    if (!configExists) {
      throw new Error(
        [
          `Could not find valid provider configuration for chain "${chain.name}".
`,
          "You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.",
          "Read more: https://wagmi.sh/core/providers/jsonRpc"
        ].join("\n")
      );
    }
  }
  return {
    chains,
    publicClient: ({ chainId }) => {
      const activeChain = chains.find((x) => x.id === chainId) ?? defaultChains[0];
      const chainHttpUrls = httpUrls[activeChain.id];
      if (!chainHttpUrls || !chainHttpUrls[0])
        throw new Error(`No providers configured for chain "${activeChain.id}"`);
      const publicClient = createPublicClient({
        batch,
        chain: activeChain,
        transport: fallback(
          chainHttpUrls.map((url) => http(url, { timeout: stallTimeout })),
          { rank, retryCount, retryDelay }
        ),
        pollingInterval
      });
      return Object.assign(publicClient, {
        chains
      });
    },
    webSocketPublicClient: ({ chainId }) => {
      const activeChain = chains.find((x) => x.id === chainId) ?? defaultChains[0];
      const chainWsUrls = wsUrls[activeChain.id];
      if (!chainWsUrls || !chainWsUrls[0])
        return void 0;
      const publicClient = createPublicClient({
        batch,
        chain: activeChain,
        transport: fallback(
          chainWsUrls.map((url) => webSocket(url, { timeout: stallTimeout })),
          { rank, retryCount, retryDelay }
        ),
        pollingInterval
      });
      return Object.assign(publicClient, {
        chains
      });
    }
  };
}
var ChainMismatchError = class extends Error {
  constructor({
    activeChain,
    targetChain
  }) {
    super(
      `Chain mismatch: Expected "${targetChain}", received "${activeChain}".`
    );
    this.name = "ChainMismatchError";
  }
};
var ChainNotConfiguredError = class extends Error {
  constructor({
    chainId,
    connectorId
  }) {
    super(
      `Chain "${chainId}" not configured${connectorId ? ` for connector "${connectorId}"` : ""}.`
    );
    this.name = "ChainNotConfigured";
  }
};
var ConnectorAlreadyConnectedError = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "ConnectorAlreadyConnectedError";
    this.message = "Connector already connected";
  }
};
var ConfigChainsNotFound = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "ConfigChainsNotFound";
    this.message = "No chains were found on the wagmi config. Some functions that require a chain may not work.";
  }
};
var SwitchChainNotSupportedError = class extends Error {
  constructor({ connector }) {
    super(`"${connector.name}" does not support programmatic chain switching.`);
    this.name = "SwitchChainNotSupportedError";
  }
};
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length;
    let i;
    if (Array.isArray(a) && Array.isArray(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!deepEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key && !deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var findAndReplace = (cacheRef, {
  find,
  replace
}) => {
  if (cacheRef && find(cacheRef)) {
    return replace(cacheRef);
  }
  if (typeof cacheRef !== "object") {
    return cacheRef;
  }
  if (Array.isArray(cacheRef)) {
    return cacheRef.map((item) => findAndReplace(item, { find, replace }));
  }
  if (cacheRef instanceof Object) {
    return Object.entries(cacheRef).reduce(
      (curr, [key, value]) => ({
        ...curr,
        [key]: findAndReplace(value, { find, replace })
      }),
      {}
    );
  }
  return cacheRef;
};
function deserialize(cachedString) {
  const cache = JSON.parse(cachedString);
  const deserializedCacheWithBigInts = findAndReplace(cache, {
    find: (data) => typeof data === "string" && data.startsWith("#bigint."),
    replace: (data) => BigInt(data.replace("#bigint.", ""))
  });
  return deserializedCacheWithBigInts;
}
function getCallParameters(args) {
  return {
    accessList: args.accessList,
    account: args.account,
    blockNumber: args.blockNumber,
    blockTag: args.blockTag,
    data: args.data,
    gas: args.gas,
    gasPrice: args.gasPrice,
    maxFeePerGas: args.maxFeePerGas,
    maxPriorityFeePerGas: args.maxPriorityFeePerGas,
    nonce: args.nonce,
    to: args.to,
    value: args.value
  };
}
function getSendTransactionParameters(args) {
  return {
    accessList: args.accessList,
    account: args.account,
    data: args.data,
    gas: args.gas,
    gasPrice: args.gasPrice,
    maxFeePerGas: args.maxFeePerGas,
    maxPriorityFeePerGas: args.maxPriorityFeePerGas,
    nonce: args.nonce,
    to: args.to,
    value: args.value
  };
}
function getUnit(unit) {
  if (typeof unit === "number")
    return unit;
  if (unit === "wei")
    return 0;
  return Math.abs(weiUnits[unit]);
}
function getReferenceKey(keys, cutoff) {
  return keys.slice(0, cutoff).join(".") || ".";
}
function getCutoff(array, value) {
  const { length } = array;
  for (let index = 0; index < length; ++index) {
    if (array[index] === value) {
      return index + 1;
    }
  }
  return 0;
}
function createReplacer(replacer, circularReplacer) {
  const hasReplacer = typeof replacer === "function";
  const hasCircularReplacer = typeof circularReplacer === "function";
  const cache = [];
  const keys = [];
  return function replace(key, value) {
    if (typeof value === "object") {
      if (cache.length) {
        const thisCutoff = getCutoff(cache, this);
        if (thisCutoff === 0) {
          cache[cache.length] = this;
        } else {
          cache.splice(thisCutoff);
          keys.splice(thisCutoff);
        }
        keys[keys.length] = key;
        const valueCutoff = getCutoff(cache, value);
        if (valueCutoff !== 0) {
          return hasCircularReplacer ? circularReplacer.call(
            this,
            key,
            value,
            getReferenceKey(keys, valueCutoff)
          ) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
        }
      } else {
        cache[0] = value;
        keys[0] = key;
      }
    }
    return hasReplacer ? replacer.call(this, key, value) : value;
  };
}
function serialize(value, replacer, indent, circularReplacer) {
  return JSON.stringify(
    value,
    createReplacer((key, value_) => {
      const value2 = typeof value_ === "bigint" ? `#bigint.${value_.toString()}` : value_;
      return (replacer == null ? void 0 : replacer(key, value2)) || value2;
    }, circularReplacer),
    indent ?? void 0
  );
}
var noopStorage = {
  getItem: (_key) => "",
  setItem: (_key, _value) => null,
  removeItem: (_key) => null
};
function createStorage({
  deserialize: deserialize2 = deserialize,
  key: prefix = "wagmi",
  serialize: serialize2 = serialize,
  storage
}) {
  return {
    ...storage,
    getItem: (key, defaultState = null) => {
      const value = storage.getItem(`${prefix}.${key}`);
      try {
        return value ? deserialize2(value) : defaultState;
      } catch (error) {
        console.warn(error);
        return defaultState;
      }
    },
    setItem: (key, value) => {
      if (value === null) {
        storage.removeItem(`${prefix}.${key}`);
      } else {
        try {
          storage.setItem(`${prefix}.${key}`, serialize2(value));
        } catch (err) {
          console.error(err);
        }
      }
    },
    removeItem: (key) => storage.removeItem(`${prefix}.${key}`)
  };
}
var storeKey = "store";
var _isAutoConnecting;
var _lastUsedConnector;
var _addEffects;
var addEffects_fn;
var Config = class {
  constructor({
    autoConnect = false,
    connectors = [new InjectedConnector()],
    publicClient,
    storage = createStorage({
      storage: typeof window !== "undefined" ? window.localStorage : noopStorage
    }),
    logger = {
      warn: console.warn
    },
    webSocketPublicClient
  }) {
    var _a, _b;
    __privateAdd2(this, _addEffects);
    this.publicClients = /* @__PURE__ */ new Map();
    this.webSocketPublicClients = /* @__PURE__ */ new Map();
    __privateAdd2(this, _isAutoConnecting, void 0);
    __privateAdd2(this, _lastUsedConnector, void 0);
    this.args = {
      autoConnect,
      connectors,
      logger,
      publicClient,
      storage,
      webSocketPublicClient
    };
    let status = "disconnected";
    let chainId;
    if (autoConnect) {
      try {
        const rawState = storage.getItem(storeKey);
        const data = (_a = rawState == null ? void 0 : rawState.state) == null ? void 0 : _a.data;
        status = (data == null ? void 0 : data.account) ? "reconnecting" : "connecting";
        chainId = (_b = data == null ? void 0 : data.chain) == null ? void 0 : _b.id;
      } catch (_error) {
      }
    }
    const connectors_ = typeof connectors === "function" ? connectors() : connectors;
    connectors_.forEach((connector) => connector.setStorage(storage));
    this.store = createStore(
      subscribeWithSelector(
        persist(
          () => ({
            connectors: connectors_,
            publicClient: this.getPublicClient({ chainId }),
            status,
            webSocketPublicClient: this.getWebSocketPublicClient({ chainId })
          }),
          {
            name: storeKey,
            storage,
            partialize: (state) => {
              var _a2, _b2;
              return {
                ...autoConnect && {
                  data: {
                    account: (_a2 = state == null ? void 0 : state.data) == null ? void 0 : _a2.account,
                    chain: (_b2 = state == null ? void 0 : state.data) == null ? void 0 : _b2.chain
                  }
                },
                chains: state == null ? void 0 : state.chains
              };
            },
            version: 2
          }
        )
      )
    );
    this.storage = storage;
    __privateSet2(this, _lastUsedConnector, storage == null ? void 0 : storage.getItem("wallet"));
    __privateMethod2(this, _addEffects, addEffects_fn).call(this);
    if (autoConnect && typeof window !== "undefined")
      setTimeout(async () => await this.autoConnect(), 0);
  }
  get chains() {
    return this.store.getState().chains;
  }
  get connectors() {
    return this.store.getState().connectors;
  }
  get connector() {
    return this.store.getState().connector;
  }
  get data() {
    return this.store.getState().data;
  }
  get error() {
    return this.store.getState().error;
  }
  get lastUsedChainId() {
    var _a, _b;
    return (_b = (_a = this.data) == null ? void 0 : _a.chain) == null ? void 0 : _b.id;
  }
  get publicClient() {
    return this.store.getState().publicClient;
  }
  get status() {
    return this.store.getState().status;
  }
  get subscribe() {
    return this.store.subscribe;
  }
  get webSocketPublicClient() {
    return this.store.getState().webSocketPublicClient;
  }
  setState(updater) {
    const newState = typeof updater === "function" ? updater(this.store.getState()) : updater;
    this.store.setState(newState, true);
  }
  clearState() {
    this.setState((x) => ({
      ...x,
      chains: void 0,
      connector: void 0,
      data: void 0,
      error: void 0,
      status: "disconnected"
    }));
  }
  async destroy() {
    var _a, _b;
    if (this.connector)
      await ((_b = (_a = this.connector).disconnect) == null ? void 0 : _b.call(_a));
    __privateSet2(this, _isAutoConnecting, false);
    this.clearState();
    this.store.destroy();
  }
  async autoConnect() {
    if (__privateGet2(this, _isAutoConnecting))
      return;
    __privateSet2(this, _isAutoConnecting, true);
    this.setState((x) => {
      var _a;
      return {
        ...x,
        status: ((_a = x.data) == null ? void 0 : _a.account) ? "reconnecting" : "connecting"
      };
    });
    const sorted = __privateGet2(this, _lastUsedConnector) ? [...this.connectors].sort(
      (x) => x.id === __privateGet2(this, _lastUsedConnector) ? -1 : 1
    ) : this.connectors;
    let connected = false;
    for (const connector of sorted) {
      if (!connector.ready || !connector.isAuthorized)
        continue;
      const isAuthorized = await connector.isAuthorized();
      if (!isAuthorized)
        continue;
      const data = await connector.connect();
      this.setState((x) => ({
        ...x,
        connector,
        chains: connector == null ? void 0 : connector.chains,
        data,
        status: "connected"
      }));
      connected = true;
      break;
    }
    if (!connected)
      this.setState((x) => ({
        ...x,
        data: void 0,
        status: "disconnected"
      }));
    __privateSet2(this, _isAutoConnecting, false);
    return this.data;
  }
  setConnectors(connectors) {
    this.args = {
      ...this.args,
      connectors
    };
    const connectors_ = typeof connectors === "function" ? connectors() : connectors;
    connectors_.forEach((connector) => connector.setStorage(this.args.storage));
    this.setState((x) => ({
      ...x,
      connectors: connectors_
    }));
  }
  getPublicClient({ chainId } = {}) {
    let publicClient_ = this.publicClients.get(-1);
    if (publicClient_ && (publicClient_ == null ? void 0 : publicClient_.chain.id) === chainId)
      return publicClient_;
    publicClient_ = this.publicClients.get(chainId ?? -1);
    if (publicClient_)
      return publicClient_;
    const { publicClient } = this.args;
    publicClient_ = typeof publicClient === "function" ? publicClient({ chainId }) : publicClient;
    this.publicClients.set(chainId ?? -1, publicClient_);
    return publicClient_;
  }
  setPublicClient(publicClient) {
    var _a, _b;
    const chainId = (_b = (_a = this.data) == null ? void 0 : _a.chain) == null ? void 0 : _b.id;
    this.args = {
      ...this.args,
      publicClient
    };
    this.publicClients.clear();
    this.setState((x) => ({
      ...x,
      publicClient: this.getPublicClient({ chainId })
    }));
  }
  getWebSocketPublicClient({ chainId } = {}) {
    let webSocketPublicClient_ = this.webSocketPublicClients.get(-1);
    if (webSocketPublicClient_ && (webSocketPublicClient_ == null ? void 0 : webSocketPublicClient_.chain.id) === chainId)
      return webSocketPublicClient_;
    webSocketPublicClient_ = this.webSocketPublicClients.get(chainId ?? -1);
    if (webSocketPublicClient_)
      return webSocketPublicClient_;
    const { webSocketPublicClient } = this.args;
    webSocketPublicClient_ = typeof webSocketPublicClient === "function" ? webSocketPublicClient({ chainId }) : webSocketPublicClient;
    if (webSocketPublicClient_)
      this.webSocketPublicClients.set(chainId ?? -1, webSocketPublicClient_);
    return webSocketPublicClient_;
  }
  setWebSocketPublicClient(webSocketPublicClient) {
    var _a, _b;
    const chainId = (_b = (_a = this.data) == null ? void 0 : _a.chain) == null ? void 0 : _b.id;
    this.args = {
      ...this.args,
      webSocketPublicClient
    };
    this.webSocketPublicClients.clear();
    this.setState((x) => ({
      ...x,
      webSocketPublicClient: this.getWebSocketPublicClient({
        chainId
      })
    }));
  }
  setLastUsedConnector(lastUsedConnector = null) {
    var _a;
    (_a = this.storage) == null ? void 0 : _a.setItem("wallet", lastUsedConnector);
  }
};
_isAutoConnecting = /* @__PURE__ */ new WeakMap();
_lastUsedConnector = /* @__PURE__ */ new WeakMap();
_addEffects = /* @__PURE__ */ new WeakSet();
addEffects_fn = function() {
  const onChange = (data) => {
    this.setState((x) => ({
      ...x,
      data: { ...x.data, ...data }
    }));
  };
  const onDisconnect = () => {
    this.clearState();
  };
  const onError = (error) => {
    this.setState((x) => ({ ...x, error }));
  };
  this.store.subscribe(
    ({ connector }) => connector,
    (connector, prevConnector) => {
      var _a, _b, _c, _d, _e, _f;
      (_a = prevConnector == null ? void 0 : prevConnector.off) == null ? void 0 : _a.call(prevConnector, "change", onChange);
      (_b = prevConnector == null ? void 0 : prevConnector.off) == null ? void 0 : _b.call(prevConnector, "disconnect", onDisconnect);
      (_c = prevConnector == null ? void 0 : prevConnector.off) == null ? void 0 : _c.call(prevConnector, "error", onError);
      if (!connector)
        return;
      (_d = connector.on) == null ? void 0 : _d.call(connector, "change", onChange);
      (_e = connector.on) == null ? void 0 : _e.call(connector, "disconnect", onDisconnect);
      (_f = connector.on) == null ? void 0 : _f.call(connector, "error", onError);
    }
  );
  const { publicClient, webSocketPublicClient } = this.args;
  const subscribePublicClient = typeof publicClient === "function";
  const subscribeWebSocketPublicClient = typeof webSocketPublicClient === "function";
  if (subscribePublicClient || subscribeWebSocketPublicClient)
    this.store.subscribe(
      ({ data }) => {
        var _a;
        return (_a = data == null ? void 0 : data.chain) == null ? void 0 : _a.id;
      },
      (chainId) => {
        this.setState((x) => ({
          ...x,
          publicClient: this.getPublicClient({ chainId }),
          webSocketPublicClient: this.getWebSocketPublicClient({
            chainId
          })
        }));
      }
    );
};
var config;
function createConfig(args) {
  const config_ = new Config(args);
  config = config_;
  return config_;
}
function getConfig() {
  if (!config) {
    throw new Error(
      "No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config"
    );
  }
  return config;
}
async function connect({ chainId, connector }) {
  const config2 = getConfig();
  const activeConnector = config2.connector;
  if (activeConnector && connector.id === activeConnector.id)
    throw new ConnectorAlreadyConnectedError();
  try {
    config2.setState((x) => ({ ...x, status: "connecting" }));
    const data = await connector.connect({ chainId });
    config2.setLastUsedConnector(connector.id);
    config2.setState((x) => ({
      ...x,
      connector,
      chains: connector == null ? void 0 : connector.chains,
      data,
      status: "connected"
    }));
    config2.storage.setItem("connected", true);
    return { ...data, connector };
  } catch (err) {
    config2.setState((x) => {
      return {
        ...x,
        status: x.connector ? "connected" : "disconnected"
      };
    });
    throw err;
  }
}
async function disconnect() {
  const config2 = getConfig();
  if (config2.connector)
    await config2.connector.disconnect();
  config2.clearState();
  config2.storage.removeItem("connected");
}
var erc20ABI = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];
var erc20ABI_bytes32 = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "decimals",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ]
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  }
];
var erc721ABI = [
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256"
      }
    ]
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        name: "approved",
        type: "bool"
      }
    ]
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "payable",
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "getApproved",
    stateMutability: "view",
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "address"
      }
    ]
  },
  {
    type: "function",
    name: "isApprovedForAll",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "operator",
        type: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ]
  },
  {
    type: "function",
    name: "name",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "ownerOf",
    stateMutability: "view",
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "owner",
        type: "address"
      }
    ]
  },
  {
    type: "function",
    name: "safeTransferFrom",
    stateMutability: "payable",
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "safeTransferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "id",
        type: "uint256"
      },
      {
        name: "data",
        type: "bytes"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "setApprovalForAll",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "operator",
        type: "address"
      },
      {
        name: "approved",
        type: "bool"
      }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "symbol",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "tokenByIndex",
    stateMutability: "view",
    inputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "tokenByIndex",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "index",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "tokenURI",
    stateMutability: "view",
    inputs: [
      {
        name: "tokenId",
        type: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "string"
      }
    ]
  },
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ]
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "payable",
    inputs: [
      {
        name: "sender",
        type: "address"
      },
      {
        name: "recipient",
        type: "address"
      },
      {
        name: "tokeId",
        type: "uint256"
      }
    ],
    outputs: []
  }
];
var erc4626ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        name: "receiver",
        type: "address"
      },
      {
        indexed: true,
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      },
      {
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "spender",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        name: "assetTokenAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "caller",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "caller",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "shares",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        name: "totalManagedAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "to",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "from",
        type: "address"
      },
      {
        name: "to",
        type: "address"
      },
      {
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "assets",
        type: "uint256"
      },
      {
        name: "receiver",
        type: "address"
      },
      {
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
async function fetchToken({
  address,
  chainId,
  formatUnits: unit = 18
}) {
  async function fetchToken_({ abi }) {
    const erc20Config = { address, abi, chainId };
    const [decimals, name, symbol, totalSupply] = await readContracts({
      allowFailure: false,
      contracts: [
        { ...erc20Config, functionName: "decimals" },
        { ...erc20Config, functionName: "name" },
        { ...erc20Config, functionName: "symbol" },
        { ...erc20Config, functionName: "totalSupply" }
      ]
    });
    return {
      address,
      decimals,
      name,
      symbol,
      totalSupply: {
        formatted: formatUnits(totalSupply, getUnit(unit)),
        value: totalSupply
      }
    };
  }
  try {
    return await fetchToken_({ abi: erc20ABI });
  } catch (err) {
    if (err instanceof ContractFunctionExecutionError) {
      const { name, symbol, ...rest } = await fetchToken_({
        abi: erc20ABI_bytes32
      });
      return {
        name: hexToString(trim(name, { dir: "right" })),
        symbol: hexToString(trim(symbol, { dir: "right" })),
        ...rest
      };
    }
    throw err;
  }
}
function getPublicClient({ chainId } = {}) {
  const config2 = getConfig();
  if (chainId)
    return config2.getPublicClient({ chainId }) || config2.publicClient;
  return config2.publicClient;
}
async function getWalletClient({
  chainId
} = {}) {
  var _a, _b;
  const config2 = getConfig();
  const walletClient = await ((_b = (_a = config2.connector) == null ? void 0 : _a.getWalletClient) == null ? void 0 : _b.call(_a, { chainId })) || null;
  return walletClient;
}
function getWebSocketPublicClient({
  chainId
} = {}) {
  const config2 = getConfig();
  if (chainId)
    return config2.getWebSocketPublicClient({ chainId }) || config2.webSocketPublicClient;
  return config2.webSocketPublicClient;
}
function watchPublicClient(args, callback) {
  const config2 = getConfig();
  const handleChange = async () => callback(getPublicClient(args));
  const unsubscribe = config2.subscribe(
    ({ publicClient }) => publicClient,
    handleChange
  );
  return unsubscribe;
}
function watchWalletClient({ chainId }, callback) {
  const config2 = getConfig();
  const handleChange = async ({ chainId: chainId_ }) => {
    if (chainId && chainId_ && chainId !== chainId_)
      return;
    const walletClient = await getWalletClient({ chainId });
    if (!getConfig().connector)
      return callback(null);
    return callback(walletClient);
  };
  const unsubscribe = config2.subscribe(
    ({ data, connector }) => {
      var _a;
      return {
        account: data == null ? void 0 : data.account,
        chainId: (_a = data == null ? void 0 : data.chain) == null ? void 0 : _a.id,
        connector
      };
    },
    handleChange,
    {
      equalityFn: shallow$1
    }
  );
  return unsubscribe;
}
function watchWebSocketPublicClient(args, callback) {
  const config2 = getConfig();
  const handleChange = async () => callback(getWebSocketPublicClient(args));
  const unsubscribe = config2.subscribe(
    ({ webSocketPublicClient }) => webSocketPublicClient,
    handleChange
  );
  return unsubscribe;
}
async function prepareWriteContract({
  abi,
  address,
  args,
  chainId,
  dataSuffix,
  functionName,
  walletClient: walletClient_,
  ...config2
}) {
  const publicClient = getPublicClient({ chainId });
  const walletClient = walletClient_ ?? await getWalletClient({ chainId });
  if (!walletClient)
    throw new ConnectorNotFoundError();
  if (chainId)
    assertActiveChain({ chainId });
  const {
    account,
    accessList,
    blockNumber,
    blockTag,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    value
  } = getCallParameters(config2);
  const { result, request } = await publicClient.simulateContract({
    abi,
    address,
    functionName,
    args,
    account: account || walletClient.account,
    accessList,
    blockNumber,
    blockTag,
    dataSuffix,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    value
  });
  const minimizedAbi = abi.filter(
    (abiItem) => "name" in abiItem && abiItem.name === functionName
  );
  return {
    mode: "prepared",
    request: {
      ...request,
      abi: minimizedAbi,
      chainId
    },
    result
  };
}
async function multicall({
  chainId,
  contracts,
  blockNumber,
  blockTag,
  ...args
}) {
  const publicClient = getPublicClient({ chainId });
  if (!publicClient.chains)
    throw new ConfigChainsNotFound();
  if (chainId && publicClient.chain.id !== chainId)
    throw new ChainNotConfiguredError({ chainId });
  return publicClient.multicall({
    allowFailure: args.allowFailure ?? true,
    blockNumber,
    blockTag,
    contracts
  });
}
async function readContract({
  address,
  account,
  chainId,
  abi,
  args,
  functionName,
  blockNumber,
  blockTag
}) {
  const publicClient = getPublicClient({ chainId });
  return publicClient.readContract({
    abi,
    address,
    account,
    functionName,
    args,
    blockNumber,
    blockTag
  });
}
async function readContracts({
  contracts,
  blockNumber,
  blockTag,
  ...args
}) {
  const { allowFailure = true } = args;
  try {
    const publicClient = getPublicClient();
    const contractsByChainId = contracts.reduce((contracts2, contract, index) => {
      const chainId = contract.chainId ?? publicClient.chain.id;
      return {
        ...contracts2,
        [chainId]: [...contracts2[chainId] || [], { contract, index }]
      };
    }, {});
    const promises = () => Object.entries(contractsByChainId).map(
      ([chainId, contracts2]) => multicall({
        allowFailure,
        chainId: parseInt(chainId),
        contracts: contracts2.map(
          ({ contract }) => contract
        ),
        blockNumber,
        blockTag
      })
    );
    const multicallResults = (await Promise.all(promises())).flat();
    const resultIndexes = Object.values(contractsByChainId).flatMap(
      (contracts2) => contracts2.map(({ index }) => index)
    );
    return multicallResults.reduce((results, result, index) => {
      if (results)
        results[resultIndexes[index]] = result;
      return results;
    }, []);
  } catch (err) {
    if (err instanceof ContractFunctionExecutionError)
      throw err;
    const promises = () => contracts.map(
      (contract) => readContract({ ...contract, blockNumber, blockTag })
    );
    if (allowFailure)
      return (await Promise.allSettled(promises())).map((result) => {
        if (result.status === "fulfilled")
          return { result: result.value, status: "success" };
        return { error: result.reason, result: void 0, status: "failure" };
      });
    return await Promise.all(promises());
  }
}
async function writeContract(config2) {
  const walletClient = await getWalletClient({ chainId: config2.chainId });
  if (!walletClient)
    throw new ConnectorNotFoundError();
  if (config2.chainId)
    assertActiveChain({ chainId: config2.chainId });
  let request;
  if (config2.mode === "prepared") {
    request = config2.request;
  } else {
    const { chainId: _, mode: __, ...args } = config2;
    const res = await prepareWriteContract(args);
    request = res.request;
  }
  const hash = await walletClient.writeContract({
    ...request,
    chain: config2.chainId ? { id: config2.chainId } : null
  });
  return { hash };
}
async function fetchBalance({
  address,
  chainId,
  formatUnits: unit,
  token
}) {
  const config2 = getConfig();
  const publicClient = getPublicClient({ chainId });
  if (token) {
    const fetchContractBalance = async ({ abi }) => {
      const erc20Config = { abi, address: token, chainId };
      const [value2, decimals, symbol] = await readContracts({
        allowFailure: false,
        contracts: [
          {
            ...erc20Config,
            functionName: "balanceOf",
            args: [address]
          },
          { ...erc20Config, functionName: "decimals" },
          { ...erc20Config, functionName: "symbol" }
        ]
      });
      return {
        decimals,
        formatted: formatUnits(value2 ?? "0", getUnit(unit ?? decimals)),
        symbol,
        value: value2
      };
    };
    try {
      return await fetchContractBalance({ abi: erc20ABI });
    } catch (err) {
      if (err instanceof ContractFunctionExecutionError) {
        const { symbol, ...rest } = await fetchContractBalance({
          abi: erc20ABI_bytes32
        });
        return {
          symbol: hexToString(trim(symbol, { dir: "right" })),
          ...rest
        };
      }
      throw err;
    }
  }
  const chains = [
    ...config2.publicClient.chains || [],
    ...config2.chains ?? []
  ];
  const value = await publicClient.getBalance({ address });
  const chain = chains.find((x) => x.id === publicClient.chain.id);
  return {
    decimals: (chain == null ? void 0 : chain.nativeCurrency.decimals) ?? 18,
    formatted: formatUnits(value ?? "0", getUnit(unit ?? 18)),
    symbol: (chain == null ? void 0 : chain.nativeCurrency.symbol) ?? "ETH",
    value
  };
}
function getAccount() {
  const { data, connector, status } = getConfig();
  switch (status) {
    case "connected":
      return {
        address: data == null ? void 0 : data.account,
        connector,
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "reconnecting":
      return {
        address: data == null ? void 0 : data.account,
        connector,
        isConnected: !!(data == null ? void 0 : data.account),
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: true,
        status
      };
    case "connecting":
      return {
        address: data == null ? void 0 : data.account,
        connector,
        isConnected: false,
        isConnecting: true,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "disconnected":
      return {
        address: void 0,
        connector: void 0,
        isConnected: false,
        isConnecting: false,
        isDisconnected: true,
        isReconnecting: false,
        status
      };
  }
}
function getNetwork() {
  var _a, _b, _c, _d;
  const config2 = getConfig();
  const chainId = (_b = (_a = config2.data) == null ? void 0 : _a.chain) == null ? void 0 : _b.id;
  const activeChains = config2.chains ?? [];
  const activeChain = [
    ...((_c = config2.publicClient) == null ? void 0 : _c.chains) || [],
    ...activeChains
  ].find((x) => x.id === chainId) ?? {
    id: chainId,
    name: `Chain ${chainId}`,
    network: `${chainId}`,
    nativeCurrency: { name: "Ether", decimals: 18, symbol: "ETH" },
    rpcUrls: {
      default: { http: [""] },
      public: { http: [""] }
    }
  };
  return {
    chain: chainId ? {
      ...activeChain,
      ...(_d = config2.data) == null ? void 0 : _d.chain,
      id: chainId
    } : void 0,
    chains: activeChains
  };
}
async function signMessage(args) {
  const walletClient = await getWalletClient();
  if (!walletClient)
    throw new ConnectorNotFoundError();
  return await walletClient.signMessage({
    message: args.message
  });
}
async function signTypedData({
  domain,
  message,
  primaryType,
  types
}) {
  const walletClient = await getWalletClient();
  if (!walletClient)
    throw new ConnectorNotFoundError();
  const { chainId } = domain;
  if (chainId)
    assertActiveChain({ chainId });
  return walletClient.signTypedData({
    message,
    primaryType,
    types,
    domain
  });
}
async function switchNetwork({
  chainId
}) {
  const { connector } = getConfig();
  if (!connector)
    throw new ConnectorNotFoundError();
  if (!connector.switchChain)
    throw new SwitchChainNotSupportedError({
      connector
    });
  return connector.switchChain(chainId);
}
function watchAccount(callback, { selector = (x) => x } = {}) {
  const config2 = getConfig();
  const handleChange = () => callback(getAccount());
  const unsubscribe = config2.subscribe(
    ({ data, connector, status }) => selector({
      address: data == null ? void 0 : data.account,
      connector,
      status
    }),
    handleChange,
    {
      equalityFn: shallow$1
    }
  );
  return unsubscribe;
}
function watchNetwork(callback, { selector = (x) => x } = {}) {
  const config2 = getConfig();
  const handleChange = () => callback(getNetwork());
  const unsubscribe = config2.subscribe(
    ({ data, chains }) => {
      var _a;
      return selector({ chainId: (_a = data == null ? void 0 : data.chain) == null ? void 0 : _a.id, chains });
    },
    handleChange,
    {
      equalityFn: shallow$1
    }
  );
  return unsubscribe;
}
async function fetchEnsAddress({
  chainId,
  name
}) {
  const { normalize } = await import("./ens-OISMTA4G.js");
  const publicClient = getPublicClient({ chainId });
  const address = await publicClient.getEnsAddress({
    name: normalize(name)
  });
  try {
    if (address === "0x0000000000000000000000000000000000000000")
      return null;
    return address ? getAddress(address) : null;
  } catch (_error) {
    return null;
  }
}
async function fetchEnsAvatar({
  name,
  chainId
}) {
  const { normalize } = await import("./ens-OISMTA4G.js");
  const publicClient = getPublicClient({ chainId });
  const avatar = await publicClient.getEnsAvatar({ name: normalize(name) });
  return avatar;
}
async function fetchEnsName({
  address,
  chainId
}) {
  const publicClient = getPublicClient({ chainId });
  return publicClient.getEnsName({
    address: getAddress(address)
  });
}
async function fetchEnsResolver({
  chainId,
  name
}) {
  const { normalize } = await import("./ens-OISMTA4G.js");
  const publicClient = getPublicClient({ chainId });
  const resolver = await publicClient.getEnsResolver({ name: normalize(name) });
  return resolver;
}
async function fetchBlockNumber({
  chainId
} = {}) {
  const publicClient = getPublicClient({ chainId });
  const blockNumber = await publicClient.getBlockNumber();
  return blockNumber;
}
async function fetchFeeData({
  chainId,
  formatUnits: units = "gwei"
} = {}) {
  const publicClient = getPublicClient({ chainId });
  const block = await publicClient.getBlock();
  let gasPrice = null;
  try {
    gasPrice = await publicClient.getGasPrice();
  } catch {
  }
  let lastBaseFeePerGas = null;
  let maxFeePerGas = null;
  let maxPriorityFeePerGas = null;
  if (block == null ? void 0 : block.baseFeePerGas) {
    lastBaseFeePerGas = block.baseFeePerGas;
    maxPriorityFeePerGas = parseGwei("1");
    maxFeePerGas = block.baseFeePerGas * 2n + maxPriorityFeePerGas;
  }
  const unit = getUnit(units);
  const formatted = {
    gasPrice: gasPrice ? formatUnits(gasPrice, unit) : null,
    maxFeePerGas: maxFeePerGas ? formatUnits(maxFeePerGas, unit) : null,
    maxPriorityFeePerGas: maxPriorityFeePerGas ? formatUnits(maxPriorityFeePerGas, unit) : null
  };
  return {
    lastBaseFeePerGas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    formatted
  };
}
async function fetchTransaction({
  chainId,
  hash
}) {
  const publicClient = getPublicClient({ chainId });
  return publicClient.getTransaction({ hash });
}
async function prepareSendTransaction({
  accessList,
  account,
  chainId,
  data,
  gas: gas_,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  nonce,
  to: to_,
  value,
  walletClient: walletClient_
}) {
  const publicClient = getPublicClient({ chainId });
  const walletClient = walletClient_ ?? await getWalletClient({ chainId });
  if (!walletClient)
    throw new ConnectorNotFoundError();
  if (chainId)
    assertActiveChain({ chainId });
  const to = (to_ && !isAddress(to_) ? await fetchEnsAddress({ name: to_ }) : to_) || void 0;
  if (to && !isAddress(to))
    throw new Error("Invalid address");
  const gas = typeof gas_ === "undefined" ? await publicClient.estimateGas({
    accessList,
    account: walletClient.account,
    data,
    gas: gas_ ?? void 0,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    to,
    value
  }) : gas_ || void 0;
  return {
    accessList,
    account,
    data,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    mode: "prepared",
    nonce,
    to,
    value,
    ...chainId ? { chainId } : {}
  };
}
async function sendTransaction({
  accessList,
  account,
  chainId,
  data,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  mode,
  nonce,
  to,
  value
}) {
  const walletClient = await getWalletClient({ chainId });
  if (!walletClient)
    throw new ConnectorNotFoundError();
  if (chainId)
    assertActiveChain({ chainId });
  let args;
  if (mode === "prepared") {
    args = {
      account,
      accessList,
      chain: null,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    };
  } else {
    args = await prepareSendTransaction({
      accessList,
      account,
      chainId,
      data,
      gas: gas || null,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    });
  }
  const hash = await walletClient.sendTransaction({
    ...args,
    chain: chainId ? { id: chainId } : null
  });
  return { hash };
}
async function waitForTransaction({
  chainId,
  confirmations = 1,
  hash,
  onReplaced,
  timeout = 0
}) {
  const publicClient = getPublicClient({ chainId });
  const receipt = await publicClient.waitForTransactionReceipt({
    hash,
    confirmations,
    onReplaced,
    timeout
  });
  if (receipt.status === "reverted") {
    const txn = await publicClient.getTransaction({
      hash: receipt.transactionHash
    });
    const code = await publicClient.call({
      ...txn,
      gasPrice: txn.type !== "eip1559" ? txn.gasPrice : void 0,
      maxFeePerGas: txn.type === "eip1559" ? txn.maxFeePerGas : void 0,
      maxPriorityFeePerGas: txn.type === "eip1559" ? txn.maxPriorityFeePerGas : void 0
    });
    const reason = hexToString(`0x${code.substring(138)}`);
    throw new Error(reason);
  }
  return receipt;
}
function assertActiveChain({ chainId }) {
  var _a, _b;
  const { chain: activeChain, chains } = getNetwork();
  const activeChainId = activeChain == null ? void 0 : activeChain.id;
  if (activeChainId && chainId !== activeChainId) {
    throw new ChainMismatchError({
      activeChain: ((_a = chains.find((x) => x.id === activeChainId)) == null ? void 0 : _a.name) ?? `Chain ${activeChainId}`,
      targetChain: ((_b = chains.find((x) => x.id === chainId)) == null ? void 0 : _b.name) ?? `Chain ${chainId}`
    });
  }
}

// node_modules/wagmi/dist/index.js
var React12 = __toESM(require_react());
var React92 = __toESM(require_react());
var React22 = __toESM(require_react());
var pkg = __toESM(require_shim());
var import_with_selector = __toESM(require_with_selector());
var React32 = __toESM(require_react());
var import_with_selector2 = __toESM(require_with_selector());
var React42 = __toESM(require_react());
var React72 = __toESM(require_react());
var React52 = __toESM(require_react());
var React62 = __toESM(require_react());
var React82 = __toESM(require_react());
var import_with_selector3 = __toESM(require_with_selector());
var React102 = __toESM(require_react());
var React112 = __toESM(require_react());
var import_react = __toESM(require_react());
var React122 = __toESM(require_react());
var React13 = __toESM(require_react());
var React14 = __toESM(require_react());
var React15 = __toESM(require_react());
var React16 = __toESM(require_react());
var React17 = __toESM(require_react());
var React18 = __toESM(require_react());
var React19 = __toESM(require_react());
var React20 = __toESM(require_react());
var React21 = __toESM(require_react());
function createConfig2({
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1e3 * 60 * 60 * 24,
        networkMode: "offlineFirst",
        refetchOnWindowFocus: false,
        retry: 0
      },
      mutations: {
        networkMode: "offlineFirst"
      }
    }
  }),
  storage = createStorage({
    storage: typeof window !== "undefined" && window.localStorage ? window.localStorage : noopStorage
  }),
  persister = typeof window !== "undefined" ? createSyncStoragePersister({
    key: "cache",
    storage,
    serialize: (x) => x,
    deserialize: (x) => x
  }) : void 0,
  ...args
}) {
  const config2 = createConfig({
    ...args,
    storage
  });
  if (persister)
    persistQueryClient({
      queryClient,
      persister,
      dehydrateOptions: {
        shouldDehydrateQuery: (query) => query.cacheTime !== 0 && query.queryKey[0].persist !== false
      }
    });
  return Object.assign(config2, { queryClient });
}
var Context = React12.createContext(void 0);
var queryClientContext = React12.createContext(
  void 0
);
function WagmiConfig({
  children,
  config: config2
}) {
  return React12.createElement(Context.Provider, {
    children: React12.createElement(QueryClientProvider, {
      children,
      client: config2.queryClient,
      context: queryClientContext
    }),
    value: config2
  });
}
function useConfig() {
  const config2 = React12.useContext(Context);
  if (!config2)
    throw new Error(
      [
        "`useConfig` must be used within `WagmiConfig`.\n",
        "Read more: https://wagmi.sh/react/WagmiConfig"
      ].join("\n")
    );
  return config2;
}
var useSyncExternalStore22 = pkg.useSyncExternalStore;
function isQueryKey2(value) {
  return Array.isArray(value);
}
function isPlainObject2(o) {
  if (!hasObjectPrototype2(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype2(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype2(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function parseQueryArgs2(arg1, arg2, arg3) {
  if (!isQueryKey2(arg1)) {
    return arg1;
  }
  if (typeof arg2 === "function") {
    return { ...arg3, queryKey: arg1, queryFn: arg2 };
  }
  return { ...arg2, queryKey: arg1 };
}
function queryKeyHashFn(queryKey17) {
  return JSON.stringify(
    queryKey17,
    (_, val) => isPlainObject2(val) ? Object.keys(val).sort().reduce((result, key) => {
      result[key] = val[key];
      return result;
    }, {}) : typeof val === "bigint" ? val.toString() : val
  );
}
function shouldThrowError2(_useErrorBoundary, params) {
  if (typeof _useErrorBoundary === "function") {
    return _useErrorBoundary(...params);
  }
  return !!_useErrorBoundary;
}
function trackResult(result, observer) {
  const trackedResult = {};
  Object.keys(result).forEach((key) => {
    Object.defineProperty(trackedResult, key, {
      configurable: false,
      enumerable: true,
      get: () => {
        observer.trackedProps.add(key);
        return result[key];
      }
    });
  });
  return trackedResult;
}
function useBaseQuery2(options, Observer) {
  const queryClient = useQueryClient({ context: options.context });
  const isRestoring = useIsRestoring();
  const errorResetBoundary = useQueryErrorResetBoundary();
  const defaultedOptions = queryClient.defaultQueryOptions({
    ...options,
    queryKeyHashFn
  });
  defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
  if (defaultedOptions.onError) {
    defaultedOptions.onError = notifyManager.batchCalls(
      defaultedOptions.onError
    );
  }
  if (defaultedOptions.onSuccess) {
    defaultedOptions.onSuccess = notifyManager.batchCalls(
      defaultedOptions.onSuccess
    );
  }
  if (defaultedOptions.onSettled) {
    defaultedOptions.onSettled = notifyManager.batchCalls(
      defaultedOptions.onSettled
    );
  }
  if (defaultedOptions.suspense) {
    if (typeof defaultedOptions.staleTime !== "number") {
      defaultedOptions.staleTime = 1e3;
    }
  }
  if (defaultedOptions.suspense || defaultedOptions.useErrorBoundary) {
    if (!errorResetBoundary.isReset()) {
      defaultedOptions.retryOnMount = false;
    }
  }
  const [observer] = React22.useState(
    () => new Observer(
      queryClient,
      defaultedOptions
    )
  );
  const result = observer.getOptimisticResult(defaultedOptions);
  useSyncExternalStore22(
    React22.useCallback(
      (onStoreChange) => isRestoring ? () => void 0 : observer.subscribe(notifyManager.batchCalls(onStoreChange)),
      [observer, isRestoring]
    ),
    () => observer.getCurrentResult(),
    () => observer.getCurrentResult()
  );
  React22.useEffect(() => {
    errorResetBoundary.clearReset();
  }, [errorResetBoundary]);
  React22.useEffect(() => {
    observer.setOptions(defaultedOptions, { listeners: false });
  }, [defaultedOptions, observer]);
  if (defaultedOptions.suspense && result.isLoading && result.isFetching && !isRestoring) {
    throw observer.fetchOptimistic(defaultedOptions).then(({ data }) => {
      var _a, _b;
      (_a = defaultedOptions.onSuccess) == null ? void 0 : _a.call(defaultedOptions, data);
      (_b = defaultedOptions.onSettled) == null ? void 0 : _b.call(defaultedOptions, data, null);
    }).catch((error) => {
      var _a, _b;
      errorResetBoundary.clearReset();
      (_a = defaultedOptions.onError) == null ? void 0 : _a.call(defaultedOptions, error);
      (_b = defaultedOptions.onSettled) == null ? void 0 : _b.call(defaultedOptions, void 0, error);
    });
  }
  if (result.isError && !errorResetBoundary.isReset() && !result.isFetching && shouldThrowError2(defaultedOptions.useErrorBoundary, [
    result.error,
    observer.getCurrentQuery()
  ])) {
    throw result.error;
  }
  const status = result.status === "loading" && result.fetchStatus === "idle" ? "idle" : result.status;
  const isIdle = status === "idle";
  const isLoading = status === "loading" && result.fetchStatus === "fetching";
  return {
    ...result,
    defaultedOptions,
    isIdle,
    isLoading,
    observer,
    status
  };
}
function useInfiniteQuery2(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs2(arg1, arg2, arg3);
  const baseQuery = useBaseQuery2(
    { context: queryClientContext, ...parsedOptions },
    InfiniteQueryObserver
  );
  const result = {
    data: baseQuery.data,
    error: baseQuery.error,
    fetchNextPage: baseQuery.fetchNextPage,
    fetchStatus: baseQuery.fetchStatus,
    hasNextPage: baseQuery.hasNextPage,
    isError: baseQuery.isError,
    isFetched: baseQuery.isFetched,
    isFetchedAfterMount: baseQuery.isFetchedAfterMount,
    isFetching: baseQuery.isFetching,
    isFetchingNextPage: baseQuery.isFetchingNextPage,
    isIdle: baseQuery.isIdle,
    isLoading: baseQuery.isLoading,
    isRefetching: baseQuery.isRefetching,
    isSuccess: baseQuery.isSuccess,
    refetch: baseQuery.refetch,
    status: baseQuery.status,
    internal: {
      dataUpdatedAt: baseQuery.dataUpdatedAt,
      errorUpdatedAt: baseQuery.errorUpdatedAt,
      failureCount: baseQuery.failureCount,
      isFetchedAfterMount: baseQuery.isFetchedAfterMount,
      isLoadingError: baseQuery.isLoadingError,
      isPaused: baseQuery.isPaused,
      isPlaceholderData: baseQuery.isPlaceholderData,
      isPreviousData: baseQuery.isPreviousData,
      isRefetchError: baseQuery.isRefetchError,
      isStale: baseQuery.isStale,
      remove: baseQuery.remove
    }
  };
  return !baseQuery.defaultedOptions.notifyOnChangeProps ? trackResult(result, baseQuery.observer) : result;
}
function useMutation2(arg1, arg2, arg3) {
  const options = parseMutationArgs(arg1, arg2, arg3);
  return useMutation({ context: queryClientContext, ...options });
}
function useQuery2(arg1, arg2, arg3) {
  const parsedOptions = parseQueryArgs2(arg1, arg2, arg3);
  const baseQuery = useBaseQuery2({ context: queryClientContext, ...parsedOptions }, QueryObserver);
  const result = {
    data: baseQuery.data,
    error: baseQuery.error,
    fetchStatus: baseQuery.fetchStatus,
    isError: baseQuery.isError,
    isFetched: baseQuery.isFetched,
    isFetchedAfterMount: baseQuery.isFetchedAfterMount,
    isFetching: baseQuery.isFetching,
    isIdle: baseQuery.isIdle,
    isLoading: baseQuery.isLoading,
    isRefetching: baseQuery.isRefetching,
    isSuccess: baseQuery.isSuccess,
    refetch: baseQuery.refetch,
    status: baseQuery.status,
    internal: {
      dataUpdatedAt: baseQuery.dataUpdatedAt,
      errorUpdatedAt: baseQuery.errorUpdatedAt,
      failureCount: baseQuery.failureCount,
      isFetchedAfterMount: baseQuery.isFetchedAfterMount,
      isLoadingError: baseQuery.isLoadingError,
      isPaused: baseQuery.isPaused,
      isPlaceholderData: baseQuery.isPlaceholderData,
      isPreviousData: baseQuery.isPreviousData,
      isRefetchError: baseQuery.isRefetchError,
      isStale: baseQuery.isStale,
      remove: baseQuery.remove
    }
  };
  return !baseQuery.defaultedOptions.notifyOnChangeProps ? trackResult(result, baseQuery.observer) : result;
}
var useQueryClient2 = () => useQueryClient({ context: queryClientContext });
function usePublicClient({
  chainId
} = {}) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(
    (cb) => watchPublicClient({ chainId }, cb),
    () => getPublicClient({ chainId }),
    () => getPublicClient({ chainId }),
    (x) => x,
    (a, b) => a.uid === b.uid
  );
}
function queryKey({ chainId }) {
  return [{ entity: "walletClient", chainId, persist: false }];
}
function queryFn({
  queryKey: [{ chainId }]
}) {
  return getWalletClient({ chainId });
}
function useWalletClient({
  chainId: chainId_,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const { connector } = useAccount();
  const chainId = useChainId({ chainId: chainId_ });
  const walletClientQuery = useQuery2(queryKey({ chainId }), queryFn, {
    cacheTime: 0,
    enabled: Boolean(connector),
    staleTime: Infinity,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
  const queryClient = useQueryClient2();
  React32.useEffect(() => {
    const unwatch = watchWalletClient({ chainId }, (walletClient) => {
      if (walletClient)
        queryClient.invalidateQueries(queryKey({ chainId }));
      else
        queryClient.removeQueries(queryKey({ chainId }));
    });
    return unwatch;
  }, [queryClient, chainId]);
  return walletClientQuery;
}
function useWebSocketPublicClient({ chainId } = {}) {
  return (0, import_with_selector2.useSyncExternalStoreWithSelector)(
    (cb) => watchWebSocketPublicClient({ chainId }, cb),
    () => getWebSocketPublicClient({ chainId }),
    () => getWebSocketPublicClient({ chainId }),
    (x) => x,
    (a, b) => (a == null ? void 0 : a.uid) === (b == null ? void 0 : b.uid)
  );
}
function useChainId({ chainId } = {}) {
  const publicClient = usePublicClient({ chainId });
  return publicClient.chain.id;
}
function useForceUpdate() {
  const [, forceUpdate] = React42.useReducer((x) => x + 1, 0);
  return forceUpdate;
}
function queryKey2({ chainId, scopeKey }) {
  return [{ entity: "blockNumber", chainId, scopeKey }];
}
function queryFn2({
  queryKey: [{ chainId }]
}) {
  return fetchBlockNumber({ chainId });
}
function useBlockNumber({
  cacheTime = 0,
  chainId: chainId_,
  enabled = true,
  scopeKey,
  staleTime,
  suspense,
  watch = false,
  onBlock,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const publicClient = usePublicClient({ chainId });
  const webSocketPublicClient = useWebSocketPublicClient({ chainId });
  const queryClient = useQueryClient2();
  React52.useEffect(() => {
    if (!enabled)
      return;
    if (!watch && !onBlock)
      return;
    const publicClient_ = webSocketPublicClient ?? publicClient;
    const unwatch = publicClient_.watchBlockNumber({
      onBlockNumber: (blockNumber) => {
        if (watch)
          queryClient.setQueryData(queryKey2({ chainId, scopeKey }), blockNumber);
        if (onBlock)
          onBlock(blockNumber);
      },
      emitOnBegin: true
    });
    return unwatch;
  }, [
    chainId,
    scopeKey,
    onBlock,
    publicClient,
    queryClient,
    watch,
    webSocketPublicClient,
    enabled
  ]);
  return useQuery2(queryKey2({ scopeKey, chainId }), queryFn2, {
    cacheTime,
    enabled,
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function queryKey3({
  chainId,
  formatUnits: formatUnits2,
  scopeKey
}) {
  return [{ entity: "feeData", chainId, formatUnits: formatUnits2, scopeKey }];
}
function queryFn3({
  queryKey: [{ chainId, formatUnits: formatUnits2 }]
}) {
  return fetchFeeData({ chainId, formatUnits: formatUnits2 });
}
function useFeeData({
  cacheTime,
  chainId: chainId_,
  enabled = true,
  formatUnits: formatUnits2 = "gwei",
  scopeKey,
  staleTime,
  suspense,
  watch,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const queryKey_ = React62.useMemo(
    () => queryKey3({
      chainId,
      formatUnits: formatUnits2,
      scopeKey
    }),
    [chainId, formatUnits2, scopeKey]
  );
  const feeDataQuery = useQuery2(queryKey_, queryFn3, {
    cacheTime,
    enabled,
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
  useInvalidateOnBlock({
    chainId,
    enabled: Boolean(enabled && watch),
    queryKey: queryKey_
  });
  return feeDataQuery;
}
function useInvalidateOnBlock({
  chainId,
  enabled,
  queryKey: queryKey17
}) {
  const queryClient = useQueryClient2();
  const onBlock = React72.useCallback(
    () => queryClient.invalidateQueries({ queryKey: queryKey17 }, { cancelRefetch: false }),
    [queryClient, queryKey17]
  );
  useBlockNumber({
    chainId,
    enabled,
    onBlock: enabled ? onBlock : void 0,
    scopeKey: enabled ? void 0 : "idle"
  });
}
var isPlainObject22 = (obj) => typeof obj === "object" && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual = deepEqual) {
  const trackedKeys = React82.useRef([]);
  const result = (0, import_with_selector3.useSyncExternalStoreWithSelector)(
    subscribe,
    getSnapshot,
    getServerSnapshot,
    (x) => x,
    (a, b) => {
      if (isPlainObject22(a) && isPlainObject22(b) && trackedKeys.current.length) {
        for (const key of trackedKeys.current) {
          const equal = isEqual(
            a[key],
            b[key]
          );
          if (!equal)
            return false;
        }
        return true;
      }
      return isEqual(a, b);
    }
  );
  if (isPlainObject22(result)) {
    const trackedResult = { ...result };
    Object.defineProperties(
      trackedResult,
      Object.entries(trackedResult).reduce(
        (res, [key, value]) => {
          return {
            ...res,
            [key]: {
              configurable: false,
              enumerable: true,
              get: () => {
                if (!trackedKeys.current.includes(key)) {
                  trackedKeys.current.push(key);
                }
                return value;
              }
            }
          };
        },
        {}
      )
    );
    return trackedResult;
  }
  return result;
}
function useAccount({ onConnect, onDisconnect } = {}) {
  const config2 = useConfig();
  const watchAccount_ = React92.useCallback(
    (callback) => watchAccount(callback),
    [config2]
  );
  const account = useSyncExternalStoreWithTracked(watchAccount_, getAccount);
  const previousAccountRef = React92.useRef();
  const previousAccount = previousAccountRef.current;
  React92.useEffect(() => {
    if ((previousAccount == null ? void 0 : previousAccount.status) !== "connected" && account.status === "connected") {
      onConnect == null ? void 0 : onConnect({
        address: account.address,
        connector: account.connector,
        isReconnected: (previousAccount == null ? void 0 : previousAccount.status) === "reconnecting" || (previousAccount == null ? void 0 : previousAccount.status) === void 0
      });
    }
    if ((previousAccount == null ? void 0 : previousAccount.status) === "connected" && account.status === "disconnected") {
      onDisconnect == null ? void 0 : onDisconnect();
    }
    previousAccountRef.current = account;
  }, [onConnect, onDisconnect, previousAccount, account]);
  return account;
}
function queryKey4({
  address,
  chainId,
  formatUnits: formatUnits2,
  scopeKey,
  token
}) {
  return [
    {
      entity: "balance",
      address,
      chainId,
      formatUnits: formatUnits2,
      scopeKey,
      token
    }
  ];
}
function queryFn4({
  queryKey: [{ address, chainId, formatUnits: formatUnits2, token }]
}) {
  if (!address)
    throw new Error("address is required");
  return fetchBalance({ address, chainId, formatUnits: formatUnits2, token });
}
function useBalance({
  address,
  cacheTime,
  chainId: chainId_,
  enabled = true,
  formatUnits: formatUnits2,
  scopeKey,
  staleTime,
  suspense,
  token,
  watch,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const queryKey_ = React102.useMemo(
    () => queryKey4({ address, chainId, formatUnits: formatUnits2, scopeKey, token }),
    [address, chainId, formatUnits2, scopeKey, token]
  );
  const balanceQuery = useQuery2(queryKey_, queryFn4, {
    cacheTime,
    enabled: Boolean(enabled && address),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
  useInvalidateOnBlock({
    chainId,
    enabled: Boolean(enabled && watch && address),
    queryKey: queryKey_
  });
  return balanceQuery;
}
var mutationKey = (args) => [{ entity: "connect", ...args }];
var mutationFn = (args) => {
  const { connector, chainId } = args;
  if (!connector)
    throw new Error("connector is required");
  return connect({ connector, chainId });
};
function useConnect({
  chainId,
  connector,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const config2 = useConfig();
  const {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation2(mutationKey({ connector, chainId }), mutationFn, {
    onError,
    onMutate,
    onSettled,
    onSuccess
  });
  const connect2 = React112.useCallback(
    (args) => {
      return mutate({
        chainId: (args == null ? void 0 : args.chainId) ?? chainId,
        connector: (args == null ? void 0 : args.connector) ?? connector
      });
    },
    [chainId, connector, mutate]
  );
  const connectAsync = React112.useCallback(
    (args) => {
      return mutateAsync({
        chainId: (args == null ? void 0 : args.chainId) ?? chainId,
        connector: (args == null ? void 0 : args.connector) ?? connector
      });
    },
    [chainId, connector, mutateAsync]
  );
  return {
    connect: connect2,
    connectAsync,
    connectors: config2.connectors,
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    pendingConnector: variables == null ? void 0 : variables.connector,
    reset,
    status,
    variables
  };
}
var mutationKey2 = [{ entity: "disconnect" }];
var mutationFn2 = () => disconnect();
function useDisconnect({
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    mutate: disconnect2,
    mutateAsync: disconnectAsync,
    reset,
    status
  } = useMutation2(mutationKey2, mutationFn2, {
    ...onError ? {
      onError(error2, _variables, context) {
        onError(error2, context);
      }
    } : {},
    onMutate,
    ...onSettled ? {
      onSettled(_data, error2, _variables, context) {
        onSettled(error2, context);
      }
    } : {},
    ...onSuccess ? {
      onSuccess(_data, _variables, context) {
        onSuccess(context);
      }
    } : {}
  });
  return {
    disconnect: disconnect2,
    disconnectAsync,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    status
  };
}
function useNetwork() {
  const config2 = useConfig();
  const watchNetwork_ = (0, import_react.useCallback)(
    (callback) => watchNetwork(callback),
    [config2]
  );
  return useSyncExternalStoreWithTracked(watchNetwork_, getNetwork);
}
var mutationKey3 = (args) => [{ entity: "signMessage", ...args }];
var mutationFn3 = (args) => {
  const { message } = args;
  if (!message)
    throw new Error("message is required");
  return signMessage({ message });
};
function useSignMessage({
  message,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation2(mutationKey3({ message }), mutationFn3, {
    onError,
    onMutate,
    onSettled,
    onSuccess
  });
  const signMessage2 = React122.useCallback(
    (args) => mutate(args || { message }),
    [message, mutate]
  );
  const signMessageAsync = React122.useCallback(
    (args) => mutateAsync(args || { message }),
    [message, mutateAsync]
  );
  return {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    signMessage: signMessage2,
    signMessageAsync,
    status,
    variables
  };
}
function mutationKey4({ domain, types, message, primaryType }) {
  return [
    { entity: "signTypedData", domain, types, message, primaryType }
  ];
}
function mutationFn4(args) {
  const { domain, types, primaryType, message } = args;
  if (!domain)
    throw new Error("domain is required");
  if (!types)
    throw new Error("types is required");
  if (!primaryType)
    throw new Error("primaryType is required");
  if (!message)
    throw new Error("message is required");
  return signTypedData({
    domain,
    message,
    primaryType,
    types
  });
}
function useSignTypedData({
  domain,
  types,
  message,
  primaryType,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation2(
    mutationKey4({
      domain,
      message,
      primaryType,
      types
    }),
    mutationFn4,
    {
      onError,
      onMutate,
      onSettled,
      onSuccess
    }
  );
  const signTypedData2 = React13.useCallback(
    (args) => mutate({
      domain: (args == null ? void 0 : args.domain) ?? domain,
      types: (args == null ? void 0 : args.types) ?? types,
      message: (args == null ? void 0 : args.message) ?? message,
      primaryType: (args == null ? void 0 : args.primaryType) ?? primaryType
    }),
    [domain, types, primaryType, message, mutate]
  );
  const signTypedDataAsync = React13.useCallback(
    (args) => mutateAsync({
      domain: (args == null ? void 0 : args.domain) ?? domain,
      types: (args == null ? void 0 : args.types) ?? types,
      message: (args == null ? void 0 : args.message) ?? message,
      primaryType: (args == null ? void 0 : args.primaryType) ?? primaryType
    }),
    [domain, types, primaryType, message, mutateAsync]
  );
  return {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    signTypedData: signTypedData2,
    signTypedDataAsync,
    status,
    variables
  };
}
var mutationKey5 = (args) => [{ entity: "switchNetwork", ...args }];
var mutationFn5 = (args) => {
  const { chainId } = args;
  if (!chainId)
    throw new Error("chainId is required");
  return switchNetwork({ chainId });
};
function useSwitchNetwork({
  chainId,
  throwForSwitchChainNotSupported,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  var _a;
  const config2 = useConfig();
  const forceUpdate = useForceUpdate();
  const {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation2(mutationKey5({ chainId }), mutationFn5, {
    onError,
    onMutate,
    onSettled,
    onSuccess
  });
  const switchNetwork_ = React14.useCallback(
    (chainId_) => mutate({ chainId: chainId_ ?? chainId }),
    [chainId, mutate]
  );
  const switchNetworkAsync_ = React14.useCallback(
    (chainId_) => mutateAsync({ chainId: chainId_ ?? chainId }),
    [chainId, mutateAsync]
  );
  React14.useEffect(() => {
    const unwatch = config2.subscribe(
      ({ chains, connector }) => ({
        chains,
        connector
      }),
      forceUpdate
    );
    return unwatch;
  }, [config2, forceUpdate]);
  let switchNetwork2;
  let switchNetworkAsync;
  const supportsSwitchChain = !!((_a = config2.connector) == null ? void 0 : _a.switchChain);
  if (throwForSwitchChainNotSupported || supportsSwitchChain) {
    switchNetwork2 = switchNetwork_;
    switchNetworkAsync = switchNetworkAsync_;
  }
  return {
    chains: config2.chains ?? [],
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    pendingChainId: variables == null ? void 0 : variables.chainId,
    reset,
    status,
    switchNetwork: switchNetwork2,
    switchNetworkAsync,
    variables
  };
}
function useContractEvent({
  address,
  chainId,
  abi,
  listener,
  eventName
} = {}) {
  const publicClient = usePublicClient({ chainId });
  const webSocketPublicClient = useWebSocketPublicClient({ chainId });
  const unwatch = React15.useRef();
  React15.useEffect(() => {
    if (!abi || !address || !eventName)
      return;
    const publicClient_ = webSocketPublicClient || publicClient;
    unwatch.current = publicClient_.watchContractEvent({
      abi,
      address,
      eventName,
      onLogs: listener
    });
    return unwatch.current;
  }, [abi, address, eventName, publicClient.uid, webSocketPublicClient == null ? void 0 : webSocketPublicClient.uid]);
  return unwatch.current;
}
function queryKey5({
  allowFailure,
  blockNumber,
  blockTag,
  cacheKey,
  scopeKey
}) {
  return [
    {
      entity: "readContractsInfinite",
      allowFailure,
      blockNumber,
      blockTag,
      cacheKey,
      scopeKey
    }
  ];
}
function queryFn5({
  contracts
}) {
  return ({
    queryKey: [{ allowFailure, blockNumber, blockTag }],
    pageParam
  }) => {
    return readContracts({
      allowFailure,
      blockNumber,
      blockTag,
      contracts: contracts(pageParam || void 0)
    });
  };
}
function useContractInfiniteReads({
  allowFailure,
  blockNumber,
  blockTag,
  cacheKey,
  cacheTime,
  contracts,
  enabled: enabled_ = true,
  getNextPageParam: getNextPageParam2,
  isDataEqual,
  keepPreviousData,
  onError,
  onSettled,
  onSuccess,
  scopeKey,
  select,
  staleTime,
  structuralSharing = (oldData, newData) => deepEqual(oldData, newData) ? oldData : replaceEqualDeep(oldData, newData),
  suspense
}) {
  const queryKey_ = React16.useMemo(
    () => queryKey5({ allowFailure, blockNumber, blockTag, cacheKey, scopeKey }),
    [allowFailure, blockNumber, blockTag, cacheKey, scopeKey]
  );
  const enabled = React16.useMemo(() => {
    const enabled2 = Boolean(enabled_ && contracts);
    return enabled2;
  }, [contracts, enabled_]);
  return useInfiniteQuery2(queryKey_, queryFn5({ contracts }), {
    cacheTime,
    enabled,
    getNextPageParam: getNextPageParam2,
    isDataEqual,
    keepPreviousData,
    select,
    staleTime,
    structuralSharing,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function paginatedIndexesConfig(fn, {
  perPage,
  start,
  direction
}) {
  const contracts = (page = 0) => [...Array(perPage).keys()].map((index) => {
    return direction === "increment" ? start + index + page * perPage : start - index - page * perPage;
  }).filter((index) => index >= 0).flatMap(fn);
  return {
    contracts,
    getNextPageParam(lastPage, pages) {
      return (lastPage == null ? void 0 : lastPage.length) === perPage ? pages.length : void 0;
    }
  };
}
function queryKey6({
  account,
  address,
  args,
  blockNumber,
  blockTag,
  chainId,
  functionName,
  scopeKey
}) {
  return [
    {
      entity: "readContract",
      account,
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      functionName,
      scopeKey
    }
  ];
}
function queryFn6({ abi }) {
  return async ({
    queryKey: [
      { account, address, args, blockNumber, blockTag, chainId, functionName }
    ]
  }) => {
    if (!abi)
      throw new Error("abi is required");
    if (!address)
      throw new Error("address is required");
    return await readContract({
      account,
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      abi,
      functionName
    }) ?? null;
  };
}
function useContractRead({
  abi,
  address,
  account,
  args,
  blockNumber: blockNumberOverride,
  blockTag,
  cacheOnBlock = false,
  cacheTime,
  chainId: chainId_,
  enabled: enabled_ = true,
  functionName,
  isDataEqual,
  keepPreviousData,
  onError,
  onSettled,
  onSuccess,
  scopeKey,
  select,
  staleTime,
  structuralSharing = (oldData, newData) => deepEqual(oldData, newData) ? oldData : replaceEqualDeep(oldData, newData),
  suspense,
  watch
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  const { data: blockNumber_ } = useBlockNumber({
    chainId,
    enabled: watch || cacheOnBlock,
    scopeKey: watch || cacheOnBlock ? void 0 : "idle",
    watch
  });
  const blockNumber = blockNumberOverride ?? blockNumber_;
  const queryKey_ = React17.useMemo(
    () => queryKey6({
      account,
      address,
      args,
      blockNumber: cacheOnBlock ? blockNumber : void 0,
      blockTag,
      chainId,
      functionName,
      scopeKey
    }),
    [
      account,
      address,
      args,
      blockNumber,
      blockTag,
      cacheOnBlock,
      chainId,
      functionName,
      scopeKey
    ]
  );
  const enabled = React17.useMemo(() => {
    let enabled2 = Boolean(enabled_ && abi && address && functionName);
    if (cacheOnBlock)
      enabled2 = Boolean(enabled2 && blockNumber);
    return enabled2;
  }, [abi, address, blockNumber, cacheOnBlock, enabled_, functionName]);
  useInvalidateOnBlock({
    chainId,
    enabled: Boolean(enabled && watch && !cacheOnBlock),
    queryKey: queryKey_
  });
  return useQuery2(
    queryKey_,
    queryFn6({
      abi
    }),
    {
      cacheTime,
      enabled,
      isDataEqual,
      keepPreviousData,
      select,
      staleTime,
      structuralSharing,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
}
function queryKey7({
  allowFailure,
  blockNumber,
  blockTag,
  chainId,
  contracts,
  scopeKey
}) {
  return [
    {
      entity: "readContracts",
      allowFailure,
      blockNumber,
      blockTag,
      chainId,
      scopeKey,
      contracts: (contracts ?? []).map(({ address, args, chainId: chainId2, functionName }) => ({
        address,
        args,
        chainId: chainId2,
        functionName
      }))
    }
  ];
}
function queryFn7({ abis }) {
  return ({
    queryKey: [{ allowFailure, blockNumber, blockTag, contracts: contracts_ }]
  }) => {
    const contracts = contracts_.map((contract, i) => ({
      ...contract,
      abi: abis[i]
    }));
    return readContracts({
      allowFailure,
      contracts,
      blockNumber,
      blockTag
    });
  };
}
function useContractReads({
  allowFailure: allowFailure_,
  blockNumber: blockNumberOverride,
  blockTag,
  cacheOnBlock = false,
  cacheTime,
  contracts,
  enabled: enabled_ = true,
  isDataEqual,
  keepPreviousData,
  onError,
  onSettled,
  onSuccess,
  scopeKey,
  select,
  staleTime,
  structuralSharing = (oldData, newData) => deepEqual(oldData, newData) ? oldData : replaceEqualDeep(oldData, newData),
  suspense,
  watch
} = {}) {
  const allowFailure = allowFailure_ ?? true;
  const { data: blockNumber_ } = useBlockNumber({
    enabled: watch || cacheOnBlock,
    watch
  });
  const chainId = useChainId();
  const blockNumber = blockNumberOverride ?? blockNumber_;
  const queryKey_ = React18.useMemo(
    () => queryKey7({
      allowFailure,
      blockNumber: cacheOnBlock ? blockNumber : void 0,
      blockTag,
      chainId,
      contracts,
      scopeKey
    }),
    [
      allowFailure,
      blockNumber,
      blockTag,
      cacheOnBlock,
      chainId,
      scopeKey,
      contracts
    ]
  );
  const enabled = React18.useMemo(() => {
    let enabled2 = Boolean(
      enabled_ && (contracts == null ? void 0 : contracts.every(
        (x) => x.abi && x.address && x.functionName
      ))
    );
    if (cacheOnBlock)
      enabled2 = Boolean(enabled2 && blockNumber);
    return enabled2;
  }, [blockNumber, cacheOnBlock, contracts, enabled_]);
  useInvalidateOnBlock({
    enabled: Boolean(enabled && watch && !cacheOnBlock),
    queryKey: queryKey_
  });
  const abis = (contracts ?? []).map(
    ({ abi }) => abi
  );
  return useQuery2(queryKey_, queryFn7({ abis }), {
    cacheTime,
    enabled,
    isDataEqual,
    keepPreviousData,
    staleTime,
    select,
    structuralSharing,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function mutationKey6({
  address,
  abi,
  functionName,
  ...config2
}) {
  const {
    args,
    accessList,
    account,
    dataSuffix,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    request,
    value
  } = config2;
  return [
    {
      entity: "writeContract",
      address,
      args,
      abi,
      accessList,
      account,
      dataSuffix,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      request,
      value
    }
  ];
}
function mutationFn6(config2) {
  if (config2.mode === "prepared") {
    if (!config2.request)
      throw new Error("request is required");
    return writeContract({
      mode: "prepared",
      request: config2.request
    });
  }
  if (!config2.address)
    throw new Error("address is required");
  if (!config2.abi)
    throw new Error("abi is required");
  if (!config2.functionName)
    throw new Error("functionName is required");
  return writeContract({
    address: config2.address,
    args: config2.args,
    chainId: config2.chainId,
    abi: config2.abi,
    functionName: config2.functionName,
    accessList: config2.accessList,
    account: config2.account,
    dataSuffix: config2.dataSuffix,
    gas: config2.gas,
    gasPrice: config2.gasPrice,
    maxFeePerGas: config2.maxFeePerGas,
    maxPriorityFeePerGas: config2.maxPriorityFeePerGas,
    nonce: config2.nonce,
    value: config2.value
  });
}
function useContractWrite(config2) {
  const {
    address,
    abi,
    args,
    chainId,
    functionName,
    mode,
    request,
    dataSuffix
  } = config2;
  const {
    accessList,
    account,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    value
  } = getSendTransactionParameters(config2);
  const {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation2(
    mutationKey6({
      address,
      abi,
      functionName,
      chainId,
      mode,
      args,
      accessList,
      account,
      dataSuffix,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      request,
      value
    }),
    mutationFn6,
    {
      onError: config2.onError,
      onMutate: config2.onMutate,
      onSettled: config2.onSettled,
      onSuccess: config2.onSuccess
    }
  );
  const write = React19.useMemo(() => {
    if (config2.mode === "prepared") {
      if (!request)
        return void 0;
      return () => mutate({
        mode: "prepared",
        request: config2.request,
        chainId: config2.chainId
      });
    }
    return (overrideConfig) => mutate({
      address,
      args,
      abi,
      functionName,
      chainId,
      accessList,
      account,
      dataSuffix,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      value,
      ...overrideConfig
    });
  }, [
    accessList,
    account,
    abi,
    address,
    args,
    chainId,
    config2.chainId,
    config2.mode,
    config2.request,
    dataSuffix,
    functionName,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    mutate,
    nonce,
    request,
    value
  ]);
  const writeAsync = React19.useMemo(() => {
    if (config2.mode === "prepared") {
      if (!request)
        return void 0;
      return () => mutateAsync({
        mode: "prepared",
        request: config2.request
      });
    }
    return (overrideConfig) => mutateAsync({
      address,
      args,
      abi,
      chainId,
      functionName,
      accessList,
      account,
      dataSuffix,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      value,
      ...overrideConfig
    });
  }, [
    accessList,
    account,
    abi,
    address,
    args,
    chainId,
    config2.mode,
    config2.request,
    dataSuffix,
    functionName,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    mutateAsync,
    nonce,
    request,
    value
  ]);
  return {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    status,
    variables,
    write,
    writeAsync
  };
}
function queryKey8({
  accessList,
  account,
  activeChainId,
  args,
  address,
  blockNumber,
  blockTag,
  chainId,
  dataSuffix,
  functionName,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  nonce,
  scopeKey,
  walletClientAddress,
  value
}) {
  return [
    {
      entity: "prepareContractTransaction",
      accessList,
      account,
      activeChainId,
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      dataSuffix,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      scopeKey,
      walletClientAddress,
      value
    }
  ];
}
function queryFn8({
  abi,
  walletClient
}) {
  return ({
    queryKey: [
      {
        accessList,
        account,
        args,
        address,
        blockNumber,
        blockTag,
        chainId,
        dataSuffix,
        functionName,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        value
      }
    ]
  }) => {
    if (!abi)
      throw new Error("abi is required");
    if (!address)
      throw new Error("address is required");
    if (!functionName)
      throw new Error("functionName is required");
    return prepareWriteContract({
      abi,
      accessList,
      account,
      args,
      address,
      blockNumber,
      blockTag,
      chainId,
      dataSuffix,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      walletClient,
      value
    });
  };
}
function usePrepareContractWrite({
  address,
  abi,
  functionName,
  chainId,
  args,
  cacheTime,
  dataSuffix,
  enabled = true,
  scopeKey,
  staleTime,
  suspense,
  onError,
  onSettled,
  onSuccess,
  ...config2
} = {}) {
  const { chain: activeChain } = useNetwork();
  const { data: walletClient } = useWalletClient({ chainId });
  const {
    accessList,
    account,
    blockNumber,
    blockTag,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    value
  } = getCallParameters(config2);
  const prepareContractWriteQuery = useQuery2(
    queryKey8({
      accessList,
      account,
      activeChainId: activeChain == null ? void 0 : activeChain.id,
      address,
      args,
      blockNumber,
      blockTag,
      chainId,
      dataSuffix,
      functionName,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      scopeKey,
      walletClientAddress: walletClient == null ? void 0 : walletClient.account.address,
      value
    }),
    queryFn8({
      abi,
      walletClient
    }),
    {
      cacheTime,
      enabled: Boolean(
        enabled && abi && address && functionName && walletClient
      ),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
  return Object.assign(prepareContractWriteQuery, {
    config: {
      chainId,
      mode: "prepared",
      request: void 0,
      ...prepareContractWriteQuery.data
    }
  });
}
function queryKey9({
  address,
  chainId,
  formatUnits: formatUnits2,
  scopeKey
}) {
  return [{ entity: "token", address, chainId, formatUnits: formatUnits2, scopeKey }];
}
function queryFn9({
  queryKey: [{ address, chainId, formatUnits: formatUnits2 }]
}) {
  if (!address)
    throw new Error("address is required");
  return fetchToken({ address, chainId, formatUnits: formatUnits2 });
}
function useToken({
  address,
  chainId: chainId_,
  formatUnits: formatUnits2 = "ether",
  cacheTime,
  enabled = true,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery2(
    queryKey9({ address, chainId, formatUnits: formatUnits2, scopeKey }),
    queryFn9,
    {
      cacheTime,
      enabled: Boolean(enabled && address),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
}
function queryKey10({ chainId, name, scopeKey }) {
  return [{ entity: "ensAddress", chainId, name, scopeKey }];
}
function queryFn10({
  queryKey: [{ chainId, name }]
}) {
  if (!name)
    throw new Error("name is required");
  return fetchEnsAddress({ chainId, name });
}
function useEnsAddress({
  cacheTime,
  chainId: chainId_,
  enabled = true,
  name,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery2(queryKey10({ chainId, name, scopeKey }), queryFn10, {
    cacheTime,
    enabled: Boolean(enabled && chainId && name),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function queryKey11({ name, chainId, scopeKey }) {
  return [{ entity: "ensAvatar", name, chainId, scopeKey }];
}
function queryFn11({
  queryKey: [{ name, chainId }]
}) {
  if (!name)
    throw new Error("name is required");
  return fetchEnsAvatar({ name, chainId });
}
function useEnsAvatar({
  cacheTime,
  chainId: chainId_,
  enabled = true,
  name,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery2(queryKey11({ name, chainId, scopeKey }), queryFn11, {
    cacheTime,
    enabled: Boolean(enabled && name && chainId),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function queryKey12({
  address,
  chainId,
  scopeKey
}) {
  return [{ entity: "ensName", address, chainId, scopeKey }];
}
function queryFn12({
  queryKey: [{ address, chainId }]
}) {
  if (!address)
    throw new Error("address is required");
  return fetchEnsName({ address, chainId });
}
function useEnsName({
  address,
  cacheTime,
  chainId: chainId_,
  enabled = true,
  scopeKey,
  staleTime = 1e3 * 60 * 60 * 24,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery2(queryKey12({ address, chainId, scopeKey }), queryFn12, {
    cacheTime,
    enabled: Boolean(enabled && address && chainId),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function queryKey13({ chainId, name, scopeKey }) {
  return [
    { entity: "ensResolver", chainId, name, scopeKey, persist: false }
  ];
}
function queryFn13({
  queryKey: [{ chainId, name }]
}) {
  if (!name)
    throw new Error("name is required");
  return fetchEnsResolver({ chainId, name });
}
function useEnsResolver({
  chainId: chainId_,
  name,
  enabled = true,
  scopeKey,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery2(queryKey13({ chainId, name, scopeKey }), queryFn13, {
    cacheTime: 0,
    enabled: Boolean(enabled && chainId && name),
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function queryKey14({
  accessList,
  account,
  activeChainId,
  chainId,
  data,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  nonce,
  to,
  value,
  scopeKey,
  walletClientAddress
}) {
  return [
    {
      entity: "prepareSendTransaction",
      activeChainId,
      accessList,
      account,
      chainId,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value,
      scopeKey,
      walletClientAddress
    }
  ];
}
function queryFn14({ walletClient }) {
  return ({
    queryKey: [
      {
        accessList,
        account,
        chainId,
        data,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        value
      }
    ]
  }) => {
    if (!to)
      throw new Error("to is required");
    return prepareSendTransaction({
      accessList,
      account,
      chainId,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value,
      walletClient
    });
  };
}
function usePrepareSendTransaction({
  accessList,
  account,
  chainId,
  cacheTime,
  data,
  enabled = true,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  nonce,
  scopeKey,
  staleTime,
  suspense,
  to,
  value,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const { chain: activeChain } = useNetwork();
  const { data: walletClient } = useWalletClient({ chainId });
  const prepareSendTransactionQuery = useQuery2(
    queryKey14({
      accessList,
      activeChainId: activeChain == null ? void 0 : activeChain.id,
      account,
      chainId,
      data,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      scopeKey,
      to,
      value,
      walletClientAddress: walletClient == null ? void 0 : walletClient.account.address
    }),
    queryFn14({ walletClient }),
    {
      cacheTime,
      enabled: Boolean(enabled && walletClient && to),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
  return Object.assign(prepareSendTransactionQuery, {
    config: {
      mode: "prepared",
      ...prepareSendTransactionQuery.isSuccess ? prepareSendTransactionQuery.data : void 0
    }
  });
}
var mutationKey7 = (args) => [{ entity: "sendTransaction", ...args }];
var mutationFn7 = ({
  accessList,
  account,
  chainId,
  data,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  mode,
  nonce,
  to,
  value
}) => {
  if (!to)
    throw new Error("to is required.");
  return sendTransaction({
    accessList,
    account,
    chainId,
    data,
    gas,
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas,
    mode,
    nonce,
    to,
    value
  });
};
function useSendTransaction({
  accessList,
  account,
  chainId,
  data: data_,
  gas,
  gasPrice,
  maxFeePerGas,
  maxPriorityFeePerGas,
  mode,
  nonce,
  to,
  value,
  onError,
  onMutate,
  onSettled,
  onSuccess
} = {}) {
  const {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables
  } = useMutation2(
    mutationKey7({
      accessList,
      account,
      chainId,
      data: data_,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      mode,
      nonce,
      to,
      value
    }),
    mutationFn7,
    {
      onError,
      onMutate,
      onSettled,
      onSuccess
    }
  );
  const sendTransaction2 = React20.useCallback(
    (args) => mutate({
      chainId,
      mode,
      ...args || {
        accessList,
        account,
        chainId,
        data: data_,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        nonce,
        value,
        to
      }
    }),
    [
      accessList,
      account,
      chainId,
      data_,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      mode,
      mutate,
      nonce,
      to,
      value
    ]
  );
  const sendTransactionAsync = React20.useCallback(
    (args) => mutateAsync({
      chainId,
      mode,
      ...args || {
        accessList,
        account,
        chainId,
        data: data_,
        gas,
        gasPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        mode,
        nonce,
        value,
        to
      }
    }),
    [
      accessList,
      account,
      chainId,
      data_,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      mode,
      mutateAsync,
      nonce,
      to,
      value
    ]
  );
  return {
    data,
    error,
    isError: isError2,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    sendTransaction: mode === "prepared" && !to ? void 0 : sendTransaction2,
    sendTransactionAsync: mode === "prepared" && !to ? void 0 : sendTransactionAsync,
    status,
    variables
  };
}
function queryKey15({ chainId, hash, scopeKey }) {
  return [{ entity: "transaction", chainId, hash, scopeKey }];
}
function queryFn15({
  queryKey: [{ chainId, hash }]
}) {
  if (!hash)
    throw new Error("hash is required");
  return fetchTransaction({ chainId, hash });
}
function useTransaction({
  cacheTime = 0,
  chainId: chainId_,
  enabled = true,
  hash,
  scopeKey,
  staleTime,
  suspense,
  onError,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery2(queryKey15({ chainId, hash, scopeKey }), queryFn15, {
    cacheTime,
    enabled: Boolean(enabled && hash),
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess
  });
}
function queryKey16({
  confirmations,
  chainId,
  hash,
  scopeKey,
  timeout
}) {
  return [
    {
      entity: "waitForTransaction",
      confirmations,
      chainId,
      hash,
      scopeKey,
      timeout
    }
  ];
}
function queryFn16({
  onReplaced
}) {
  return ({
    queryKey: [{ chainId, confirmations, hash, timeout }]
  }) => {
    if (!hash)
      throw new Error("hash is required");
    return waitForTransaction({
      chainId,
      confirmations,
      hash,
      onReplaced,
      timeout
    });
  };
}
function useWaitForTransaction({
  chainId: chainId_,
  confirmations,
  hash,
  timeout,
  cacheTime,
  enabled = true,
  scopeKey,
  staleTime,
  suspense,
  onError,
  onReplaced,
  onSettled,
  onSuccess
} = {}) {
  const chainId = useChainId({ chainId: chainId_ });
  return useQuery2(
    queryKey16({ chainId, confirmations, hash, scopeKey, timeout }),
    queryFn16({ onReplaced }),
    {
      cacheTime,
      enabled: Boolean(enabled && hash),
      staleTime,
      suspense,
      onError,
      onSettled,
      onSuccess
    }
  );
}
function useWatchPendingTransactions({
  chainId: chainId_,
  enabled = true,
  listener
}) {
  const chainId = useChainId({ chainId: chainId_ });
  const publicClient = usePublicClient({ chainId });
  const webSocketPublicClient = useWebSocketPublicClient({ chainId });
  React21.useEffect(() => {
    if (!enabled)
      return;
    const publicClient_ = webSocketPublicClient ?? publicClient;
    return publicClient_.watchPendingTransactions({
      onTransactions: listener
    });
  }, [enabled, listener, publicClient, webSocketPublicClient]);
}

export {
  ChainNotConfiguredForConnectorError,
  ConnectorNotFoundError,
  normalizeChainId,
  __privateGet,
  __privateAdd,
  __privateSet,
  __privateMethod,
  Connector,
  InjectedConnector,
  configureChains,
  ChainMismatchError,
  ChainNotConfiguredError,
  ConnectorAlreadyConnectedError,
  ConfigChainsNotFound,
  SwitchChainNotSupportedError,
  deepEqual,
  deserialize,
  serialize,
  createStorage,
  connect,
  disconnect,
  erc20ABI,
  erc721ABI,
  erc4626ABI,
  readContracts,
  fetchBalance,
  getAccount,
  getNetwork,
  switchNetwork,
  watchAccount,
  watchNetwork,
  fetchEnsAvatar,
  fetchEnsName,
  createConfig2 as createConfig,
  Context,
  WagmiConfig,
  useConfig,
  useInfiniteQuery2 as useInfiniteQuery,
  useMutation2 as useMutation,
  useQuery2 as useQuery,
  useQueryClient2,
  usePublicClient,
  useWalletClient,
  useWebSocketPublicClient,
  useChainId,
  useBlockNumber,
  useFeeData,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
  useSignTypedData,
  useSwitchNetwork,
  useContractEvent,
  useContractInfiniteReads,
  paginatedIndexesConfig,
  useContractRead,
  useContractReads,
  useContractWrite,
  usePrepareContractWrite,
  useToken,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  usePrepareSendTransaction,
  useSendTransaction,
  useTransaction,
  useWaitForTransaction,
  useWatchPendingTransactions
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-3HTKCOE2.js.map
