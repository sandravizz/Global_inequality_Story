import {
  s as d,
  n as u,
  e as R,
  u as S,
  g as b,
  f as k,
} from "../chunks/scheduler.BNaEz25M.js";
import {
  S as h,
  i as g,
  e as E,
  c as v,
  a as w,
  d as l,
  f as c,
  u as y,
  h as x,
  v as A,
  k as F,
  o as q,
  w as H,
  n as $,
  l as p,
  x as O,
} from "../chunks/index.Cg9saw9v.js";
function C(o) {
  let t;
  return {
    c() {
      t = E("header");
    },
    l(n) {
      (t = v(n, "HEADER", {})), w(t).forEach(l);
    },
    m(n, s) {
      c(n, t, s);
    },
    p: u,
    i: u,
    o: u,
    d(n) {
      n && l(t);
    },
  };
}
class D extends h {
  constructor(t) {
    super(), g(this, t, null, C, d, {});
  }
}
function I(o) {
  let t;
  return {
    c() {
      t = E("footer");
    },
    l(n) {
      (t = v(n, "FOOTER", {})), w(t).forEach(l);
    },
    m(n, s) {
      c(n, t, s);
    },
    p: u,
    i: u,
    o: u,
    d(n) {
      n && l(t);
    },
  };
}
class L extends h {
  constructor(t) {
    super(), g(this, t, null, I, d, {});
  }
}
function M(o) {
  let t, n, s, f, i, m;
  t = new D({});
  const _ = o[1].default,
    a = R(_, o, o[0], null);
  return (
    (i = new L({})),
    {
      c() {
        y(t.$$.fragment),
          (n = x()),
          (s = E("main")),
          a && a.c(),
          (f = x()),
          y(i.$$.fragment),
          this.h();
      },
      l(e) {
        A(t.$$.fragment, e), (n = F(e)), (s = v(e, "MAIN", { id: !0 }));
        var r = w(s);
        a && a.l(r), r.forEach(l), (f = F(e)), A(i.$$.fragment, e), this.h();
      },
      h() {
        q(s, "id", "content");
      },
      m(e, r) {
        H(t, e, r),
          c(e, n, r),
          c(e, s, r),
          a && a.m(s, null),
          c(e, f, r),
          H(i, e, r),
          (m = !0);
      },
      p(e, [r]) {
        a &&
          a.p &&
          (!m || r & 1) &&
          S(a, _, e, e[0], m ? k(_, e[0], r, null) : b(e[0]), null);
      },
      i(e) {
        m || ($(t.$$.fragment, e), $(a, e), $(i.$$.fragment, e), (m = !0));
      },
      o(e) {
        p(t.$$.fragment, e), p(a, e), p(i.$$.fragment, e), (m = !1);
      },
      d(e) {
        e && (l(n), l(s), l(f)), O(t, e), a && a.d(e), O(i, e);
      },
    }
  );
}
function N(o, t, n) {
  let { $$slots: s = {}, $$scope: f } = t;
  return (
    (o.$$set = (i) => {
      "$$scope" in i && n(0, (f = i.$$scope));
    }),
    [f, s]
  );
}
class z extends h {
  constructor(t) {
    super(), g(this, t, N, M, d, {});
  }
}
export { z as component };
