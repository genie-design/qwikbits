"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
function wt(e, t = false) {
  let n = e.querySelector("[autofocus]");
  !n && t && (n = e), n == null || n.focus();
}
var Ie = /* @__PURE__ */ (() => typeof window < "u" && typeof HTMLElement < "u" && !!window.document && String(HTMLElement).includes("[native code]"))(), V = !Ie;
/**
 * @license
 * @builder.io/qwik 0.101.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
const ee = (e) => e && typeof e.nodeType == "number", Re = (e) => e && e.nodeType === 9, we = (e) => e.nodeType === 111, ze = "", Le = (e, ...t) => {
  const n = e instanceof Error ? e : Me(e), r = n.stack || n.message;
  return console.error("%cQWIK ERROR", ze, r, ...ke(t)), n;
}, Me = (e) => new Error(e), Pe = (e, ...t) => Le(e, ...t), ke = (e) => e, y = (e, ...t) => {
  const n = Oe(e);
  return Pe(n, ...t);
}, Oe = (e) => `Code(${e})`, Fe = (e) => {
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}, w = (e) => e && typeof e == "object", z = (e) => Array.isArray(e), Qe = (e) => typeof e == "function", qe = () => ({
  isServer: V,
  importSymbol(e, t, n) {
    var o;
    if (V) {
      const $ = ge(n), c = (o = globalThis.__qwik_reg_symbols) == null ? void 0 : o.get($);
      if (c)
        return c;
    }
    if (!t)
      throw y(31, n);
    if (!e)
      throw y(30, t, n);
    const r = De(e.ownerDocument, e, t).toString(), s = new URL(r);
    return s.hash = "", s.search = "", import(s.href).then(($) => Ae($, n));
  },
  raf: (e) => new Promise((t) => {
    requestAnimationFrame(() => {
      t(e());
    });
  }),
  nextTick: (e) => new Promise((t) => {
    setTimeout(() => {
      t(e());
    });
  }),
  chunkForSymbol: (e, t) => [e, t ?? "_"]
}), Ae = (e, t) => {
  if (t in e)
    return e[t];
  for (const n of Object.values(e))
    if (w(n) && t in n)
      return n[t];
}, De = (e, t, n) => {
  const r = e.baseURI, s = new URL(t.getAttribute("q:base") ?? r, r);
  return new URL(n, s);
};
let te = qe();
const ne = () => te, L = () => te.isServer;
function Ue(e, t, ...n) {
}
const re = (e) => e instanceof Promise, C = (e, t) => re(e) ? e.then(t) : t(e), se = [], ie = {};
Object.freeze(se), Object.freeze(ie);
const oe = (e, t = {}) => {
  let n = e.$symbol$, r = e.$chunk$;
  const s = e.$refSymbol$ ?? n, i = ne();
  if (i) {
    const u = i.chunkForSymbol(s, r);
    u && (r = u[1], e.$refSymbol$ || (n = u[0]));
  }
  if (!r)
    throw y(31, e.$symbol$);
  r.startsWith("./") && (r = r.slice(2));
  const o = [r, "#", n], $ = e.$capture$, c = e.$captureRef$;
  if (c && c.length) {
    if (t.$getObjId$) {
      const u = c.map(t.$getObjId$);
      o.push(`[${u.join(" ")}]`);
    } else if (t.$addRefMap$) {
      const u = c.map(t.$addRefMap$);
      o.push(`[${u.join(" ")}]`);
    }
  } else
    $ && $.length > 0 && o.push(`[${$.join(" ")}]`);
  return o.join("");
}, ae = (e, t) => {
  const n = e.length, r = H(e, 0, "#"), s = H(e, r, "["), i = Math.min(r, s), o = e.substring(0, i), $ = r == n ? r : r + 1, c = s, u = $ == c ? "default" : e.substring($, c), h = s, g = n, x = h === g ? se : e.substring(h + 1, g - 1).split(" "), m = yt(o, u, null, null, x, null, null);
  return t && m.$setContainer$(t), m;
}, H = (e, t, n) => {
  const r = e.length, s = e.indexOf(n, t == r ? 0 : t);
  return s == -1 ? r : s;
}, Ve = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(), W = "q:slot", _ = (e) => e.toString(36), B = (e) => parseInt(e, 36), Ce = Symbol("proxy target"), d = Symbol("proxy manager"), J = Symbol("IMMUTABLE");
var ce;
const T = Symbol("proxy manager"), He = Symbol("unassigned signal");
class M {
}
class K extends M {
  constructor(t, n, r) {
    super(), this[ce] = 0, this.untrackedValue = t, this[d] = n, this[T] = r;
  }
  valueOf() {
    throw new TypeError("Cannot coerce a Signal, use `.value` instead");
  }
  toString() {
    return `[Signal ${String(this.value)}]`;
  }
  toJSON() {
    return {
      value: this.value
    };
  }
  get value() {
    var n;
    if (2 & this[T])
      throw He;
    const t = (n = Be()) == null ? void 0 : n.$subscriber$;
    return t && this[d].$addSub$(t), this.untrackedValue;
  }
  set value(t) {
    const n = this[d], r = this.untrackedValue;
    n && r !== t && (this.untrackedValue = t, n.$notifySubs$());
  }
}
ce = T;
class N extends M {
  constructor(t, n, r) {
    super(), this.$func$ = t, this.$args$ = n, this.$funcStr$ = r;
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
}
class Y extends M {
  constructor(t, n) {
    super(), this.ref = t, this.prop = n;
  }
  get [d]() {
    return k(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
}
const We = (e) => e._qc_;
let v;
const Be = () => {
  if (!v) {
    const e = typeof document < "u" && document && document.__q_context__;
    return e ? z(e) ? document.__q_context__ = le(e) : e : void 0;
  }
  return v;
};
function Je(e, t, ...n) {
  const r = v;
  let s;
  try {
    v = e, s = t.apply(this, n);
  } finally {
    v = r;
  }
  return s;
}
const le = (e) => {
  const t = e[0], n = t.closest("[q\\:container]"), r = (n == null ? void 0 : n.getAttribute("q:locale")) || void 0;
  return $e(r, void 0, t, e[1], e[2]);
}, $e = (e, t, n, r, s) => ({
  $seq$: 0,
  $hostElement$: t,
  $element$: n,
  $event$: r,
  $url$: s,
  $qrl$: void 0,
  $props$: void 0,
  $renderCtx$: void 0,
  $subscriber$: void 0,
  $waitOn$: void 0,
  $locale$: e
}), Ke = (e, t) => {
  const n = We(e);
  t.$elements$.includes(n) || (t.$elements$.push(n), t.$prefetch$++, 8 & n.$flags$ ? Ne(n, t, true) : t.$deferElements$.push(n), t.$prefetch$--);
}, Ne = (e, t, n) => {
  if (e.$props$ && !Ye(e.$props$) && l(e.$props$, t, n), e.$componentQrl$ && l(e.$componentQrl$, t, n), e.$seq$)
    for (const r of e.$seq$)
      l(r, t, n);
  if (e.$watches$) {
    const r = t.$containerState$.$subsManager$.$groupToManagers$;
    for (const s of e.$watches$)
      r.has(s) && l(s, t, n);
  }
  if (n && (X(e, t), e.$dynamicSlots$))
    for (const r of e.$dynamicSlots$)
      X(r, t);
}, X = (e, t) => {
  for (; e; ) {
    if (e.$contexts$) {
      for (const n of e.$contexts$.values())
        l(n, t, true);
      if (e.$contexts$.get("_") === true)
        break;
    }
    e = e.$slotParent$ ?? e.$parent$;
  }
}, ue = (e, t, n) => {
  if (t.$seen$.has(e))
    return;
  t.$seen$.add(e);
  const r = e.$subs$;
  for (const s of r) {
    const i = s[0];
    if (i > 0 && l(s[2], t, true), n === true) {
      const o = s[1];
      ee(o) && we(o) ? i === 0 && Ke(o, t) : l(o, t, true);
    }
  }
}, G = Symbol(), l = (e, t, n) => {
  if (e !== null) {
    const s = typeof e;
    switch (s) {
      case "function":
      case "object": {
        const i = t.$seen$;
        if (i.has(e))
          return;
        if (i.add(e), mt(e))
          return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
        const o = e, $ = St(e);
        if ($) {
          if (e = $, i.has(e))
            return;
          if (i.add(e), ue(k(o), t, n), he(o))
            return void t.$objSet$.add(e);
        }
        if (ft(e, t, n))
          return void t.$objSet$.add(e);
        if (re(e))
          return void t.$promises$.push((r = e, r.then((c) => {
            const u = {
              resolved: true,
              value: c
            };
            return r[G] = u, c;
          }, (c) => {
            const u = {
              resolved: false,
              value: c
            };
            return r[G] = u, c;
          })).then((c) => {
            l(c, t, n);
          }));
        if (s === "object") {
          if (ee(e))
            return;
          if (z(e))
            for (let c = 0; c < e.length; c++)
              l(o[c], t, n);
          else if (Fe(e))
            for (const c of Object.keys(e))
              l(o[c], t, n);
        }
        break;
      }
    }
  }
  var r;
  t.$objSet$.add(e);
}, Ye = (e) => Object.keys(e).length === 0, Xe = (e) => Object.freeze({
  id: Ve(e)
});
Xe("qk-error");
const fe = (e, t, n, r, s) => {
  const i = r == null ? null : String(r), o = t ?? ie, $ = new P(e, o, null, o.children, n, i);
  return typeof e == "string" && t && delete t.children, $;
};
class P {
  constructor(t, n, r, s, i, o = null) {
    this.type = t, this.props = n, this.immutableProps = r, this.children = s, this.flags = i, this.key = o;
  }
}
const pe = (e) => e.children, Ge = (e) => e instanceof P, I = (e) => e.children, Ze = (e) => w(e) && e instanceof de;
class de {
  constructor(t, n, r, s, i) {
    this.$flags$ = t, this.$index$ = n, this.$el$ = r, this.$qrl$ = s, this.$state$ = i;
  }
}
const je = (e) => ({
  __brand: "resource",
  value: void 0,
  loading: !L(),
  _resolved: void 0,
  _error: void 0,
  _state: "pending",
  _timeout: (e == null ? void 0 : e.timeout) ?? -1,
  _cache: 0
}), et = (e) => w(e) && e.__brand === "resource", R = (e) => fe(pe, {
  "q:s": ""
}, 0, e.name ?? ""), tt = {
  prefix: "",
  test: (e) => vt(e),
  collect: (e, t, n) => {
    if (e.$captureRef$)
      for (const r of e.$captureRef$)
        l(r, t, n);
    t.$prefetch$ === 0 && t.$qrls$.push(e);
  },
  serialize: (e, t) => oe(e, {
    $getObjId$: t
  }),
  prepare: (e, t) => ae(e, t.$containerEl$),
  fill: (e, t) => {
    e.$capture$ && e.$capture$.length > 0 && (e.$captureRef$ = e.$capture$.map(t), e.$capture$ = null);
  }
}, nt = {
  prefix: "",
  test: (e) => Ze(e),
  collect: (e, t, n) => {
    l(e.$qrl$, t, n), e.$state$ && l(e.$state$, t, n);
  },
  serialize: (e, t) => ((n, r) => {
    let s = `${_(n.$flags$)} ${_(n.$index$)} ${r(n.$qrl$)} ${r(n.$el$)}`;
    return n.$state$ && (s += ` ${r(n.$state$)}`), s;
  })(e, t),
  prepare: (e) => ((t) => {
    const [n, r, s, i, o] = t.split(" ");
    return new de(B(n), B(r), i, s, o);
  })(e),
  fill: (e, t) => {
    e.$el$ = t(e.$el$), e.$qrl$ = t(e.$qrl$), e.$state$ && (e.$state$ = t(e.$state$));
  }
}, rt = {
  prefix: "",
  test: (e) => et(e),
  collect: (e, t, n) => {
    l(e.value, t, n), l(e._resolved, t, n);
  },
  serialize: (e, t) => ((n, r) => {
    const s = n._state;
    return s === "resolved" ? `0 ${r(n._resolved)}` : s === "pending" ? "1" : `2 ${r(n._error)}`;
  })(e, t),
  prepare: (e) => ((t) => {
    const [n, r] = t.split(" "), s = je(void 0);
    return s.value = Promise.resolve(), n === "0" ? (s._state = "resolved", s._resolved = r, s.loading = false) : n === "1" ? (s._state = "pending", s.value = new Promise(() => {
    }), s.loading = true) : n === "2" && (s._state = "rejected", s._error = r, s.loading = false), s;
  })(e),
  fill: (e, t) => {
    if (e._state === "resolved")
      e._resolved = t(e._resolved), e.value = Promise.resolve(e._resolved);
    else if (e._state === "rejected") {
      const n = Promise.reject(e._error);
      n.catch(() => null), e._error = t(e._error), e.value = n;
    }
  }
}, st = {
  prefix: "",
  test: (e) => e instanceof URL,
  serialize: (e) => e.href,
  prepare: (e) => new URL(e),
  fill: void 0
}, it = {
  prefix: "",
  test: (e) => e instanceof Date,
  serialize: (e) => e.toISOString(),
  prepare: (e) => new Date(e),
  fill: void 0
}, ot = {
  prefix: "\x07",
  test: (e) => e instanceof RegExp,
  serialize: (e) => `${e.flags} ${e.source}`,
  prepare: (e) => {
    const t = e.indexOf(" "), n = e.slice(t + 1), r = e.slice(0, t);
    return new RegExp(n, r);
  },
  fill: void 0
}, at = {
  prefix: "",
  test: (e) => e instanceof Error,
  serialize: (e) => e.message,
  prepare: (e) => {
    const t = new Error(e);
    return t.stack = void 0, t;
  },
  fill: void 0
}, ct = {
  prefix: "",
  test: (e) => Re(e),
  serialize: void 0,
  prepare: (e, t, n) => n,
  fill: void 0
}, b = Symbol("serializable-data"), lt = {
  prefix: "",
  test: (e) => Tt(e),
  serialize: (e, t) => {
    const [n] = e[b];
    return oe(n, {
      $getObjId$: t
    });
  },
  prepare: (e, t) => {
    const n = ae(e, t.$containerEl$);
    return me(n);
  },
  fill: (e, t) => {
    const [n] = e[b];
    n.$capture$ && n.$capture$.length > 0 && (n.$captureRef$ = n.$capture$.map(t), n.$capture$ = null);
  }
}, $t = [tt, {
  prefix: "",
  test: (e) => e instanceof K,
  collect: (e, t, n) => (l(e.untrackedValue, t, n), n === true && ue(e[d], t, n), e),
  serialize: (e, t) => t(e.untrackedValue),
  prepare: (e, t) => {
    var n;
    return new K(e, (n = t == null ? void 0 : t.$subsManager$) == null ? void 0 : n.$createManager$(), 0);
  },
  subs: (e, t) => {
    e[d].$addSubs$(t);
  },
  fill: (e, t) => {
    e.untrackedValue = t(e.untrackedValue);
  }
}, {
  prefix: "",
  test: (e) => e instanceof Y,
  collect(e, t, n) {
    if (l(e.ref, t, n), he(e.ref)) {
      const r = k(e.ref);
      pt(t.$containerState$.$subsManager$, r, n) && l(e.ref[e.prop], t, n);
    }
    return e;
  },
  serialize: (e, t) => `${t(e.ref)} ${e.prop}`,
  prepare: (e) => {
    const [t, n] = e.split(" ");
    return new Y(t, n);
  },
  fill: (e, t) => {
    e.ref = t(e.ref);
  }
}, nt, rt, st, it, ot, at, ct, lt, {
  prefix: "",
  test: (e) => e instanceof N,
  collect: (e, t, n) => {
    if (e.$args$)
      for (const r of e.$args$)
        l(r, t, n);
  },
  serialize: (e, t, n) => {
    const r = ((i) => {
      const o = i.$funcStr$;
      return `(${i.$args$.map(($, c) => `p${c}`).join(",")})=>(${o})`;
    })(e);
    let s = n.$inlinedFunctions$.indexOf(r);
    return s < 0 && (n.$inlinedFunctions$.push(r), s = n.$inlinedFunctions$.length - 1), e.$args$.map(t).join(" ") + " @" + _(s);
  },
  prepare: (e) => {
    const t = e.split(" "), n = t.slice(0, -1), r = t[t.length - 1];
    return new N(r, n, r);
  },
  fill: (e, t) => {
    Ue(e.$func$), e.$func$ = t(e.$func$), e.$args$ = e.$args$.map(t);
  }
}, {
  prefix: "",
  test: (e) => typeof e == "number",
  serialize: (e) => String(e),
  prepare: (e) => Number(e),
  fill: void 0
}, {
  prefix: "",
  test: (e) => e instanceof URLSearchParams,
  serialize: (e) => e.toString(),
  prepare: (e) => new URLSearchParams(e),
  fill: void 0
}, {
  prefix: "",
  test: (e) => typeof FormData < "u" && e instanceof globalThis.FormData,
  serialize: (e) => {
    const t = [];
    return e.forEach((n, r) => {
      typeof n == "string" ? t.push([r, n]) : t.push([r, n.name]);
    }), JSON.stringify(t);
  },
  prepare: (e) => {
    const t = JSON.parse(e), n = new FormData();
    for (const [r, s] of t)
      n.append(r, s);
    return n;
  },
  fill: void 0
}, {
  prefix: "",
  test: (e) => Ge(e),
  collect: (e, t, n) => {
    l(e.children, t, n), l(e.props, t, n), l(e.immutableProps, t, n);
    let r = e.type;
    r === R ? r = ":slot" : r === I && (r = ":fragment"), l(r, t, n);
  },
  serialize: (e, t) => {
    let n = e.type;
    return n === R ? n = ":slot" : n === I && (n = ":fragment"), `${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.children)} ${e.flags}`;
  },
  prepare: (e) => {
    const [t, n, r, s, i] = e.split(" ");
    return new P(t, n, r, s, parseInt(i, 10));
  },
  fill: (e, t) => {
    e.type = dt(t(e.type)), e.props = t(e.props), e.immutableProps = t(e.immutableProps), e.children = t(e.children);
  }
}], ut = $t.filter((e) => e.collect), ft = (e, t, n) => {
  for (const r of ut)
    if (r.test(e))
      return r.collect(e, t, n), true;
  return false;
}, pt = (e, t, n) => {
  if (typeof n == "boolean")
    return n;
  const r = e.$groupToManagers$.get(n);
  return !!(r && r.length > 0) && (r.length !== 1 || r[0] !== t);
}, dt = (e) => e === ":slot" ? R : e === ":fragment" ? I : e, ht = /* @__PURE__ */ new WeakSet(), gt = /* @__PURE__ */ new WeakSet(), mt = (e) => ht.has(e), he = (e) => gt.has(e), St = (e) => e[Ce], k = (e) => e[d], vt = (e) => typeof e == "function" && typeof e.getSymbol == "function", yt = (e, t, n, r, s, i, o) => {
  let $;
  const c = (f) => ($ || ($ = f), $), u = async (f) => {
    if (f && c(f), n !== null)
      return n;
    if (r !== null)
      return n = r().then((p) => n = p[t]);
    {
      const p = ne().importSymbol($, e, t);
      return n = C(p, (E) => n = E);
    }
  }, h = (f) => n !== null ? n : u(f);
  function g(f, p) {
    return (...E) => {
      const ye = Et(), be = h();
      return C(be, (Q) => {
        if (Qe(Q)) {
          if (p && p() === false)
            return;
          const q = {
            ...x(f),
            $qrl$: ve
          };
          return bt(t, q.$element$, ye), Je.call(this, q, Q, ...E);
        }
        throw y(10);
      });
    };
  }
  const x = (f) => f == null ? $e() : z(f) ? le(f) : f, m = async function(...f) {
    return await g.call(this)(...f);
  }, O = o ?? t, F = ge(O), ve = m;
  return Object.assign(m, {
    getSymbol: () => O,
    getHash: () => F,
    getCaptured: () => i,
    resolve: u,
    $resolveLazy$: h,
    $setContainer$: c,
    $chunk$: e,
    $symbol$: t,
    $refSymbol$: o,
    $hash$: F,
    getFn: g,
    $capture$: s,
    $captureRef$: i,
    dev: null
  });
}, ge = (e) => {
  const t = e.lastIndexOf("_");
  return t > -1 ? e.slice(t + 1) : e;
}, Z = /* @__PURE__ */ new Set(), bt = (e, t, n) => {
  Z.has(e) || (Z.add(e), xt("qsymbol", {
    symbol: e,
    element: t,
    reqTime: n
  }));
}, xt = (e, t) => {
  L() || typeof document != "object" || document.dispatchEvent(new CustomEvent(e, {
    bubbles: false,
    detail: t
  }));
}, Et = () => L() ? 0 : typeof performance == "object" ? performance.now() : 0, _t = (e) => {
  throw new Error("Optimizer should replace all usages of $() with some special syntax. If you need to create a QRL manually, use inlinedQrl() instead.");
}, me = (e) => {
  function t(n, r, s) {
    const i = e.$hash$.slice(0, 4) + ":" + (r || "");
    return fe(pe, {
      "q:renderFn": e,
      [W]: n[W],
      [J]: n[J],
      children: n.children,
      props: n
    }, s, i);
  }
  return t[b] = [e], t;
}, Tt = (e) => typeof e == "function" && e[b] !== void 0, Se = (e) => me(_t()), Lt = Se();
Se();
const Collapse = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const id = qwik.useId();
  qwik.useStylesScopedQrl(/* @__PURE__ */ qwik.inlinedQrl(`
  div[hidden] {
    display: none;
  }
  [role="button"] {
    cursor: pointer;
  }
`, "Collapse_component_useStylesScoped_n6oJGUNCH40"));
  const defaultSignal = qwik.useSignal(false);
  const state = qwik.useStore({
    open: props.open ?? defaultSignal,
    id: props.id ?? id
  });
  return /* @__PURE__ */ qwik._jsxC(Lt, {
    get tag() {
      return props.rootProps?.tag || "details";
    },
    ...props.rootProps,
    children: /* @__PURE__ */ qwik._jsxC(Lt, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ qwik._jsxC(Lt, {
          ...props.wrappers?.trigger,
          children: /* @__PURE__ */ qwik._jsxC(Lt, {
            style: {
              cursor: "pointer"
            },
            get tag() {
              return props.triggerProps?.tag || "summary";
            },
            get id() {
              return state.id + "-trigger";
            },
            get "aria-expanded"() {
              return state.open?.value;
            },
            get "aria-controls"() {
              return state.id;
            },
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [state2] = qwik.useLexicalScope();
              return state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_0ClSkCIpIN4", [
              state
            ]),
            onKeyDown$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
              const [state2] = qwik.useLexicalScope();
              if (e.key === "Enter" || e.key === " ")
                state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onKeyDown_WMlrdiGwILs", [
              state
            ]),
            ...props.triggerProps,
            children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "trigger",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "vw_0"),
            [qwik._IMMUTABLE]: {
              tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "summary", [
                props
              ], 'p0.triggerProps?.tag||"summary"'),
              id: qwik._fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              "aria-expanded": qwik._fnSignal((p0) => p0.open?.value, [
                state
              ], "p0.open?.value"),
              "aria-controls": qwik._fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              onClick$: qwik._IMMUTABLE,
              onKeyDown$: qwik._IMMUTABLE
            }
          }, 0, "vw_1")
        }, 0, "vw_2"),
        /* @__PURE__ */ qwik._jsxC(Lt, {
          ...props.wrappers?.content,
          children: /* @__PURE__ */ qwik._jsxC(Lt, {
            get id() {
              return state.id;
            },
            get tag() {
              return props.contentProps?.tag || "div";
            },
            role: "region",
            get "aria-labelledby"() {
              return state.id + "-trigger";
            },
            get hidden() {
              return !state.open?.value;
            },
            ...props.contentProps,
            children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "vw_3"),
            [qwik._IMMUTABLE]: {
              id: qwik._fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "div", [
                props
              ], 'p0.contentProps?.tag||"div"'),
              role: qwik._IMMUTABLE,
              "aria-labelledby": qwik._fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              hidden: qwik._fnSignal((p0) => !p0.open?.value, [
                state
              ], "!p0.open?.value")
            }
          }, 0, "vw_4")
        }, 0, "vw_5")
      ]
    }, 0, "vw_6"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "details", [
        props
      ], 'p0.rootProps?.tag||"details"')
    }
  }, 0, "vw_7");
}, "Collapse_component_oSHZysc7cvM"));
const Dialog = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  const uid = qwik.useId();
  const tuid = qwik.useId();
  const duid = qwik.useId();
  const id = props.id ?? uid;
  const titleId = props.titleId ?? tuid;
  const descriptionId = props.descriptionId ?? duid;
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(`
    header:empty {
      display: none;
    }
    footer:empty {
      display: none;
    }
`, "Dialog_component_useStyles_fwdn9cAxUmY"));
  const defaultSignal = qwik.useSignal(false);
  const state = qwik.useStore({
    role: props.role ?? `dialog`,
    open: props.open ?? defaultSignal,
    id,
    titleId,
    descriptionId
  });
  const dialogEl = qwik.useSignal();
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [dialogEl2, state2] = qwik.useLexicalScope();
    track(() => state2.open.value);
    if (dialogEl2.value && state2.open.value) {
      dialogEl2.value.showModal();
      wt(dialogEl2.value);
    } else if (dialogEl2.value)
      dialogEl2.value.close();
  }, "Dialog_component_useVisibleTask_U0vsW3cI07A", [
    dialogEl,
    state
  ]), {
    strategy: props?.strategy ?? "document-ready"
  });
  qwik.useOnDocument(`keydown`, /* @__PURE__ */ qwik.inlinedQrl((e) => {
    const [state2] = qwik.useLexicalScope();
    if (e.key === "Escape" && state2.open.value)
      state2.open.value = false;
  }, "Dialog_component_useOnDocument_YFbY0sUV9Ik", [
    state
  ]));
  return /* @__PURE__ */ qwik._jsxC(Lt, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    ...props.rootProps,
    children: /* @__PURE__ */ qwik._jsxC(Lt, {
      ...props.wrappers?.rootChildren,
      children: [
        props.triggerButton && /* @__PURE__ */ qwik._jsxC(Lt, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          type: "button",
          "aria-haspopup": "dialog",
          get "aria-expanded"() {
            return state.open.value;
          },
          ...props?.triggerProps,
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [state2] = qwik.useLexicalScope();
            return state2.open.value = true;
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_wL2uy03u0uc", [
            state
          ]),
          children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
            name: "trigger",
            [qwik._IMMUTABLE]: {
              name: qwik._IMMUTABLE
            }
          }, 3, "w1_0"),
          [qwik._IMMUTABLE]: {
            tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "button", [
              props
            ], 'p0.triggerProps?.tag||"button"'),
            type: qwik._IMMUTABLE,
            "aria-haspopup": qwik._IMMUTABLE,
            "aria-expanded": qwik._fnSignal((p0) => p0.open.value, [
              state
            ], "p0.open.value"),
            onClick$: qwik._IMMUTABLE
          }
        }, 0, "w1_1"),
        /* @__PURE__ */ qwik._jsxS("dialog", {
          ref: dialogEl,
          ...props?.dialogProps,
          children: /* @__PURE__ */ qwik._jsxC(Lt, {
            get tag() {
              return props.contentProps?.tag || "article";
            },
            ...props?.contentProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(Lt, {
                get tag() {
                  return props.titleProps?.tag || "header";
                },
                get id() {
                  return state.titleId;
                },
                ...props?.titleProps,
                children: [
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                    name: "title",
                    [qwik._IMMUTABLE]: {
                      name: qwik._IMMUTABLE
                    }
                  }, 3, "w1_2"),
                  props?.closeButton && /* @__PURE__ */ qwik._jsxC(Lt, {
                    get tag() {
                      return props.closeProps?.tag || "button";
                    },
                    type: "button",
                    ...props?.closeProps,
                    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
                      const [state2] = qwik.useLexicalScope();
                      return state2.open.value = false;
                    }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_C2Y8UoR7c8Y", [
                      state
                    ]),
                    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                      name: "close",
                      [qwik._IMMUTABLE]: {
                        name: qwik._IMMUTABLE
                      }
                    }, 3, "w1_3"),
                    [qwik._IMMUTABLE]: {
                      tag: qwik._fnSignal((p0) => p0.closeProps?.tag || "button", [
                        props
                      ], 'p0.closeProps?.tag||"button"'),
                      type: qwik._IMMUTABLE,
                      onClick$: qwik._IMMUTABLE
                    }
                  }, 0, "w1_4")
                ],
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.titleProps?.tag || "header", [
                    props
                  ], 'p0.titleProps?.tag||"header"'),
                  id: qwik._fnSignal((p0) => p0.titleId, [
                    state
                  ], "p0.titleId")
                }
              }, 0, "w1_5"),
              /* @__PURE__ */ qwik._jsxC(Lt, {
                get tag() {
                  return props.descriptionProps?.tag || "p";
                },
                get id() {
                  return state.descriptionId;
                },
                ...props?.descriptionProps,
                children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                  name: "description",
                  [qwik._IMMUTABLE]: {
                    name: qwik._IMMUTABLE
                  }
                }, 3, "w1_6"),
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.descriptionProps?.tag || "p", [
                    props
                  ], 'p0.descriptionProps?.tag||"p"'),
                  id: qwik._fnSignal((p0) => p0.descriptionId, [
                    state
                  ], "p0.descriptionId")
                }
              }, 0, "w1_7"),
              /* @__PURE__ */ qwik._jsxC(Lt, {
                ...props.wrappers?.content,
                children: [
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "w1_8"),
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                    name: "content",
                    [qwik._IMMUTABLE]: {
                      name: qwik._IMMUTABLE
                    }
                  }, 3, "w1_9")
                ]
              }, 0, "w1_10"),
              /* @__PURE__ */ qwik._jsxC(Lt, {
                get tag() {
                  return props.footerProps?.tag || "footer";
                },
                children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                  name: "footer",
                  [qwik._IMMUTABLE]: {
                    name: qwik._IMMUTABLE
                  }
                }, 3, "w1_11"),
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.footerProps?.tag || "footer", [
                    props
                  ], 'p0.footerProps?.tag||"footer"')
                }
              }, 1, "w1_12")
            ],
            [qwik._IMMUTABLE]: {
              tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "article", [
                props
              ], 'p0.contentProps?.tag||"article"')
            }
          }, 0, "w1_13"),
          onClick$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [dialogEl2, state2] = qwik.useLexicalScope();
            e.target === dialogEl2.value && state2.role !== "alertdialog" && (state2.open.value = false);
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_onClick_mgZpOBpuUUI", [
            dialogEl,
            state
          ])
        }, {
          role: qwik._fnSignal((p0) => p0.role, [
            state
          ], "p0.role"),
          tabIndex: -1,
          "aria-modal": "true",
          "aria-hidden": qwik._fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          hidden: qwik._fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          "aria-labelledby": qwik._fnSignal((p0) => p0.titleId, [
            state
          ], "p0.titleId"),
          "aria-describedby": qwik._fnSignal((p0) => p0.descriptionId, [
            state
          ], "p0.descriptionId")
        }, 0, null)
      ]
    }, 0, "w1_14"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"')
    }
  }, 0, "w1_15");
}, "Dialog_component_YMDBpsULtWk"));
const Dropdown = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  return /* @__PURE__ */ qwik._jsxC(Lt, {
    get tag() {
      return props.rootProps?.tag || "details";
    },
    role: "list",
    ...props.rootProps,
    children: /* @__PURE__ */ qwik._jsxC(Lt, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ qwik._jsxC(Lt, {
          get tag() {
            return props.labelProps?.tag || "summary";
          },
          "aria-haspopup": "listbox",
          ...props.labelProps,
          children: [
            qwik._fnSignal((p0) => p0.label, [
              props
            ], "p0.label"),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "label",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "8Y_0")
          ],
          [qwik._IMMUTABLE]: {
            tag: qwik._fnSignal((p0) => p0.labelProps?.tag || "summary", [
              props
            ], 'p0.labelProps?.tag||"summary"'),
            "aria-haspopup": qwik._IMMUTABLE
          }
        }, 0, "8Y_1"),
        /* @__PURE__ */ qwik._jsxC(Lt, {
          role: "listbox",
          get tag() {
            return props.contentProps?.tag || "ul";
          },
          ...props.contentProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "8Y_2"),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "content",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "8Y_3"),
            props.items?.map((item, i) => /* @__PURE__ */ qwik._jsxC(Lt, {
              tag: item.itemWrapperProps?.tag || "li",
              ...item.itemWrapperProps,
              children: /* @__PURE__ */ qwik._jsxC(Lt, {
                tag: item.itemProps?.tag || "a",
                ...item.itemProps,
                children: [
                  /* @__PURE__ */ qwik._jsxC(Lt, {
                    ...item.labelBeforeProps
                  }, 0, "8Y_4"),
                  /* @__PURE__ */ qwik._jsxC(Lt, {
                    ...item.labelWrapperProps,
                    children: qwik._wrapSignal(item, "label")
                  }, 0, "8Y_5"),
                  /* @__PURE__ */ qwik._jsxC(Lt, {
                    ...item.labelAfterProps
                  }, 0, "8Y_6")
                ]
              }, 0, "8Y_7")
            }, 0, item.key ?? i)),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "content_after",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "8Y_8")
          ],
          [qwik._IMMUTABLE]: {
            role: qwik._IMMUTABLE,
            tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "ul", [
              props
            ], 'p0.contentProps?.tag||"ul"')
          }
        }, 0, "8Y_9")
      ]
    }, 0, "8Y_10"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "details", [
        props
      ], 'p0.rootProps?.tag||"details"'),
      role: qwik._IMMUTABLE
    }
  }, 0, "8Y_11");
}, "Dropdown_component_hWeuySTMJ0E"));
exports.Collapse = Collapse;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
