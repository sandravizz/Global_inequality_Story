function x() {}
function k(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function w(t) {
  return t();
}
function C() {
  return Object.create(null);
}
function j(t) {
  t.forEach(w);
}
function M(t) {
  return typeof t == "function";
}
function A(t, n) {
  return t != t
    ? n == n
    : t !== n || (t && typeof t == "object") || typeof t == "function";
}
function B(t) {
  return Object.keys(t).length === 0;
}
function v(t, ...n) {
  if (t == null) {
    for (const o of n) o(void 0);
    return x;
  }
  const e = t.subscribe(...n);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function F(t, n, e) {
  t.$$.on_destroy.push(v(n, e));
}
function P(t, n, e, o) {
  if (t) {
    const r = y(t, n, e, o);
    return t[0](r);
  }
}
function y(t, n, e, o) {
  return t[1] && o ? k(e.ctx.slice(), t[1](o(n))) : e.ctx;
}
function S(t, n, e, o) {
  if (t[2] && o) {
    const r = t[2](o(e));
    if (n.dirty === void 0) return r;
    if (typeof r == "object") {
      const l = [],
        _ = Math.max(n.dirty.length, r.length);
      for (let u = 0; u < _; u += 1) l[u] = n.dirty[u] | r[u];
      return l;
    }
    return n.dirty | r;
  }
  return n.dirty;
}
function U(t, n, e, o, r, l) {
  if (r) {
    const _ = y(n, e, o, l);
    t.p(_, r);
  }
}
function D(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let o = 0; o < e; o++) n[o] = -1;
    return n;
  }
  return -1;
}
function G(t, n, e) {
  return t.set(e), n;
}
let i;
function d(t) {
  i = t;
}
function f() {
  if (!i) throw new Error("Function called outside component initialization");
  return i;
}
function H(t) {
  f().$$.on_mount.push(t);
}
function I(t) {
  f().$$.after_update.push(t);
}
function J(t, n) {
  return f().$$.context.set(t, n), n;
}
function K(t) {
  return f().$$.context.get(t);
}
const a = [],
  b = [];
let s = [];
const p = [],
  m = Promise.resolve();
let g = !1;
function E() {
  g || ((g = !0), m.then(q));
}
function L() {
  return E(), m;
}
function O(t) {
  s.push(t);
}
function N(t) {
  p.push(t);
}
const h = new Set();
let c = 0;
function q() {
  if (c !== 0) return;
  const t = i;
  do {
    try {
      for (; c < a.length; ) {
        const n = a[c];
        c++, d(n), z(n.$$);
      }
    } catch (n) {
      throw ((a.length = 0), (c = 0), n);
    }
    for (d(null), a.length = 0, c = 0; b.length; ) b.pop()();
    for (let n = 0; n < s.length; n += 1) {
      const e = s[n];
      h.has(e) || (h.add(e), e());
    }
    s.length = 0;
  } while (a.length);
  for (; p.length; ) p.pop()();
  (g = !1), h.clear(), d(t);
}
function z(t) {
  if (t.fragment !== null) {
    t.update(), j(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, n),
      t.after_update.forEach(O);
  }
}
function Q(t) {
  const n = [],
    e = [];
  s.forEach((o) => (t.indexOf(o) === -1 ? n.push(o) : e.push(o))),
    e.forEach((o) => o()),
    (s = n);
}
export {
  J as A,
  K as B,
  v as a,
  I as b,
  F as c,
  b as d,
  P as e,
  S as f,
  D as g,
  C as h,
  M as i,
  q as j,
  B as k,
  O as l,
  w as m,
  x as n,
  H as o,
  Q as p,
  i as q,
  j as r,
  A as s,
  L as t,
  U as u,
  d as v,
  a as w,
  E as x,
  N as y,
  G as z,
};
