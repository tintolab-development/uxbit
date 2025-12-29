(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === 'childList')
        for (const l of o.addedNodes) l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
const Ae = 'modulepreload',
  ze = function (e) {
    return '/' + e;
  },
  V = {},
  Ie = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName('link');
      const l = document.querySelector('meta[property=csp-nonce]'),
        i = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute('nonce'));
      s = Promise.allSettled(
        n.map((c) => {
          if (((c = ze(c)), c in V)) return;
          V[c] = !0;
          const a = c.endsWith('.css'),
            d = a ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const $ = document.createElement('link');
          if (
            (($.rel = a ? 'stylesheet' : Ae),
            a || ($.as = 'script'),
            ($.crossOrigin = ''),
            ($.href = c),
            i && $.setAttribute('nonce', i),
            document.head.appendChild($),
            a)
          )
            return new Promise((u, f) => {
              ($.addEventListener('load', u),
                $.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${c}`))));
            });
        }),
      );
    }
    function o(l) {
      const i = new Event('vite:preloadError', { cancelable: !0 });
      if (((i.payload = l), window.dispatchEvent(i), !i.defaultPrevented)) throw l;
    }
    return s.then((l) => {
      for (const i of l || []) i.status === 'rejected' && o(i.reason);
      return t().catch(o);
    });
  },
  Pe = 'uxbit',
  C = { hydratedSelectorName: 'hydrated', lazyLoad: !0, propChangeCallback: !0, updatable: !0 };
var Te = Object.defineProperty,
  _e = (e, t) => {
    for (var n in t) Te(e, n, { get: t[n], enumerable: !0 });
  },
  b = (e) => {
    if (e.__stencil__getHostRef) return e.__stencil__getHostRef();
  },
  Le = (e, t) => {
    const n = {
      $flags$: 0,
      $hostElement$: e,
      $cmpMeta$: t,
      $instanceValues$: new Map(),
      $serializerValues$: new Map(),
    };
    ((n.$onInstancePromise$ = new Promise((s) => (n.$onInstanceResolve$ = s))),
      (n.$onReadyPromise$ = new Promise((s) => (n.$onReadyResolve$ = s))),
      (e['s-p'] = []),
      (e['s-rc'] = []),
      (n.$fetchedCbList$ = []));
    const r = n;
    return ((e.__stencil__getHostRef = () => r), r);
  },
  N = (e, t) => t in e,
  z = (e, t) => (0, console.error)(e, t),
  ee = new Map(),
  Oe = (e, t, n) => {
    const r = e.$tagName$.replace(/-/g, '_'),
      s = e.$lazyBundleId$;
    if (!s) return;
    const o = ee.get(s);
    if (o) return o[r];
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return Ie(() => import(`./${s}.entry.js`), []).then(
      (l) => (ee.set(s, l), l[r]),
      (l) => {
        z(l, t.$hostElement$);
      },
    );
  },
  H = new Map(),
  Ce = '{visibility:hidden}.hydrated{visibility:inherit}',
  de = 'slot-fb{display:contents}slot-fb[hidden]{display:none}',
  te = 'http://www.w3.org/1999/xlink',
  y = typeof window < 'u' ? window : {},
  h = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, r) => e.addEventListener(t, n, r),
    rel: (e, t, n, r) => e.removeEventListener(t, n, r),
    ce: (e, t) => new CustomEvent(e, t),
  },
  He = (e) => Promise.resolve(e),
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
  U = !1,
  ne = [],
  $e = [],
  je = (e, t) => (n) => {
    (e.push(n), U || ((U = !0), h.$flags$ & 4 ? Y(R) : h.raf(R)));
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
  R = () => {
    (re(ne), re($e), (U = ne.length > 0) && h.raf(R));
  },
  Y = (e) => He().then(e),
  Be = je($e),
  K = (e) => ((e = typeof e), e === 'object' || e === 'function');
function ue(e) {
  var t, n, r;
  return (r =
    (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null
      ? void 0
      : n.getAttribute('content')) != null
    ? r
    : void 0;
}
var De = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  Ue = {};
_e(Ue, { err: () => fe, map: () => Re, ok: () => F, unwrap: () => Fe, unwrapErr: () => qe });
var F = (e) => ({ isOk: !0, isErr: !1, value: e }),
  fe = (e) => ({ isOk: !1, isErr: !0, value: e });
function Re(e, t) {
  if (e.isOk) {
    const n = t(e.value);
    return n instanceof Promise ? n.then((r) => F(r)) : F(n);
  }
  if (e.isErr) {
    const n = e.value;
    return fe(n);
  }
  throw 'should never get here';
}
var Fe = (e) => {
    if (e.isOk) return e.value;
    throw e.value;
  },
  qe = (e) => {
    if (e.isErr) return e.value;
    throw e.value;
  };
var T;
function We(e) {
  var t;
  const n = this.attachShadow({ mode: 'open' });
  (T === void 0 && (T = (t = void 0) != null ? t : null),
    T &&
      (D ? n.adoptedStyleSheets.push(T) : (n.adoptedStyleSheets = [...n.adoptedStyleSheets, T])));
}
var k =
    (e, t = '') =>
    () => {},
  Xe = (e, t) => () => {},
  A = new WeakMap(),
  Ge = (e, t, n) => {
    let r = H.get(e);
    (G && n
      ? ((r = r || new CSSStyleSheet()), typeof r == 'string' ? (r = t) : r.replaceSync(t))
      : (r = t),
      H.set(e, r));
  },
  Ye = (e, t, n) => {
    var r;
    const s = pe(t),
      o = H.get(s);
    if (!y.document) return s;
    if (((e = e.nodeType === 11 ? e : y.document), o))
      if (typeof o == 'string') {
        e = e.head || e;
        let l = A.get(e),
          i;
        if ((l || A.set(e, (l = new Set())), !l.has(s))) {
          {
            ((i = y.document.createElement('style')), (i.innerHTML = o));
            const c = (r = h.$nonce$) != null ? r : ue(y.document);
            if ((c != null && i.setAttribute('nonce', c), !(t.$flags$ & 1)))
              if (e.nodeName === 'HEAD') {
                const a = e.querySelectorAll('link[rel=preconnect]'),
                  d = a.length > 0 ? a[a.length - 1].nextSibling : e.querySelector('style');
                e.insertBefore(i, (d == null ? void 0 : d.parentNode) === e ? d : null);
              } else if ('host' in e)
                if (G) {
                  const a = new CSSStyleSheet();
                  (a.replaceSync(o),
                    D
                      ? e.adoptedStyleSheets.unshift(a)
                      : (e.adoptedStyleSheets = [a, ...e.adoptedStyleSheets]));
                } else {
                  const a = e.querySelector('style');
                  a ? (a.innerHTML = o + a.innerHTML) : e.prepend(i);
                }
              else e.append(i);
            t.$flags$ & 1 && e.insertBefore(i, null);
          }
          (t.$flags$ & 4 && (i.innerHTML += de), l && l.add(s));
        }
      } else
        e.adoptedStyleSheets.includes(o) ||
          (D
            ? e.adoptedStyleSheets.push(o)
            : (e.adoptedStyleSheets = [...e.adoptedStyleSheets, o]));
    return s;
  },
  Ke = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      r = t.$flags$,
      s = k('attachStyles', t.$tagName$),
      o = Ye(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
    (r & 10 && ((n['s-sc'] = o), n.classList.add(o + '-h')), s());
  },
  pe = (e, t) => 'sc-' + e.$tagName$,
  Me = (e, t, ...n) => {
    let r = null,
      s = null,
      o = !1,
      l = !1;
    const i = [],
      c = (d) => {
        for (let $ = 0; $ < d.length; $++)
          ((r = d[$]),
            Array.isArray(r)
              ? c(r)
              : r != null &&
                typeof r != 'boolean' &&
                ((o = !K(r)) && (r = String(r)),
                o && l ? (i[i.length - 1].$text$ += r) : i.push(o ? q(null, r) : r),
                (l = o)));
      };
    c(n);
    const a = q(e, null);
    return ((a.$attrs$ = t), i.length > 0 && (a.$children$ = i), (a.$key$ = s), a);
  },
  q = (e, t) => {
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
    e != null && !K(e)
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
    const r = h.ce(t, n);
    return (e.dispatchEvent(r), r);
  },
  se = (e, t, n, r, s, o, l) => {
    if (n === r) return;
    let i = N(e, t),
      c = t.toLowerCase();
    if (t === 'class') {
      const a = e.classList,
        d = ie(n);
      let $ = ie(r);
      (a.remove(...d.filter((u) => u && !$.includes(u))),
        a.add(...$.filter((u) => u && !d.includes(u))));
    } else if (t === 'style') {
      for (const a in n)
        (!r || r[a] == null) && (a.includes('-') ? e.style.removeProperty(a) : (e.style[a] = ''));
      for (const a in r)
        (!n || r[a] !== n[a]) &&
          (a.includes('-') ? e.style.setProperty(a, r[a]) : (e.style[a] = r[a]));
    } else if (t !== 'key')
      if (t === 'ref') r && r(e);
      else if (!i && t[0] === 'o' && t[1] === 'n') {
        if (
          (t[2] === '-' ? (t = t.slice(3)) : N(y, c) ? (t = c.slice(2)) : (t = c[2] + t.slice(3)),
          n || r)
        ) {
          const a = t.endsWith(ge);
          ((t = t.replace(Ne, '')), n && h.rel(e, t, n, a), r && h.ael(e, t, r, a));
        }
      } else {
        const a = K(r);
        if (i || (a && r !== null))
          try {
            if (e.tagName.includes('-')) e[t] !== r && (e[t] = r);
            else {
              const $ = r ?? '';
              t === 'list'
                ? (i = !1)
                : (n == null || e[t] != $) &&
                  (typeof e.__lookupSetter__(t) == 'function' ? (e[t] = $) : e.setAttribute(t, $));
            }
          } catch {}
        let d = !1;
        (c !== (c = c.replace(/^xlink\:?/, '')) && ((t = c), (d = !0)),
          r == null || r === !1
            ? (r !== !1 || e.getAttribute(t) === '') &&
              (d ? e.removeAttributeNS(te, t) : e.removeAttribute(t))
            : (!i || o & 4 || s) &&
              !a &&
              e.nodeType === 1 &&
              ((r = r === !0 ? '' : r), d ? e.setAttributeNS(te, t, r) : e.setAttribute(t, r)));
      }
  },
  Ve = /\s/,
  ie = (e) => (
    typeof e == 'object' && e && 'baseVal' in e && (e = e.baseVal),
    !e || typeof e != 'string' ? [] : e.split(Ve)
  ),
  ge = 'Capture',
  Ne = new RegExp(ge + '$'),
  he = (e, t, n, r) => {
    const s = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      o = (e && e.$attrs$) || {},
      l = t.$attrs$ || {};
    for (const i of oe(Object.keys(o))) i in l || se(s, i, o[i], void 0, n, t.$flags$);
    for (const i of oe(Object.keys(l))) se(s, i, o[i], l[i], n, t.$flags$);
  };
function oe(e) {
  return e.includes('ref') ? [...e.filter((t) => t !== 'ref'), 'ref'] : e;
}
var J,
  ye = !1,
  j = (e, t, n) => {
    const r = t.$children$[n];
    let s = 0,
      o,
      l;
    if (r.$text$ !== null) o = r.$elm$ = y.document.createTextNode(r.$text$);
    else {
      if (!y.document)
        throw new Error(
          "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.",
        );
      if (((o = r.$elm$ = y.document.createElement(r.$tag$)), he(null, r, ye), r.$children$))
        for (s = 0; s < r.$children$.length; ++s) ((l = j(e, r, s)), l && o.appendChild(l));
    }
    return ((o['s-hn'] = J), o);
  },
  ve = (e, t, n, r, s, o) => {
    let l = e,
      i;
    for (l.shadowRoot && l.tagName === J && (l = l.shadowRoot); s <= o; ++s)
      r[s] && ((i = j(null, n, s)), i && ((r[s].$elm$ = i), O(l, i, t)));
  },
  Se = (e, t, n) => {
    for (let r = t; r <= n; ++r) {
      const s = e[r];
      if (s) {
        const o = s.$elm$;
        (we(s), o && o.remove());
      }
    }
  },
  et = (e, t, n, r, s = !1) => {
    let o = 0,
      l = 0,
      i = 0,
      c = 0,
      a = t.length - 1,
      d = t[0],
      $ = t[a],
      u = r.length - 1,
      f = r[0],
      p = r[u],
      g,
      w;
    for (; o <= a && l <= u; )
      if (d == null) d = t[++o];
      else if ($ == null) $ = t[--a];
      else if (f == null) f = r[++l];
      else if (p == null) p = r[--u];
      else if (L(d, f, s)) (x(d, f, s), (d = t[++o]), (f = r[++l]));
      else if (L($, p, s)) (x($, p, s), ($ = t[--a]), (p = r[--u]));
      else if (L(d, p, s))
        (x(d, p, s), O(e, d.$elm$, $.$elm$.nextSibling), (d = t[++o]), (p = r[--u]));
      else if (L($, f, s)) (x($, f, s), O(e, $.$elm$, d.$elm$), ($ = t[--a]), (f = r[++l]));
      else {
        for (i = -1, c = o; c <= a; ++c)
          if (t[c] && t[c].$key$ !== null && t[c].$key$ === f.$key$) {
            i = c;
            break;
          }
        (i >= 0
          ? ((w = t[i]),
            w.$tag$ !== f.$tag$
              ? (g = j(t && t[l], n, i))
              : (x(w, f, s), (t[i] = void 0), (g = w.$elm$)),
            (f = r[++l]))
          : ((g = j(t && t[l], n, l)), (f = r[++l])),
          g && O(d.$elm$.parentNode, g, d.$elm$));
      }
    o > a ? ve(e, r[u + 1] == null ? null : r[u + 1].$elm$, n, r, l, u) : l > u && Se(t, o, a);
  },
  L = (e, t, n = !1) =>
    e.$tag$ === t.$tag$
      ? n
        ? (n && !e.$key$ && t.$key$ && (e.$key$ = t.$key$), !0)
        : e.$key$ === t.$key$
      : !1,
  x = (e, t, n = !1) => {
    const r = (t.$elm$ = e.$elm$),
      s = e.$children$,
      o = t.$children$,
      l = t.$text$;
    l === null
      ? (he(e, t, ye),
        s !== null && o !== null
          ? et(r, s, t, o, n)
          : o !== null
            ? (e.$text$ !== null && (r.textContent = ''), ve(r, null, t, o, 0, o.length - 1))
            : !n && C.updatable && s !== null && Se(s, 0, s.length - 1))
      : e.$text$ !== l && (r.data = l);
  },
  we = (e) => {
    (e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(we));
  },
  O = (e, t, n) => (e == null ? void 0 : e.insertBefore(t, n)),
  tt = (e, t, n = !1) => {
    const r = e.$hostElement$,
      s = e.$cmpMeta$,
      o = e.$vnode$ || q(null, null),
      i = Qe(t) ? t : Me(null, null, t);
    if (
      ((J = r.tagName),
      s.$attrsToReflect$ &&
        ((i.$attrs$ = i.$attrs$ || {}),
        s.$attrsToReflect$.forEach(([c, a]) => {
          i.$attrs$[a] = r[c];
        })),
      n && i.$attrs$)
    )
      for (const c of Object.keys(i.$attrs$))
        r.hasAttribute(c) && !['key', 'ref', 'style', 'class'].includes(c) && (i.$attrs$[c] = r[c]);
    ((i.$tag$ = null),
      (i.$flags$ |= 4),
      (e.$vnode$ = i),
      (i.$elm$ = o.$elm$ = r.shadowRoot || r),
      x(o, i, n));
  },
  be = (e, t) => {
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
    be(e, e.$ancestorComponent$);
    const n = () => nt(e, t);
    if (t) {
      queueMicrotask(() => {
        n();
      });
      return;
    }
    return Be(n);
  },
  nt = (e, t) => {
    const n = e.$hostElement$,
      r = k('scheduleUpdate', e.$cmpMeta$.$tagName$),
      s = e.$lazyInstance$;
    if (!s)
      throw new Error(
        `Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`,
      );
    let o;
    return (
      t
        ? (e.$fetchedCbList$.length && e.$fetchedCbList$.forEach((l) => l(n)),
          (o = m(s, 'componentWillLoad', void 0, n)))
        : (o = m(s, 'componentWillUpdate', void 0, n)),
      (o = le(o, () => m(s, 'componentWillRender', void 0, n))),
      r(),
      le(o, () => st(e, s, t))
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
      o = k('update', e.$cmpMeta$.$tagName$),
      l = s['s-rc'];
    n && Ke(e);
    const i = k('render', e.$cmpMeta$.$tagName$);
    (it(e, t, s, n), l && (l.map((c) => c()), (s['s-rc'] = void 0)), i(), o());
    {
      const c = (r = s['s-p']) != null ? r : [],
        a = () => ot(e);
      c.length === 0 ? a() : (Promise.all(c).then(a), (e.$flags$ |= 4), (c.length = 0));
    }
  },
  it = (e, t, n, r) => {
    try {
      ((t = t.render()), (e.$flags$ &= -17), (e.$flags$ |= 2), tt(e, t, r));
    } catch (s) {
      z(s, e.$hostElement$);
    }
    return null;
  },
  ot = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      r = k('postUpdate', t),
      s = e.$lazyInstance$,
      o = e.$ancestorComponent$;
    (m(s, 'componentDidRender', void 0, n),
      e.$flags$ & 64
        ? (m(s, 'componentDidUpdate', void 0, n), r())
        : ((e.$flags$ |= 64),
          lt(n),
          m(s, 'componentDidLoad', void 0, n),
          r(),
          e.$onReadyResolve$(n),
          o || ke()),
      e.$onInstanceResolve$(n),
      e.$onRenderResolve$ && (e.$onRenderResolve$(), (e.$onRenderResolve$ = void 0)),
      e.$flags$ & 512 && Y(() => Q(e, !1)),
      (e.$flags$ &= -517));
  },
  ke = (e) => {
    Y(() => Ze(y, 'appload', { detail: { namespace: Pe } }));
  },
  m = (e, t, n, r) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (s) {
        z(s, r);
      }
  },
  lt = (e) => {
    var t;
    return e.classList.add((t = C.hydratedSelectorName) != null ? t : 'hydrated');
  },
  at = (e, t) => b(e).$instanceValues$.get(t),
  B = (e, t, n, r) => {
    const s = b(e);
    if (!s) return;
    if (!s)
      throw new Error(
        `Couldn't find host element for "${r.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`,
      );
    const o = s.$hostElement$,
      l = s.$instanceValues$.get(t),
      i = s.$flags$,
      c = s.$lazyInstance$;
    n = W(n, r.$members$[t][0]);
    const a = Number.isNaN(l) && Number.isNaN(n),
      d = n !== l && !a;
    if ((!(i & 8) || l === void 0) && d && (s.$instanceValues$.set(t, n), c)) {
      if (r.$watchers$ && i & 128) {
        const $ = r.$watchers$[t];
        $ &&
          $.map((u) => {
            try {
              c[u](n, l, t);
            } catch (f) {
              z(f, o);
            }
          });
      }
      if ((i & 18) === 2) {
        if (c.componentShouldUpdate && c.componentShouldUpdate(n, l, t) === !1) return;
        Q(s, !1);
      }
    }
  },
  me = (e, t, n) => {
    var r, s;
    const o = e.prototype;
    if (t.$members$ || C.propChangeCallback) {
      (e.watchers && !t.$watchers$ && (t.$watchers$ = e.watchers),
        e.deserializers && !t.$deserializers$ && (t.$deserializers$ = e.deserializers),
        e.serializers && !t.$serializers$ && (t.$serializers$ = e.serializers));
      const l = Object.entries((r = t.$members$) != null ? r : {});
      if (
        (l.map(([i, [c]]) => {
          if (c & 31 || (n & 2 && c & 32)) {
            const { get: a, set: d } = Object.getOwnPropertyDescriptor(o, i) || {};
            (a && (t.$members$[i][0] |= 2048),
              d && (t.$members$[i][0] |= 4096),
              (n & 1 || !a) &&
                Object.defineProperty(o, i, {
                  get() {
                    {
                      if (!(t.$members$[i][0] & 2048)) return at(this, i);
                      const $ = b(this),
                        u = $ ? $.$lazyInstance$ : o;
                      return u ? u[i] : void 0;
                    }
                  },
                  configurable: !0,
                  enumerable: !0,
                }),
              Object.defineProperty(o, i, {
                set($) {
                  const u = b(this);
                  if (u) {
                    if (d) {
                      (typeof (c & 32 ? this[i] : u.$hostElement$[i]) > 'u' &&
                        u.$instanceValues$.get(i) &&
                        ($ = u.$instanceValues$.get(i)),
                        d.apply(this, [W($, c)]),
                        ($ = c & 32 ? this[i] : u.$hostElement$[i]),
                        B(this, i, $, t));
                      return;
                    }
                    {
                      if (!(n & 1) || !(t.$members$[i][0] & 4096)) {
                        (B(this, i, $, t),
                          n & 1 &&
                            !u.$lazyInstance$ &&
                            u.$fetchedCbList$.push(() => {
                              t.$members$[i][0] & 4096 &&
                                u.$lazyInstance$[i] !== u.$instanceValues$.get(i) &&
                                (u.$lazyInstance$[i] = $);
                            }));
                        return;
                      }
                      const f = () => {
                        const p = u.$lazyInstance$[i];
                        (!u.$instanceValues$.get(i) && p && u.$instanceValues$.set(i, p),
                          (u.$lazyInstance$[i] = W($, c)),
                          B(this, i, u.$lazyInstance$[i], t));
                      };
                      u.$lazyInstance$
                        ? f()
                        : u.$fetchedCbList$.push(() => {
                            f();
                          });
                    }
                  }
                },
              }));
          } else
            n & 1 &&
              c & 64 &&
              Object.defineProperty(o, i, {
                value(...a) {
                  var d;
                  const $ = b(this);
                  return (d = $ == null ? void 0 : $.$onInstancePromise$) == null
                    ? void 0
                    : d.then(() => {
                        var u;
                        return (u = $.$lazyInstance$) == null ? void 0 : u[i](...a);
                      });
                },
              });
        }),
        n & 1)
      ) {
        const i = new Map();
        ((o.attributeChangedCallback = function (c, a, d) {
          h.jmp(() => {
            var $;
            const u = i.get(c),
              f = b(this);
            if (
              (this.hasOwnProperty(u) && C.lazyLoad && ((d = this[u]), delete this[u]),
              o.hasOwnProperty(u) && typeof this[u] == 'number' && this[u] == d)
            )
              return;
            if (u == null) {
              const w = f == null ? void 0 : f.$flags$;
              if (f && w && !(w & 8) && w & 128 && d !== a) {
                const E = f.$lazyInstance$,
                  I = ($ = t.$watchers$) == null ? void 0 : $[c];
                I == null ||
                  I.forEach((v) => {
                    E[v] != null && E[v].call(E, d, a, c);
                  });
              }
              return;
            }
            const p = l.find(([w]) => w === u);
            p && p[1][0] & 4 && (d = !(d === null || d === 'false'));
            const g = Object.getOwnPropertyDescriptor(o, u);
            d != this[u] && (!g.get || g.set) && (this[u] = d);
          });
        }),
          (e.observedAttributes = Array.from(
            new Set([
              ...Object.keys((s = t.$watchers$) != null ? s : {}),
              ...l
                .filter(([c, a]) => a[0] & 31)
                .map(([c, a]) => {
                  var d;
                  const $ = a[1] || c;
                  return (
                    i.set($, c),
                    a[0] & 512 && ((d = t.$attrsToReflect$) == null || d.push([c, $])),
                    $
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
          const d = Xe();
          ((s = await c), d());
        } else s = c;
        if (!s) throw new Error(`Constructor for "${n.$tagName$}#${t.$modeName$}" was not found`);
        s.isProxied ||
          ((n.$watchers$ = s.watchers),
          (n.$serializers$ = s.serializers),
          (n.$deserializers$ = s.deserializers),
          me(s, n, 2),
          (s.isProxied = !0));
        const a = k('createInstance', n.$tagName$);
        t.$flags$ |= 8;
        try {
          new s(t);
        } catch (d) {
          z(d, e);
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
        if (!H.has(a)) {
          const d = k('registerStyles', n.$tagName$);
          (Ge(a, c, !!(n.$flags$ & 1)), d());
        }
      }
    }
    const o = t.$ancestorComponent$,
      l = () => Q(t, !0);
    o && o['s-rc'] ? o['s-rc'].push(l) : l();
  },
  X = (e, t) => {
    m(e, 'connectedCallback', void 0, t);
  },
  dt = (e) => {
    if (!(h.$flags$ & 1)) {
      const t = b(e);
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
              be(t, (t.$ancestorComponent$ = s));
              break;
            }
        }
        (n.$members$ &&
          Object.entries(n.$members$).map(([s, [o]]) => {
            if (o & 31 && s in e && e[s] !== Object.prototype[s]) {
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
    m(e, 'disconnectedCallback', void 0, t || e);
  },
  $t = async (e) => {
    if (!(h.$flags$ & 1)) {
      const t = b(e);
      t != null && t.$lazyInstance$
        ? ae(t.$lazyInstance$, e)
        : t != null && t.$onReadyPromise$ && t.$onReadyPromise$.then(() => ae(t.$lazyInstance$, e));
    }
    (A.has(e) && A.delete(e), e.shadowRoot && A.has(e.shadowRoot) && A.delete(e.shadowRoot));
  },
  ut = (e, t = {}) => {
    var n;
    if (!y.document) {
      console.warn('Stencil: No document found. Skipping bootstrapping lazy components.');
      return;
    }
    const r = k(),
      s = [],
      o = t.exclude || [],
      l = y.customElements,
      i = y.document.head,
      c = i.querySelector('meta[charset]'),
      a = y.document.createElement('style'),
      d = [];
    let $,
      u = !0;
    (Object.assign(h, t),
      (h.$resourcesUrl$ = new URL(t.resourcesUrl || './', y.document.baseURI).href));
    let f = !1;
    if (
      (e.map((p) => {
        p[1].map((g) => {
          var w, E, I;
          const v = { $flags$: g[0], $tagName$: g[1], $members$: g[2], $listeners$: g[3] };
          (v.$flags$ & 4 && (f = !0),
            (v.$members$ = g[2]),
            (v.$attrsToReflect$ = []),
            (v.$watchers$ = (w = g[4]) != null ? w : {}),
            (v.$serializers$ = (E = g[5]) != null ? E : {}),
            (v.$deserializers$ = (I = g[6]) != null ? I : {}));
          const _ = v.$tagName$,
            Ee = class extends HTMLElement {
              constructor(S) {
                if (
                  (super(S),
                  (this.hasRegisteredEventListeners = !1),
                  (S = this),
                  Le(S, v),
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
                b(this) &&
                  (this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = !0),
                  $ && (clearTimeout($), ($ = null)),
                  u ? d.push(this) : h.jmp(() => dt(this)));
              }
              disconnectedCallback() {
                (h.jmp(() => $t(this)),
                  h.raf(() => {
                    var S;
                    const P = b(this);
                    if (!P) return;
                    const Z = d.findIndex((xe) => xe === this);
                    (Z > -1 && d.splice(Z, 1),
                      ((S = P == null ? void 0 : P.$vnode$) == null ? void 0 : S.$elm$) instanceof
                        Node &&
                        !P.$vnode$.$elm$.isConnected &&
                        delete P.$vnode$.$elm$);
                  }));
              }
              componentOnReady() {
                var S;
                return (S = b(this)) == null ? void 0 : S.$onReadyPromise$;
              }
            };
          ((v.$lazyBundleId$ = p[0]),
            !o.includes(_) && !l.get(_) && (s.push(_), l.define(_, me(Ee, v, 1))));
        });
      }),
      s.length > 0 &&
        (f && (a.textContent += de), (a.textContent += s.sort() + Ce), a.innerHTML.length))
    ) {
      a.setAttribute('data-styles', '');
      const p = (n = h.$nonce$) != null ? n : ue(y.document);
      (p != null && a.setAttribute('nonce', p),
        i.insertBefore(a, c ? c.nextSibling : i.firstChild));
    }
    ((u = !1),
      d.length ? d.map((p) => p.connectedCallback()) : h.jmp(() => ($ = setTimeout(ke, 30))),
      r());
  };
const ft = () => {},
  pt = async (e, t) => {
    if (!(typeof window > 'u'))
      return (
        await ft(),
        ut(
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
                    errorFallback: [513, 'error-fallback'],
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
                    scale: [514],
                    animation: [513],
                    play: [516],
                    rotate: [513],
                    duration: [514],
                    animationScale: [514, 'animation-scale'],
                    autoScaleThreshold: [514, 'auto-scale-threshold'],
                    autoScaleValue: [514, 'auto-scale-value'],
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
                    scale: ['handleScaleChange'],
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
                    animationScale: ['applyAnimation'],
                    autoScaleThreshold: ['applyAnimation'],
                    autoScaleValue: ['applyAnimation'],
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
                    breakpoint: [513],
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
            [
              'tinto-app-route',
              [
                [
                  769,
                  'tinto-app-route',
                  {
                    direction: [513],
                    wrap: [513],
                    justify: [513],
                    align: [513],
                    alignContent: [513, 'align-content'],
                    gap: [513],
                    rowGap: [513, 'row-gap'],
                    columnGap: [513, 'column-gap'],
                    width: [513],
                    maxWidth: [513, 'max-width'],
                    minHeight: [513, 'min-height'],
                    height: [513],
                    center: [516],
                    heightMode: [513, 'height-mode'],
                    padding: [513],
                    paddingInline: [513, 'padding-inline'],
                    paddingBlock: [513, 'padding-block'],
                    paddingInlineStart: [513, 'padding-inline-start'],
                    paddingInlineEnd: [513, 'padding-inline-end'],
                    paddingBlockStart: [513, 'padding-block-start'],
                    paddingBlockEnd: [513, 'padding-block-end'],
                    margin: [513],
                    marginInline: [513, 'margin-inline'],
                    marginBlock: [513, 'margin-block'],
                    marginInlineStart: [513, 'margin-inline-start'],
                    marginInlineEnd: [513, 'margin-inline-end'],
                    marginBlockStart: [513, 'margin-block-start'],
                    marginBlockEnd: [513, 'margin-block-end'],
                    background: [513],
                    color: [513],
                    radius: [513],
                    shadow: [513],
                    border: [513],
                    backdropFilter: [513, 'backdrop-filter'],
                    font: [513],
                    fontSize: [513, 'font-size'],
                    fontWeight: [513, 'font-weight'],
                    lineHeight: [513, 'line-height'],
                    letterSpacing: [513, 'letter-spacing'],
                    textTransform: [513, 'text-transform'],
                    textAlign: [513, 'text-align'],
                    src: [513],
                    bgSize: [513, 'bg-size'],
                    bgPosition: [513, 'bg-position'],
                    bgRepeat: [513, 'bg-repeat'],
                    bgAttachment: [513, 'bg-attachment'],
                    bgBlend: [513, 'bg-blend'],
                    overlay: [513],
                    overlayOpacity: [514, 'overlay-opacity'],
                    overlayBlend: [513, 'overlay-blend'],
                    safeArea: [516, 'safe-area'],
                    overflow: [513],
                    overflowX: [513, 'overflow-x'],
                    overflowY: [513, 'overflow-y'],
                    scrollBehavior: [513, 'scroll-behavior'],
                    scrollPadding: [513, 'scroll-padding'],
                    scrollPaddingInline: [513, 'scroll-padding-inline'],
                    scrollPaddingBlock: [513, 'scroll-padding-block'],
                    scrollSnapType: [513, 'scroll-snap-type'],
                    snapAlign: [513, 'snap-align'],
                  },
                ],
              ],
            ],
            [
              'tinto-carousel',
              [
                [
                  769,
                  'tinto-carousel',
                  {
                    current: [1538],
                    slideCount: [514, 'slide-count'],
                    showNavigation: [516, 'show-navigation'],
                    navigationPosition: [513, 'navigation-position'],
                    navigationStyle: [513, 'navigation-style'],
                    navigationDisplay: [513, 'navigation-display'],
                    showIndicator: [516, 'show-indicator'],
                    indicatorType: [513, 'indicator-type'],
                    indicatorPosition: [513, 'indicator-position'],
                    autoplay: [516],
                    autoplayInterval: [514, 'autoplay-interval'],
                    loop: [516],
                    slidesPerView: [514, 'slides-per-view'],
                    spaceBetween: [513, 'space-between'],
                    transition: [513],
                    transitionDuration: [514, 'transition-duration'],
                    touchEnabled: [516, 'touch-enabled'],
                    swipeThreshold: [514, 'swipe-threshold'],
                    currentIndex: [32],
                    totalSlides: [32],
                    isDragging: [32],
                    startX: [32],
                    currentX: [32],
                    isAutoplayActive: [32],
                    goToSlide: [64],
                    next: [64],
                    prev: [64],
                  },
                  null,
                  { current: ['handleCurrentChange'], autoplay: ['handleAutoplayChange'] },
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
