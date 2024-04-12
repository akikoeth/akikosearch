import { g as jf } from "../../../assets/js/_commonjsHelpers.c0cc0ce9.js";

const url = chrome.runtime.getURL("../../../assets/json/favorites.json");
let fav;

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    fav = json.favorites;
  });

(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var x = { exports: {} },
  D = {};

var price = 0;
var ARBprice = 0;
async function getPrices() {
  const response = await fetch("https://api.beefy.finance/prices");
  const data = await response.json();
  price = data.WETH;
  ARBprice = data.ARB;
}
await getPrices();

const pages = fav;

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kr = Symbol.for("react.element"),
  Af = Symbol.for("react.portal"),
  Uf = Symbol.for("react.fragment"),
  Qf = Symbol.for("react.strict_mode"),
  Hf = Symbol.for("react.profiler"),
  Vf = Symbol.for("react.provider"),
  Bf = Symbol.for("react.context"),
  Wf = Symbol.for("react.forward_ref"),
  Kf = Symbol.for("react.suspense"),
  qf = Symbol.for("react.memo"),
  Gf = Symbol.for("react.lazy"),
  Hu = Symbol.iterator;
function Yf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ca = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fa = Object.assign,
  da = {};
function Mn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = da),
    (this.updater = n || ca);
}
Mn.prototype.isReactComponent = {};
Mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function pa() {}
pa.prototype = Mn.prototype;
function $i(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = da),
    (this.updater = n || ca);
}
var zi = ($i.prototype = new pa());
zi.constructor = $i;
fa(zi, Mn.prototype);
zi.isPureReactComponent = !0;
var Vu = Array.isArray,
  ha = Object.prototype.hasOwnProperty,
  ji = { current: null },
  ma = { key: !0, ref: !0, __self: !0, __source: !0 };
function va(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ha.call(t, r) && !ma.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: kr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ji.current,
  };
}
function Xf(e, t) {
  return {
    $$typeof: kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ai(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kr;
}
function bf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bu = /\/+/g;
function ro(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bf("" + e.key)
    : t.toString(36);
}
function Xr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case kr:
          case Af:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ro(i, 0) : r),
      Vu(l)
        ? ((n = ""),
          e != null && (n = e.replace(Bu, "$&/") + "/"),
          Xr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Ai(l) &&
            (l = Xf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Vu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + ro(o, u);
      i += Xr(o, t, n, s, l);
    }
  else if (((s = Yf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + ro(o, u++)), (i += Xr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Xr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Zf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  br = { transition: null },
  Jf = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: br,
    ReactCurrentOwner: ji,
  };
D.Children = {
  map: Rr,
  forEach: function (e, t, n) {
    Rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ai(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Mn;
D.Fragment = Uf;
D.Profiler = Hf;
D.PureComponent = $i;
D.StrictMode = Qf;
D.Suspense = Kf;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jf;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = fa({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ji.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ha.call(t, s) &&
        !ma.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: kr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vf, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = va;
D.createFactory = function (e) {
  var t = va.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Wf, render: e };
};
D.isValidElement = Ai;
D.lazy = function (e) {
  return { $$typeof: Gf, _payload: { _status: -1, _result: e }, _init: Zf };
};
D.memo = function (e, t) {
  return { $$typeof: qf, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = br.transition;
  br.transition = {};
  try {
    e();
  } finally {
    br.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
D.useContext = function (e) {
  return xe.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
D.useId = function () {
  return xe.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return xe.current.useRef(e);
};
D.useState = function (e) {
  return xe.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return xe.current.useTransition();
};
D.version = "18.2.0";
(function (e) {
  e.exports = D;
})(x);
const Ce = jf(x.exports);
var jo = {},
  ya = { exports: {} },
  Ie = {},
  ga = { exports: {} },
  wa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, F) {
    var I = _.length;
    _.push(F);
    e: for (; 0 < I; ) {
      var z = (I - 1) >>> 1,
        q = _[z];
      if (0 < l(q, F)) (_[z] = F), (_[I] = q), (I = z);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var F = _[0],
      I = _.pop();
    if (I !== F) {
      _[0] = I;
      e: for (var z = 0, q = _.length, un = q >>> 1; z < un; ) {
        var M = 2 * (z + 1) - 1,
          Q = _[M],
          G = M + 1,
          it = _[G];
        if (0 > l(Q, I))
          G < q && 0 > l(it, Q)
            ? ((_[z] = it), (_[G] = I), (z = G))
            : ((_[z] = Q), (_[M] = I), (z = M));
        else if (G < q && 0 > l(it, I)) (_[z] = it), (_[G] = I), (z = G);
        else break e;
      }
    }
    return F;
  }
  function l(_, F) {
    var I = _.sortIndex - F.sortIndex;
    return I !== 0 ? I : _.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    m = null,
    f = 3,
    v = !1,
    y = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= _)
        r(a), (F.sortIndex = F.expirationTime), t(s, F);
      else break;
      F = n(a);
    }
  }
  function w(_) {
    if (((g = !1), h(_), !y))
      if (n(s) !== null) (y = !0), Ze(O);
      else {
        var F = n(a);
        F !== null && Je(w, F.startTime - _);
      }
  }
  function O(_, F) {
    (y = !1), g && ((g = !1), d(P), (P = -1)), (v = !0);
    var I = f;
    try {
      for (
        h(F), m = n(s);
        m !== null && (!(m.expirationTime > F) || (_ && !L()));

      ) {
        var z = m.callback;
        if (typeof z == "function") {
          (m.callback = null), (f = m.priorityLevel);
          var q = z(m.expirationTime <= F);
          (F = e.unstable_now()),
            typeof q == "function" ? (m.callback = q) : m === n(s) && r(s),
            h(F);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var un = !0;
      else {
        var M = n(a);
        M !== null && Je(w, M.startTime - F), (un = !1);
      }
      return un;
    } finally {
      (m = null), (f = I), (v = !1);
    }
  }
  var C = !1,
    E = null,
    P = -1,
    N = 5,
    R = -1;
  function L() {
    return !(e.unstable_now() - R < N);
  }
  function re() {
    if (E !== null) {
      var _ = e.unstable_now();
      R = _;
      var F = !0;
      try {
        F = E(!0, _);
      } finally {
        F ? K() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var K;
  if (typeof c == "function")
    K = function () {
      c(re);
    };
  else if (typeof MessageChannel < "u") {
    var be = new MessageChannel(),
      De = be.port2;
    (be.port1.onmessage = re),
      (K = function () {
        De.postMessage(null);
      });
  } else
    K = function () {
      S(re, 0);
    };
  function Ze(_) {
    (E = _), C || ((C = !0), K());
  }
  function Je(_, F) {
    P = S(function () {
      _(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), Ze(O));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = f;
      }
      var I = f;
      f = F;
      try {
        return _();
      } finally {
        f = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, F) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var I = f;
      f = _;
      try {
        return F();
      } finally {
        f = I;
      }
    }),
    (e.unstable_scheduleCallback = function (_, F, I) {
      var z = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? z + I : z))
          : (I = z),
        _)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = I + q),
        (_ = {
          id: p++,
          callback: F,
          priorityLevel: _,
          startTime: I,
          expirationTime: q,
          sortIndex: -1,
        }),
        I > z
          ? ((_.sortIndex = I),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (g ? (d(P), (P = -1)) : (g = !0), Je(w, I - z)))
          : ((_.sortIndex = q), t(s, _), y || v || ((y = !0), Ze(O))),
        _
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (_) {
      var F = f;
      return function () {
        var I = f;
        f = F;
        try {
          return _.apply(this, arguments);
        } finally {
          f = I;
        }
      };
    });
})(wa);
(function (e) {
  e.exports = wa;
})(ga);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xa = x.exports,
  Fe = ga.exports;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sa = new Set(),
  or = {};
function rn(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Sa.add(t[e]);
}
var ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ao = Object.prototype.hasOwnProperty,
  ed =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wu = {},
  Ku = {};
function td(e) {
  return Ao.call(Ku, e)
    ? !0
    : Ao.call(Wu, e)
    ? !1
    : ed.test(e)
    ? (Ku[e] = !0)
    : ((Wu[e] = !0), !1);
}
function nd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function rd(e, t, n, r) {
  if (t === null || typeof t > "u" || nd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ui = /[\-:]([a-z])/g;
function Qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ui, Qi);
    ce[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ui, Qi);
    ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ui, Qi);
  ce[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hi(e, t, n, r) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (rd(t, n, l, r) && (n = null),
    r || l === null
      ? td(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  cn = Symbol.for("react.fragment"),
  Vi = Symbol.for("react.strict_mode"),
  Uo = Symbol.for("react.profiler"),
  ka = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  Bi = Symbol.for("react.forward_ref"),
  Qo = Symbol.for("react.suspense"),
  Ho = Symbol.for("react.suspense_list"),
  Wi = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Ea = Symbol.for("react.offscreen"),
  qu = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qu && e[qu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var b = Object.assign,
  lo;
function Kn(e) {
  if (lo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      lo = (t && t[1]) || "";
    }
  return (
    `
` +
    lo +
    e
  );
}
var oo = !1;
function io(e, t) {
  if (!e || oo) return "";
  oo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (oo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function ld(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type);
    case 16:
      return Kn("Lazy");
    case 13:
      return Kn("Suspense");
    case 19:
      return Kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = io(e.type, !1)), e;
    case 11:
      return (e = io(e.type.render, !1)), e;
    case 1:
      return (e = io(e.type, !0)), e;
    default:
      return "";
  }
}
function Vo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cn:
      return "Fragment";
    case an:
      return "Portal";
    case Uo:
      return "Profiler";
    case Vi:
      return "StrictMode";
    case Qo:
      return "Suspense";
    case Ho:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || "Context") + ".Consumer";
      case ka:
        return (e._context.displayName || "Context") + ".Provider";
      case Bi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Wi:
        return (
          (t = e.displayName || null), t !== null ? t : Vo(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Vo(e(t));
        } catch {}
    }
  return null;
}
function od(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Vo(t);
    case 8:
      return t === Vi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Pa(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function id(e) {
  var t = Pa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Fr(e) {
  e._valueTracker || (e._valueTracker = id(e));
}
function Oa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Pa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function sl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Bo(e, t) {
  var n = t.checked;
  return b({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Na(e, t) {
  (t = t.checked), t != null && Hi(e, "checked", t, !1);
}
function Wo(e, t) {
  Na(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ko(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ko(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Yu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ko(e, t, n) {
  (t !== "number" || sl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qn = Array.isArray;
function Sn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function qo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return b({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (qn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function _a(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ta(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Go(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ta(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ir,
  Ra = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ir = Ir || document.createElement("div"),
          Ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ud = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xn).forEach(function (e) {
  ud.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
  });
});
function La(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Fa(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = La(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var sd = b(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Yo(e, t) {
  if (t) {
    if (sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Xo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var bo = null;
function Ki(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zo = null,
  kn = null,
  Cn = null;
function Zu(e) {
  if ((e = Pr(e))) {
    if (typeof Zo != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Al(t)), Zo(e.stateNode, e.type, t));
  }
}
function Ia(e) {
  kn ? (Cn ? Cn.push(e) : (Cn = [e])) : (kn = e);
}
function Ma() {
  if (kn) {
    var e = kn,
      t = Cn;
    if (((Cn = kn = null), Zu(e), t)) for (e = 0; e < t.length; e++) Zu(t[e]);
  }
}
function Da(e, t) {
  return e(t);
}
function $a() {}
var uo = !1;
function za(e, t, n) {
  if (uo) return e(t, n);
  uo = !0;
  try {
    return Da(e, t, n);
  } finally {
    (uo = !1), (kn !== null || Cn !== null) && ($a(), Ma());
  }
}
function ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Jo = !1;
if (ht)
  try {
    var An = {};
    Object.defineProperty(An, "passive", {
      get: function () {
        Jo = !0;
      },
    }),
      window.addEventListener("test", An, An),
      window.removeEventListener("test", An, An);
  } catch {
    Jo = !1;
  }
function ad(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var bn = !1,
  al = null,
  cl = !1,
  ei = null,
  cd = {
    onError: function (e) {
      (bn = !0), (al = e);
    },
  };
function fd(e, t, n, r, l, o, i, u, s) {
  (bn = !1), (al = null), ad.apply(cd, arguments);
}
function dd(e, t, n, r, l, o, i, u, s) {
  if ((fd.apply(this, arguments), bn)) {
    if (bn) {
      var a = al;
      (bn = !1), (al = null);
    } else throw Error(k(198));
    cl || ((cl = !0), (ei = a));
  }
}
function ln(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ja(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ju(e) {
  if (ln(e) !== e) throw Error(k(188));
}
function pd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ln(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ju(l), e;
        if (o === r) return Ju(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Aa(e) {
  return (e = pd(e)), e !== null ? Ua(e) : null;
}
function Ua(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ua(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qa = Fe.unstable_scheduleCallback,
  es = Fe.unstable_cancelCallback,
  hd = Fe.unstable_shouldYield,
  md = Fe.unstable_requestPaint,
  J = Fe.unstable_now,
  vd = Fe.unstable_getCurrentPriorityLevel,
  qi = Fe.unstable_ImmediatePriority,
  Ha = Fe.unstable_UserBlockingPriority,
  fl = Fe.unstable_NormalPriority,
  yd = Fe.unstable_LowPriority,
  Va = Fe.unstable_IdlePriority,
  Dl = null,
  rt = null;
function gd(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Sd,
  wd = Math.log,
  xd = Math.LN2;
function Sd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wd(e) / xd) | 0)) | 0;
}
var Mr = 64,
  Dr = 4194304;
function Gn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function dl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Gn(u)) : ((o &= i), o !== 0 && (r = Gn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Gn(i)) : o !== 0 && (r = Gn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function kd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Cd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ge(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = kd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ti(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ba() {
  var e = Mr;
  return (Mr <<= 1), (Mr & 4194240) === 0 && (Mr = 64), e;
}
function so(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function Ed(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ge(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Gi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var U = 0;
function Wa(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Ka,
  Yi,
  qa,
  Ga,
  Ya,
  ni = !1,
  $r = [],
  _t = null,
  Tt = null,
  Rt = null,
  sr = new Map(),
  ar = new Map(),
  Et = [],
  Pd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ts(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      _t = null;
      break;
    case "dragenter":
    case "dragleave":
      Tt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ar.delete(t.pointerId);
  }
}
function Un(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Pr(t)), t !== null && Yi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Od(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (_t = Un(_t, e, t, n, r, l)), !0;
    case "dragenter":
      return (Tt = Un(Tt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Rt = Un(Rt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return sr.set(o, Un(sr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), ar.set(o, Un(ar.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Xa(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var n = ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ja(n)), t !== null)) {
          (e.blockedOn = t),
            Ya(e.priority, function () {
              qa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (bo = r), n.target.dispatchEvent(r), (bo = null);
    } else return (t = Pr(n)), t !== null && Yi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ns(e, t, n) {
  Zr(e) && n.delete(t);
}
function Nd() {
  (ni = !1),
    _t !== null && Zr(_t) && (_t = null),
    Tt !== null && Zr(Tt) && (Tt = null),
    Rt !== null && Zr(Rt) && (Rt = null),
    sr.forEach(ns),
    ar.forEach(ns);
}
function Qn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ni ||
      ((ni = !0),
      Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Nd)));
}
function cr(e) {
  function t(l) {
    return Qn(l, e);
  }
  if (0 < $r.length) {
    Qn($r[0], e);
    for (var n = 1; n < $r.length; n++) {
      var r = $r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    _t !== null && Qn(_t, e),
      Tt !== null && Qn(Tt, e),
      Rt !== null && Qn(Rt, e),
      sr.forEach(t),
      ar.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    Xa(n), n.blockedOn === null && Et.shift();
}
var En = gt.ReactCurrentBatchConfig,
  pl = !0;
function _d(e, t, n, r) {
  var l = U,
    o = En.transition;
  En.transition = null;
  try {
    (U = 1), Xi(e, t, n, r);
  } finally {
    (U = l), (En.transition = o);
  }
}
function Td(e, t, n, r) {
  var l = U,
    o = En.transition;
  En.transition = null;
  try {
    (U = 4), Xi(e, t, n, r);
  } finally {
    (U = l), (En.transition = o);
  }
}
function Xi(e, t, n, r) {
  if (pl) {
    var l = ri(e, t, n, r);
    if (l === null) wo(e, t, r, hl, n), ts(e, r);
    else if (Od(l, e, t, n, r)) r.stopPropagation();
    else if ((ts(e, r), t & 4 && -1 < Pd.indexOf(e))) {
      for (; l !== null; ) {
        var o = Pr(l);
        if (
          (o !== null && Ka(o),
          (o = ri(e, t, n, r)),
          o === null && wo(e, t, r, hl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else wo(e, t, r, null, n);
  }
}
var hl = null;
function ri(e, t, n, r) {
  if (((hl = null), (e = Ki(r)), (e = Bt(e)), e !== null))
    if (((t = ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ja(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (hl = e), null;
}
function ba(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (vd()) {
        case qi:
          return 1;
        case Ha:
          return 4;
        case fl:
        case yd:
          return 16;
        case Va:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ot = null,
  bi = null,
  Jr = null;
function Za() {
  if (Jr) return Jr;
  var e,
    t = bi,
    n = t.length,
    r,
    l = "value" in Ot ? Ot.value : Ot.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function el(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zr() {
  return !0;
}
function rs() {
  return !1;
}
function Me(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? zr
        : rs),
      (this.isPropagationStopped = rs),
      this
    );
  }
  return (
    b(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zr));
      },
      persist: function () {},
      isPersistent: zr,
    }),
    t
  );
}
var Dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zi = Me(Dn),
  Er = b({}, Dn, { view: 0, detail: 0 }),
  Rd = Me(Er),
  ao,
  co,
  Hn,
  $l = b({}, Er, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ji,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Hn &&
            (Hn && e.type === "mousemove"
              ? ((ao = e.screenX - Hn.screenX), (co = e.screenY - Hn.screenY))
              : (co = ao = 0),
            (Hn = e)),
          ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : co;
    },
  }),
  ls = Me($l),
  Ld = b({}, $l, { dataTransfer: 0 }),
  Fd = Me(Ld),
  Id = b({}, Er, { relatedTarget: 0 }),
  fo = Me(Id),
  Md = b({}, Dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dd = Me(Md),
  $d = b({}, Dn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zd = Me($d),
  jd = b({}, Dn, { data: 0 }),
  os = Me(jd),
  Ad = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ud = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Qd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Hd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qd[e]) ? !!t[e] : !1;
}
function Ji() {
  return Hd;
}
var Vd = b({}, Er, {
    key: function (e) {
      if (e.key) {
        var t = Ad[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = el(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ud[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ji,
    charCode: function (e) {
      return e.type === "keypress" ? el(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? el(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bd = Me(Vd),
  Wd = b({}, $l, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  is = Me(Wd),
  Kd = b({}, Er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ji,
  }),
  qd = Me(Kd),
  Gd = b({}, Dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yd = Me(Gd),
  Xd = b({}, $l, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bd = Me(Xd),
  Zd = [9, 13, 27, 32],
  eu = ht && "CompositionEvent" in window,
  Zn = null;
ht && "documentMode" in document && (Zn = document.documentMode);
var Jd = ht && "TextEvent" in window && !Zn,
  Ja = ht && (!eu || (Zn && 8 < Zn && 11 >= Zn)),
  us = String.fromCharCode(32),
  ss = !1;
function ec(e, t) {
  switch (e) {
    case "keyup":
      return Zd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fn = !1;
function ep(e, t) {
  switch (e) {
    case "compositionend":
      return tc(t);
    case "keypress":
      return t.which !== 32 ? null : ((ss = !0), us);
    case "textInput":
      return (e = t.data), e === us && ss ? null : e;
    default:
      return null;
  }
}
function tp(e, t) {
  if (fn)
    return e === "compositionend" || (!eu && ec(e, t))
      ? ((e = Za()), (Jr = bi = Ot = null), (fn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ja && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var np = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function as(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!np[e.type] : t === "textarea";
}
function nc(e, t, n, r) {
  Ia(r),
    (t = ml(t, "onChange")),
    0 < t.length &&
      ((n = new Zi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jn = null,
  fr = null;
function rp(e) {
  pc(e, 0);
}
function zl(e) {
  var t = hn(e);
  if (Oa(t)) return e;
}
function lp(e, t) {
  if (e === "change") return t;
}
var rc = !1;
if (ht) {
  var po;
  if (ht) {
    var ho = "oninput" in document;
    if (!ho) {
      var cs = document.createElement("div");
      cs.setAttribute("oninput", "return;"),
        (ho = typeof cs.oninput == "function");
    }
    po = ho;
  } else po = !1;
  rc = po && (!document.documentMode || 9 < document.documentMode);
}
function fs() {
  Jn && (Jn.detachEvent("onpropertychange", lc), (fr = Jn = null));
}
function lc(e) {
  if (e.propertyName === "value" && zl(fr)) {
    var t = [];
    nc(t, fr, e, Ki(e)), za(rp, t);
  }
}
function op(e, t, n) {
  e === "focusin"
    ? (fs(), (Jn = t), (fr = n), Jn.attachEvent("onpropertychange", lc))
    : e === "focusout" && fs();
}
function ip(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return zl(fr);
}
function up(e, t) {
  if (e === "click") return zl(t);
}
function sp(e, t) {
  if (e === "input" || e === "change") return zl(t);
}
function ap(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xe = typeof Object.is == "function" ? Object.is : ap;
function dr(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ao.call(t, l) || !Xe(e[l], t[l])) return !1;
  }
  return !0;
}
function ds(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ps(e, t) {
  var n = ds(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ds(n);
  }
}
function oc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? oc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ic() {
  for (var e = window, t = sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sl(e.document);
  }
  return t;
}
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function cp(e) {
  var t = ic(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    oc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ps(n, o));
        var i = ps(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fp = ht && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  li = null,
  er = null,
  oi = !1;
function hs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oi ||
    dn == null ||
    dn !== sl(r) ||
    ((r = dn),
    "selectionStart" in r && tu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (er && dr(er, r)) ||
      ((er = r),
      (r = ml(li, "onSelect")),
      0 < r.length &&
        ((t = new Zi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function jr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pn = {
    animationend: jr("Animation", "AnimationEnd"),
    animationiteration: jr("Animation", "AnimationIteration"),
    animationstart: jr("Animation", "AnimationStart"),
    transitionend: jr("Transition", "TransitionEnd"),
  },
  mo = {},
  uc = {};
ht &&
  ((uc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pn.animationend.animation,
    delete pn.animationiteration.animation,
    delete pn.animationstart.animation),
  "TransitionEvent" in window || delete pn.transitionend.transition);
function jl(e) {
  if (mo[e]) return mo[e];
  if (!pn[e]) return e;
  var t = pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in uc) return (mo[e] = t[n]);
  return e;
}
var sc = jl("animationend"),
  ac = jl("animationiteration"),
  cc = jl("animationstart"),
  fc = jl("transitionend"),
  dc = new Map(),
  ms =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jt(e, t) {
  dc.set(e, t), rn(t, [e]);
}
for (var vo = 0; vo < ms.length; vo++) {
  var yo = ms[vo],
    dp = yo.toLowerCase(),
    pp = yo[0].toUpperCase() + yo.slice(1);
  jt(dp, "on" + pp);
}
jt(sc, "onAnimationEnd");
jt(ac, "onAnimationIteration");
jt(cc, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(fc, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function vs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), dd(r, t, void 0, e), (e.currentTarget = null);
}
function pc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          vs(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          vs(l, u, a), (o = s);
        }
    }
  }
  if (cl) throw ((e = ei), (cl = !1), (ei = null), e);
}
function V(e, t) {
  var n = t[ci];
  n === void 0 && (n = t[ci] = new Set());
  var r = e + "__bubble";
  n.has(r) || (hc(t, e, 2, !1), n.add(r));
}
function go(e, t, n) {
  var r = 0;
  t && (r |= 4), hc(n, e, r, t);
}
var Ar = "_reactListening" + Math.random().toString(36).slice(2);
function pr(e) {
  if (!e[Ar]) {
    (e[Ar] = !0),
      Sa.forEach(function (n) {
        n !== "selectionchange" && (hp.has(n) || go(n, !1, e), go(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ar] || ((t[Ar] = !0), go("selectionchange", !1, t));
  }
}
function hc(e, t, n, r) {
  switch (ba(t)) {
    case 1:
      var l = _d;
      break;
    case 4:
      l = Td;
      break;
    default:
      l = Xi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function wo(e, t, n, r, l) {
  var o = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Bt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  za(function () {
    var a = o,
      p = Ki(n),
      m = [];
    e: {
      var f = dc.get(e);
      if (f !== void 0) {
        var v = Zi,
          y = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Bd;
            break;
          case "focusin":
            (y = "focus"), (v = fo);
            break;
          case "focusout":
            (y = "blur"), (v = fo);
            break;
          case "beforeblur":
          case "afterblur":
            v = fo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ls;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Fd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = qd;
            break;
          case sc:
          case ac:
          case cc:
            v = Dd;
            break;
          case fc:
            v = Yd;
            break;
          case "scroll":
            v = Rd;
            break;
          case "wheel":
            v = bd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = zd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = is;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          d = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              d !== null && ((w = ur(c, d)), w != null && g.push(hr(c, w, h)))),
            S)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((f = new v(f, y, null, n, p)), m.push({ event: f, listeners: g }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== bo &&
            (y = n.relatedTarget || n.fromElement) &&
            (Bt(y) || y[mt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            p.window === p
              ? p
              : (f = p.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = a),
              (y = y ? Bt(y) : null),
              y !== null &&
                ((S = ln(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((g = ls),
            (w = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = is),
              (w = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (S = v == null ? f : hn(v)),
            (h = y == null ? f : hn(y)),
            (f = new g(w, c + "leave", v, n, p)),
            (f.target = S),
            (f.relatedTarget = h),
            (w = null),
            Bt(p) === a &&
              ((g = new g(d, c + "enter", y, n, p)),
              (g.target = h),
              (g.relatedTarget = S),
              (w = g)),
            (S = w),
            v && y)
          )
            t: {
              for (g = v, d = y, c = 0, h = g; h; h = sn(h)) c++;
              for (h = 0, w = d; w; w = sn(w)) h++;
              for (; 0 < c - h; ) (g = sn(g)), c--;
              for (; 0 < h - c; ) (d = sn(d)), h--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = sn(g)), (d = sn(d));
              }
              g = null;
            }
          else g = null;
          v !== null && ys(m, f, v, g, !1),
            y !== null && S !== null && ys(m, S, y, g, !0);
        }
      }
      e: {
        if (
          ((f = a ? hn(a) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var O = lp;
        else if (as(f))
          if (rc) O = sp;
          else {
            O = ip;
            var C = op;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (O = up);
        if (O && (O = O(e, a))) {
          nc(m, O, n, p);
          break e;
        }
        C && C(e, f, a),
          e === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            Ko(f, "number", f.value);
      }
      switch (((C = a ? hn(a) : window), e)) {
        case "focusin":
          (as(C) || C.contentEditable === "true") &&
            ((dn = C), (li = a), (er = null));
          break;
        case "focusout":
          er = li = dn = null;
          break;
        case "mousedown":
          oi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (oi = !1), hs(m, n, p);
          break;
        case "selectionchange":
          if (fp) break;
        case "keydown":
        case "keyup":
          hs(m, n, p);
      }
      var E;
      if (eu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        fn
          ? ec(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Ja &&
          n.locale !== "ko" &&
          (fn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && fn && (E = Za())
            : ((Ot = p),
              (bi = "value" in Ot ? Ot.value : Ot.textContent),
              (fn = !0))),
        (C = ml(a, P)),
        0 < C.length &&
          ((P = new os(P, e, null, n, p)),
          m.push({ event: P, listeners: C }),
          E ? (P.data = E) : ((E = tc(n)), E !== null && (P.data = E)))),
        (E = Jd ? ep(e, n) : tp(e, n)) &&
          ((a = ml(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new os("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: a }),
            (p.data = E)));
    }
    pc(m, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = ur(e, n)),
      o != null && r.unshift(hr(e, o, l)),
      (o = ur(e, t)),
      o != null && r.push(hr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ys(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = ur(n, o)), s != null && i.unshift(hr(n, s, u)))
        : l || ((s = ur(n, o)), s != null && i.push(hr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var mp = /\r\n?/g,
  vp = /\u0000|\uFFFD/g;
function gs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      mp,
      `
`
    )
    .replace(vp, "");
}
function Ur(e, t, n) {
  if (((t = gs(t)), gs(e) !== t && n)) throw Error(k(425));
}
function vl() {}
var ii = null,
  ui = null;
function si(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ai = typeof setTimeout == "function" ? setTimeout : void 0,
  yp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ws = typeof Promise == "function" ? Promise : void 0,
  gp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ws < "u"
      ? function (e) {
          return ws.resolve(null).then(e).catch(wp);
        }
      : ai;
function wp(e) {
  setTimeout(function () {
    throw e;
  });
}
function xo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), cr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  cr(t);
}
function Lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function xs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var $n = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + $n,
  mr = "__reactProps$" + $n,
  mt = "__reactContainer$" + $n,
  ci = "__reactEvents$" + $n,
  xp = "__reactListeners$" + $n,
  Sp = "__reactHandles$" + $n;
function Bt(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xs(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = xs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Pr(e) {
  return (
    (e = e[nt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Al(e) {
  return e[mr] || null;
}
var fi = [],
  mn = -1;
function At(e) {
  return { current: e };
}
function B(e) {
  0 > mn || ((e.current = fi[mn]), (fi[mn] = null), mn--);
}
function H(e, t) {
  mn++, (fi[mn] = e.current), (e.current = t);
}
var zt = {},
  me = At(zt),
  Pe = At(!1),
  bt = zt;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function yl() {
  B(Pe), B(me);
}
function Ss(e, t, n) {
  if (me.current !== zt) throw Error(k(168));
  H(me, t), H(Pe, n);
}
function mc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, od(e) || "Unknown", l));
  return b({}, n, r);
}
function gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (bt = me.current),
    H(me, e),
    H(Pe, Pe.current),
    !0
  );
}
function ks(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = mc(e, t, bt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(Pe),
      B(me),
      H(me, e))
    : B(Pe),
    H(Pe, n);
}
var st = null,
  Ul = !1,
  So = !1;
function vc(e) {
  st === null ? (st = [e]) : st.push(e);
}
function kp(e) {
  (Ul = !0), vc(e);
}
function Ut() {
  if (!So && st !== null) {
    So = !0;
    var e = 0,
      t = U;
    try {
      var n = st;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Ul = !1);
    } catch (l) {
      throw (st !== null && (st = st.slice(e + 1)), Qa(qi, Ut), l);
    } finally {
      (U = t), (So = !1);
    }
  }
  return null;
}
var vn = [],
  yn = 0,
  wl = null,
  xl = 0,
  $e = [],
  ze = 0,
  Zt = null,
  at = 1,
  ct = "";
function Ht(e, t) {
  (vn[yn++] = xl), (vn[yn++] = wl), (wl = e), (xl = t);
}
function yc(e, t, n) {
  ($e[ze++] = at), ($e[ze++] = ct), ($e[ze++] = Zt), (Zt = e);
  var r = at;
  e = ct;
  var l = 32 - Ge(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ge(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (at = (1 << (32 - Ge(t) + l)) | (n << l) | r),
      (ct = o + e);
  } else (at = (1 << o) | (n << l) | r), (ct = e);
}
function nu(e) {
  e.return !== null && (Ht(e, 1), yc(e, 1, 0));
}
function ru(e) {
  for (; e === wl; )
    (wl = vn[--yn]), (vn[yn] = null), (xl = vn[--yn]), (vn[yn] = null);
  for (; e === Zt; )
    (Zt = $e[--ze]),
      ($e[ze] = null),
      (ct = $e[--ze]),
      ($e[ze] = null),
      (at = $e[--ze]),
      ($e[ze] = null);
}
var Le = null,
  Re = null,
  W = !1,
  qe = null;
function gc(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (Re = Lt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zt !== null ? { id: at, overflow: ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function di(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pi(e) {
  if (W) {
    var t = Re;
    if (t) {
      var n = t;
      if (!Cs(e, t)) {
        if (di(e)) throw Error(k(418));
        t = Lt(n.nextSibling);
        var r = Le;
        t && Cs(e, t)
          ? gc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Le = e));
      }
    } else {
      if (di(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Le = e);
    }
  }
}
function Es(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Qr(e) {
  if (e !== Le) return !1;
  if (!W) return Es(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !si(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (di(e)) throw (wc(), Error(k(418)));
    for (; t; ) gc(e, t), (t = Lt(t.nextSibling));
  }
  if ((Es(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Le ? Lt(e.stateNode.nextSibling) : null;
  return !0;
}
function wc() {
  for (var e = Re; e; ) e = Lt(e.nextSibling);
}
function Tn() {
  (Re = Le = null), (W = !1);
}
function lu(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Cp = gt.ReactCurrentBatchConfig;
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = b({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Sl = At(null),
  kl = null,
  gn = null,
  ou = null;
function iu() {
  ou = gn = kl = null;
}
function uu(e) {
  var t = Sl.current;
  B(Sl), (e._currentValue = t);
}
function hi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Pn(e, t) {
  (kl = e),
    (ou = gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Ee = !0), (e.firstContext = null));
}
function Ue(e) {
  var t = e._currentValue;
  if (ou !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gn === null)) {
      if (kl === null) throw Error(k(308));
      (gn = e), (kl.dependencies = { lanes: 0, firstContext: e });
    } else gn = gn.next = e;
  return t;
}
var Wt = null;
function su(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function xc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), su(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    vt(e, r)
  );
}
function vt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Sc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ($ & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      vt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), su(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    vt(e, n)
  );
}
function tl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
function Ps(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Cl(e, t, n, r) {
  var l = e.updateQueue;
  kt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var f = u.lane,
        v = u.eventTime;
      if ((r & f) === f) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            g = u;
          switch (((f = t), (v = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                m = y.call(v, m, f);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (f = typeof y == "function" ? y.call(v, m, f) : y),
                f == null)
              )
                break e;
              m = b({}, m, f);
              break e;
            case 2:
              kt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [u]) : f.push(u));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = v), (s = m)) : (p = p.next = v),
          (i |= f);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (f = u),
          (u = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (en |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Os(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var kc = new xa.Component().refs;
function mi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : b({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ql = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Mt(e),
      o = dt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (Ye(t, e, l, r), tl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Mt(e),
      o = dt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, l)),
      t !== null && (Ye(t, e, l, r), tl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Mt(e),
      l = dt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ft(e, l, r)),
      t !== null && (Ye(t, e, r, n), tl(t, e, r));
  },
};
function Ns(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !dr(n, r) || !dr(l, o)
      : !0
  );
}
function Cc(e, t, n) {
  var r = !1,
    l = zt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ue(o))
      : ((l = Oe(t) ? bt : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? _n(e, l) : zt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ql),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _s(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
}
function vi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = kc), au(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ue(o))
    : ((o = Oe(t) ? bt : me.current), (l.context = _n(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (mi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ql.enqueueReplaceState(l, l.state, null),
      Cl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === kc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ts(e) {
  var t = e._init;
  return t(e._payload);
}
function Ec(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = Dt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((d.flags |= 2), c) : h)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, h, w) {
    return c === null || c.tag !== 6
      ? ((c = _o(h, d.mode, w)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function s(d, c, h, w) {
    var O = h.type;
    return O === cn
      ? p(d, c, h.props.children, w, h.key)
      : c !== null &&
        (c.elementType === O ||
          (typeof O == "object" &&
            O !== null &&
            O.$$typeof === St &&
            Ts(O) === c.type))
      ? ((w = l(c, h.props)), (w.ref = Vn(d, c, h)), (w.return = d), w)
      : ((w = ul(h.type, h.key, h.props, null, d.mode, w)),
        (w.ref = Vn(d, c, h)),
        (w.return = d),
        w);
  }
  function a(d, c, h, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = To(h, d.mode, w)), (c.return = d), c)
      : ((c = l(c, h.children || [])), (c.return = d), c);
  }
  function p(d, c, h, w, O) {
    return c === null || c.tag !== 7
      ? ((c = Yt(h, d.mode, w, O)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function m(d, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = _o("" + c, d.mode, h)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Lr:
          return (
            (h = ul(c.type, c.key, c.props, null, d.mode, h)),
            (h.ref = Vn(d, null, c)),
            (h.return = d),
            h
          );
        case an:
          return (c = To(c, d.mode, h)), (c.return = d), c;
        case St:
          var w = c._init;
          return m(d, w(c._payload), h);
      }
      if (qn(c) || jn(c))
        return (c = Yt(c, d.mode, h, null)), (c.return = d), c;
      Hr(d, c);
    }
    return null;
  }
  function f(d, c, h, w) {
    var O = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return O !== null ? null : u(d, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Lr:
          return h.key === O ? s(d, c, h, w) : null;
        case an:
          return h.key === O ? a(d, c, h, w) : null;
        case St:
          return (O = h._init), f(d, c, O(h._payload), w);
      }
      if (qn(h) || jn(h)) return O !== null ? null : p(d, c, h, w, null);
      Hr(d, h);
    }
    return null;
  }
  function v(d, c, h, w, O) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (d = d.get(h) || null), u(c, d, "" + w, O);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Lr:
          return (d = d.get(w.key === null ? h : w.key) || null), s(c, d, w, O);
        case an:
          return (d = d.get(w.key === null ? h : w.key) || null), a(c, d, w, O);
        case St:
          var C = w._init;
          return v(d, c, h, C(w._payload), O);
      }
      if (qn(w) || jn(w)) return (d = d.get(h) || null), p(c, d, w, O, null);
      Hr(c, w);
    }
    return null;
  }
  function y(d, c, h, w) {
    for (
      var O = null, C = null, E = c, P = (c = 0), N = null;
      E !== null && P < h.length;
      P++
    ) {
      E.index > P ? ((N = E), (E = null)) : (N = E.sibling);
      var R = f(d, E, h[P], w);
      if (R === null) {
        E === null && (E = N);
        break;
      }
      e && E && R.alternate === null && t(d, E),
        (c = o(R, c, P)),
        C === null ? (O = R) : (C.sibling = R),
        (C = R),
        (E = N);
    }
    if (P === h.length) return n(d, E), W && Ht(d, P), O;
    if (E === null) {
      for (; P < h.length; P++)
        (E = m(d, h[P], w)),
          E !== null &&
            ((c = o(E, c, P)), C === null ? (O = E) : (C.sibling = E), (C = E));
      return W && Ht(d, P), O;
    }
    for (E = r(d, E); P < h.length; P++)
      (N = v(E, d, P, h[P], w)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? P : N.key),
          (c = o(N, c, P)),
          C === null ? (O = N) : (C.sibling = N),
          (C = N));
    return (
      e &&
        E.forEach(function (L) {
          return t(d, L);
        }),
      W && Ht(d, P),
      O
    );
  }
  function g(d, c, h, w) {
    var O = jn(h);
    if (typeof O != "function") throw Error(k(150));
    if (((h = O.call(h)), h == null)) throw Error(k(151));
    for (
      var C = (O = null), E = c, P = (c = 0), N = null, R = h.next();
      E !== null && !R.done;
      P++, R = h.next()
    ) {
      E.index > P ? ((N = E), (E = null)) : (N = E.sibling);
      var L = f(d, E, R.value, w);
      if (L === null) {
        E === null && (E = N);
        break;
      }
      e && E && L.alternate === null && t(d, E),
        (c = o(L, c, P)),
        C === null ? (O = L) : (C.sibling = L),
        (C = L),
        (E = N);
    }
    if (R.done) return n(d, E), W && Ht(d, P), O;
    if (E === null) {
      for (; !R.done; P++, R = h.next())
        (R = m(d, R.value, w)),
          R !== null &&
            ((c = o(R, c, P)), C === null ? (O = R) : (C.sibling = R), (C = R));
      return W && Ht(d, P), O;
    }
    for (E = r(d, E); !R.done; P++, R = h.next())
      (R = v(E, d, P, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? P : R.key),
          (c = o(R, c, P)),
          C === null ? (O = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        E.forEach(function (re) {
          return t(d, re);
        }),
      W && Ht(d, P),
      O
    );
  }
  function S(d, c, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === cn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Lr:
          e: {
            for (var O = h.key, C = c; C !== null; ) {
              if (C.key === O) {
                if (((O = h.type), O === cn)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (c = l(C, h.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  C.elementType === O ||
                  (typeof O == "object" &&
                    O !== null &&
                    O.$$typeof === St &&
                    Ts(O) === C.type)
                ) {
                  n(d, C.sibling),
                    (c = l(C, h.props)),
                    (c.ref = Vn(d, C, h)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            h.type === cn
              ? ((c = Yt(h.props.children, d.mode, w, h.key)),
                (c.return = d),
                (d = c))
              : ((w = ul(h.type, h.key, h.props, null, d.mode, w)),
                (w.ref = Vn(d, c, h)),
                (w.return = d),
                (d = w));
          }
          return i(d);
        case an:
          e: {
            for (C = h.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = To(h, d.mode, w)), (c.return = d), (d = c);
          }
          return i(d);
        case St:
          return (C = h._init), S(d, c, C(h._payload), w);
      }
      if (qn(h)) return y(d, c, h, w);
      if (jn(h)) return g(d, c, h, w);
      Hr(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, h)), (c.return = d), (d = c))
          : (n(d, c), (c = _o(h, d.mode, w)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return S;
}
var Rn = Ec(!0),
  Pc = Ec(!1),
  Or = {},
  lt = At(Or),
  vr = At(Or),
  yr = At(Or);
function Kt(e) {
  if (e === Or) throw Error(k(174));
  return e;
}
function cu(e, t) {
  switch ((H(yr, t), H(vr, e), H(lt, Or), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Go(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Go(t, e));
  }
  B(lt), H(lt, t);
}
function Ln() {
  B(lt), B(vr), B(yr);
}
function Oc(e) {
  Kt(yr.current);
  var t = Kt(lt.current),
    n = Go(t, e.type);
  t !== n && (H(vr, e), H(lt, n));
}
function fu(e) {
  vr.current === e && (B(lt), B(vr));
}
var Y = At(0);
function El(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ko = [];
function du() {
  for (var e = 0; e < ko.length; e++)
    ko[e]._workInProgressVersionPrimary = null;
  ko.length = 0;
}
var nl = gt.ReactCurrentDispatcher,
  Co = gt.ReactCurrentBatchConfig,
  Jt = 0,
  X = null,
  te = null,
  le = null,
  Pl = !1,
  tr = !1,
  gr = 0,
  Ep = 0;
function fe() {
  throw Error(k(321));
}
function pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function hu(e, t, n, r, l, o) {
  if (
    ((Jt = o),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (nl.current = e === null || e.memoizedState === null ? _p : Tp),
    (e = n(r, l)),
    tr)
  ) {
    o = 0;
    do {
      if (((tr = !1), (gr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (le = te = null),
        (t.updateQueue = null),
        (nl.current = Rp),
        (e = n(r, l));
    } while (tr);
  }
  if (
    ((nl.current = Ol),
    (t = te !== null && te.next !== null),
    (Jt = 0),
    (le = te = X = null),
    (Pl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function mu() {
  var e = gr !== 0;
  return (gr = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (X.memoizedState = le = e) : (le = le.next = e), le;
}
function Qe() {
  if (te === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = le === null ? X.memoizedState : le.next;
  if (t !== null) (le = t), (te = e);
  else {
    if (e === null) throw Error(k(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      le === null ? (X.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eo(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = te,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Jt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (X.lanes |= p),
          (en |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Xe(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (X.lanes |= o), (en |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Po(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Xe(o, t.memoizedState) || (Ee = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Nc() {}
function _c(e, t) {
  var n = X,
    r = Qe(),
    l = t(),
    o = !Xe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ee = !0)),
    (r = r.queue),
    vu(Lc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xr(9, Rc.bind(null, n, r, l, t), void 0, null),
      oe === null)
    )
      throw Error(k(349));
    (Jt & 30) !== 0 || Tc(n, t, l);
  }
  return l;
}
function Tc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fc(t) && Ic(e);
}
function Lc(e, t, n) {
  return n(function () {
    Fc(t) && Ic(e);
  });
}
function Fc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function Ic(e) {
  var t = vt(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function Rs(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Np.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function xr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Mc() {
  return Qe().memoizedState;
}
function rl(e, t, n, r) {
  var l = tt();
  (X.flags |= e),
    (l.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hl(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var i = te.memoizedState;
    if (((o = i.destroy), r !== null && pu(r, i.deps))) {
      l.memoizedState = xr(t, n, o, r);
      return;
    }
  }
  (X.flags |= e), (l.memoizedState = xr(1 | t, n, o, r));
}
function Ls(e, t) {
  return rl(8390656, 8, e, t);
}
function vu(e, t) {
  return Hl(2048, 8, e, t);
}
function Dc(e, t) {
  return Hl(4, 2, e, t);
}
function $c(e, t) {
  return Hl(4, 4, e, t);
}
function zc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hl(4, 4, zc.bind(null, t, e), n)
  );
}
function yu() {}
function Ac(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Uc(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qc(e, t, n) {
  return (Jt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n))
    : (Xe(n, t) || ((n = Ba()), (X.lanes |= n), (en |= n), (e.baseState = !0)),
      t);
}
function Pp(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Co.transition;
  Co.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Co.transition = r);
  }
}
function Hc() {
  return Qe().memoizedState;
}
function Op(e, t, n) {
  var r = Mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Vc(e))
  )
    Bc(t, n);
  else if (((n = xc(e, t, n, r)), n !== null)) {
    var l = we();
    Ye(n, e, r, l), Wc(n, t, r);
  }
}
function Np(e, t, n) {
  var r = Mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vc(e)) Bc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Xe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), su(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = xc(e, t, l, r)),
      n !== null && ((l = we()), Ye(n, e, r, l), Wc(n, t, r));
  }
}
function Vc(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Bc(e, t) {
  tr = Pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wc(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
var Ol = {
    readContext: Ue,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  _p = {
    readContext: Ue,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ue,
    useEffect: Ls,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        rl(4194308, 4, zc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Op.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Rs,
    useDebugValue: yu,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = Rs(!1),
        t = e[0];
      return (e = Pp.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        l = tt();
      if (W) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(k(349));
        (Jt & 30) !== 0 || Tc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ls(Lc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        xr(9, Rc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = oe.identifierPrefix;
      if (W) {
        var n = ct,
          r = at;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ep++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Tp = {
    readContext: Ue,
    useCallback: Ac,
    useContext: Ue,
    useEffect: vu,
    useImperativeHandle: jc,
    useInsertionEffect: Dc,
    useLayoutEffect: $c,
    useMemo: Uc,
    useReducer: Eo,
    useRef: Mc,
    useState: function () {
      return Eo(wr);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = Qe();
      return Qc(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Eo(wr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Nc,
    useSyncExternalStore: _c,
    useId: Hc,
    unstable_isNewReconciler: !1,
  },
  Rp = {
    readContext: Ue,
    useCallback: Ac,
    useContext: Ue,
    useEffect: vu,
    useImperativeHandle: jc,
    useInsertionEffect: Dc,
    useLayoutEffect: $c,
    useMemo: Uc,
    useReducer: Po,
    useRef: Mc,
    useState: function () {
      return Po(wr);
    },
    useDebugValue: yu,
    useDeferredValue: function (e) {
      var t = Qe();
      return te === null ? (t.memoizedState = e) : Qc(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Po(wr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Nc,
    useSyncExternalStore: _c,
    useId: Hc,
    unstable_isNewReconciler: !1,
  };
function Fn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ld(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Oo(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function yi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Lp = typeof WeakMap == "function" ? WeakMap : Map;
function Kc(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _l || ((_l = !0), (Ni = r)), yi(e, t);
    }),
    n
  );
}
function qc(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        yi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        yi(e, t),
          typeof r != "function" &&
            (It === null ? (It = new Set([this])) : It.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Fs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Lp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Wp.bind(null, e, t, n)), t.then(e, e));
}
function Is(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ms(e, t, n, r, l) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var Fp = gt.ReactCurrentOwner,
  Ee = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Pc(t, null, n, r) : Rn(t, e.child, n, r);
}
function Ds(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Pn(t, l),
    (r = hu(e, t, n, r, o, l)),
    (n = mu()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (W && n && nu(t), (t.flags |= 1), ye(e, t, r, l), t.child)
  );
}
function $s(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Pu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Gc(e, t, o, r, l))
      : ((e = ul(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), (e.lanes & l) === 0)) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref)
    )
      return yt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (dr(o, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (Ee = !0);
      else return (t.lanes = e.lanes), yt(e, t, l);
  }
  return gi(e, t, n, r, l);
}
function Yc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(xn, _e),
        (_e |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          H(xn, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        H(xn, _e),
        (_e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(xn, _e),
      (_e |= r);
  return ye(e, t, l, n), t.child;
}
function Xc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gi(e, t, n, r, l) {
  var o = Oe(n) ? bt : me.current;
  return (
    (o = _n(t, o)),
    Pn(t, l),
    (n = hu(e, t, n, r, o, l)),
    (r = mu()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (W && r && nu(t), (t.flags |= 1), ye(e, t, n, l), t.child)
  );
}
function zs(e, t, n, r, l) {
  if (Oe(n)) {
    var o = !0;
    gl(t);
  } else o = !1;
  if ((Pn(t, l), t.stateNode === null))
    ll(e, t), Cc(t, n, r), vi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ue(a))
      : ((a = Oe(n) ? bt : me.current), (a = _n(t, a)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && _s(t, i, r, a)),
      (kt = !1);
    var f = t.memoizedState;
    (i.state = f),
      Cl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || f !== s || Pe.current || kt
        ? (typeof p == "function" && (mi(t, n, p, r), (s = t.memoizedState)),
          (u = kt || Ns(t, n, u, r, f, s, a))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Sc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Be(t.type, u)),
      (i.props = a),
      (m = t.pendingProps),
      (f = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ue(s))
        : ((s = Oe(n) ? bt : me.current), (s = _n(t, s)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || f !== s) && _s(t, i, r, s)),
      (kt = !1),
      (f = t.memoizedState),
      (i.state = f),
      Cl(t, r, i, l);
    var y = t.memoizedState;
    u !== m || f !== y || Pe.current || kt
      ? (typeof v == "function" && (mi(t, n, v, r), (y = t.memoizedState)),
        (a = kt || Ns(t, n, a, r, f, y, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return wi(e, t, n, r, o, l);
}
function wi(e, t, n, r, l, o) {
  Xc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && ks(t, n, !1), yt(e, t, o);
  (r = t.stateNode), (Fp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Rn(t, e.child, null, o)), (t.child = Rn(t, null, u, o)))
      : ye(e, t, u, o),
    (t.memoizedState = r.state),
    l && ks(t, n, !0),
    t.child
  );
}
function bc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ss(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ss(e, t.context, !1),
    cu(e, t.containerInfo);
}
function js(e, t, n, r, l) {
  return Tn(), lu(l), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Si(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zc(e, t, n) {
  var r = t.pendingProps,
    l = Y.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    H(Y, l & 1),
    e === null)
  )
    return (
      pi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              (r & 1) === 0 && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Wl(i, r, 0, null)),
              (e = Yt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Si(n)),
              (t.memoizedState = xi),
              e)
            : gu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ip(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      (i & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Dt(u, o)) : ((o = Yt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Si(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = xi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Dt(o, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function gu(e, t) {
  return (
    (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vr(e, t, n, r) {
  return (
    r !== null && lu(r),
    Rn(t, e.child, null, n),
    (e = gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ip(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Oo(Error(k(422)))), Vr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Wl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Yt(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        (t.mode & 1) !== 0 && Rn(t, e.child, null, i),
        (t.child.memoizedState = Si(i)),
        (t.memoizedState = xi),
        o);
  if ((t.mode & 1) === 0) return Vr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = Oo(o, r, void 0)), Vr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), Ee || u)) {
    if (((r = oe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), vt(e, l), Ye(r, e, l, -1));
    }
    return Eu(), (r = Oo(Error(k(421)))), Vr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Re = Lt(l.nextSibling)),
      (Le = t),
      (W = !0),
      (qe = null),
      e !== null &&
        (($e[ze++] = at),
        ($e[ze++] = ct),
        ($e[ze++] = Zt),
        (at = e.id),
        (ct = e.overflow),
        (Zt = t)),
      (t = gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function As(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hi(e.return, t, n);
}
function No(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Jc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ye(e, t, r.children, n), (r = Y.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && As(e, n, t);
        else if (e.tag === 19) As(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((H(Y, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && El(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          No(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && El(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        No(t, !0, n, null, o);
        break;
      case "together":
        No(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ll(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (en |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Mp(e, t, n) {
  switch (t.tag) {
    case 3:
      bc(t), Tn();
      break;
    case 5:
      Oc(t);
      break;
    case 1:
      Oe(t.type) && gl(t);
      break;
    case 4:
      cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      H(Sl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(Y, Y.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Zc(e, t, n)
          : (H(Y, Y.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      H(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Jc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        H(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Yc(e, t, n);
  }
  return yt(e, t, n);
}
var ef, ki, tf, nf;
ef = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ki = function () {};
tf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Kt(lt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Bo(e, l)), (r = Bo(e, r)), (o = []);
        break;
      case "select":
        (l = b({}, l, { value: void 0 })),
          (r = b({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = qo(e, l)), (r = qo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vl);
    }
    Yo(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (or.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (or.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && V("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
nf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bn(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dp(e, t, n) {
  var r = t.pendingProps;
  switch ((ru(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Oe(t.type) && yl(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ln(),
        B(Pe),
        B(me),
        du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), qe !== null && (Ri(qe), (qe = null)))),
        ki(e, t),
        de(t),
        null
      );
    case 5:
      fu(t);
      var l = Kt(yr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        tf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return de(t), null;
        }
        if (((e = Kt(lt.current)), Qr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[nt] = t), (r[mr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Yn.length; l++) V(Yn[l], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              Gu(r, o), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              Xu(r, o), V("invalid", r);
          }
          Yo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : or.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              Fr(r), Yu(r, o, !0);
              break;
            case "textarea":
              Fr(r), bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = vl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ta(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[nt] = t),
            (e[mr] = r),
            ef(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Xo(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Yn.length; l++) V(Yn[l], e);
                l = r;
                break;
              case "source":
                V("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (l = r);
                break;
              case "details":
                V("toggle", e), (l = r);
                break;
              case "input":
                Gu(e, r), (l = Bo(e, r)), V("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = b({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                Xu(e, r), (l = qo(e, r)), V("invalid", e);
                break;
              default:
                l = r;
            }
            Yo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? Fa(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Ra(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && ir(e, s)
                    : typeof s == "number" && ir(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (or.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && V("scroll", e)
                      : s != null && Hi(e, o, s, i));
              }
            switch (n) {
              case "input":
                Fr(e), Yu(e, r, !1);
                break;
              case "textarea":
                Fr(e), bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Sn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Sn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = vl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) nf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Kt(yr.current)), Kt(lt.current), Qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (o = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ur(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (B(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Re !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          wc(), Tn(), (t.flags |= 98560), (o = !1);
        else if (((o = Qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[nt] = t;
          } else
            Tn(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          de(t), (o = !1);
        } else qe !== null && (Ri(qe), (qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (Y.current & 1) !== 0
                ? ne === 0 && (ne = 3)
                : Eu())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Ln(), ki(e, t), e === null && pr(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return uu(t.type._context), de(t), null;
    case 17:
      return Oe(t.type) && yl(), de(t), null;
    case 19:
      if ((B(Y), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Bn(o, !1);
        else {
          if (ne !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((i = El(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Bn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return H(Y, (Y.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > In &&
            ((t.flags |= 128), (r = !0), Bn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = El(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
            )
              return de(t), null;
          } else
            2 * J() - o.renderingStartTime > In &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = Y.current),
          H(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (_e & 1073741824) !== 0 &&
            (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function $p(e, t) {
  switch ((ru(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && yl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ln(),
        B(Pe),
        B(me),
        du(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return fu(t), null;
    case 13:
      if ((B(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(Y), null;
    case 4:
      return Ln(), null;
    case 10:
      return uu(t.type._context), null;
    case 22:
    case 23:
      return Cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Br = !1,
  pe = !1,
  zp = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ci(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Us = !1;
function jp(e, t) {
  if (((ii = pl), (e = ic()), tu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            m = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (f = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (f === n && ++a === l && (u = i),
                f === o && ++p === r && (s = i),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = f), (f = m.parentNode);
            }
            m = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ui = { focusedElem: e, selectionRange: n }, pl = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var y = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    S = y.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Be(t.type, g),
                      S
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (w) {
          Z(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (y = Us), (Us = !1), y;
}
function nr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ci(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ei(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function rf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), rf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[mr], delete t[ci], delete t[xp], delete t[Sp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function lf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || lf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), (e = e.sibling);
}
function Oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
var ie = null,
  Ke = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) of(e, t, n), (n = n.sibling);
}
function of(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(Dl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || wn(n, t);
    case 6:
      var r = ie,
        l = Ke;
      (ie = null),
        xt(e, t, n),
        (ie = r),
        (Ke = l),
        ie !== null &&
          (Ke
            ? ((e = ie),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ie.removeChild(n.stateNode));
      break;
    case 18:
      ie !== null &&
        (Ke
          ? ((e = ie),
            (n = n.stateNode),
            e.nodeType === 8
              ? xo(e.parentNode, n)
              : e.nodeType === 1 && xo(e, n),
            cr(e))
          : xo(ie, n.stateNode));
      break;
    case 4:
      (r = ie),
        (l = Ke),
        (ie = n.stateNode.containerInfo),
        (Ke = !0),
        xt(e, t, n),
        (ie = r),
        (Ke = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && Ci(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Z(n, t, u);
        }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), xt(e, t, n), (pe = r))
        : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function Hs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zp()),
      t.forEach(function (r) {
        var l = qp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ie = u.stateNode), (Ke = !1);
              break e;
            case 3:
              (ie = u.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (ie = u.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          u = u.return;
        }
        if (ie === null) throw Error(k(160));
        of(o, i, l), (ie = null), (Ke = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        Z(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) uf(t, e), (t = t.sibling);
}
function uf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), et(e), r & 4)) {
        try {
          nr(3, e, e.return), Vl(3, e);
        } catch (g) {
          Z(e, e.return, g);
        }
        try {
          nr(5, e, e.return);
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 1:
      He(t, e), et(e), r & 512 && n !== null && wn(n, n.return);
      break;
    case 5:
      if (
        (He(t, e),
        et(e),
        r & 512 && n !== null && wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          ir(l, "");
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Na(l, o),
              Xo(u, i);
            var a = Xo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                m = s[i + 1];
              p === "style"
                ? Fa(l, m)
                : p === "dangerouslySetInnerHTML"
                ? Ra(l, m)
                : p === "children"
                ? ir(l, m)
                : Hi(l, p, m, a);
            }
            switch (u) {
              case "input":
                Wo(l, o);
                break;
              case "textarea":
                _a(l, o);
                break;
              case "select":
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Sn(l, !!o.multiple, v, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Sn(l, !!o.multiple, o.defaultValue, !0)
                      : Sn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[mr] = o;
          } catch (g) {
            Z(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((He(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          cr(t.containerInfo);
        } catch (g) {
          Z(e, e.return, g);
        }
      break;
    case 4:
      He(t, e), et(e);
      break;
    case 13:
      He(t, e),
        et(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Su = J())),
        r & 4 && Hs(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (a = pe) || p), He(t, e), (pe = a)) : He(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && (e.mode & 1) !== 0)
        )
          for (T = e, p = e.child; p !== null; ) {
            for (m = T = p; T !== null; ) {
              switch (((f = T), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  nr(4, f, f.return);
                  break;
                case 1:
                  wn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      Z(r, n, g);
                    }
                  }
                  break;
                case 5:
                  wn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Bs(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (T = v)) : Bs(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = La("display", i)));
              } catch (g) {
                Z(e, e.return, g);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (g) {
                Z(e, e.return, g);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      He(t, e), et(e), r & 4 && Hs(e);
      break;
    case 21:
      break;
    default:
      He(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (lf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ir(l, ""), (r.flags &= -33));
          var o = Qs(e);
          Oi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Qs(e);
          Pi(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      Z(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ap(e, t, n) {
  (T = e), sf(e);
}
function sf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var l = T,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Br;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || pe;
        u = Br;
        var a = pe;
        if (((Br = i), (pe = s) && !a))
          for (T = l; T !== null; )
            (i = T),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ws(l)
                : s !== null
                ? ((s.return = i), (T = s))
                : Ws(l);
        for (; o !== null; ) (T = o), sf(o), (o = o.sibling);
        (T = l), (Br = u), (pe = a);
      }
      Vs(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && o !== null
        ? ((o.return = l), (T = o))
        : Vs(e);
  }
}
function Vs(e) {
  for (; T !== null; ) {
    var t = T;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Os(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Os(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && cr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        pe || (t.flags & 512 && Ei(t));
      } catch (f) {
        Z(t, t.return, f);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Bs(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Ws(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vl(4, t);
          } catch (s) {
            Z(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Z(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ei(t);
          } catch (s) {
            Z(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ei(t);
          } catch (s) {
            Z(t, i, s);
          }
      }
    } catch (s) {
      Z(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (T = u);
      break;
    }
    T = t.return;
  }
}
var Up = Math.ceil,
  Nl = gt.ReactCurrentDispatcher,
  wu = gt.ReactCurrentOwner,
  Ae = gt.ReactCurrentBatchConfig,
  $ = 0,
  oe = null,
  ee = null,
  ae = 0,
  _e = 0,
  xn = At(0),
  ne = 0,
  Sr = null,
  en = 0,
  Bl = 0,
  xu = 0,
  rr = null,
  ke = null,
  Su = 0,
  In = 1 / 0,
  ut = null,
  _l = !1,
  Ni = null,
  It = null,
  Wr = !1,
  Nt = null,
  Tl = 0,
  lr = 0,
  _i = null,
  ol = -1,
  il = 0;
function we() {
  return ($ & 6) !== 0 ? J() : ol !== -1 ? ol : (ol = J());
}
function Mt(e) {
  return (e.mode & 1) === 0
    ? 1
    : ($ & 2) !== 0 && ae !== 0
    ? ae & -ae
    : Cp.transition !== null
    ? (il === 0 && (il = Ba()), il)
    : ((e = U),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ba(e.type))),
      e);
}
function Ye(e, t, n, r) {
  if (50 < lr) throw ((lr = 0), (_i = null), Error(k(185)));
  Cr(e, n, r),
    (($ & 2) === 0 || e !== oe) &&
      (e === oe && (($ & 2) === 0 && (Bl |= n), ne === 4 && Pt(e, ae)),
      Ne(e, r),
      n === 1 &&
        $ === 0 &&
        (t.mode & 1) === 0 &&
        ((In = J() + 500), Ul && Ut()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Cd(e, t);
  var r = dl(e, e === oe ? ae : 0);
  if (r === 0)
    n !== null && es(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && es(n), t === 1))
      e.tag === 0 ? kp(Ks.bind(null, e)) : vc(Ks.bind(null, e)),
        gp(function () {
          ($ & 6) === 0 && Ut();
        }),
        (n = null);
    else {
      switch (Wa(r)) {
        case 1:
          n = qi;
          break;
        case 4:
          n = Ha;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = Va;
          break;
        default:
          n = fl;
      }
      n = vf(n, af.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function af(e, t) {
  if (((ol = -1), (il = 0), ($ & 6) !== 0)) throw Error(k(327));
  var n = e.callbackNode;
  if (On() && e.callbackNode !== n) return null;
  var r = dl(e, e === oe ? ae : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Rl(e, r);
  else {
    t = r;
    var l = $;
    $ |= 2;
    var o = ff();
    (oe !== e || ae !== t) && ((ut = null), (In = J() + 500), Gt(e, t));
    do
      try {
        Vp();
        break;
      } catch (u) {
        cf(e, u);
      }
    while (1);
    iu(),
      (Nl.current = o),
      ($ = l),
      ee !== null ? (t = 0) : ((oe = null), (ae = 0), (t = ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ti(e)), l !== 0 && ((r = l), (t = Ti(e, l)))), t === 1)
    )
      throw ((n = Sr), Gt(e, 0), Pt(e, r), Ne(e, J()), n);
    if (t === 6) Pt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !Qp(l) &&
          ((t = Rl(e, r)),
          t === 2 && ((o = ti(e)), o !== 0 && ((r = o), (t = Ti(e, o)))),
          t === 1))
      )
        throw ((n = Sr), Gt(e, 0), Pt(e, r), Ne(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Vt(e, ke, ut);
          break;
        case 3:
          if (
            (Pt(e, r), (r & 130023424) === r && ((t = Su + 500 - J()), 10 < t))
          ) {
            if (dl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ai(Vt.bind(null, e, ke, ut), t);
            break;
          }
          Vt(e, ke, ut);
          break;
        case 4:
          if ((Pt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ge(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Up(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ai(Vt.bind(null, e, ke, ut), r);
            break;
          }
          Vt(e, ke, ut);
          break;
        case 5:
          Vt(e, ke, ut);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ne(e, J()), e.callbackNode === n ? af.bind(null, e) : null;
}
function Ti(e, t) {
  var n = rr;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = Rl(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && Ri(t)),
    e
  );
}
function Ri(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Qp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Xe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pt(e, t) {
  for (
    t &= ~xu,
      t &= ~Bl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ks(e) {
  if (($ & 6) !== 0) throw Error(k(327));
  On();
  var t = dl(e, 0);
  if ((t & 1) === 0) return Ne(e, J()), null;
  var n = Rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ti(e);
    r !== 0 && ((t = r), (n = Ti(e, r)));
  }
  if (n === 1) throw ((n = Sr), Gt(e, 0), Pt(e, t), Ne(e, J()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, ke, ut),
    Ne(e, J()),
    null
  );
}
function ku(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((In = J() + 500), Ul && Ut());
  }
}
function tn(e) {
  Nt !== null && Nt.tag === 0 && ($ & 6) === 0 && On();
  var t = $;
  $ |= 1;
  var n = Ae.transition,
    r = U;
  try {
    if (((Ae.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Ae.transition = n), ($ = t), ($ & 6) === 0 && Ut();
  }
}
function Cu() {
  (_e = xn.current), B(xn);
}
function Gt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yp(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && yl();
          break;
        case 3:
          Ln(), B(Pe), B(me), du();
          break;
        case 5:
          fu(r);
          break;
        case 4:
          Ln();
          break;
        case 13:
          B(Y);
          break;
        case 19:
          B(Y);
          break;
        case 10:
          uu(r.type._context);
          break;
        case 22:
        case 23:
          Cu();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (ee = e = Dt(e.current, null)),
    (ae = _e = t),
    (ne = 0),
    (Sr = null),
    (xu = Bl = en = 0),
    (ke = rr = null),
    Wt !== null)
  ) {
    for (t = 0; t < Wt.length; t++)
      if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function cf(e, t) {
  do {
    var n = ee;
    try {
      if ((iu(), (nl.current = Ol), Pl)) {
        for (var r = X.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Pl = !1;
      }
      if (
        ((Jt = 0),
        (le = te = X = null),
        (tr = !1),
        (gr = 0),
        (wu.current = null),
        n === null || n.return === null)
      ) {
        (ne = 1), (Sr = t), (ee = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ae),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            m = p.tag;
          if ((p.mode & 1) === 0 && (m === 0 || m === 11 || m === 15)) {
            var f = p.alternate;
            f
              ? ((p.updateQueue = f.updateQueue),
                (p.memoizedState = f.memoizedState),
                (p.lanes = f.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = Is(i);
          if (v !== null) {
            (v.flags &= -257),
              Ms(v, i, u, o, t),
              v.mode & 1 && Fs(o, a, t),
              (t = v),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else y.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              Fs(o, a, t), Eu();
              break e;
            }
            s = Error(k(426));
          }
        } else if (W && u.mode & 1) {
          var S = Is(i);
          if (S !== null) {
            (S.flags & 65536) === 0 && (S.flags |= 256),
              Ms(S, i, u, o, t),
              lu(Fn(s, u));
            break e;
          }
        }
        (o = s = Fn(s, u)),
          ne !== 4 && (ne = 2),
          rr === null ? (rr = [o]) : rr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Kc(o, s, t);
              Ps(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type,
                h = o.stateNode;
              if (
                (o.flags & 128) === 0 &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (It === null || !It.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = qc(o, u, t);
                Ps(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pf(n);
    } catch (O) {
      (t = O), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function ff() {
  var e = Nl.current;
  return (Nl.current = Ol), e === null ? Ol : e;
}
function Eu() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    oe === null ||
      ((en & 268435455) === 0 && (Bl & 268435455) === 0) ||
      Pt(oe, ae);
}
function Rl(e, t) {
  var n = $;
  $ |= 2;
  var r = ff();
  (oe !== e || ae !== t) && ((ut = null), Gt(e, t));
  do
    try {
      Hp();
      break;
    } catch (l) {
      cf(e, l);
    }
  while (1);
  if ((iu(), ($ = n), (Nl.current = r), ee !== null)) throw Error(k(261));
  return (oe = null), (ae = 0), ne;
}
function Hp() {
  for (; ee !== null; ) df(ee);
}
function Vp() {
  for (; ee !== null && !hd(); ) df(ee);
}
function df(e) {
  var t = mf(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? pf(e) : (ee = t),
    (wu.current = null);
}
function pf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Dp(n, t, _e)), n !== null)) {
        ee = n;
        return;
      }
    } else {
      if (((n = $p(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Vt(e, t, n) {
  var r = U,
    l = Ae.transition;
  try {
    (Ae.transition = null), (U = 1), Bp(e, t, n, r);
  } finally {
    (Ae.transition = l), (U = r);
  }
  return null;
}
function Bp(e, t, n, r) {
  do On();
  while (Nt !== null);
  if (($ & 6) !== 0) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Ed(e, o),
    e === oe && ((ee = oe = null), (ae = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Wr ||
      ((Wr = !0),
      vf(fl, function () {
        return On(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || o)
  ) {
    (o = Ae.transition), (Ae.transition = null);
    var i = U;
    U = 1;
    var u = $;
    ($ |= 4),
      (wu.current = null),
      jp(e, n),
      uf(n, e),
      cp(ui),
      (pl = !!ii),
      (ui = ii = null),
      (e.current = n),
      Ap(n),
      md(),
      ($ = u),
      (U = i),
      (Ae.transition = o);
  } else e.current = n;
  if (
    (Wr && ((Wr = !1), (Nt = e), (Tl = l)),
    (o = e.pendingLanes),
    o === 0 && (It = null),
    gd(n.stateNode),
    Ne(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (_l) throw ((_l = !1), (e = Ni), (Ni = null), e);
  return (
    (Tl & 1) !== 0 && e.tag !== 0 && On(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === _i ? lr++ : ((lr = 0), (_i = e))) : (lr = 0),
    Ut(),
    null
  );
}
function On() {
  if (Nt !== null) {
    var e = Wa(Tl),
      t = Ae.transition,
      n = U;
    try {
      if (((Ae.transition = null), (U = 16 > e ? 16 : e), Nt === null))
        var r = !1;
      else {
        if (((e = Nt), (Nt = null), (Tl = 0), ($ & 6) !== 0))
          throw Error(k(331));
        var l = $;
        for ($ |= 4, T = e.current; T !== null; ) {
          var o = T,
            i = o.child;
          if ((T.flags & 16) !== 0) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (T = a; T !== null; ) {
                  var p = T;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (T = m);
                  else
                    for (; T !== null; ) {
                      p = T;
                      var f = p.sibling,
                        v = p.return;
                      if ((rf(p), p === a)) {
                        T = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (T = f);
                        break;
                      }
                      T = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              T = o;
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && i !== null)
            (i.return = o), (T = i);
          else
            e: for (; T !== null; ) {
              if (((o = T), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (T = d);
                break e;
              }
              T = o.return;
            }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          i = T;
          var h = i.child;
          if ((i.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = i), (T = h);
          else
            e: for (i = c; T !== null; ) {
              if (((u = T), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vl(9, u);
                  }
                } catch (O) {
                  Z(u, u.return, O);
                }
              if (u === i) {
                T = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (T = w);
                break e;
              }
              T = u.return;
            }
        }
        if (
          (($ = l), Ut(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(Dl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Ae.transition = t);
    }
  }
  return !1;
}
function qs(e, t, n) {
  (t = Fn(n, t)),
    (t = Kc(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = we()),
    e !== null && (Cr(e, 1, t), Ne(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) qs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (It === null || !It.has(r)))
        ) {
          (e = Fn(n, e)),
            (e = qc(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = we()),
            t !== null && (Cr(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Wp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ae & n) === n &&
      (ne === 4 || (ne === 3 && (ae & 130023424) === ae && 500 > J() - Su)
        ? Gt(e, 0)
        : (xu |= n)),
    Ne(e, t);
}
function hf(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Dr), (Dr <<= 1), (Dr & 130023424) === 0 && (Dr = 4194304)));
  var n = we();
  (e = vt(e, t)), e !== null && (Cr(e, t, n), Ne(e, n));
}
function Kp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hf(e, n);
}
function qp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), hf(e, n);
}
var mf;
mf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ee = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Ee = !1), Mp(e, t, n);
      Ee = (e.flags & 131072) !== 0;
    }
  else (Ee = !1), W && (t.flags & 1048576) !== 0 && yc(t, xl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ll(e, t), (e = t.pendingProps);
      var l = _n(t, me.current);
      Pn(t, n), (l = hu(null, t, r, e, l, n));
      var o = mu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((o = !0), gl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            au(t),
            (l.updater = Ql),
            (t.stateNode = l),
            (l._reactInternals = t),
            vi(t, r, e, n),
            (t = wi(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && nu(t), ye(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ll(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Yp(r)),
          (e = Be(r, e)),
          l)
        ) {
          case 0:
            t = gi(null, t, r, e, n);
            break e;
          case 1:
            t = zs(null, t, r, e, n);
            break e;
          case 11:
            t = Ds(null, t, r, e, n);
            break e;
          case 14:
            t = $s(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        gi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        zs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((bc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Sc(e, t),
          Cl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Fn(Error(k(423)), t)), (t = js(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Fn(Error(k(424)), t)), (t = js(e, t, r, n, l));
            break e;
          } else
            for (
              Re = Lt(t.stateNode.containerInfo.firstChild),
                Le = t,
                W = !0,
                qe = null,
                n = Pc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Tn(), r === l)) {
            t = yt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Oc(t),
        e === null && pi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        si(r, l) ? (i = null) : o !== null && si(r, o) && (t.flags |= 32),
        Xc(e, t),
        ye(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && pi(t), null;
    case 13:
      return Zc(e, t, n);
    case 4:
      return (
        cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Rn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Ds(e, t, r, l, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          H(Sl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Xe(o.value, i)) {
            if (o.children === l.children && !Pe.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = dt(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      hi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  hi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ye(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Pn(t, n),
        (l = Ue(l)),
        (r = r(l)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Be(r, t.pendingProps)),
        (l = Be(r.type, l)),
        $s(e, t, r, l, n)
      );
    case 15:
      return Gc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        ll(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), gl(t)) : (e = !1),
        Pn(t, n),
        Cc(t, r, l),
        vi(t, r, l, n),
        wi(null, t, r, !0, e, n)
      );
    case 19:
      return Jc(e, t, n);
    case 22:
      return Yc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function vf(e, t) {
  return Qa(e, t);
}
function Gp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new Gp(e, t, n, r);
}
function Pu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yp(e) {
  if (typeof e == "function") return Pu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bi)) return 11;
    if (e === Wi) return 14;
  }
  return 2;
}
function Dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ul(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Pu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case cn:
        return Yt(n.children, l, o, t);
      case Vi:
        (i = 8), (l |= 8);
        break;
      case Uo:
        return (
          (e = je(12, n, t, l | 2)), (e.elementType = Uo), (e.lanes = o), e
        );
      case Qo:
        return (e = je(13, n, t, l)), (e.elementType = Qo), (e.lanes = o), e;
      case Ho:
        return (e = je(19, n, t, l)), (e.elementType = Ho), (e.lanes = o), e;
      case Ea:
        return Wl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ka:
              i = 10;
              break e;
            case Ca:
              i = 9;
              break e;
            case Bi:
              i = 11;
              break e;
            case Wi:
              i = 14;
              break e;
            case St:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Yt(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Wl(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Ea),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _o(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function To(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = so(0)),
    (this.expirationTimes = so(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = so(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ou(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Xp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = je(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    au(o),
    e
  );
}
function bp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function yf(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (ln(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return mc(e, n, t);
  }
  return t;
}
function gf(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Ou(n, r, !0, e, l, o, i, u, s)),
    (e.context = yf(null)),
    (n = e.current),
    (r = we()),
    (l = Mt(n)),
    (o = dt(r, l)),
    (o.callback = t != null ? t : null),
    Ft(n, o, l),
    (e.current.lanes = l),
    Cr(e, l, r),
    Ne(e, r),
    e
  );
}
function Kl(e, t, n, r) {
  var l = t.current,
    o = we(),
    i = Mt(l);
  return (
    (n = yf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(l, t, i)),
    e !== null && (Ye(e, l, i, o), tl(e, l, i)),
    i
  );
}
function Ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nu(e, t) {
  Gs(e, t), (e = e.alternate) && Gs(e, t);
}
function Zp() {
  return null;
}
var wf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _u(e) {
  this._internalRoot = e;
}
ql.prototype.render = _u.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Kl(e, t, null, null);
};
ql.prototype.unmount = _u.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tn(function () {
      Kl(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function ql(e) {
  this._internalRoot = e;
}
ql.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ga();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && Xa(e);
  }
};
function Tu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ys() {}
function Jp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Ll(i);
        o.call(a);
      };
    }
    var i = gf(t, r, e, 0, null, !1, !1, "", Ys);
    return (
      (e._reactRootContainer = i),
      (e[mt] = i.current),
      pr(e.nodeType === 8 ? e.parentNode : e),
      tn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Ll(s);
      u.call(a);
    };
  }
  var s = Ou(e, 0, !1, null, null, !1, !1, "", Ys);
  return (
    (e._reactRootContainer = s),
    (e[mt] = s.current),
    pr(e.nodeType === 8 ? e.parentNode : e),
    tn(function () {
      Kl(t, s, n, r);
    }),
    s
  );
}
function Yl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Ll(i);
        u.call(s);
      };
    }
    Kl(t, i, e, l);
  } else i = Jp(n, t, e, l, r);
  return Ll(i);
}
Ka = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (Gi(t, n | 1), Ne(t, J()), ($ & 6) === 0 && ((In = J() + 500), Ut()));
      }
      break;
    case 13:
      tn(function () {
        var r = vt(e, 1);
        if (r !== null) {
          var l = we();
          Ye(r, e, 1, l);
        }
      }),
        Nu(e, 1);
  }
};
Yi = function (e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = we();
      Ye(t, e, 134217728, n);
    }
    Nu(e, 134217728);
  }
};
qa = function (e) {
  if (e.tag === 13) {
    var t = Mt(e),
      n = vt(e, t);
    if (n !== null) {
      var r = we();
      Ye(n, e, t, r);
    }
    Nu(e, t);
  }
};
Ga = function () {
  return U;
};
Ya = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Zo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Al(r);
            if (!l) throw Error(k(90));
            Oa(r), Wo(r, l);
          }
        }
      }
      break;
    case "textarea":
      _a(e, n);
      break;
    case "select":
      (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
  }
};
Da = ku;
$a = tn;
var eh = { usingClientEntryPoint: !1, Events: [Pr, hn, Al, Ia, Ma, ku] },
  Wn = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  th = {
    bundleType: Wn.bundleType,
    version: Wn.version,
    rendererPackageName: Wn.rendererPackageName,
    rendererConfig: Wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Aa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || Zp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber)
    try {
      (Dl = Kr.inject(th)), (rt = Kr);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eh;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tu(t)) throw Error(k(200));
  return bp(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!Tu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = wf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ou(e, 1, !1, null, null, n, !1, r, l)),
    (e[mt] = t.current),
    pr(e.nodeType === 8 ? e.parentNode : e),
    new _u(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Aa(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return tn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Gl(t)) throw Error(k(200));
  return Yl(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!Tu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = wf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = gf(t, null, e, 1, n != null ? n : null, l, !1, o, i)),
    (e[mt] = t.current),
    pr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ql(t);
};
Ie.render = function (e, t, n) {
  if (!Gl(t)) throw Error(k(200));
  return Yl(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Gl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (tn(function () {
        Yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = ku;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Yl(e, t, n, !1, r);
};
Ie.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ie);
})(ya);
var Xs = ya.exports;
(jo.createRoot = Xs.createRoot), (jo.hydrateRoot = Xs.hydrateRoot);
class Xl {
  constructor() {
    (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    return (
      this.listeners.push(t),
      this.onSubscribe(),
      () => {
        (this.listeners = this.listeners.filter((n) => n !== t)),
          this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const Ru = typeof window > "u";
function We() {}
function nh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rh(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function lh(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ro(e, t, n) {
  return bl(e)
    ? typeof t == "function"
      ? { ...n, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function Ct(e, t, n) {
  return bl(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function bs(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: l,
    predicate: o,
    queryKey: i,
    stale: u,
  } = e;
  if (bl(i)) {
    if (r) {
      if (t.queryHash !== Lu(i, t.options)) return !1;
    } else if (!Fl(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if ((n === "active" && !s) || (n === "inactive" && s)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (typeof l < "u" && l !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Zs(e, t) {
  const { exact: n, fetching: r, predicate: l, mutationKey: o } = e;
  if (bl(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (qt(t.options.mutationKey) !== qt(o)) return !1;
    } else if (!Fl(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (l && !l(t))
  );
}
function Lu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || qt)(e);
}
function qt(e) {
  return JSON.stringify(e, (t, n) =>
    Li(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, l) => ((r[l] = n[l]), r), {})
      : n
  );
}
function Fl(e, t) {
  return xf(e, t);
}
function xf(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !xf(e[n], t[n]))
    : !1;
}
function Sf(e, t) {
  if (e === t) return e;
  const n = Js(e) && Js(t);
  if (n || (Li(e) && Li(t))) {
    const r = n ? e.length : Object.keys(e).length,
      l = n ? t : Object.keys(t),
      o = l.length,
      i = n ? [] : {};
    let u = 0;
    for (let s = 0; s < o; s++) {
      const a = n ? s : l[s];
      (i[a] = Sf(e[a], t[a])), i[a] === e[a] && u++;
    }
    return r === o && u === r ? e : i;
  }
  return t;
}
function Js(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Li(e) {
  if (!ea(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!ea(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function ea(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function bl(e) {
  return Array.isArray(e);
}
function kf(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ta(e) {
  kf(0).then(e);
}
function oh() {
  if (typeof AbortController == "function") return new AbortController();
}
function ih(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Sf(e, t)
    : t;
}
class uh extends Xl {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Ru && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("visibilitychange", n, !1),
            window.addEventListener("focus", n, !1),
            () => {
              window.removeEventListener("visibilitychange", n),
                window.removeEventListener("focus", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    (this.focused = t), t && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Fi = new uh();
class sh extends Xl {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!Ru && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("online", n, !1),
            window.addEventListener("offline", n, !1),
            () => {
              window.removeEventListener("online", n),
                window.removeEventListener("offline", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    (this.online = t), t && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const Il = new sh();
function ah(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Fu(e) {
  return (e != null ? e : "online") === "online" ? Il.isOnline() : !0;
}
class Cf {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function Lo(e) {
  return e instanceof Cf;
}
function Ef(e) {
  let t = !1,
    n = 0,
    r = !1,
    l,
    o,
    i;
  const u = new Promise((S, d) => {
      (o = S), (i = d);
    }),
    s = (S) => {
      r || (v(new Cf(S)), e.abort == null || e.abort());
    },
    a = () => {
      t = !0;
    },
    p = () => {
      t = !1;
    },
    m = () => !Fi.isFocused() || (e.networkMode !== "always" && !Il.isOnline()),
    f = (S) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(S),
        l == null || l(),
        o(S));
    },
    v = (S) => {
      r ||
        ((r = !0), e.onError == null || e.onError(S), l == null || l(), i(S));
    },
    y = () =>
      new Promise((S) => {
        (l = (d) => {
          if (r || !m()) return S(d);
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (l = void 0), r || e.onContinue == null || e.onContinue();
      }),
    g = () => {
      if (r) return;
      let S;
      try {
        S = e.fn();
      } catch (d) {
        S = Promise.reject(d);
      }
      Promise.resolve(S)
        .then(f)
        .catch((d) => {
          var c, h;
          if (r) return;
          const w = (c = e.retry) != null ? c : 3,
            O = (h = e.retryDelay) != null ? h : ah,
            C = typeof O == "function" ? O(n, d) : O,
            E =
              w === !0 ||
              (typeof w == "number" && n < w) ||
              (typeof w == "function" && w(n, d));
          if (t || !E) {
            v(d);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, d),
            kf(C)
              .then(() => {
                if (m()) return y();
              })
              .then(() => {
                t ? v(d) : g();
              });
        });
    };
  return (
    Fu(e.networkMode) ? g() : y().then(g),
    {
      promise: u,
      cancel: s,
      continue: () => {
        l == null || l();
      },
      cancelRetry: a,
      continueRetry: p,
    }
  );
}
const Iu = console;
function ch() {
  let e = [],
    t = 0,
    n = (p) => {
      p();
    },
    r = (p) => {
      p();
    };
  const l = (p) => {
      let m;
      t++;
      try {
        m = p();
      } finally {
        t--, t || u();
      }
      return m;
    },
    o = (p) => {
      t
        ? e.push(p)
        : ta(() => {
            n(p);
          });
    },
    i =
      (p) =>
      (...m) => {
        o(() => {
          p(...m);
        });
      },
    u = () => {
      const p = e;
      (e = []),
        p.length &&
          ta(() => {
            r(() => {
              p.forEach((m) => {
                n(m);
              });
            });
          });
    };
  return {
    batch: l,
    batchCalls: i,
    schedule: o,
    setNotifyFunction: (p) => {
      n = p;
    },
    setBatchNotifyFunction: (p) => {
      r = p;
    },
  };
}
const ge = ch();
class Pf {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      rh(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t != null ? t : Ru ? 1 / 0 : 5 * 60 * 1e3
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class fh extends Pf {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || Iu),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || dh(this.options)),
      (this.state = this.initialState),
      (this.meta = t.meta);
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      (this.meta = t == null ? void 0 : t.meta),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = ih(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(We).catch(We) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !lh(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.indexOf(t) !== -1 &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, n) {
    var r, l;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var o;
        return (o = this.retryer) == null || o.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((y) => y.options.queryFn);
      v && this.setOptions(v.options);
    }
    Array.isArray(this.options.queryKey);
    const i = oh(),
      u = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      s = (v) => {
        Object.defineProperty(v, "signal", {
          enumerable: !0,
          get: () => {
            if (i) return (this.abortSignalConsumed = !0), i.signal;
          },
        });
      };
    s(u);
    const a = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(u))
          : Promise.reject("Missing queryFn"),
      p = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: a,
        meta: this.meta,
      };
    if (
      (s(p),
      (r = this.options.behavior) == null || r.onFetch(p),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((l = p.fetchOptions) == null ? void 0 : l.meta))
    ) {
      var m;
      this.dispatch({
        type: "fetch",
        meta: (m = p.fetchOptions) == null ? void 0 : m.meta,
      });
    }
    const f = (v) => {
      if (
        ((Lo(v) && v.silent) || this.dispatch({ type: "error", error: v }),
        !Lo(v))
      ) {
        var y, g;
        (y = (g = this.cache.config).onError) == null || y.call(g, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = Ef({
        fn: p.fetchFn,
        abort: i == null ? void 0 : i.abort.bind(i),
        onSuccess: (v) => {
          var y, g;
          if (typeof v > "u") {
            f(new Error("undefined"));
            return;
          }
          this.setData(v),
            (y = (g = this.cache.config).onSuccess) == null ||
              y.call(g, v, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: f,
        onFail: () => {
          this.dispatch({ type: "failed" });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: p.options.retry,
        retryDelay: p.options.retryDelay,
        networkMode: p.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var l, o;
      switch (t.type) {
        case "failed":
          return { ...r, fetchFailureCount: r.fetchFailureCount + 1 };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchMeta: (l = t.meta) != null ? l : null,
            fetchStatus: Fu(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (o = t.dataUpdatedAt) != null ? o : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0 }),
          };
        case "error":
          const i = t.error;
          return Lo(i) && i.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...r,
                error: i,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      ge.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function dh(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r =
      typeof e.initialData < "u"
        ? typeof e.initialDataUpdatedAt == "function"
          ? e.initialDataUpdatedAt()
          : e.initialDataUpdatedAt
        : 0,
    l = typeof t < "u";
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: l ? (r != null ? r : Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchMeta: null,
    isInvalidated: !1,
    status: l ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class ph extends Xl {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var l;
    const o = n.queryKey,
      i = (l = n.queryHash) != null ? l : Lu(o, n);
    let u = this.get(i);
    return (
      u ||
        ((u = new fh({
          cache: this,
          logger: t.getLogger(),
          queryKey: o,
          queryHash: i,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(o),
          meta: n.meta,
        })),
        this.add(u)),
      u
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    ge.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = Ct(t, n);
    return (
      typeof r.exact > "u" && (r.exact = !0), this.queries.find((l) => bs(r, l))
    );
  }
  findAll(t, n) {
    const [r] = Ct(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((l) => bs(r, l))
      : this.queries;
  }
  notify(t) {
    ge.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    ge.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    ge.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class hh extends Pf {
  constructor(t) {
    super(),
      (this.options = { ...t.defaultOptions, ...t.options }),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || Iu),
      (this.observers = []),
      (this.state = t.state || mh()),
      (this.meta = t.meta),
      this.updateCacheTime(this.options.cacheTime),
      this.scheduleGc();
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    return this.retryer
      ? (this.retryer.continue(), this.retryer.promise)
      : this.execute();
  }
  async execute() {
    const t = () => {
        var h;
        return (
          (this.retryer = Ef({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: () => {
              this.dispatch({ type: "failed" });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (h = this.options.retry) != null ? h : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === "loading";
    try {
      var r, l, o, i, u, s;
      if (!n) {
        var a, p, m, f;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          (a = (p = this.mutationCache.config).onMutate) == null ||
            a.call(p, this.state.variables, this);
        const w = await ((m = (f = this.options).onMutate) == null
          ? void 0
          : m.call(f, this.state.variables));
        w !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: w,
            variables: this.state.variables,
          });
      }
      const h = await t();
      return (
        (r = (l = this.mutationCache.config).onSuccess) == null ||
          r.call(l, h, this.state.variables, this.state.context, this),
        await ((o = (i = this.options).onSuccess) == null
          ? void 0
          : o.call(i, h, this.state.variables, this.state.context)),
        await ((u = (s = this.options).onSettled) == null
          ? void 0
          : u.call(s, h, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: h }),
        h
      );
    } catch (h) {
      try {
        var v, y, g, S, d, c;
        throw (
          ((v = (y = this.mutationCache.config).onError) == null ||
            v.call(y, h, this.state.variables, this.state.context, this),
          await ((g = (S = this.options).onError) == null
            ? void 0
            : g.call(S, h, this.state.variables, this.state.context)),
          await ((d = (c = this.options).onSettled) == null
            ? void 0
            : d.call(c, void 0, h, this.state.variables, this.state.context)),
          h)
        );
      } finally {
        this.dispatch({ type: "error", error: h });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: r.failureCount + 1 };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            error: null,
            isPaused: !Fu(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...r,
            data: t.data,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      ge.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function mh() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class vh extends Xl {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const l = new hh({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0,
      meta: n.meta,
    });
    return this.add(l), l;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    ge.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((n) => Zs(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => Zs(t, n));
  }
  notify(t) {
    ge.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.mutations.filter((n) => n.state.isPaused);
    return ge.batch(() =>
      t.reduce(
        (n, r) => n.then(() => r.continue().catch(We)),
        Promise.resolve()
      )
    );
  }
}
function yh() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, l, o, i;
        const u =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          s =
            (r = e.fetchOptions) == null || (l = r.meta) == null
              ? void 0
              : l.fetchMore,
          a = s == null ? void 0 : s.pageParam,
          p = (s == null ? void 0 : s.direction) === "forward",
          m = (s == null ? void 0 : s.direction) === "backward",
          f = ((o = e.state.data) == null ? void 0 : o.pages) || [],
          v = ((i = e.state.data) == null ? void 0 : i.pageParams) || [];
        let y = v,
          g = !1;
        const S = (C) => {
            Object.defineProperty(C, "signal", {
              enumerable: !0,
              get: () => {
                var E;
                if ((E = e.signal) != null && E.aborted) g = !0;
                else {
                  var P;
                  (P = e.signal) == null ||
                    P.addEventListener("abort", () => {
                      g = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          d = e.options.queryFn || (() => Promise.reject("Missing queryFn")),
          c = (C, E, P, N) => (
            (y = N ? [E, ...y] : [...y, E]), N ? [P, ...C] : [...C, P]
          ),
          h = (C, E, P, N) => {
            if (g) return Promise.reject("Cancelled");
            if (typeof P > "u" && !E && C.length) return Promise.resolve(C);
            const R = { queryKey: e.queryKey, pageParam: P, meta: e.meta };
            S(R);
            const L = d(R);
            return Promise.resolve(L).then((K) => c(C, P, K, N));
          };
        let w;
        if (!f.length) w = h([]);
        else if (p) {
          const C = typeof a < "u",
            E = C ? a : na(e.options, f);
          w = h(f, C, E);
        } else if (m) {
          const C = typeof a < "u",
            E = C ? a : gh(e.options, f);
          w = h(f, C, E, !0);
        } else {
          y = [];
          const C = typeof e.options.getNextPageParam > "u";
          w = (u && f[0] ? u(f[0], 0, f) : !0)
            ? h([], C, v[0])
            : Promise.resolve(c([], v[0], f[0]));
          for (let P = 1; P < f.length; P++)
            w = w.then((N) => {
              if (u && f[P] ? u(f[P], P, f) : !0) {
                const L = C ? v[P] : na(e.options, N);
                return h(N, C, L);
              }
              return Promise.resolve(c(N, v[P], f[P]));
            });
        }
        return w.then((C) => ({ pages: C, pageParams: y }));
      };
    },
  };
}
function na(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function gh(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class wh {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new ph()),
      (this.mutationCache = t.mutationCache || new vh()),
      (this.logger = t.logger || Iu),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []);
  }
  mount() {
    (this.unsubscribeFocus = Fi.subscribe(() => {
      Fi.isFocused() &&
        (this.resumePausedMutations(), this.queryCache.onFocus());
    })),
      (this.unsubscribeOnline = Il.subscribe(() => {
        Il.isOnline() &&
          (this.resumePausedMutations(), this.queryCache.onOnline());
      }));
  }
  unmount() {
    var t, n;
    (t = this.unsubscribeFocus) == null || t.call(this),
      (n = this.unsubscribeOnline) == null || n.call(this);
  }
  isFetching(t, n) {
    const [r] = Ct(t, n);
    return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const l = r.data;
        return [n, l];
      });
  }
  setQueryData(t, n, r) {
    const l = this.queryCache.find(t),
      o = l == null ? void 0 : l.state.data,
      i = nh(n, o);
    if (typeof i > "u") return;
    const u = Ro(t),
      s = this.defaultQueryOptions(u);
    return this.queryCache.build(this, s).setData(i, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return ge.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: l }) => [l, this.setQueryData(l, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = Ct(t, n),
      l = this.queryCache;
    ge.batch(() => {
      l.findAll(r).forEach((o) => {
        l.remove(o);
      });
    });
  }
  resetQueries(t, n, r) {
    const [l, o] = Ct(t, n, r),
      i = this.queryCache,
      u = { type: "active", ...l };
    return ge.batch(
      () => (
        i.findAll(l).forEach((s) => {
          s.reset();
        }),
        this.refetchQueries(u, o)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [l, o = {}] = Ct(t, n, r);
    typeof o.revert > "u" && (o.revert = !0);
    const i = ge.batch(() =>
      this.queryCache.findAll(l).map((u) => u.cancel(o))
    );
    return Promise.all(i).then(We).catch(We);
  }
  invalidateQueries(t, n, r) {
    const [l, o] = Ct(t, n, r);
    return ge.batch(() => {
      var i, u;
      if (
        (this.queryCache.findAll(l).forEach((a) => {
          a.invalidate();
        }),
        l.refetchType === "none")
      )
        return Promise.resolve();
      const s = {
        ...l,
        type:
          (i = (u = l.refetchType) != null ? u : l.type) != null ? i : "active",
      };
      return this.refetchQueries(s, o);
    });
  }
  refetchQueries(t, n, r) {
    const [l, o] = Ct(t, n, r),
      i = ge.batch(() =>
        this.queryCache
          .findAll(l)
          .filter((s) => !s.isDisabled())
          .map((s) => {
            var a;
            return s.fetch(void 0, {
              ...o,
              cancelRefetch:
                (a = o == null ? void 0 : o.cancelRefetch) != null ? a : !0,
              meta: { refetchPage: l.refetchPage },
            });
          })
      );
    let u = Promise.all(i).then(We);
    return (o != null && o.throwOnError) || (u = u.catch(We)), u;
  }
  fetchQuery(t, n, r) {
    const l = Ro(t, n, r),
      o = this.defaultQueryOptions(l);
    typeof o.retry > "u" && (o.retry = !1);
    const i = this.queryCache.build(this, o);
    return i.isStaleByTime(o.staleTime)
      ? i.fetch(o)
      : Promise.resolve(i.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(We).catch(We);
  }
  fetchInfiniteQuery(t, n, r) {
    const l = Ro(t, n, r);
    return (l.behavior = yh()), this.fetchQuery(l);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(We).catch(We);
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
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((l) => qt(t) === qt(l.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => Fl(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((l) => qt(t) === qt(l.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => Fl(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = Lu(n.queryKey, n)),
      typeof n.refetchOnReconnect > "u" &&
        (n.refetchOnReconnect = n.networkMode !== "always"),
      typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
var Zl = { exports: {} },
  Jl = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xh = x.exports,
  Sh = Symbol.for("react.element"),
  kh = Symbol.for("react.fragment"),
  Ch = Object.prototype.hasOwnProperty,
  Eh = xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ph = { key: !0, ref: !0, __self: !0, __source: !0 };
function Of(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ch.call(t, r) && !Ph.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Sh,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Eh.current,
  };
}
Jl.Fragment = kh;
Jl.jsx = Of;
Jl.jsxs = Of;
(function (e) {
  e.exports = Jl;
})(Zl);
const Oh = Zl.exports.Fragment,
  A = Zl.exports.jsx,
  Ve = Zl.exports.jsxs,
  ra = x.exports.createContext(void 0),
  Nh = x.exports.createContext(!1);
function _h(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = ra),
        window.ReactQueryClientContext)
      : ra)
  );
}
const Th = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    x.exports.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const l = _h(n, r);
    return A(Nh.Provider, {
      value: !n && r,
      children: A(l.Provider, { value: e, children: t }),
    });
  },
  Rh = "https://avatars.githubusercontent.com/u/155634569?v=4";
function qr(e, t, n, r) {
  return t.toLowerCase().startsWith(e) ? n : 0;
}
function Lh(e, t) {
  const n = e.toLowerCase(),
    r = { text: "Search google", url: `search:${e}`, type: "Google", score: 1 };
  if (/0x[0-f]{64}/.test(e))
    return [
      {
        text: "Open tx in etherscan",
        url: `https://blockscan.com/tx/${e}`,
        type: "Etherscan",
      },
      r,
    ];
  if (/0x[0-9A-Fa-f]{40}/.test(e))
    return [
      {
        text: "Open address in blockscan",
        url: `https://blockscan.com/address/${e}`,
        type: "Etherscan",
      },
      {
        text: "Open address in debank",
        url: `https://debank.com/profile/${e}`,
        type: "Debank",
      },
      {
        text: "Open address in LlamaFolio",
        url: `https://llamafolio.com/address/${e}`,
        type: "LlamaFolio",
      },
      r,
    ];
  if (/^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/.test(e))
    return [
      {
        text: "Open bitcoin address in explorer",
        url: `https://www.blockchain.com/explorer/addresses/btc/${e}`,
        type: "Explorer",
      },
      r,
    ];
  if (e.startsWith("$")) {
    const o = n.slice(1);
    return [
      ...t.tokens
        .filter((u) => u.symbol.startsWith(o))
        .slice(0, 3)
        .map((u) => ({
          text: `$${u.symbol.toUpperCase()} on coingecko`,
          url: `https://www.coingecko.com/en/coins/${u.id}`,
          type: "CoinGecko",
        })),
      r,
    ];
  }
  let l = [];
  return (
    e.length > 3 &&
      (l = l.concat(
        t.nfts.map((o) => ({
          text: `Check price of ${o.name} on defillama`,
          url: `https://defillama.com/nfts/collection/${o.collectionId}`,
          type: "NFT",
          score: qr(n, o.name, o.mcap),
        })),
        t.protocols.map((o) => ({
          text: `Open ${o.name}`,
          url: o.url,
          type: o.category,
          score: qr(n, o.name, o.tvl),
        })),
        t.other.map((o) => ({
          text: `Open ${o.name}`,
          url: o.url,
          type: o.name.split(" ")[0],
          score: qr(n, o.name, Number.MAX_VALUE),
        })),
        t.tokens.map((o) => ({
          text: `Check $${o.symbol.toUpperCase()} price`,
          url: `https://www.coingecko.com/en/coins/${o.id}`,
          type: "CoinGecko",
          score: qr(n, o.name, o.mcap * 0.7, o.symbol),
        }))
      )),
    l
      .sort((o, i) => i.score - o.score)
      .slice(0, 4)
      .filter((o) => o.score > 0)
      .concat([r])
  );
}
const Fh = chrome.storage.local.get(["nfts", "tokens", "protocols", "other"]);
async function Ih(e) {
  return Lh(e, await Fh);
}
var Mh = Object.defineProperty,
  Dh = (e, t, n) =>
    t in e
      ? Mh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Fo = (e, t, n) => (Dh(e, typeof t != "symbol" ? t + "" : t, n), n);
class $h {
  constructor() {
    Fo(this, "current", this.detect()),
      Fo(this, "handoffState", "pending"),
      Fo(this, "currentId", 0);
  }
  set(t) {
    this.current !== t &&
      ((this.handoffState = "pending"),
      (this.currentId = 0),
      (this.current = t));
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}
let Xt = new $h(),
  he = (e, t) => {
    Xt.isServer ? x.exports.useEffect(e, t) : x.exports.useLayoutEffect(e, t);
  };
function pt(e) {
  let t = x.exports.useRef(e);
  return (
    he(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function Mu(e, t) {
  let [n, r] = x.exports.useState(e),
    l = pt(e);
  return he(() => r(l.current), [l, r, ...t]), n;
}
function zh(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function nn() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          zh(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = nn();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Nr() {
  let [e] = x.exports.useState(nn);
  return x.exports.useEffect(() => () => e.dispose(), [e]), e;
}
let j = function (e) {
  let t = pt(e);
  return Ce.useCallback((...n) => t.current(...n), [t]);
};
function Du() {
  let [e, t] = x.exports.useState(Xt.isHandoffComplete);
  return (
    e && Xt.isHandoffComplete === !1 && t(!1),
    x.exports.useEffect(() => {
      e !== !0 && t(!0);
    }, [e]),
    x.exports.useEffect(() => Xt.handoff(), []),
    e
  );
}
var la;
let _r =
  (la = Ce.useId) != null
    ? la
    : function () {
        let e = Du(),
          [t, n] = Ce.useState(e ? () => Xt.nextId() : null);
        return (
          he(() => {
            t === null && n(Xt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function se(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, se), r);
}
function Nf(e) {
  return Xt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let oa = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var jh = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(jh || {}),
  Ah = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Ah || {}),
  Uh = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(Uh || {}),
  _f = ((e) => (
    (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
  ))(_f || {});
function Qh(e, t = 0) {
  var n;
  return e === ((n = Nf(e)) == null ? void 0 : n.body)
    ? !1
    : se(t, {
        [0]() {
          return e.matches(oa);
        },
        [1]() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(oa)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var Hh = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(Hh || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0
  ));
function Vh(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function Io(e, t, n) {
  let r = pt(t);
  x.exports.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function Bh(e, t, n = !0) {
  let r = x.exports.useRef(!1);
  x.exports.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, u) {
    if (!r.current || i.defaultPrevented) return;
    let s = (function p(m) {
        return typeof m == "function"
          ? p(m())
          : Array.isArray(m) || m instanceof Set
          ? m
          : [m];
      })(e),
      a = u(i);
    if (a !== null && a.getRootNode().contains(a)) {
      for (let p of s) {
        if (p === null) continue;
        let m = p instanceof HTMLElement ? p : p.current;
        if (
          (m != null && m.contains(a)) ||
          (i.composed && i.composedPath().includes(m))
        )
          return;
      }
      return (
        !Qh(a, _f.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a)
      );
    }
  }
  let o = x.exports.useRef(null);
  Io(
    "mousedown",
    (i) => {
      var u, s;
      r.current &&
        (o.current =
          ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null
            ? void 0
            : s[0]) || i.target);
    },
    !0
  ),
    Io(
      "click",
      (i) => {
        o.current && (l(i, () => o.current), (o.current = null));
      },
      !0
    ),
    Io(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function ia(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function Wh(e, t) {
  let [n, r] = x.exports.useState(() => ia(e));
  return (
    he(() => {
      r(ia(e));
    }, [e.type, e.as]),
    he(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let Kh = Symbol();
function on(...e) {
  let t = x.exports.useRef(e);
  x.exports.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = j((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Kh])) ? void 0 : n;
}
function qh({ container: e, accept: t, walk: n, enabled: r = !0 }) {
  let l = x.exports.useRef(t),
    o = x.exports.useRef(n);
  x.exports.useEffect(() => {
    (l.current = t), (o.current = n);
  }, [t, n]),
    he(() => {
      if (!e || !r) return;
      let i = Nf(e);
      if (!i) return;
      let u = l.current,
        s = o.current,
        a = Object.assign((m) => u(m), { acceptNode: u }),
        p = i.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1);
      for (; p.nextNode(); ) s(p.currentNode);
    }, [e, r, l, o]);
}
function Gh(e) {
  throw new Error("Unexpected object: " + e);
}
var ue = ((e) => (
  (e[(e.First = 0)] = "First"),
  (e[(e.Previous = 1)] = "Previous"),
  (e[(e.Next = 2)] = "Next"),
  (e[(e.Last = 3)] = "Last"),
  (e[(e.Specific = 4)] = "Specific"),
  (e[(e.Nothing = 5)] = "Nothing"),
  e
))(ue || {});
function Yh(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    l = r != null ? r : -1,
    o = (() => {
      switch (e.focus) {
        case 0:
          return n.findIndex((i) => !t.resolveDisabled(i));
        case 1: {
          let i = n
            .slice()
            .reverse()
            .findIndex((u, s, a) =>
              l !== -1 && a.length - s - 1 >= l ? !1 : !t.resolveDisabled(u)
            );
          return i === -1 ? i : n.length - 1 - i;
        }
        case 2:
          return n.findIndex((i, u) => (u <= l ? !1 : !t.resolveDisabled(i)));
        case 3: {
          let i = n
            .slice()
            .reverse()
            .findIndex((u) => !t.resolveDisabled(u));
          return i === -1 ? i : n.length - 1 - i;
        }
        case 4:
          return n.findIndex((i) => t.resolveId(i) === e.id);
        case 5:
          return null;
        default:
          Gh(e);
      }
    })();
  return o === -1 ? r : o;
}
function Ii(...e) {
  return e.filter(Boolean).join(" ");
}
var Ml = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Ml || {}),
  ft = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(ft || {});
function wt({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
}) {
  let u = Tf(t, e);
  if (o) return Gr(u, n, r, i);
  let s = l != null ? l : 0;
  if (s & 2) {
    let { static: a = !1, ...p } = u;
    if (a) return Gr(p, n, r, i);
  }
  if (s & 1) {
    let { unmount: a = !0, ...p } = u;
    return se(a ? 0 : 1, {
      [0]() {
        return null;
      },
      [1]() {
        return Gr({ ...p, hidden: !0, style: { display: "none" } }, n, r, i);
      },
    });
  }
  return Gr(u, n, r, i);
}
function Gr(e, t = {}, n, r) {
  let {
      as: l = n,
      children: o,
      refName: i = "ref",
      ...u
    } = Mo(e, ["unmount", "static"]),
    s = e.ref !== void 0 ? { [i]: e.ref } : {},
    a = typeof o == "function" ? o(t) : o;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let p = {};
  if (t) {
    let m = !1,
      f = [];
    for (let [v, y] of Object.entries(t))
      typeof y == "boolean" && (m = !0), y === !0 && f.push(v);
    m && (p["data-headlessui-state"] = f.join(" "));
  }
  if (l === x.exports.Fragment && Object.keys(Mi(u)).length > 0) {
    if (!x.exports.isValidElement(a) || (Array.isArray(a) && a.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((y) => `  - ${y}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((y) => `  - ${y}`).join(`
`),
        ].join(`
`)
      );
    let m = a.props,
      f =
        typeof (m == null ? void 0 : m.className) == "function"
          ? (...y) => Ii(m == null ? void 0 : m.className(...y), u.className)
          : Ii(m == null ? void 0 : m.className, u.className),
      v = f ? { className: f } : {};
    return x.exports.cloneElement(
      a,
      Object.assign(
        {},
        Tf(a.props, Mi(Mo(u, ["ref"]))),
        p,
        s,
        Xh(a.ref, s.ref),
        v
      )
    );
  }
  return x.exports.createElement(
    l,
    Object.assign(
      {},
      Mo(u, ["ref"]),
      l !== x.exports.Fragment && s,
      l !== x.exports.Fragment && p
    ),
    a
  );
}
function Xh(...e) {
  return {
    ref: e.every((t) => t == null)
      ? void 0
      : (t) => {
          for (let n of e)
            n != null && (typeof n == "function" ? n(t) : (n.current = t));
        },
  };
}
function Tf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let u of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          u(l, ...o);
        }
      },
    });
  return t;
}
function ot(e) {
  var t;
  return Object.assign(x.exports.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Mi(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Mo(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function bh(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Zh(n) ? !1 : r;
}
function Zh(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function Rf(e = {}, t = null, n = []) {
  for (let [r, l] of Object.entries(e)) Ff(n, Lf(t, r), l);
  return n;
}
function Lf(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ff(e, t, n) {
  if (Array.isArray(n))
    for (let [r, l] of n.entries()) Ff(e, Lf(t, r.toString()), l);
  else
    n instanceof Date
      ? e.push([t, n.toISOString()])
      : typeof n == "boolean"
      ? e.push([t, n ? "1" : "0"])
      : typeof n == "string"
      ? e.push([t, n])
      : typeof n == "number"
      ? e.push([t, `${n}`])
      : n == null
      ? e.push([t, ""])
      : Rf(n, t, e);
}
let Jh = "div";
var If = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(If || {});
function em(e, t) {
  let { features: n = 1, ...r } = e,
    l = {
      ref: t,
      "aria-hidden": (n & 2) === 2 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((n & 4) === 4 && (n & 2) !== 2 && { display: "none" }),
      },
    };
  return wt({
    ourProps: l,
    theirProps: r,
    slot: {},
    defaultTag: Jh,
    name: "Hidden",
  });
}
let tm = ot(em),
  $u = x.exports.createContext(null);
$u.displayName = "OpenClosedContext";
var Te = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Te || {});
function zu() {
  return x.exports.useContext($u);
}
function Mf({ value: e, children: t }) {
  return Ce.createElement($u.Provider, { value: e }, t);
}
var ve = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(ve || {});
function nm(e, t, n) {
  let [r, l] = x.exports.useState(n),
    o = e !== void 0,
    i = x.exports.useRef(o),
    u = x.exports.useRef(!1),
    s = x.exports.useRef(!1);
  return (
    o && !i.current && !u.current
      ? ((u.current = !0),
        (i.current = o),
        console.error(
          "A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen."
        ))
      : !o &&
        i.current &&
        !s.current &&
        ((s.current = !0),
        (i.current = o),
        console.error(
          "A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen."
        )),
    [o ? e : r, j((a) => (o || l(a), t == null ? void 0 : t(a)))]
  );
}
function ua(e, t) {
  let n = x.exports.useRef([]),
    r = j(e);
  x.exports.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let u = r(t, l);
        return (n.current = t), u;
      }
  }, [r, ...t]);
}
function sa(e) {
  return [e.screenX, e.screenY];
}
function rm() {
  let e = x.exports.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = sa(t);
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0);
    },
    update(t) {
      e.current = sa(t);
    },
  };
}
function lm() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function om() {
  return /Android/gi.test(window.navigator.userAgent);
}
function im() {
  return lm() || om();
}
var um = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(um || {}),
  sm = ((e) => (
    (e[(e.Single = 0)] = "Single"), (e[(e.Multi = 1)] = "Multi"), e
  ))(sm || {}),
  am = ((e) => (
    (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
  ))(am || {}),
  cm = ((e) => (
    (e[(e.OpenCombobox = 0)] = "OpenCombobox"),
    (e[(e.CloseCombobox = 1)] = "CloseCombobox"),
    (e[(e.GoToOption = 2)] = "GoToOption"),
    (e[(e.RegisterOption = 3)] = "RegisterOption"),
    (e[(e.UnregisterOption = 4)] = "UnregisterOption"),
    (e[(e.RegisterLabel = 5)] = "RegisterLabel"),
    e
  ))(cm || {});
function Do(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = Vh(t(e.options.slice()), (o) => o.dataRef.current.domRef.current),
    l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), { options: r, activeOptionIndex: l };
}
let fm = {
    [1](e) {
      var t;
      return ((t = e.dataRef.current) != null && t.disabled) ||
        e.comboboxState === 1
        ? e
        : { ...e, activeOptionIndex: null, comboboxState: 1 };
    },
    [0](e) {
      var t;
      if (
        ((t = e.dataRef.current) != null && t.disabled) ||
        e.comboboxState === 0
      )
        return e;
      let n = e.activeOptionIndex;
      if (e.dataRef.current) {
        let { isSelected: r } = e.dataRef.current,
          l = e.options.findIndex((o) => r(o.dataRef.current.value));
        l !== -1 && (n = l);
      }
      return { ...e, comboboxState: 0, activeOptionIndex: n };
    },
    [2](e, t) {
      var n, r, l, o;
      if (
        ((n = e.dataRef.current) != null && n.disabled) ||
        ((r = e.dataRef.current) != null &&
          r.optionsRef.current &&
          !(
            (l = e.dataRef.current) != null && l.optionsPropsRef.current.static
          ) &&
          e.comboboxState === 1)
      )
        return e;
      let i = Do(e);
      if (i.activeOptionIndex === null) {
        let s = i.options.findIndex((a) => !a.dataRef.current.disabled);
        s !== -1 && (i.activeOptionIndex = s);
      }
      let u = Yh(t, {
        resolveItems: () => i.options,
        resolveActiveIndex: () => i.activeOptionIndex,
        resolveId: (s) => s.id,
        resolveDisabled: (s) => s.dataRef.current.disabled,
      });
      return {
        ...e,
        ...i,
        activeOptionIndex: u,
        activationTrigger: (o = t.trigger) != null ? o : 1,
      };
    },
    [3]: (e, t) => {
      var n, r;
      let l = { id: t.id, dataRef: t.dataRef },
        o = Do(e, (u) => [...u, l]);
      e.activeOptionIndex === null &&
        (n = e.dataRef.current) != null &&
        n.isSelected(t.dataRef.current.value) &&
        (o.activeOptionIndex = o.options.indexOf(l));
      let i = { ...e, ...o, activationTrigger: 1 };
      return (
        (r = e.dataRef.current) != null &&
          r.__demoMode &&
          e.dataRef.current.value === void 0 &&
          (i.activeOptionIndex = 0),
        i
      );
    },
    [4]: (e, t) => {
      let n = Do(e, (r) => {
        let l = r.findIndex((o) => o.id === t.id);
        return l !== -1 && r.splice(l, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
    [5]: (e, t) => ({ ...e, labelId: t.id }),
  },
  ju = x.exports.createContext(null);
ju.displayName = "ComboboxActionsContext";
function Tr(e) {
  let t = x.exports.useContext(ju);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Tr), n);
  }
  return t;
}
let Au = x.exports.createContext(null);
Au.displayName = "ComboboxDataContext";
function zn(e) {
  let t = x.exports.useContext(Au);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, zn), n);
  }
  return t;
}
function dm(e, t) {
  return se(t.type, fm, e, t);
}
let pm = x.exports.Fragment;
function hm(e, t) {
  let {
      value: n,
      defaultValue: r,
      onChange: l,
      form: o,
      name: i,
      by: u = (M, Q) => M === Q,
      disabled: s = !1,
      __demoMode: a = !1,
      nullable: p = !1,
      multiple: m = !1,
      ...f
    } = e,
    [v = m ? [] : void 0, y] = nm(n, l, r),
    [g, S] = x.exports.useReducer(dm, {
      dataRef: x.exports.createRef(),
      comboboxState: a ? 0 : 1,
      options: [],
      activeOptionIndex: null,
      activationTrigger: 1,
      labelId: null,
    }),
    d = x.exports.useRef(!1),
    c = x.exports.useRef({ static: !1, hold: !1 }),
    h = x.exports.useRef(null),
    w = x.exports.useRef(null),
    O = x.exports.useRef(null),
    C = x.exports.useRef(null),
    E = j(
      typeof u == "string"
        ? (M, Q) => {
            let G = u;
            return (M == null ? void 0 : M[G]) === (Q == null ? void 0 : Q[G]);
          }
        : u
    ),
    P = x.exports.useCallback(
      (M) =>
        se(N.mode, { [1]: () => v.some((Q) => E(Q, M)), [0]: () => E(v, M) }),
      [v]
    ),
    N = x.exports.useMemo(
      () => ({
        ...g,
        optionsPropsRef: c,
        labelRef: h,
        inputRef: w,
        buttonRef: O,
        optionsRef: C,
        value: v,
        defaultValue: r,
        disabled: s,
        mode: m ? 1 : 0,
        get activeOptionIndex() {
          if (
            d.current &&
            g.activeOptionIndex === null &&
            g.options.length > 0
          ) {
            let M = g.options.findIndex((Q) => !Q.dataRef.current.disabled);
            if (M !== -1) return M;
          }
          return g.activeOptionIndex;
        },
        compare: E,
        isSelected: P,
        nullable: p,
        __demoMode: a,
      }),
      [v, r, s, m, p, a, g]
    ),
    R = x.exports.useRef(
      N.activeOptionIndex !== null ? N.options[N.activeOptionIndex] : null
    );
  x.exports.useEffect(() => {
    let M =
      N.activeOptionIndex !== null ? N.options[N.activeOptionIndex] : null;
    R.current !== M && (R.current = M);
  }),
    he(() => {
      g.dataRef.current = N;
    }, [N]),
    Bh(
      [N.buttonRef, N.inputRef, N.optionsRef],
      () => I.closeCombobox(),
      N.comboboxState === 0
    );
  let L = x.exports.useMemo(
      () => ({
        open: N.comboboxState === 0,
        disabled: s,
        activeIndex: N.activeOptionIndex,
        activeOption:
          N.activeOptionIndex === null
            ? null
            : N.options[N.activeOptionIndex].dataRef.current.value,
        value: v,
      }),
      [N, s, v]
    ),
    re = j((M) => {
      let Q = N.options.find((G) => G.id === M);
      Q && F(Q.dataRef.current.value);
    }),
    K = j(() => {
      if (N.activeOptionIndex !== null) {
        let { dataRef: M, id: Q } = N.options[N.activeOptionIndex];
        F(M.current.value), I.goToOption(ue.Specific, Q);
      }
    }),
    be = j(() => {
      S({ type: 0 }), (d.current = !0);
    }),
    De = j(() => {
      S({ type: 1 }), (d.current = !1);
    }),
    Ze = j(
      (M, Q, G) => (
        (d.current = !1),
        M === ue.Specific
          ? S({ type: 2, focus: ue.Specific, id: Q, trigger: G })
          : S({ type: 2, focus: M, trigger: G })
      )
    ),
    Je = j(
      (M, Q) => (
        S({ type: 3, id: M, dataRef: Q }),
        () => {
          var G;
          ((G = R.current) == null ? void 0 : G.id) === M && (d.current = !0),
            S({ type: 4, id: M });
        }
      )
    ),
    _ = j((M) => (S({ type: 5, id: M }), () => S({ type: 5, id: null }))),
    F = j((M) =>
      se(N.mode, {
        [0]() {
          return y == null ? void 0 : y(M);
        },
        [1]() {
          let Q = N.value.slice(),
            G = Q.findIndex((it) => E(it, M));
          return (
            G === -1 ? Q.push(M) : Q.splice(G, 1), y == null ? void 0 : y(Q)
          );
        },
      })
    ),
    I = x.exports.useMemo(
      () => ({
        onChange: F,
        registerOption: Je,
        registerLabel: _,
        goToOption: Ze,
        closeCombobox: De,
        openCombobox: be,
        selectActiveOption: K,
        selectOption: re,
      }),
      []
    ),
    z = t === null ? {} : { ref: t },
    q = x.exports.useRef(null),
    un = Nr();
  return (
    x.exports.useEffect(() => {
      q.current &&
        r !== void 0 &&
        un.addEventListener(q.current, "reset", () => {
          F(r);
        });
    }, [q, F]),
    Ce.createElement(
      ju.Provider,
      { value: I },
      Ce.createElement(
        Au.Provider,
        { value: N },
        Ve(Mf, {
          value: se(N.comboboxState, { [0]: Te.Open, [1]: Te.Closed }),
          children: [
            i != null &&
              v != null &&
              Rf({ [i]: v }).map(([M, Q], G) =>
                A(tm, {
                  features: If.Hidden,
                  ref:
                    G === 0
                      ? (it) => {
                          var Qu;
                          q.current =
                            (Qu = it == null ? void 0 : it.closest("form")) !=
                            null
                              ? Qu
                              : null;
                        }
                      : void 0,
                  ...Mi({
                    key: M,
                    as: "input",
                    type: "hidden",
                    hidden: !0,
                    readOnly: !0,
                    form: o,
                    name: M,
                    value: Q,
                  }),
                })
              ),
            wt({
              ourProps: z,
              theirProps: f,
              slot: L,
              defaultTag: pm,
              name: "Combobox",
            }),
          ],
        })
      )
    )
  );
}
let mm = "input";
function vm(e, t) {
  var n, r, l, o;
  let i = _r(),
    {
      id: u = `headlessui-combobox-input-${i}`,
      onChange: s,
      displayValue: a,
      type: p = "text",
      ...m
    } = e,
    f = zn("Combobox.Input"),
    v = Tr("Combobox.Input"),
    y = on(f.inputRef, t),
    g = x.exports.useRef(!1),
    S = Nr(),
    d = (function () {
      var L;
      return typeof a == "function" && f.value !== void 0
        ? (L = a(f.value)) != null
          ? L
          : ""
        : typeof f.value == "string"
        ? f.value
        : "";
    })();
  ua(
    ([L, re], [K, be]) => {
      g.current ||
        (f.inputRef.current &&
          ((be === 0 && re === 1) || L !== K) &&
          (f.inputRef.current.value = L));
    },
    [d, f.comboboxState]
  ),
    ua(
      ([L], [re]) => {
        if (L === 0 && re === 1) {
          let K = f.inputRef.current;
          if (!K) return;
          let be = K.value,
            {
              selectionStart: De,
              selectionEnd: Ze,
              selectionDirection: Je,
            } = K;
          (K.value = ""),
            (K.value = be),
            Je !== null
              ? K.setSelectionRange(De, Ze, Je)
              : K.setSelectionRange(De, Ze);
        }
      },
      [f.comboboxState]
    );
  let c = x.exports.useRef(!1),
    h = j(() => {
      c.current = !0;
    }),
    w = j(() => {
      setTimeout(() => {
        c.current = !1;
      });
    }),
    O = j((L) => {
      switch (((g.current = !0), L.key)) {
        case ve.Backspace:
        case ve.Delete:
          if (f.mode !== 0 || !f.nullable) return;
          let re = L.currentTarget;
          S.requestAnimationFrame(() => {
            re.value === "" &&
              (v.onChange(null),
              f.optionsRef.current && (f.optionsRef.current.scrollTop = 0),
              v.goToOption(ue.Nothing));
          });
          break;
        case ve.Enter:
          if (((g.current = !1), f.comboboxState !== 0 || c.current)) return;
          if (
            (L.preventDefault(),
            L.stopPropagation(),
            f.activeOptionIndex === null)
          ) {
            v.closeCombobox();
            return;
          }
          v.selectActiveOption(), f.mode === 0 && v.closeCombobox();
          break;
        case ve.ArrowDown:
          return (
            (g.current = !1),
            L.preventDefault(),
            L.stopPropagation(),
            se(f.comboboxState, {
              [0]: () => {
                v.goToOption(ue.Next);
              },
              [1]: () => {
                v.openCombobox();
              },
            })
          );
        case ve.ArrowUp:
          return (
            (g.current = !1),
            L.preventDefault(),
            L.stopPropagation(),
            se(f.comboboxState, {
              [0]: () => {
                v.goToOption(ue.Previous);
              },
              [1]: () => {
                v.openCombobox(),
                  S.nextFrame(() => {
                    f.value || v.goToOption(ue.Last);
                  });
              },
            })
          );
        case ve.Home:
          if (L.shiftKey) break;
          return (
            (g.current = !1),
            L.preventDefault(),
            L.stopPropagation(),
            v.goToOption(ue.First)
          );
        case ve.PageUp:
          return (
            (g.current = !1),
            L.preventDefault(),
            L.stopPropagation(),
            v.goToOption(ue.First)
          );
        case ve.End:
          if (L.shiftKey) break;
          return (
            (g.current = !1),
            L.preventDefault(),
            L.stopPropagation(),
            v.goToOption(ue.Last)
          );
        case ve.PageDown:
          return (
            (g.current = !1),
            L.preventDefault(),
            L.stopPropagation(),
            v.goToOption(ue.Last)
          );
        case ve.Escape:
          return (
            (g.current = !1),
            f.comboboxState !== 0
              ? void 0
              : (L.preventDefault(),
                f.optionsRef.current &&
                  !f.optionsPropsRef.current.static &&
                  L.stopPropagation(),
                v.closeCombobox())
          );
        case ve.Tab:
          if (((g.current = !1), f.comboboxState !== 0)) return;
          f.mode === 0 && v.selectActiveOption(), v.closeCombobox();
          break;
      }
    }),
    C = j((L) => {
      v.openCombobox(), s == null || s(L);
    }),
    E = j(() => {
      g.current = !1;
    }),
    P = Mu(() => {
      if (f.labelId) return [f.labelId].join(" ");
    }, [f.labelId]),
    N = x.exports.useMemo(
      () => ({ open: f.comboboxState === 0, disabled: f.disabled }),
      [f]
    ),
    R = {
      ref: y,
      id: u,
      role: "combobox",
      type: p,
      "aria-controls": (n = f.optionsRef.current) == null ? void 0 : n.id,
      "aria-expanded": f.disabled ? void 0 : f.comboboxState === 0,
      "aria-activedescendant":
        f.activeOptionIndex === null ||
        (r = f.options[f.activeOptionIndex]) == null
          ? void 0
          : r.id,
      "aria-labelledby": P,
      "aria-autocomplete": "list",
      defaultValue:
        (o =
          (l = e.defaultValue) != null
            ? l
            : f.defaultValue !== void 0
            ? a == null
              ? void 0
              : a(f.defaultValue)
            : null) != null
          ? o
          : f.defaultValue,
      disabled: f.disabled,
      onCompositionStart: h,
      onCompositionEnd: w,
      onKeyDown: O,
      onChange: C,
      onBlur: E,
    };
  return wt({
    ourProps: R,
    theirProps: m,
    slot: N,
    defaultTag: mm,
    name: "Combobox.Input",
  });
}
let ym = "button";
function gm(e, t) {
  var n;
  let r = zn("Combobox.Button"),
    l = Tr("Combobox.Button"),
    o = on(r.buttonRef, t),
    i = _r(),
    { id: u = `headlessui-combobox-button-${i}`, ...s } = e,
    a = Nr(),
    p = j((g) => {
      switch (g.key) {
        case ve.ArrowDown:
          return (
            g.preventDefault(),
            g.stopPropagation(),
            r.comboboxState === 1 && l.openCombobox(),
            a.nextFrame(() => {
              var S;
              return (S = r.inputRef.current) == null
                ? void 0
                : S.focus({ preventScroll: !0 });
            })
          );
        case ve.ArrowUp:
          return (
            g.preventDefault(),
            g.stopPropagation(),
            r.comboboxState === 1 &&
              (l.openCombobox(),
              a.nextFrame(() => {
                r.value || l.goToOption(ue.Last);
              })),
            a.nextFrame(() => {
              var S;
              return (S = r.inputRef.current) == null
                ? void 0
                : S.focus({ preventScroll: !0 });
            })
          );
        case ve.Escape:
          return r.comboboxState !== 0
            ? void 0
            : (g.preventDefault(),
              r.optionsRef.current &&
                !r.optionsPropsRef.current.static &&
                g.stopPropagation(),
              l.closeCombobox(),
              a.nextFrame(() => {
                var S;
                return (S = r.inputRef.current) == null
                  ? void 0
                  : S.focus({ preventScroll: !0 });
              }));
        default:
          return;
      }
    }),
    m = j((g) => {
      if (bh(g.currentTarget)) return g.preventDefault();
      r.comboboxState === 0
        ? l.closeCombobox()
        : (g.preventDefault(), l.openCombobox()),
        a.nextFrame(() => {
          var S;
          return (S = r.inputRef.current) == null
            ? void 0
            : S.focus({ preventScroll: !0 });
        });
    }),
    f = Mu(() => {
      if (r.labelId) return [r.labelId, u].join(" ");
    }, [r.labelId, u]),
    v = x.exports.useMemo(
      () => ({
        open: r.comboboxState === 0,
        disabled: r.disabled,
        value: r.value,
      }),
      [r]
    ),
    y = {
      ref: o,
      id: u,
      type: Wh(e, r.buttonRef),
      tabIndex: -1,
      "aria-haspopup": "listbox",
      "aria-controls": (n = r.optionsRef.current) == null ? void 0 : n.id,
      "aria-expanded": r.disabled ? void 0 : r.comboboxState === 0,
      "aria-labelledby": f,
      disabled: r.disabled,
      onClick: m,
      onKeyDown: p,
    };
  return wt({
    ourProps: y,
    theirProps: s,
    slot: v,
    defaultTag: ym,
    name: "Combobox.Button",
  });
}
let wm = "label";
function xm(e, t) {
  let n = _r(),
    { id: r = `headlessui-combobox-label-${n}`, ...l } = e,
    o = zn("Combobox.Label"),
    i = Tr("Combobox.Label"),
    u = on(o.labelRef, t);
  he(() => i.registerLabel(r), [r]);
  let s = j(() => {
      var p;
      return (p = o.inputRef.current) == null
        ? void 0
        : p.focus({ preventScroll: !0 });
    }),
    a = x.exports.useMemo(
      () => ({ open: o.comboboxState === 0, disabled: o.disabled }),
      [o]
    );
  return wt({
    ourProps: { ref: u, id: r, onClick: s },
    theirProps: l,
    slot: a,
    defaultTag: wm,
    name: "Combobox.Label",
  });
}
let Sm = "ul",
  km = Ml.RenderStrategy | Ml.Static;
function Cm(e, t) {
  let n = _r(),
    { id: r = `headlessui-combobox-options-${n}`, hold: l = !1, ...o } = e,
    i = zn("Combobox.Options"),
    u = on(i.optionsRef, t),
    s = zu(),
    a = (() =>
      s !== null ? (s & Te.Open) === Te.Open : i.comboboxState === 0)();
  he(() => {
    var v;
    i.optionsPropsRef.current.static = (v = e.static) != null ? v : !1;
  }, [i.optionsPropsRef, e.static]),
    he(() => {
      i.optionsPropsRef.current.hold = l;
    }, [i.optionsPropsRef, l]),
    qh({
      container: i.optionsRef.current,
      enabled: i.comboboxState === 0,
      accept(v) {
        return v.getAttribute("role") === "option"
          ? NodeFilter.FILTER_REJECT
          : v.hasAttribute("role")
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(v) {
        v.setAttribute("role", "none");
      },
    });
  let p = Mu(() => {
      var v, y;
      return (y = i.labelId) != null
        ? y
        : (v = i.buttonRef.current) == null
        ? void 0
        : v.id;
    }, [i.labelId, i.buttonRef.current]),
    m = x.exports.useMemo(() => ({ open: i.comboboxState === 0 }), [i]),
    f = {
      "aria-labelledby": p,
      role: "listbox",
      "aria-multiselectable": i.mode === 1 ? !0 : void 0,
      id: r,
      ref: u,
    };
  return wt({
    ourProps: f,
    theirProps: o,
    slot: m,
    defaultTag: Sm,
    features: km,
    visible: a,
    name: "Combobox.Options",
  });
}
let Em = "li";
function Pm(e, t) {
  var n, r;
  let l = _r(),
    {
      id: o = `headlessui-combobox-option-${l}`,
      disabled: i = !1,
      value: u,
      ...s
    } = e,
    a = zn("Combobox.Option"),
    p = Tr("Combobox.Option"),
    m =
      a.activeOptionIndex !== null
        ? a.options[a.activeOptionIndex].id === o
        : !1,
    f = a.isSelected(u),
    v = x.exports.useRef(null),
    y = pt({
      disabled: i,
      value: u,
      domRef: v,
      textValue:
        (r = (n = v.current) == null ? void 0 : n.textContent) == null
          ? void 0
          : r.toLowerCase(),
    }),
    g = on(t, v),
    S = j(() => p.selectOption(o));
  he(() => p.registerOption(o, y), [y, o]);
  let d = x.exports.useRef(!a.__demoMode);
  he(() => {
    if (!a.__demoMode) return;
    let N = nn();
    return (
      N.requestAnimationFrame(() => {
        d.current = !0;
      }),
      N.dispose
    );
  }, []),
    he(() => {
      if (
        a.comboboxState !== 0 ||
        !m ||
        !d.current ||
        a.activationTrigger === 0
      )
        return;
      let N = nn();
      return (
        N.requestAnimationFrame(() => {
          var R, L;
          (L = (R = v.current) == null ? void 0 : R.scrollIntoView) == null ||
            L.call(R, { block: "nearest" });
        }),
        N.dispose
      );
    }, [v, m, a.comboboxState, a.activationTrigger, a.activeOptionIndex]);
  let c = j((N) => {
      if (i) return N.preventDefault();
      S(),
        a.mode === 0 && p.closeCombobox(),
        im() ||
          requestAnimationFrame(() => {
            var R;
            return (R = a.inputRef.current) == null ? void 0 : R.focus();
          });
    }),
    h = j(() => {
      if (i) return p.goToOption(ue.Nothing);
      p.goToOption(ue.Specific, o);
    }),
    w = rm(),
    O = j((N) => w.update(N)),
    C = j((N) => {
      w.wasMoved(N) && (i || m || p.goToOption(ue.Specific, o, 0));
    }),
    E = j((N) => {
      w.wasMoved(N) &&
        (i ||
          (m && (a.optionsPropsRef.current.hold || p.goToOption(ue.Nothing))));
    }),
    P = x.exports.useMemo(
      () => ({ active: m, selected: f, disabled: i }),
      [m, f, i]
    );
  return wt({
    ourProps: {
      id: o,
      ref: g,
      role: "option",
      tabIndex: i === !0 ? void 0 : -1,
      "aria-disabled": i === !0 ? !0 : void 0,
      "aria-selected": f,
      disabled: void 0,
      onClick: c,
      onFocus: h,
      onPointerEnter: O,
      onMouseEnter: O,
      onPointerMove: C,
      onMouseMove: C,
      onPointerLeave: E,
      onMouseLeave: E,
    },
    theirProps: s,
    slot: P,
    defaultTag: Em,
    name: "Combobox.Option",
  });
}
let Om = ot(hm),
  Nm = ot(gm),
  _m = ot(vm),
  Tm = ot(xm),
  Rm = ot(Cm),
  Lm = ot(Pm),
  Yr = Object.assign(Om, {
    Input: _m,
    Button: Nm,
    Label: Tm,
    Options: Rm,
    Option: Lm,
  });
function Uu() {
  let e = x.exports.useRef(!1);
  return (
    he(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Fm(e = 0) {
  let [t, n] = x.exports.useState(e),
    r = Uu(),
    l = x.exports.useCallback(
      (s) => {
        r.current && n((a) => a | s);
      },
      [t, r]
    ),
    o = x.exports.useCallback((s) => Boolean(t & s), [t]),
    i = x.exports.useCallback(
      (s) => {
        r.current && n((a) => a & ~s);
      },
      [n, r]
    ),
    u = x.exports.useCallback(
      (s) => {
        r.current && n((a) => a ^ s);
      },
      [n]
    );
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: u };
}
function Im(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function $o(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function zo(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Mm(e, t) {
  let n = nn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((s) => {
      let [a = 0] = s
        .split(",")
        .filter(Boolean)
        .map((p) => (p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3))
        .sort((p, m) => m - p);
      return a;
    }),
    u = o + i;
  if (u !== 0) {
    n.group((a) => {
      a.setTimeout(() => {
        t(), a.dispose();
      }, u),
        a.addEventListener(e, "transitionrun", (p) => {
          p.target === p.currentTarget && a.dispose();
        });
    });
    let s = n.addEventListener(e, "transitionend", (a) => {
      a.target === a.currentTarget && (t(), s());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function Dm(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = nn(),
    i = r !== void 0 ? Im(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let u = se(l, { enter: () => t.enter, leave: () => t.leave }),
    s = se(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    a = se(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    zo(
      e,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered
    ),
    $o(e, ...u, ...a),
    o.nextFrame(() => {
      zo(e, ...a),
        $o(e, ...s),
        Mm(e, () => (zo(e, ...u), $o(e, ...t.entered), i()));
    }),
    o.dispose
  );
}
function $m({ container: e, direction: t, classes: n, onStart: r, onStop: l }) {
  let o = Uu(),
    i = Nr(),
    u = pt(t);
  he(() => {
    let s = nn();
    i.add(s.dispose);
    let a = e.current;
    if (a && u.current !== "idle" && o.current)
      return (
        s.dispose(),
        r.current(u.current),
        s.add(
          Dm(a, n.current, u.current === "enter", () => {
            s.dispose(), l.current(u.current);
          })
        ),
        s.dispose
      );
  }, [t]);
}
function Qt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let eo = x.exports.createContext(null);
eo.displayName = "TransitionContext";
var zm = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(zm || {});
function jm() {
  let e = x.exports.useContext(eo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Am() {
  let e = x.exports.useContext(to);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let to = x.exports.createContext(null);
to.displayName = "NestingContext";
function no(e) {
  return "children" in e
    ? no(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Df(e, t) {
  let n = pt(e),
    r = x.exports.useRef([]),
    l = Uu(),
    o = Nr(),
    i = j((v, y = ft.Hidden) => {
      let g = r.current.findIndex(({ el: S }) => S === v);
      g !== -1 &&
        (se(y, {
          [ft.Unmount]() {
            r.current.splice(g, 1);
          },
          [ft.Hidden]() {
            r.current[g].state = "hidden";
          },
        }),
        o.microTask(() => {
          var S;
          !no(r) && l.current && ((S = n.current) == null || S.call(n));
        }));
    }),
    u = j((v) => {
      let y = r.current.find(({ el: g }) => g === v);
      return (
        y
          ? y.state !== "visible" && (y.state = "visible")
          : r.current.push({ el: v, state: "visible" }),
        () => i(v, ft.Unmount)
      );
    }),
    s = x.exports.useRef([]),
    a = x.exports.useRef(Promise.resolve()),
    p = x.exports.useRef({ enter: [], leave: [], idle: [] }),
    m = j((v, y, g) => {
      s.current.splice(0),
        t &&
          (t.chains.current[y] = t.chains.current[y].filter(([S]) => S !== v)),
        t == null ||
          t.chains.current[y].push([
            v,
            new Promise((S) => {
              s.current.push(S);
            }),
          ]),
        t == null ||
          t.chains.current[y].push([
            v,
            new Promise((S) => {
              Promise.all(p.current[y].map(([d, c]) => c)).then(() => S());
            }),
          ]),
        y === "enter"
          ? (a.current = a.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => g(y)))
          : g(y);
    }),
    f = j((v, y, g) => {
      Promise.all(p.current[y].splice(0).map(([S, d]) => d))
        .then(() => {
          var S;
          (S = s.current.shift()) == null || S();
        })
        .then(() => g(y));
    });
  return x.exports.useMemo(
    () => ({
      children: r,
      register: u,
      unregister: i,
      onStart: m,
      onStop: f,
      wait: a,
      chains: p,
    }),
    [u, i, r, m, f, p, a]
  );
}
function Um() {}
let Qm = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function aa(e) {
  var t;
  let n = {};
  for (let r of Qm) n[r] = (t = e[r]) != null ? t : Um;
  return n;
}
function Hm(e) {
  let t = x.exports.useRef(aa(e));
  return (
    x.exports.useEffect(() => {
      t.current = aa(e);
    }, [e]),
    t
  );
}
let Vm = "div",
  $f = Ml.RenderStrategy;
function Bm(e, t) {
  let {
      beforeEnter: n,
      afterEnter: r,
      beforeLeave: l,
      afterLeave: o,
      enter: i,
      enterFrom: u,
      enterTo: s,
      entered: a,
      leave: p,
      leaveFrom: m,
      leaveTo: f,
      ...v
    } = e,
    y = x.exports.useRef(null),
    g = on(y, t),
    S = v.unmount ? ft.Unmount : ft.Hidden,
    { show: d, appear: c, initial: h } = jm(),
    [w, O] = x.exports.useState(d ? "visible" : "hidden"),
    C = Am(),
    { register: E, unregister: P } = C,
    N = x.exports.useRef(null);
  x.exports.useEffect(() => E(y), [E, y]),
    x.exports.useEffect(() => {
      if (S === ft.Hidden && y.current) {
        if (d && w !== "visible") {
          O("visible");
          return;
        }
        return se(w, { hidden: () => P(y), visible: () => E(y) });
      }
    }, [w, y, E, P, d, S]);
  let R = pt({
      enter: Qt(i),
      enterFrom: Qt(u),
      enterTo: Qt(s),
      entered: Qt(a),
      leave: Qt(p),
      leaveFrom: Qt(m),
      leaveTo: Qt(f),
    }),
    L = Hm({ beforeEnter: n, afterEnter: r, beforeLeave: l, afterLeave: o }),
    re = Du();
  x.exports.useEffect(() => {
    if (re && w === "visible" && y.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [y, w, re]);
  let K = h && !c,
    be = (() =>
      !re || K || N.current === d ? "idle" : d ? "enter" : "leave")(),
    De = Fm(0),
    Ze = j((z) =>
      se(z, {
        enter: () => {
          De.addFlag(Te.Opening), L.current.beforeEnter();
        },
        leave: () => {
          De.addFlag(Te.Closing), L.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    Je = j((z) =>
      se(z, {
        enter: () => {
          De.removeFlag(Te.Opening), L.current.afterEnter();
        },
        leave: () => {
          De.removeFlag(Te.Closing), L.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    _ = Df(() => {
      O("hidden"), P(y);
    }, C);
  $m({
    container: y,
    classes: R,
    direction: be,
    onStart: pt((z) => {
      _.onStart(y, z, Ze);
    }),
    onStop: pt((z) => {
      _.onStop(y, z, Je), z === "leave" && !no(_) && (O("hidden"), P(y));
    }),
  }),
    x.exports.useEffect(() => {
      K && (S === ft.Hidden ? (N.current = null) : (N.current = d));
    }, [d, K, w]);
  let F = v,
    I = { ref: g };
  return (
    c &&
      d &&
      (F = {
        ...F,
        className: Ii(v.className, ...R.current.enter, ...R.current.enterFrom),
      }),
    Ce.createElement(
      to.Provider,
      { value: _ },
      Ce.createElement(
        Mf,
        { value: se(w, { visible: Te.Open, hidden: Te.Closed }) | De.flags },
        wt({
          ourProps: I,
          theirProps: F,
          defaultTag: Vm,
          features: $f,
          visible: w === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function Wm(e, t) {
  let { show: n, appear: r = !1, unmount: l, ...o } = e,
    i = x.exports.useRef(null),
    u = on(i, t);
  Du();
  let s = zu();
  if (
    (n === void 0 && s !== null && (n = (s & Te.Open) === Te.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [a, p] = x.exports.useState(n ? "visible" : "hidden"),
    m = Df(() => {
      p("hidden");
    }),
    [f, v] = x.exports.useState(!0),
    y = x.exports.useRef([n]);
  he(() => {
    f !== !1 &&
      y.current[y.current.length - 1] !== n &&
      (y.current.push(n), v(!1));
  }, [y, n]);
  let g = x.exports.useMemo(
    () => ({ show: n, appear: r, initial: f }),
    [n, r, f]
  );
  x.exports.useEffect(() => {
    if (n) p("visible");
    else if (!no(m)) p("hidden");
    else {
      let d = i.current;
      if (!d) return;
      let c = d.getBoundingClientRect();
      c.x === 0 && c.y === 0 && c.width === 0 && c.height === 0 && p("hidden");
    }
  }, [n, m]);
  let S = { unmount: l };
  return A(to.Provider, {
    value: m,
    children: A(eo.Provider, {
      value: g,
      children: wt({
        ourProps: {
          ...S,
          as: x.exports.Fragment,
          children: Ce.createElement(zf, { ref: u, ...S, ...o }),
        },
        theirProps: {},
        defaultTag: x.exports.Fragment,
        features: $f,
        visible: a === "visible",
        name: "Transition",
      }),
    }),
  });
}
function Km(e, t) {
  let n = x.exports.useContext(eo) !== null,
    r = zu() !== null;
  return Ce.createElement(
    Ce.Fragment,
    null,
    !n && r
      ? Ce.createElement(Di, { ref: t, ...e })
      : Ce.createElement(zf, { ref: t, ...e })
  );
}
let Di = ot(Wm),
  zf = ot(Bm),
  qm = ot(Km),
  Gm = Object.assign(Di, { Child: qm, Root: Di });
const Ym = () => {
    const [e, t] = x.exports.useState(""),
      [n, r] = x.exports.useState([]),
      [l, o] = x.exports.useState(void 0);
    x.exports.useEffect(() => {
      chrome.permissions.contains({ permissions: ["topSites"] }, (u) => {
        u && chrome.topSites.get(o);
      });
    }, []);
    const i = (u) => {
      t(u.target.value), Ih(u.target.value).then(r);
    };
    return Ve("div", {
      className:
        "w-full mx-auto max-w-xl py-4 px-8 gap-6 flex-col flex dark:bg-slate-800",
      children: [
        Ve("div", {
          children: [
            Ve("h1", {
              className:
                "mx-auto flex flex-col gap-2 justify-center align-middle",
              children: [
                A("a", {
                  href: "https://github.com/akikoeth",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: A("img", {
                    src: Rh,
                    alt: "Cute Akiko",
                    className: "mx-auto",
                    style: {
                      width: "180px",
                      height: "180px",
                      borderRadius: "100%",
                    },
                  }),
                }),
                A("span", {
                  className:
                    "text-2xl font-bold dark:text-white align-middle mx-auto",
                  children: "AkikoSearch",
                }),
              ],
            }),
          ],
        }),
        Ve("div", {
          className: "flex flex-row gap-2 justify-center",
          style: { maxWidth: "1400px" },
          children: [
            Ve("div", {
              className: "flex flex-row gap-2 justify-center",
              style: {
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "#f0f0f025",
                minWidth: "200px",
              },
              children: [
                A("img", {
                  src: "https://assets.coingecko.com/coins/images/16547/standard/photo_2023-03-29_21.47.00.jpeg?1696516109",
                  alt: "Arbitrum",
                  style: {
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                    filter: "brightness(75%)",
                  },
                }),
                A("h2", {
                  className: "text-xl dark:text-white",
                  children: "$" + ARBprice.toFixed(3),
                }),
              ],
            }),
            Ve("div", {
              className: "flex flex-row gap-2 justify-center",
              style: {
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "#f0f0f025",
                minWidth: "200px",
              },
              children: [
                A("img", {
                  src: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
                  alt: "Ethereum",
                  style: {
                    width: "30px",
                    height: "30px",
                    borderRadius: "100%",
                    filter: "brightness(75%)",
                  },
                }),
                A("h2", {
                  className: "text-xl dark:text-white",
                  children: "$" + price.toFixed(2),
                }),
              ],
            }),
          ],
        }),
        A(Yr, {
          name: "search",
          defaultValue: "",
          onChange: (u) => {
            u.startsWith("search:")
              ? chrome.search.query({ text: u.slice(7) }, () => {})
              : window.open(u, "_self").focus();
          },
          children: Ve("div", {
            className: "relative mt-1",
            children: [
              A(Yr.Input, {
                className:
                  "w-full py-2 px-4 text-base text-black rounded-md focus:ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 border",
                displayValue: () => e,
                onChange: i,
                placeholder: "Search...",
              }),
              A(Gm, {
                as: x.exports.Fragment,
                leave: "transition ease-in duration-100",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                afterLeave: () => t(""),
                children: A(Yr.Options, {
                  className:
                    "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                  children:
                    n.length === 0 && e !== ""
                      ? A("div", {
                          className:
                            "relative cursor-default select-none py-2 px-4 text-gray-700",
                          children: "Nothing found.",
                        })
                      : n.map((u) =>
                          Ve(Yr.Option, {
                            className: ({ active: s }) =>
                              `flex justify-between block cursor-pointer select-none py-2 px-4 ${
                                s ? "bg-blue-600 text-white" : "text-gray-900"
                              }`,
                            value: u.url,
                            children: [
                              u.type === "Google"
                                ? A("a", {
                                    onClick: () =>
                                      chrome.search.query(
                                        { text: u.url.slice(7) },
                                        () => {}
                                      ),
                                    target: "_self",
                                    rel: "noopener noreferrer",
                                    children: u.text,
                                  })
                                : A("a", {
                                    href: u.url,
                                    target: "_self",
                                    rel: "noopener noreferrer",
                                    children: u.text,
                                  }),
                              A("div", { className: "", children: u.type }),
                            ],
                          })
                        ),
                }),
              }),
            ],
          }),
        }),
        Ve("div", {
          className: "flex flex-col gap-2",
          children: [
            !l &&
              A("button", {
                onClick: () => {
                  chrome.permissions.request(
                    { permissions: ["topSites"] },
                    (u) => {
                      u && chrome.topSites.get(o);
                    }
                  );
                },
                className:
                  "py-2 px-4 bg-blue-100 hover:bg-blue-200 mx-auto text-black w-fit text-base font-medium rounded-md",
                style: { backgroundColor: "#916584fa", color: "white" },
                children: "Display your favourite sites",
              }),
            l &&
              Ve(Oh, {
                children: [
                  Ve("h2", {
                    className:
                      "text-xl font-semibold text-center flex items-center gap-4 justify-center dark:text-white",
                    children: [
                      A("span", { children: "Your favourite sites" }),
                      Ve("button", {
                        className:
                          "py-1 px-3 bg-blue-100 hover:bg-gray-200 text-black text-base font-medium rounded-md dark:bg-slate-900 dark:text-white dark:hover:bg-slate-700",
                        onClick: () => {
                          chrome.permissions.remove(
                            { permissions: ["topSites"] },
                            (u) => {
                              u && o(void 0);
                            }
                          );
                        },
                        children: [
                          A("span", { className: "sr-only", children: "Hide" }),
                          Ve("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            className: "w-5 h-5",
                            children: [
                              A("path", {
                                fillRule: "evenodd",
                                d: "M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z",
                                clipRule: "evenodd",
                              }),
                              A("path", {
                                d: "M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  A("ul", {
                    className: "flex gap-2 flex-wrap mx-auto justify-center",
                    children: pages.map((u) =>
                      A(
                        "li",
                        {
                          className:
                            "rounded-md hover:bg-gray-100 p-2 dark:hover:bg-slate-600",
                          children: Ve("a", {
                            href: u.url,
                            className:
                              "text-xs flex flex-col gap-2 w-[80px] justify-between p-2",
                            rel: "noopener noreferrer",
                            children: [
                              A("span", {
                                className:
                                  "mx-auto p-2 bg-gray-200 rounded-md dark:bg-gray-600",
                                children: A("img", {
                                  style: { borderRadius: "5px" },
                                  src:
                                    u.img !== ""
                                      ? `${u.img}`
                                      : `https://www.google.com/s2/favicons?domain_url=${u.url}&sz=64`,
                                  className: "mx-auto object-contain w-10 h-10",
                                }),
                              }),
                              A("span", {
                                className:
                                  "text-ellipsis overflow-hidden whitespace-nowrap text-center dark:text-white",
                                children: u.title,
                              }),
                            ],
                          }),
                        },
                        "top-sites" + u.url
                      )
                    ),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Xm = new wh(),
  bm = document.querySelector("body");
jo.createRoot(bm).render(
  A(Ce.StrictMode, { children: A(Th, { client: Xm, children: A(Ym, {}) }) })
);
