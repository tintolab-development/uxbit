(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === 'childList')
        for (const l of i.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
const Ae = 'modulepreload',
  ze = function (e) {
    return '/' + e;
  },
  N = {},
  _e = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const l = document.querySelector('meta[property=csp-nonce]'),
        o = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute('nonce'));
      s = Promise.allSettled(
        n.map((c) => {
          if (((c = ze(c)), c in N)) return;
          N[c] = !0;
          const a = c.endsWith('.css'),
            $ = a ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${c}"]${$}`)) return;
          const d = document.createElement('link');
          if (
            ((d.rel = a ? 'stylesheet' : Ae),
            a || (d.as = 'script'),
            (d.crossOrigin = ''),
            (d.href = c),
            o && d.setAttribute('nonce', o),
            document.head.appendChild(d),
            a)
          )
            return new Promise((f, u) => {
              (d.addEventListener('load', f),
                d.addEventListener('error', () => u(new Error(`Unable to preload CSS for ${c}`))));
            });
        }),
      );
    }
    function i(l) {
      const o = new Event('vite:preloadError', { cancelable: !0 });
      if (((o.payload = l), window.dispatchEvent(o), !o.defaultPrevented)) throw l;
    }
    return s.then((l) => {
      for (const o of l || []) o.status === 'rejected' && i(o.reason);
      return t().catch(i);
    });
  },
  Te = 'uxbit',
  H = { hydratedSelectorName: 'hydrated', lazyLoad: !0, propChangeCallback: !0, updatable: !0 };
var Le = Object.defineProperty,
  Pe = (e, t) => {
    for (var n in t) Le(e, n, { get: t[n], enumerable: !0 });
  },
  w = (e) => {
    if (e.__stencil__getHostRef) return e.__stencil__getHostRef();
  },
  Ie = (e, t) => {
    const n = {
      $flags$: 0,
      $hostElement$: e,
      $cmpMeta$: t,
      $instanceValues$: new Map(),
      $serializerValues$: new Map(),
    };
    ((n.$onReadyPromise$ = new Promise((s) => (n.$onReadyResolve$ = s))),
      (e['s-p'] = []),
      (e['s-rc'] = []),
      (n.$fetchedCbList$ = []));
    const r = n;
    return ((e.__stencil__getHostRef = () => r), r);
  },
  V = (e, t) => t in e,
  z = (e, t) => (0, console.error)(e, t),
  ee = new Map(),
  Oe = (e, t, n) => {
    const r = e.$tagName$.replace(/-/g, '_'),
      s = e.$lazyBundleId$;
    if (!s) return;
    const i = ee.get(s);
    if (i) return i[r];
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return _e(() => import(`./${s}.entry.js`), []).then(
      (l) => (ee.set(s, l), l[r]),
      (l) => {
        z(l, t.$hostElement$);
      },
    );
  },
  j = new Map(),
  He = '{visibility:hidden}.hydrated{visibility:inherit}',
  $e = 'slot-fb{display:contents}slot-fb[hidden]{display:none}',
  te = 'http://www.w3.org/1999/xlink',
  y = typeof window < 'u' ? window : {},
  g = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, r) => e.addEventListener(t, n, r),
    rel: (e, t, n, r) => e.removeEventListener(t, n, r),
    ce: (e, t) => new CustomEvent(e, t),
  },
  je = (e) => Promise.resolve(e),
  G = (() => {
    try {
      return (new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == 'function');
    } catch {}
    return !1;
  })(),
  D = G
    ? !!y.document &&
      Object.getOwnPropertyDescriptor(y.document.adoptedStyleSheets, 'length').writable
    : !1,
  R = !1,
  ne = [],
  de = [],
  Ce = (e, t) => (n) => {
    (e.push(n), R || ((R = !0), g.$flags$ & 4 ? K(B) : g.raf(B)));
  },
  re = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        z(n);
      }
    e.length = 0;
  },
  B = () => {
    (re(ne), re(de), (R = ne.length > 0) && g.raf(B));
  },
  K = (e) => je().then(e),
  Ue = Ce(de),
  Y = (e) => ((e = typeof e), e === 'object' || e === 'function');
function fe(e) {
  var t, n, r;
  return (r =
    (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null
      ? void 0
      : n.getAttribute('content')) != null
    ? r
    : void 0;
}
var De = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  Re = {};
Pe(Re, { err: () => ue, map: () => Be, ok: () => q, unwrap: () => qe, unwrapErr: () => Fe });
var q = (e) => ({ isOk: !0, isErr: !1, value: e }),
  ue = (e) => ({ isOk: !1, isErr: !0, value: e });
function Be(e, t) {
  if (e.isOk) {
    const n = t(e.value);
    return n instanceof Promise ? n.then((r) => q(r)) : q(n);
  }
  if (e.isErr) {
    const n = e.value;
    return ue(n);
  }
  throw 'should never get here';
}
var qe = (e) => {
    if (e.isOk) return e.value;
    throw e.value;
  },
  Fe = (e) => {
    if (e.isErr) return e.value;
    throw e.value;
  };
var L;
function We(e) {
  var t;
  const n = this.attachShadow({ mode: 'open' });
  (L === void 0 && (L = (t = void 0) != null ? t : null),
    L &&
      (D ? n.adoptedStyleSheets.push(L) : (n.adoptedStyleSheets = [...n.adoptedStyleSheets, L])));
}
var k =
    (e, t = '') =>
    () => {},
  Xe = (e, t) => () => {},
  A = new WeakMap(),
  Ge = (e, t, n) => {
    let r = j.get(e);
    (G && n
      ? ((r = r || new CSSStyleSheet()), typeof r == 'string' ? (r = t) : r.replaceSync(t))
      : (r = t),
      j.set(e, r));
  },
  Ke = (e, t, n) => {
    var r;
    const s = pe(t),
      i = j.get(s);
    if (!y.document) return s;
    if (((e = e.nodeType === 11 ? e : y.document), i))
      if (typeof i == 'string') {
        e = e.head || e;
        let l = A.get(e),
          o;
        if ((l || A.set(e, (l = new Set())), !l.has(s))) {
          {
            ((o = y.document.createElement('style')), (o.innerHTML = i));
            const c = (r = g.$nonce$) != null ? r : fe(y.document);
            if ((c != null && o.setAttribute('nonce', c), !(t.$flags$ & 1)))
              if (e.nodeName === 'HEAD') {
                const a = e.querySelectorAll('link[rel=preconnect]'),
                  $ = a.length > 0 ? a[a.length - 1].nextSibling : e.querySelector('style');
                e.insertBefore(o, ($ == null ? void 0 : $.parentNode) === e ? $ : null);
              } else if ('host' in e)
                if (G) {
                  const a = new CSSStyleSheet();
                  (a.replaceSync(i),
                    D
                      ? e.adoptedStyleSheets.unshift(a)
                      : (e.adoptedStyleSheets = [a, ...e.adoptedStyleSheets]));
                } else {
                  const a = e.querySelector('style');
                  a ? (a.innerHTML = i + a.innerHTML) : e.prepend(o);
                }
              else e.append(o);
            t.$flags$ & 1 && e.insertBefore(o, null);
          }
          (t.$flags$ & 4 && (o.innerHTML += $e), l && l.add(s));
        }
      } else
        e.adoptedStyleSheets.includes(i) ||
          (D
            ? e.adoptedStyleSheets.push(i)
            : (e.adoptedStyleSheets = [...e.adoptedStyleSheets, i]));
    return s;
  },
  Ye = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      r = t.$flags$,
      s = k('attachStyles', t.$tagName$),
      i = Ke(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
    (r & 10 && ((n['s-sc'] = i), n.classList.add(i + '-h')), s());
  },
  pe = (e, t) => 'sc-' + e.$tagName$,
  Me = (e, t, ...n) => {
    let r = null,
      s = null,
      i = !1,
      l = !1;
    const o = [],
      c = ($) => {
        for (let d = 0; d < $.length; d++)
          ((r = $[d]),
            Array.isArray(r)
              ? c(r)
              : r != null &&
                typeof r != 'boolean' &&
                ((i = !Y(r)) && (r = String(r)),
                i && l ? (o[o.length - 1].$text$ += r) : o.push(i ? F(null, r) : r),
                (l = i)));
      };
    c(n);
    const a = F(e, null);
    return ((a.$attrs$ = t), o.length > 0 && (a.$children$ = o), (a.$key$ = s), a);
  },
  F = (e, t) => {
    const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
    return ((n.$attrs$ = null), (n.$key$ = null), n);
  },
  Je = {},
  Qe = (e) => e && e.$tag$ === Je,
  M = (e) => {
    const t = De(e);
    return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${t}))(${t}\\b)`, 'g');
  };
M('::slotted');
M(':host');
M(':host-context');
var W = (e, t, n) =>
    e != null && !Y(e)
      ? t & 4
        ? e === 'false'
          ? !1
          : e === '' || !!e
        : t & 2
          ? typeof e == 'string'
            ? parseFloat(e)
            : typeof e == 'number'
              ? e
              : NaN
          : t & 1
            ? String(e)
            : e
      : e,
  Ze = (e, t, n) => {
    const r = g.ce(t, n);
    return (e.dispatchEvent(r), r);
  },
  se = (e, t, n, r, s, i, l) => {
    if (n === r) return;
    let o = V(e, t),
      c = t.toLowerCase();
    if (t === 'class') {
      const a = e.classList,
        $ = oe(n);
      let d = oe(r);
      (a.remove(...$.filter((f) => f && !d.includes(f))),
        a.add(...d.filter((f) => f && !$.includes(f))));
    } else if (t === 'style') {
      for (const a in n)
        (!r || r[a] == null) && (a.includes('-') ? e.style.removeProperty(a) : (e.style[a] = ''));
      for (const a in r)
        (!n || r[a] !== n[a]) &&
          (a.includes('-') ? e.style.setProperty(a, r[a]) : (e.style[a] = r[a]));
    } else if (t !== 'key')
      if (t === 'ref') r && r(e);
      else if (!o && t[0] === 'o' && t[1] === 'n') {
        if (
          (t[2] === '-' ? (t = t.slice(3)) : V(y, c) ? (t = c.slice(2)) : (t = c[2] + t.slice(3)),
          n || r)
        ) {
          const a = t.endsWith(he);
          ((t = t.replace(Ve, '')), n && g.rel(e, t, n, a), r && g.ael(e, t, r, a));
        }
      } else {
        const a = Y(r);
        if (o || (a && r !== null))
          try {
            if (e.tagName.includes('-')) e[t] !== r && (e[t] = r);
            else {
              const d = r ?? '';
              t === 'list'
                ? (o = !1)
                : (n == null || e[t] != d) &&
                  (typeof e.__lookupSetter__(t) == 'function' ? (e[t] = d) : e.setAttribute(t, d));
            }
          } catch {}
        let $ = !1;
        (c !== (c = c.replace(/^xlink\:?/, '')) && ((t = c), ($ = !0)),
          r == null || r === !1
            ? (r !== !1 || e.getAttribute(t) === '') &&
              ($ ? e.removeAttributeNS(te, t) : e.removeAttribute(t))
            : (!o || i & 4 || s) &&
              !a &&
              e.nodeType === 1 &&
              ((r = r === !0 ? '' : r), $ ? e.setAttributeNS(te, t, r) : e.setAttribute(t, r)));
      }
  },
  Ne = /\s/,
  oe = (e) => (
    typeof e == 'object' && e && 'baseVal' in e && (e = e.baseVal),
    !e || typeof e != 'string' ? [] : e.split(Ne)
  ),
  he = 'Capture',
  Ve = new RegExp(he + '$'),
  ge = (e, t, n, r) => {
    const s = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      i = (e && e.$attrs$) || {},
      l = t.$attrs$ || {};
    for (const o of ie(Object.keys(i))) o in l || se(s, o, i[o], void 0, n, t.$flags$);
    for (const o of ie(Object.keys(l))) se(s, o, i[o], l[o], n, t.$flags$);
  };
function ie(e) {
  return e.includes('ref') ? [...e.filter((t) => t !== 'ref'), 'ref'] : e;
}
var J,
  ye = !1,
  C = (e, t, n) => {
    const r = t.$children$[n];
    let s = 0,
      i,
      l;
    if (r.$text$ !== null) i = r.$elm$ = y.document.createTextNode(r.$text$);
    else {
      if (!y.document)
        throw new Error(
          "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.",
        );
      if (((i = r.$elm$ = y.document.createElement(r.$tag$)), ge(null, r, ye), r.$children$))
        for (s = 0; s < r.$children$.length; ++s) ((l = C(e, r, s)), l && i.appendChild(l));
    }
    return ((i['s-hn'] = J), i);
  },
  ve = (e, t, n, r, s, i) => {
    let l = e,
      o;
    for (l.shadowRoot && l.tagName === J && (l = l.shadowRoot); s <= i; ++s)
      r[s] && ((o = C(null, n, s)), o && ((r[s].$elm$ = o), O(l, o, t)));
  },
  Se = (e, t, n) => {
    for (let r = t; r <= n; ++r) {
      const s = e[r];
      if (s) {
        const i = s.$elm$;
        (Ee(s), i && i.remove());
      }
    }
  },
  et = (e, t, n, r, s = !1) => {
    let i = 0,
      l = 0,
      o = 0,
      c = 0,
      a = t.length - 1,
      $ = t[0],
      d = t[a],
      f = r.length - 1,
      u = r[0],
      p = r[f],
      h,
      E;
    for (; i <= a && l <= f; )
      if ($ == null) $ = t[++i];
      else if (d == null) d = t[--a];
      else if (u == null) u = r[++l];
      else if (p == null) p = r[--f];
      else if (I($, u, s)) (x($, u, s), ($ = t[++i]), (u = r[++l]));
      else if (I(d, p, s)) (x(d, p, s), (d = t[--a]), (p = r[--f]));
      else if (I($, p, s))
        (x($, p, s), O(e, $.$elm$, d.$elm$.nextSibling), ($ = t[++i]), (p = r[--f]));
      else if (I(d, u, s)) (x(d, u, s), O(e, d.$elm$, $.$elm$), (d = t[--a]), (u = r[++l]));
      else {
        for (o = -1, c = i; c <= a; ++c)
          if (t[c] && t[c].$key$ !== null && t[c].$key$ === u.$key$) {
            o = c;
            break;
          }
        (o >= 0
          ? ((E = t[o]),
            E.$tag$ !== u.$tag$
              ? (h = C(t && t[l], n, o))
              : (x(E, u, s), (t[o] = void 0), (h = E.$elm$)),
            (u = r[++l]))
          : ((h = C(t && t[l], n, l)), (u = r[++l])),
          h && O($.$elm$.parentNode, h, $.$elm$));
      }
    i > a ? ve(e, r[f + 1] == null ? null : r[f + 1].$elm$, n, r, l, f) : l > f && Se(t, i, a);
  },
  I = (e, t, n = !1) =>
    e.$tag$ === t.$tag$
      ? n
        ? (n && !e.$key$ && t.$key$ && (e.$key$ = t.$key$), !0)
        : e.$key$ === t.$key$
      : !1,
  x = (e, t, n = !1) => {
    const r = (t.$elm$ = e.$elm$),
      s = e.$children$,
      i = t.$children$,
      l = t.$text$;
    l === null
      ? (ge(e, t, ye),
        s !== null && i !== null
          ? et(r, s, t, i, n)
          : i !== null
            ? (e.$text$ !== null && (r.textContent = ''), ve(r, null, t, i, 0, i.length - 1))
            : !n && H.updatable && s !== null && Se(s, 0, s.length - 1))
      : e.$text$ !== l && (r.data = l);
  },
  Ee = (e) => {
    (e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(Ee));
  },
  O = (e, t, n) => (e == null ? void 0 : e.insertBefore(t, n)),
  tt = (e, t, n = !1) => {
    const r = e.$hostElement$,
      s = e.$cmpMeta$,
      i = e.$vnode$ || F(null, null),
      o = Qe(t) ? t : Me(null, null, t);
    if (
      ((J = r.tagName),
      s.$attrsToReflect$ &&
        ((o.$attrs$ = o.$attrs$ || {}),
        s.$attrsToReflect$.forEach(([c, a]) => {
          o.$attrs$[a] = r[c];
        })),
      n && o.$attrs$)
    )
      for (const c of Object.keys(o.$attrs$))
        r.hasAttribute(c) && !['key', 'ref', 'style', 'class'].includes(c) && (o.$attrs$[c] = r[c]);
    ((o.$tag$ = null),
      (o.$flags$ |= 4),
      (e.$vnode$ = o),
      (o.$elm$ = i.$elm$ = r.shadowRoot || r),
      x(i, o, n));
  },
  we = (e, t) => {
    if (t && !e.$onRenderResolve$ && t['s-p']) {
      const n = t['s-p'].push(
        new Promise(
          (r) =>
            (e.$onRenderResolve$ = () => {
              (t['s-p'].splice(n - 1, 1), r());
            }),
        ),
      );
    }
  },
  Q = (e, t) => {
    if (((e.$flags$ |= 16), e.$flags$ & 4)) {
      e.$flags$ |= 512;
      return;
    }
    we(e, e.$ancestorComponent$);
    const n = () => nt(e, t);
    if (t) {
      queueMicrotask(() => {
        n();
      });
      return;
    }
    return Ue(n);
  },
  nt = (e, t) => {
    const n = e.$hostElement$,
      r = k('scheduleUpdate', e.$cmpMeta$.$tagName$),
      s = e.$lazyInstance$;
    if (!s)
      throw new Error(
        `Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`,
      );
    let i;
    return (
      t
        ? (e.$fetchedCbList$.length && e.$fetchedCbList$.forEach((l) => l(n)),
          (i = b(s, 'componentWillLoad', void 0, n)))
        : (i = b(s, 'componentWillUpdate', void 0, n)),
      (i = le(i, () => b(s, 'componentWillRender', void 0, n))),
      r(),
      le(i, () => st(e, s, t))
    );
  },
  le = (e, t) =>
    rt(e)
      ? e.then(t).catch((n) => {
          (console.error(n), t());
        })
      : t(),
  rt = (e) => e instanceof Promise || (e && e.then && typeof e.then == 'function'),
  st = async (e, t, n) => {
    var r;
    const s = e.$hostElement$,
      i = k('update', e.$cmpMeta$.$tagName$),
      l = s['s-rc'];
    n && Ye(e);
    const o = k('render', e.$cmpMeta$.$tagName$);
    (ot(e, t, s, n), l && (l.map((c) => c()), (s['s-rc'] = void 0)), o(), i());
    {
      const c = (r = s['s-p']) != null ? r : [],
        a = () => it(e);
      c.length === 0 ? a() : (Promise.all(c).then(a), (e.$flags$ |= 4), (c.length = 0));
    }
  },
  ot = (e, t, n, r) => {
    try {
      ((t = t.render()), (e.$flags$ &= -17), (e.$flags$ |= 2), tt(e, t, r));
    } catch (s) {
      z(s, e.$hostElement$);
    }
    return null;
  },
  it = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      r = k('postUpdate', t),
      s = e.$lazyInstance$,
      i = e.$ancestorComponent$;
    (b(s, 'componentDidRender', void 0, n),
      e.$flags$ & 64
        ? (b(s, 'componentDidUpdate', void 0, n), r())
        : ((e.$flags$ |= 64),
          lt(n),
          b(s, 'componentDidLoad', void 0, n),
          r(),
          e.$onReadyResolve$(n),
          i || ke()),
      e.$onRenderResolve$ && (e.$onRenderResolve$(), (e.$onRenderResolve$ = void 0)),
      e.$flags$ & 512 && K(() => Q(e, !1)),
      (e.$flags$ &= -517));
  },
  ke = (e) => {
    K(() => Ze(y, 'appload', { detail: { namespace: Te } }));
  },
  b = (e, t, n, r) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (s) {
        z(s, r);
      }
  },
  lt = (e) => {
    var t;
    return e.classList.add((t = H.hydratedSelectorName) != null ? t : 'hydrated');
  },
  at = (e, t) => w(e).$instanceValues$.get(t),
  U = (e, t, n, r) => {
    const s = w(e);
    if (!s) return;
    if (!s)
      throw new Error(
        `Couldn't find host element for "${r.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`,
      );
    const i = s.$hostElement$,
      l = s.$instanceValues$.get(t),
      o = s.$flags$,
      c = s.$lazyInstance$;
    n = W(n, r.$members$[t][0]);
    const a = Number.isNaN(l) && Number.isNaN(n),
      $ = n !== l && !a;
    if ((!(o & 8) || l === void 0) && $ && (s.$instanceValues$.set(t, n), c)) {
      if (r.$watchers$ && o & 128) {
        const d = r.$watchers$[t];
        d &&
          d.map((f) => {
            try {
              c[f](n, l, t);
            } catch (u) {
              z(u, i);
            }
          });
      }
      if ((o & 18) === 2) {
        if (c.componentShouldUpdate && c.componentShouldUpdate(n, l, t) === !1) return;
        Q(s, !1);
      }
    }
  },
  be = (e, t, n) => {
    var r, s;
    const i = e.prototype;
    if (t.$members$ || H.propChangeCallback) {
      (e.watchers && !t.$watchers$ && (t.$watchers$ = e.watchers),
        e.deserializers && !t.$deserializers$ && (t.$deserializers$ = e.deserializers),
        e.serializers && !t.$serializers$ && (t.$serializers$ = e.serializers));
      const l = Object.entries((r = t.$members$) != null ? r : {});
      if (
        (l.map(([o, [c]]) => {
          if (c & 31 || (n & 2 && c & 32)) {
            const { get: a, set: $ } = Object.getOwnPropertyDescriptor(i, o) || {};
            (a && (t.$members$[o][0] |= 2048),
              $ && (t.$members$[o][0] |= 4096),
              (n & 1 || !a) &&
                Object.defineProperty(i, o, {
                  get() {
                    {
                      if (!(t.$members$[o][0] & 2048)) return at(this, o);
                      const d = w(this),
                        f = d ? d.$lazyInstance$ : i;
                      return f ? f[o] : void 0;
                    }
                  },
                  configurable: !0,
                  enumerable: !0,
                }),
              Object.defineProperty(i, o, {
                set(d) {
                  const f = w(this);
                  if (f) {
                    if ($) {
                      (typeof (c & 32 ? this[o] : f.$hostElement$[o]) > 'u' &&
                        f.$instanceValues$.get(o) &&
                        (d = f.$instanceValues$.get(o)),
                        $.apply(this, [W(d, c)]),
                        (d = c & 32 ? this[o] : f.$hostElement$[o]),
                        U(this, o, d, t));
                      return;
                    }
                    {
                      if (!(n & 1) || !(t.$members$[o][0] & 4096)) {
                        (U(this, o, d, t),
                          n & 1 &&
                            !f.$lazyInstance$ &&
                            f.$fetchedCbList$.push(() => {
                              t.$members$[o][0] & 4096 &&
                                f.$lazyInstance$[o] !== f.$instanceValues$.get(o) &&
                                (f.$lazyInstance$[o] = d);
                            }));
                        return;
                      }
                      const u = () => {
                        const p = f.$lazyInstance$[o];
                        (!f.$instanceValues$.get(o) && p && f.$instanceValues$.set(o, p),
                          (f.$lazyInstance$[o] = W(d, c)),
                          U(this, o, f.$lazyInstance$[o], t));
                      };
                      f.$lazyInstance$
                        ? u()
                        : f.$fetchedCbList$.push(() => {
                            u();
                          });
                    }
                  }
                },
              }));
          }
        }),
        n & 1)
      ) {
        const o = new Map();
        ((i.attributeChangedCallback = function (c, a, $) {
          g.jmp(() => {
            var d;
            const f = o.get(c),
              u = w(this);
            if (
              (this.hasOwnProperty(f) && H.lazyLoad && (($ = this[f]), delete this[f]),
              i.hasOwnProperty(f) && typeof this[f] == 'number' && this[f] == $)
            )
              return;
            if (f == null) {
              const E = u == null ? void 0 : u.$flags$;
              if (u && E && !(E & 8) && E & 128 && $ !== a) {
                const m = u.$lazyInstance$,
                  _ = (d = t.$watchers$) == null ? void 0 : d[c];
                _ == null ||
                  _.forEach((v) => {
                    m[v] != null && m[v].call(m, $, a, c);
                  });
              }
              return;
            }
            const p = l.find(([E]) => E === f);
            p && p[1][0] & 4 && ($ = !($ === null || $ === 'false'));
            const h = Object.getOwnPropertyDescriptor(i, f);
            $ != this[f] && (!h.get || h.set) && (this[f] = $);
          });
        }),
          (e.observedAttributes = Array.from(
            new Set([
              ...Object.keys((s = t.$watchers$) != null ? s : {}),
              ...l
                .filter(([c, a]) => a[0] & 31)
                .map(([c, a]) => {
                  var $;
                  const d = a[1] || c;
                  return (
                    o.set(d, c),
                    a[0] & 512 && (($ = t.$attrsToReflect$) == null || $.push([c, d])),
                    d
                  );
                }),
            ]),
          )));
      }
    }
    return e;
  },
  ct = async (e, t, n, r) => {
    let s;
    if (!(t.$flags$ & 32)) {
      if (((t.$flags$ |= 32), n.$lazyBundleId$)) {
        const c = Oe(n, t);
        if (c && 'then' in c) {
          const $ = Xe();
          ((s = await c), $());
        } else s = c;
        if (!s) throw new Error(`Constructor for "${n.$tagName$}#${t.$modeName$}" was not found`);
        s.isProxied ||
          ((n.$watchers$ = s.watchers),
          (n.$serializers$ = s.serializers),
          (n.$deserializers$ = s.deserializers),
          be(s, n, 2),
          (s.isProxied = !0));
        const a = k('createInstance', n.$tagName$);
        t.$flags$ |= 8;
        try {
          new s(t);
        } catch ($) {
          z($, e);
        }
        ((t.$flags$ &= -9), (t.$flags$ |= 128), a(), X(t.$lazyInstance$, e));
      } else {
        s = e.constructor;
        const c = e.localName;
        customElements.whenDefined(c).then(() => (t.$flags$ |= 128));
      }
      if (s && s.style) {
        let c;
        typeof s.style == 'string' && (c = s.style);
        const a = pe(n);
        if (!j.has(a)) {
          const $ = k('registerStyles', n.$tagName$);
          (Ge(a, c, !!(n.$flags$ & 1)), $());
        }
      }
    }
    const i = t.$ancestorComponent$,
      l = () => Q(t, !0);
    i && i['s-rc'] ? i['s-rc'].push(l) : l();
  },
  X = (e, t) => {
    b(e, 'connectedCallback', void 0, t);
  },
  $t = (e) => {
    if (!(g.$flags$ & 1)) {
      const t = w(e);
      if (!t) return;
      const n = t.$cmpMeta$,
        r = k('connectedCallback', n.$tagName$);
      if (t.$flags$ & 1)
        t != null && t.$lazyInstance$
          ? X(t.$lazyInstance$, e)
          : t != null &&
            t.$onReadyPromise$ &&
            t.$onReadyPromise$.then(() => X(t.$lazyInstance$, e));
      else {
        t.$flags$ |= 1;
        {
          let s = e;
          for (; (s = s.parentNode || s.host); )
            if (s['s-p']) {
              we(t, (t.$ancestorComponent$ = s));
              break;
            }
        }
        (n.$members$ &&
          Object.entries(n.$members$).map(([s, [i]]) => {
            if (i & 31 && s in e && e[s] !== Object.prototype[s]) {
              const l = e[s];
              (delete e[s], (e[s] = l));
            }
          }),
          ct(e, t, n));
      }
      r();
    }
  },
  ae = (e, t) => {
    b(e, 'disconnectedCallback', void 0, t || e);
  },
  dt = async (e) => {
    if (!(g.$flags$ & 1)) {
      const t = w(e);
      t != null && t.$lazyInstance$
        ? ae(t.$lazyInstance$, e)
        : t != null && t.$onReadyPromise$ && t.$onReadyPromise$.then(() => ae(t.$lazyInstance$, e));
    }
    (A.has(e) && A.delete(e), e.shadowRoot && A.has(e.shadowRoot) && A.delete(e.shadowRoot));
  },
  ft = (e, t = {}) => {
    var n;
    if (!y.document) {
      console.warn('Stencil: No document found. Skipping bootstrapping lazy components.');
      return;
    }
    const r = k(),
      s = [],
      i = t.exclude || [],
      l = y.customElements,
      o = y.document.head,
      c = o.querySelector('meta[charset]'),
      a = y.document.createElement('style'),
      $ = [];
    let d,
      f = !0;
    (Object.assign(g, t),
      (g.$resourcesUrl$ = new URL(t.resourcesUrl || './', y.document.baseURI).href));
    let u = !1;
    if (
      (e.map((p) => {
        p[1].map((h) => {
          var E, m, _;
          const v = { $flags$: h[0], $tagName$: h[1], $members$: h[2], $listeners$: h[3] };
          (v.$flags$ & 4 && (u = !0),
            (v.$members$ = h[2]),
            (v.$attrsToReflect$ = []),
            (v.$watchers$ = (E = h[4]) != null ? E : {}),
            (v.$serializers$ = (m = h[5]) != null ? m : {}),
            (v.$deserializers$ = (_ = h[6]) != null ? _ : {}));
          const P = v.$tagName$,
            me = class extends HTMLElement {
              constructor(S) {
                if (
                  (super(S),
                  (this.hasRegisteredEventListeners = !1),
                  (S = this),
                  Ie(S, v),
                  v.$flags$ & 1)
                ) {
                  if (!S.shadowRoot) We.call(S, v);
                  else if (S.shadowRoot.mode !== 'open')
                    throw new Error(
                      `Unable to re-use existing shadow root for ${v.$tagName$}! Mode is set to ${S.shadowRoot.mode} but Stencil only supports open shadow roots.`,
                    );
                }
              }
              connectedCallback() {
                w(this) &&
                  (this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = !0),
                  d && (clearTimeout(d), (d = null)),
                  f ? $.push(this) : g.jmp(() => $t(this)));
              }
              disconnectedCallback() {
                (g.jmp(() => dt(this)),
                  g.raf(() => {
                    var S;
                    const T = w(this);
                    if (!T) return;
                    const Z = $.findIndex((xe) => xe === this);
                    (Z > -1 && $.splice(Z, 1),
                      ((S = T == null ? void 0 : T.$vnode$) == null ? void 0 : S.$elm$) instanceof
                        Node &&
                        !T.$vnode$.$elm$.isConnected &&
                        delete T.$vnode$.$elm$);
                  }));
              }
              componentOnReady() {
                var S;
                return (S = w(this)) == null ? void 0 : S.$onReadyPromise$;
              }
            };
          ((v.$lazyBundleId$ = p[0]),
            !i.includes(P) && !l.get(P) && (s.push(P), l.define(P, be(me, v, 1))));
        });
      }),
      s.length > 0 &&
        (u && (a.textContent += $e), (a.textContent += s.sort() + He), a.innerHTML.length))
    ) {
      a.setAttribute('data-styles', '');
      const p = (n = g.$nonce$) != null ? n : fe(y.document);
      (p != null && a.setAttribute('nonce', p),
        o.insertBefore(a, c ? c.nextSibling : o.firstChild));
    }
    ((f = !1),
      $.length ? $.map((p) => p.connectedCallback()) : g.jmp(() => (d = setTimeout(ke, 30))),
      r());
  };
const ut = () => {},
  pt = async (e, t) => {
    if (!(typeof window > 'u'))
      return (
        await ut(),
        ft(
          [
            [
              'tinto-button_5',
              [
                [
                  769,
                  'tinto-button',
                  {
                    variant: [513],
                    size: [513],
                    pill: [516],
                    block: [516],
                    elevated: [516],
                    outline: [516],
                    radius: [513],
                    disabled: [516],
                    loading: [516],
                    toggle: [516],
                    pressed: [1540],
                    type: [513],
                    href: [513],
                    target: [513],
                    label: [513],
                    textFamily: [513, 'text-family'],
                    textSize: [513, 'text-size'],
                    textWeight: [513, 'text-weight'],
                    textColor: [513, 'text-color'],
                  },
                  null,
                  {
                    textFamily: ['handleStyleTokenChange'],
                    textSize: ['handleStyleTokenChange'],
                    textWeight: ['handleStyleTokenChange'],
                    textColor: ['handleStyleTokenChange'],
                    radius: ['handleStyleTokenChange'],
                  },
                ],
                [
                  769,
                  'tinto-image',
                  {
                    src: [513],
                    alt: [513],
                    ratio: [513],
                    fit: [513],
                    position: [513],
                    radius: [513],
                    rounded: [513],
                    border: [513],
                    shadow: [513],
                    background: [513],
                    width: [513],
                    height: [513],
                    loading: [513],
                    priority: [516],
                    placeholder: [513],
                    srcset: [513],
                    sizes: [513],
                    decoding: [513],
                    crossorigin: [513],
                    referrerpolicy: [513],
                    href: [513],
                    target: [513],
                    rel: [513],
                    download: [513],
                    as: [513],
                    disabled: [516],
                    animation: [513],
                    play: [516],
                    rotate: [513],
                    duration: [514],
                    repeat: [520],
                    pauseOnHover: [516, 'pause-on-hover'],
                    startOnViewport: [516, 'start-on-viewport'],
                  },
                  null,
                  {
                    ratio: ['applyFrameStyles'],
                    fit: ['applyFrameStyles'],
                    position: ['applyFrameStyles'],
                    radius: ['applyFrameStyles'],
                    rounded: ['applyFrameStyles'],
                    border: ['applyFrameStyles'],
                    shadow: ['applyFrameStyles'],
                    background: ['applyFrameStyles'],
                    width: ['syncHostBoxSize'],
                    height: ['syncHostBoxSize'],
                    src: ['updateImageAttrs'],
                    alt: ['updateImageAttrs'],
                    srcset: ['updateImageAttrs'],
                    sizes: ['updateImageAttrs'],
                    loading: ['updateImageAttrs'],
                    priority: ['updateImageAttrs'],
                    placeholder: ['updateImageAttrs'],
                    decoding: ['updateImageAttrs'],
                    crossorigin: ['updateImageAttrs'],
                    referrerpolicy: ['updateImageAttrs'],
                    href: ['onStructureChanged'],
                    as: ['onStructureChanged'],
                    target: ['onStructureChanged'],
                    rel: ['onStructureChanged'],
                    download: ['onStructureChanged'],
                    disabled: ['onStructureChanged'],
                    animation: ['applyAnimation'],
                    play: ['applyAnimation'],
                    rotate: ['applyAnimation'],
                    duration: ['applyAnimation'],
                    repeat: ['applyAnimation'],
                    pauseOnHover: ['applyAnimation'],
                    startOnViewport: ['applyAnimation'],
                  },
                ],
                [
                  769,
                  'tinto-section',
                  {
                    direction: [513],
                    wrap: [513],
                    justify: [513],
                    align: [513],
                    gap: [513],
                    maxWidth: [513, 'max-width'],
                    padding: [513],
                    margin: [513],
                    background: [513],
                    color: [513],
                    radius: [513],
                    shadow: [513],
                    center: [516],
                    heightMode: [513, 'height-mode'],
                    scrollable: [516],
                  },
                ],
                [
                  769,
                  'tinto-typography',
                  {
                    variant: [513],
                    as: [513],
                    font: [513],
                    fontSize: [513, 'font-size'],
                    color: [513],
                    align: [513],
                    weight: [520],
                    inline: [516],
                    underline: [516],
                    highlight: [513],
                    visible: [516],
                    href: [513],
                    target: [513],
                    rel: [513],
                    rolling: [516],
                    rollSpeed: [514, 'roll-speed'],
                    rollAxis: [513, 'roll-axis'],
                    rollClone: [514, 'roll-clone'],
                    rollGap: [513, 'roll-gap'],
                    rollPlay: [516, 'roll-play'],
                    rollStartOnViewport: [516, 'roll-start-on-viewport'],
                    pauseOnHover: [516, 'pause-on-hover'],
                    typingTexts: [513, 'typing-texts'],
                    typingDuration: [514, 'typing-duration'],
                    typingEraseDuration: [514, 'typing-erase-duration'],
                    typingLoop: [516, 'typing-loop'],
                    typingCursor: [516, 'typing-cursor'],
                    typingUnit: [513, 'typing-unit'],
                  },
                  null,
                  { fontSize: ['handleFontSizeChange'] },
                ],
                [
                  769,
                  'tinto-wrapper',
                  {
                    direction: [513],
                    wrap: [513],
                    justify: [513],
                    align: [513],
                    gap: [513],
                    directionDesktop: [513, 'direction-desktop'],
                    wrapDesktop: [513, 'wrap-desktop'],
                    justifyDesktop: [513, 'justify-desktop'],
                    alignDesktop: [513, 'align-desktop'],
                    gapDesktop: [513, 'gap-desktop'],
                    padding: [513],
                    margin: [513],
                    radius: [513],
                    shadow: [513],
                    border: [513],
                    color: [513],
                    background: [513],
                    src: [513],
                    bgSize: [513, 'bg-size'],
                    bgPosition: [513, 'bg-position'],
                    bgRepeat: [513, 'bg-repeat'],
                    bgAttachment: [513, 'bg-attachment'],
                    bgBlend: [513, 'bg-blend'],
                    overlay: [513],
                    overlayOpacity: [514, 'overlay-opacity'],
                    fill: [516],
                  },
                ],
              ],
            ],
          ],
          t,
        )
      );
  };
(function () {
  if (typeof window < 'u' && window.Reflect !== void 0 && window.customElements !== void 0) {
    var e = HTMLElement;
    ((window.HTMLElement = function () {
      return Reflect.construct(e, [], this.constructor);
    }),
      (HTMLElement.prototype = e.prototype),
      (HTMLElement.prototype.constructor = HTMLElement),
      Object.setPrototypeOf(HTMLElement, e));
  }
})();
pt();
const ce = document.getElementById('app');
ce &&
  (ce.innerHTML = `
    <section class="template-section">
      <h1>UXBIT Templates Workspace</h1>
      <p>Stencil components render directly inside this Vite-powered shell.</p>
      <my-component first="UXBIT" last="Templates"></my-component>
    </section>
  `);
