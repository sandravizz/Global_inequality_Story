import {
  n as f,
  s as w,
  a as m,
  r as q,
  i as x,
} from "./scheduler.BNaEz25M.js";
const a = [];
function z(e, o) {
  return { subscribe: A(e, o).subscribe };
}
function A(e, o = f) {
  let r;
  const n = new Set();
  function u(t) {
    if (w(e, t) && ((e = t), r)) {
      const i = !a.length;
      for (const s of n) s[1](), a.push(s, e);
      if (i) {
        for (let s = 0; s < a.length; s += 2) a[s][0](a[s + 1]);
        a.length = 0;
      }
    }
  }
  function l(t) {
    u(t(e));
  }
  function b(t, i = f) {
    const s = [t, i];
    return (
      n.add(s),
      n.size === 1 && (r = o(u, l) || f),
      t(e),
      () => {
        n.delete(s), n.size === 0 && r && (r(), (r = null));
      }
    );
  }
  return { set: u, update: l, subscribe: b };
}
function E(e, o, r) {
  const n = !Array.isArray(e),
    u = n ? [e] : e;
  if (!u.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const l = o.length < 2;
  return z(r, (b, t) => {
    let i = !1;
    const s = [];
    let d = 0,
      p = f;
    const h = () => {
        if (d) return;
        p();
        const c = o(n ? s[0] : s, b, t);
        l ? b(c) : (p = x(c) ? c : f);
      },
      y = u.map((c, g) =>
        m(
          c,
          (_) => {
            (s[g] = _), (d &= ~(1 << g)), i && h();
          },
          () => {
            d |= 1 << g;
          },
        ),
      );
    return (
      (i = !0),
      h(),
      function () {
        q(y), p(), (i = !1);
      }
    );
  });
}
export { E as d, A as w };
