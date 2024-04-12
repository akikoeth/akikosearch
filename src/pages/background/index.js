import { c as q } from "../../../assets/js/_commonjsHelpers.c0cc0ce9.js";
var L = { exports: {} };
(function (l, v) {
  (function (w, f) {
    f(l);
  })(
    typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : q,
    function (w) {
      var f, P;
      if (
        !(
          (P = (f = globalThis.chrome) == null ? void 0 : f.runtime) != null &&
          P.id
        )
      )
        throw new Error(
          "This script should only be loaded in a browser extension.",
        );
      if (
        typeof globalThis.browser > "u" ||
        Object.getPrototypeOf(globalThis.browser) !== Object.prototype
      ) {
        const F = "The message port closed before a response was received.",
          O = (c) => {
            const k = {
              alarms: {
                clear: { minArgs: 0, maxArgs: 1 },
                clearAll: { minArgs: 0, maxArgs: 0 },
                get: { minArgs: 0, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
              },
              bookmarks: {
                create: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                getChildren: { minArgs: 1, maxArgs: 1 },
                getRecent: { minArgs: 1, maxArgs: 1 },
                getSubTree: { minArgs: 1, maxArgs: 1 },
                getTree: { minArgs: 0, maxArgs: 0 },
                move: { minArgs: 2, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeTree: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              browserAction: {
                disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                getBadgeText: { minArgs: 1, maxArgs: 1 },
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                openPopup: { minArgs: 0, maxArgs: 0 },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: !0,
                },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              browsingData: {
                remove: { minArgs: 2, maxArgs: 2 },
                removeCache: { minArgs: 1, maxArgs: 1 },
                removeCookies: { minArgs: 1, maxArgs: 1 },
                removeDownloads: { minArgs: 1, maxArgs: 1 },
                removeFormData: { minArgs: 1, maxArgs: 1 },
                removeHistory: { minArgs: 1, maxArgs: 1 },
                removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                removePasswords: { minArgs: 1, maxArgs: 1 },
                removePluginData: { minArgs: 1, maxArgs: 1 },
                settings: { minArgs: 0, maxArgs: 0 },
              },
              commands: { getAll: { minArgs: 0, maxArgs: 0 } },
              contextMenus: {
                remove: { minArgs: 1, maxArgs: 1 },
                removeAll: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              cookies: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 1, maxArgs: 1 },
                getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              },
              devtools: {
                inspectedWindow: {
                  eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                },
                panels: {
                  create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                  elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                },
              },
              downloads: {
                cancel: { minArgs: 1, maxArgs: 1 },
                download: { minArgs: 1, maxArgs: 1 },
                erase: { minArgs: 1, maxArgs: 1 },
                getFileIcon: { minArgs: 1, maxArgs: 2 },
                open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                pause: { minArgs: 1, maxArgs: 1 },
                removeFile: { minArgs: 1, maxArgs: 1 },
                resume: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              extension: {
                isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
              },
              history: {
                addUrl: { minArgs: 1, maxArgs: 1 },
                deleteAll: { minArgs: 0, maxArgs: 0 },
                deleteRange: { minArgs: 1, maxArgs: 1 },
                deleteUrl: { minArgs: 1, maxArgs: 1 },
                getVisits: { minArgs: 1, maxArgs: 1 },
                search: { minArgs: 1, maxArgs: 1 },
              },
              i18n: {
                detectLanguage: { minArgs: 1, maxArgs: 1 },
                getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
              },
              identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
              idle: { queryState: { minArgs: 1, maxArgs: 1 } },
              management: {
                get: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getSelf: { minArgs: 0, maxArgs: 0 },
                setEnabled: { minArgs: 2, maxArgs: 2 },
                uninstallSelf: { minArgs: 0, maxArgs: 1 },
              },
              notifications: {
                clear: { minArgs: 1, maxArgs: 1 },
                create: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 0 },
                getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                update: { minArgs: 2, maxArgs: 2 },
              },
              pageAction: {
                getPopup: { minArgs: 1, maxArgs: 1 },
                getTitle: { minArgs: 1, maxArgs: 1 },
                hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setIcon: { minArgs: 1, maxArgs: 1 },
                setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
              },
              permissions: {
                contains: { minArgs: 1, maxArgs: 1 },
                getAll: { minArgs: 0, maxArgs: 0 },
                remove: { minArgs: 1, maxArgs: 1 },
                request: { minArgs: 1, maxArgs: 1 },
              },
              runtime: {
                getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                openOptionsPage: { minArgs: 0, maxArgs: 0 },
                requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                sendMessage: { minArgs: 1, maxArgs: 3 },
                sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                setUninstallURL: { minArgs: 1, maxArgs: 1 },
              },
              sessions: {
                getDevices: { minArgs: 0, maxArgs: 1 },
                getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                restore: { minArgs: 0, maxArgs: 1 },
              },
              storage: {
                local: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                managed: {
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                },
                sync: {
                  clear: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
              },
              tabs: {
                captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                create: { minArgs: 1, maxArgs: 1 },
                detectLanguage: { minArgs: 0, maxArgs: 1 },
                discard: { minArgs: 0, maxArgs: 1 },
                duplicate: { minArgs: 1, maxArgs: 1 },
                executeScript: { minArgs: 1, maxArgs: 2 },
                get: { minArgs: 1, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 0 },
                getZoom: { minArgs: 0, maxArgs: 1 },
                getZoomSettings: { minArgs: 0, maxArgs: 1 },
                goBack: { minArgs: 0, maxArgs: 1 },
                goForward: { minArgs: 0, maxArgs: 1 },
                highlight: { minArgs: 1, maxArgs: 1 },
                insertCSS: { minArgs: 1, maxArgs: 2 },
                move: { minArgs: 2, maxArgs: 2 },
                query: { minArgs: 1, maxArgs: 1 },
                reload: { minArgs: 0, maxArgs: 2 },
                remove: { minArgs: 1, maxArgs: 1 },
                removeCSS: { minArgs: 1, maxArgs: 2 },
                sendMessage: { minArgs: 2, maxArgs: 3 },
                setZoom: { minArgs: 1, maxArgs: 2 },
                setZoomSettings: { minArgs: 1, maxArgs: 2 },
                update: { minArgs: 1, maxArgs: 2 },
              },
              topSites: { get: { minArgs: 0, maxArgs: 0 } },
              webNavigation: {
                getAllFrames: { minArgs: 1, maxArgs: 1 },
                getFrame: { minArgs: 1, maxArgs: 1 },
              },
              webRequest: {
                handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
              },
              windows: {
                create: { minArgs: 0, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 2 },
                getAll: { minArgs: 0, maxArgs: 1 },
                getCurrent: { minArgs: 0, maxArgs: 1 },
                getLastFocused: { minArgs: 0, maxArgs: 1 },
                remove: { minArgs: 1, maxArgs: 1 },
                update: { minArgs: 2, maxArgs: 2 },
              },
            };
            if (Object.keys(k).length === 0)
              throw new Error(
                "api-metadata.json has not been included in browser-polyfill",
              );
            class E extends WeakMap {
              constructor(s, n = void 0) {
                super(n), (this.createItem = s);
              }
              get(s) {
                return (
                  this.has(s) || this.set(s, this.createItem(s)), super.get(s)
                );
              }
            }
            const B = (e) =>
                e && typeof e == "object" && typeof e.then == "function",
              S =
                (e, s) =>
                (...n) => {
                  c.runtime.lastError
                    ? e.reject(new Error(c.runtime.lastError.message))
                    : s.singleCallbackArg ||
                        (n.length <= 1 && s.singleCallbackArg !== !1)
                      ? e.resolve(n[0])
                      : e.resolve(n);
                },
              b = (e) => (e == 1 ? "argument" : "arguments"),
              D = (e, s) =>
                function (g, ...a) {
                  if (a.length < s.minArgs)
                    throw new Error(
                      `Expected at least ${s.minArgs} ${b(
                        s.minArgs,
                      )} for ${e}(), got ${a.length}`,
                    );
                  if (a.length > s.maxArgs)
                    throw new Error(
                      `Expected at most ${s.maxArgs} ${b(
                        s.maxArgs,
                      )} for ${e}(), got ${a.length}`,
                    );
                  return new Promise((m, i) => {
                    if (s.fallbackToNoCallback)
                      try {
                        g[e](...a, S({ resolve: m, reject: i }, s));
                      } catch (r) {
                        console.warn(
                          `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                          r,
                        ),
                          g[e](...a),
                          (s.fallbackToNoCallback = !1),
                          (s.noCallback = !0),
                          m();
                      }
                    else
                      s.noCallback
                        ? (g[e](...a), m())
                        : g[e](...a, S({ resolve: m, reject: i }, s));
                  });
                },
              M = (e, s, n) =>
                new Proxy(s, {
                  apply(g, a, m) {
                    return n.call(a, e, ...m);
                  },
                });
            let h = Function.call.bind(Object.prototype.hasOwnProperty);
            const p = (e, s = {}, n = {}) => {
                let g = Object.create(null),
                  a = {
                    has(i, r) {
                      return r in e || r in g;
                    },
                    get(i, r, A) {
                      if (r in g) return g[r];
                      if (!(r in e)) return;
                      let t = e[r];
                      if (typeof t == "function")
                        if (typeof s[r] == "function") t = M(e, e[r], s[r]);
                        else if (h(n, r)) {
                          let x = D(r, n[r]);
                          t = M(e, e[r], x);
                        } else t = t.bind(e);
                      else if (
                        typeof t == "object" &&
                        t !== null &&
                        (h(s, r) || h(n, r))
                      )
                        t = p(t, s[r], n[r]);
                      else if (h(n, "*")) t = p(t, s[r], n["*"]);
                      else
                        return (
                          Object.defineProperty(g, r, {
                            configurable: !0,
                            enumerable: !0,
                            get() {
                              return e[r];
                            },
                            set(x) {
                              e[r] = x;
                            },
                          }),
                          t
                        );
                      return (g[r] = t), t;
                    },
                    set(i, r, A, t) {
                      return r in g ? (g[r] = A) : (e[r] = A), !0;
                    },
                    defineProperty(i, r, A) {
                      return Reflect.defineProperty(g, r, A);
                    },
                    deleteProperty(i, r) {
                      return Reflect.deleteProperty(g, r);
                    },
                  },
                  m = Object.create(e);
                return new Proxy(m, a);
              },
              y = (e) => ({
                addListener(s, n, ...g) {
                  s.addListener(e.get(n), ...g);
                },
                hasListener(s, n) {
                  return s.hasListener(e.get(n));
                },
                removeListener(s, n) {
                  s.removeListener(e.get(n));
                },
              }),
              _ = new E((e) =>
                typeof e != "function"
                  ? e
                  : function (n) {
                      const g = p(
                        n,
                        {},
                        { getContent: { minArgs: 0, maxArgs: 0 } },
                      );
                      e(g);
                    },
              ),
              N = new E((e) =>
                typeof e != "function"
                  ? e
                  : function (n, g, a) {
                      let m = !1,
                        i,
                        r = new Promise((u) => {
                          i = function (o) {
                            (m = !0), u(o);
                          };
                        }),
                        A;
                      try {
                        A = e(n, g, i);
                      } catch (u) {
                        A = Promise.reject(u);
                      }
                      const t = A !== !0 && B(A);
                      if (A !== !0 && !t && !m) return !1;
                      const x = (u) => {
                        u.then(
                          (o) => {
                            a(o);
                          },
                          (o) => {
                            let T;
                            o &&
                            (o instanceof Error || typeof o.message == "string")
                              ? (T = o.message)
                              : (T = "An unexpected error occurred"),
                              a({
                                __mozWebExtensionPolyfillReject__: !0,
                                message: T,
                              });
                          },
                        ).catch((o) => {
                          console.error(
                            "Failed to send onMessage rejected reply",
                            o,
                          );
                        });
                      };
                      return x(t ? A : r), !0;
                    },
              ),
              U = ({ reject: e, resolve: s }, n) => {
                c.runtime.lastError
                  ? c.runtime.lastError.message === F
                    ? s()
                    : e(new Error(c.runtime.lastError.message))
                  : n && n.__mozWebExtensionPolyfillReject__
                    ? e(new Error(n.message))
                    : s(n);
              },
              R = (e, s, n, ...g) => {
                if (g.length < s.minArgs)
                  throw new Error(
                    `Expected at least ${s.minArgs} ${b(
                      s.minArgs,
                    )} for ${e}(), got ${g.length}`,
                  );
                if (g.length > s.maxArgs)
                  throw new Error(
                    `Expected at most ${s.maxArgs} ${b(
                      s.maxArgs,
                    )} for ${e}(), got ${g.length}`,
                  );
                return new Promise((a, m) => {
                  const i = U.bind(null, { resolve: a, reject: m });
                  g.push(i), n.sendMessage(...g);
                });
              },
              W = {
                devtools: { network: { onRequestFinished: y(_) } },
                runtime: {
                  onMessage: y(N),
                  onMessageExternal: y(N),
                  sendMessage: R.bind(null, "sendMessage", {
                    minArgs: 1,
                    maxArgs: 3,
                  }),
                },
                tabs: {
                  sendMessage: R.bind(null, "sendMessage", {
                    minArgs: 2,
                    maxArgs: 3,
                  }),
                },
              },
              C = {
                clear: { minArgs: 1, maxArgs: 1 },
                get: { minArgs: 1, maxArgs: 1 },
                set: { minArgs: 1, maxArgs: 1 },
              };
            return (
              (k.privacy = {
                network: { "*": C },
                services: { "*": C },
                websites: { "*": C },
              }),
              p(c, W, k)
            );
          };
        w.exports = O(chrome);
      } else w.exports = globalThis.browser;
    },
  );
})(L);
const d = L.exports;
console.log("background loaded");
async function j() {
  const l = await fetch(
    "https://defillama-datasets.llama.fi/tokenlist/search.json",
  ).then((v) => v.json());
  await chrome.storage.local.set(l);
}
function I() {
  console.log("setupUpdateProtocolsDb"),
    d.alarms.get("updateProtocolsDb").then((l) => {
      l ||
        (console.log("setupUpdateProtocolsDb", "create"),
        j(),
        d.alarms.create("updateProtocolsDb", { periodInMinutes: 12 * 60 }));
    });
}
function $() {
  I();
}
d.runtime.onInstalled.addListener(() => {
  $();
});
d.runtime.onStartup.addListener(() => {
  $();
});
d.alarms.onAlarm.addListener(async (l) => {
  switch (l.name) {
    case "updateProtocolsDb":
      await j();
      break;
  }
});
