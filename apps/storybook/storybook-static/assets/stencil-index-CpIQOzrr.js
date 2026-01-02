const xe = 'modulepreload',
  be = function (e, t) {
    return new URL(e, t).href;
  },
  V = {},
  ze = function (t, n, s) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      let o = function (c) {
        return Promise.all(
          c.map((d) =>
            Promise.resolve(d).then(
              (f) => ({ status: 'fulfilled', value: f }),
              (f) => ({ status: 'rejected', reason: f }),
            ),
          ),
        );
      };
      const a = document.getElementsByTagName('link'),
        i = document.querySelector('meta[property=csp-nonce]'),
        $ = i?.nonce || i?.getAttribute('nonce');
      r = o(
        n.map((c) => {
          if (((c = be(c, s)), c in V)) return;
          V[c] = !0;
          const d = c.endsWith('.css'),
            f = d ? '[rel="stylesheet"]' : '';
          if (s)
            for (let p = a.length - 1; p >= 0; p--) {
              const h = a[p];
              if (h.href === c && (!d || h.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${c}"]${f}`)) return;
          const u = document.createElement('link');
          if (
            ((u.rel = d ? 'stylesheet' : xe),
            d || (u.as = 'script'),
            (u.crossOrigin = ''),
            (u.href = c),
            $ && u.setAttribute('nonce', $),
            document.head.appendChild(u),
            d)
          )
            return new Promise((p, h) => {
              (u.addEventListener('load', p),
                u.addEventListener('error', () => h(new Error(`Unable to preload CSS for ${c}`))));
            });
        }),
      );
    }
    function l(a) {
      const i = new Event('vite:preloadError', { cancelable: !0 });
      if (((i.payload = a), window.dispatchEvent(i), !i.defaultPrevented)) throw a;
    }
    return r.then((a) => {
      for (const i of a || []) i.status === 'rejected' && l(i.reason);
      return t().catch(l);
    });
  },
  Ae = 'uxbit',
  U = { hydratedSelectorName: 'hydrated', lazyLoad: !0, propChangeCallback: !0, updatable: !0 };
var Ie = Object.defineProperty,
  Oe = (e, t) => {
    for (var n in t) Ie(e, n, { get: t[n], enumerable: !0 });
  },
  Te = 'http://www.w3.org/2000/svg',
  je = 'http://www.w3.org/1999/xhtml',
  _ = (e) => {
    if (e.__stencil__getHostRef) return e.__stencil__getHostRef();
  },
  He = (e, t) => {
    const n = {
      $flags$: 0,
      $hostElement$: e,
      $cmpMeta$: t,
      $instanceValues$: new Map(),
      $serializerValues$: new Map(),
    };
    ((n.$onInstancePromise$ = new Promise((r) => (n.$onInstanceResolve$ = r))),
      (n.$onReadyPromise$ = new Promise((r) => (n.$onReadyResolve$ = r))),
      (e['s-p'] = []),
      (e['s-rc'] = []),
      (n.$fetchedCbList$ = []));
    const s = n;
    return ((e.__stencil__getHostRef = () => s), s);
  },
  ee = (e, t) => t in e,
  P = (e, t) => (0, console.error)(e, t),
  te = new Map(),
  Ue = (e, t, n) => {
    const s = e.$tagName$.replace(/-/g, '_'),
      r = e.$lazyBundleId$;
    if (!r) return;
    const l = te.get(r);
    if (l) return l[s];
    return ze(() => import(`./${r}.entry.js`), [], import.meta.url).then(
      (a) => (te.set(r, a), a[s]),
      (a) => {
        P(a, t.$hostElement$);
      },
    );
  },
  q = new Map(),
  qe = '{visibility:hidden}.hydrated{visibility:inherit}',
  ce = 'slot-fb{display:contents}slot-fb[hidden]{display:none}',
  ne = 'http://www.w3.org/1999/xlink',
  v = typeof window < 'u' ? window : {},
  g = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, n, s) => e.addEventListener(t, n, s),
    rel: (e, t, n, s) => e.removeEventListener(t, n, s),
    ce: (e, t) => new CustomEvent(e, t),
  },
  De = (() => {
    var e;
    let t = !1;
    try {
      (e = v.document) == null ||
        e.addEventListener(
          'e',
          null,
          Object.defineProperty({}, 'passive', {
            get() {
              t = !0;
            },
          }),
        );
    } catch {}
    return t;
  })(),
  Be = (e) => Promise.resolve(e),
  Y = (() => {
    try {
      return (new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == 'function');
    } catch {}
    return !1;
  })(),
  C = Y
    ? !!v.document &&
      Object.getOwnPropertyDescriptor(v.document.adoptedStyleSheets, 'length').writable
    : !1,
  R = !1,
  se = [],
  fe = [],
  Ce = (e, t) => (n) => {
    (e.push(n), R || ((R = !0), g.$flags$ & 4 ? K(W) : g.raf(W)));
  },
  re = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (n) {
        P(n);
      }
    e.length = 0;
  },
  W = () => {
    (re(se), re(fe), (R = se.length > 0) && g.raf(W));
  },
  K = (e) => Be().then(e),
  Re = Ce(fe),
  J = (e) => ((e = typeof e), e === 'object' || e === 'function');
function de(e) {
  var t, n, s;
  return (s =
    (n = (t = e.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null
      ? void 0
      : n.getAttribute('content')) != null
    ? s
    : void 0;
}
var We = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  me = {};
Oe(me, { err: () => ue, map: () => Ge, ok: () => m, unwrap: () => Xe, unwrapErr: () => Fe });
var m = (e) => ({ isOk: !0, isErr: !1, value: e }),
  ue = (e) => ({ isOk: !1, isErr: !0, value: e });
function Ge(e, t) {
  if (e.isOk) {
    const n = t(e.value);
    return n instanceof Promise ? n.then((s) => m(s)) : m(n);
  }
  if (e.isErr) {
    const n = e.value;
    return ue(n);
  }
  throw 'should never get here';
}
var Xe = (e) => {
    if (e.isOk) return e.value;
    throw e.value;
  },
  Fe = (e) => {
    if (e.isErr) return e.value;
    throw e.value;
  };
var O;
function Ye(e) {
  var t;
  const n = this.attachShadow({ mode: 'open' });
  (O === void 0 && (O = (t = void 0) != null ? t : null),
    O &&
      (C ? n.adoptedStyleSheets.push(O) : (n.adoptedStyleSheets = [...n.adoptedStyleSheets, O])));
}
var w =
    (e, t = '') =>
    () => {},
  Ke = (e, t) => () => {},
  z = new WeakMap(),
  Je = (e, t, n) => {
    let s = q.get(e);
    (Y && n
      ? ((s = s || new CSSStyleSheet()), typeof s == 'string' ? (s = t) : s.replaceSync(t))
      : (s = t),
      q.set(e, s));
  },
  Qe = (e, t, n) => {
    var s;
    const r = pe(t),
      l = q.get(r);
    if (!v.document) return r;
    if (((e = e.nodeType === 11 ? e : v.document), l))
      if (typeof l == 'string') {
        e = e.head || e;
        let a = z.get(e),
          i;
        if ((a || z.set(e, (a = new Set())), !a.has(r))) {
          {
            ((i = v.document.createElement('style')), (i.innerHTML = l));
            const $ = (s = g.$nonce$) != null ? s : de(v.document);
            if (($ != null && i.setAttribute('nonce', $), !(t.$flags$ & 1)))
              if (e.nodeName === 'HEAD') {
                const o = e.querySelectorAll('link[rel=preconnect]'),
                  c = o.length > 0 ? o[o.length - 1].nextSibling : e.querySelector('style');
                e.insertBefore(i, c?.parentNode === e ? c : null);
              } else if ('host' in e)
                if (Y) {
                  const o = new CSSStyleSheet();
                  (o.replaceSync(l),
                    C
                      ? e.adoptedStyleSheets.unshift(o)
                      : (e.adoptedStyleSheets = [o, ...e.adoptedStyleSheets]));
                } else {
                  const o = e.querySelector('style');
                  o ? (o.innerHTML = l + o.innerHTML) : e.prepend(i);
                }
              else e.append(i);
            t.$flags$ & 1 && e.insertBefore(i, null);
          }
          (t.$flags$ & 4 && (i.innerHTML += ce), a && a.add(r));
        }
      } else
        e.adoptedStyleSheets.includes(l) ||
          (C
            ? e.adoptedStyleSheets.push(l)
            : (e.adoptedStyleSheets = [...e.adoptedStyleSheets, l]));
    return r;
  },
  Ze = (e) => {
    const t = e.$cmpMeta$,
      n = e.$hostElement$,
      s = t.$flags$,
      r = w('attachStyles', t.$tagName$),
      l = Qe(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
    (s & 10 && ((n['s-sc'] = l), n.classList.add(l + '-h')), r());
  },
  pe = (e, t) => 'sc-' + e.$tagName$,
  Me = (e, t, ...n) => {
    let s = null,
      r = null,
      l = !1,
      a = !1;
    const i = [],
      $ = (c) => {
        for (let d = 0; d < c.length; d++)
          ((s = c[d]),
            Array.isArray(s)
              ? $(s)
              : s != null &&
                typeof s != 'boolean' &&
                ((l = !J(s)) && (s = String(s)),
                l && a ? (i[i.length - 1].$text$ += s) : i.push(l ? G(null, s) : s),
                (a = l)));
      };
    $(n);
    const o = G(e, null);
    return ((o.$attrs$ = t), i.length > 0 && (o.$children$ = i), (o.$key$ = r), o);
  },
  G = (e, t) => {
    const n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
    return ((n.$attrs$ = null), (n.$key$ = null), n);
  },
  Ne = {},
  Ve = (e) => e && e.$tag$ === Ne,
  Q = (e) => {
    const t = We(e);
    return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${t}))(${t}\\b)`, 'g');
  };
Q('::slotted');
Q(':host');
Q(':host-context');
var X = (e, t, n) =>
    e != null && !J(e)
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
  et = (e, t, n) => {
    const s = g.ce(t, n);
    return (e.dispatchEvent(s), s);
  },
  ie = (e, t, n, s, r, l, a) => {
    if (n === s) return;
    let i = ee(e, t),
      $ = t.toLowerCase();
    if (t === 'class') {
      const o = e.classList,
        c = le(n);
      let d = le(s);
      (o.remove(...c.filter((f) => f && !d.includes(f))),
        o.add(...d.filter((f) => f && !c.includes(f))));
    } else if (t === 'style') {
      for (const o in n)
        (!s || s[o] == null) && (o.includes('-') ? e.style.removeProperty(o) : (e.style[o] = ''));
      for (const o in s)
        (!n || s[o] !== n[o]) &&
          (o.includes('-') ? e.style.setProperty(o, s[o]) : (e.style[o] = s[o]));
    } else if (t !== 'key')
      if (t === 'ref') s && s(e);
      else if (!i && t[0] === 'o' && t[1] === 'n') {
        if (
          (t[2] === '-' ? (t = t.slice(3)) : ee(v, $) ? (t = $.slice(2)) : (t = $[2] + t.slice(3)),
          n || s)
        ) {
          const o = t.endsWith(he);
          ((t = t.replace(nt, '')), n && g.rel(e, t, n, o), s && g.ael(e, t, s, o));
        }
      } else {
        const o = J(s);
        if ((i || (o && s !== null)) && !r)
          try {
            if (e.tagName.includes('-')) e[t] !== s && (e[t] = s);
            else {
              const d = s ?? '';
              t === 'list'
                ? (i = !1)
                : (n == null || e[t] != d) &&
                  (typeof e.__lookupSetter__(t) == 'function' ? (e[t] = d) : e.setAttribute(t, d));
            }
          } catch {}
        let c = !1;
        ($ !== ($ = $.replace(/^xlink\:?/, '')) && ((t = $), (c = !0)),
          s == null || s === !1
            ? (s !== !1 || e.getAttribute(t) === '') &&
              (c ? e.removeAttributeNS(ne, t) : e.removeAttribute(t))
            : (!i || l & 4 || r) &&
              !o &&
              e.nodeType === 1 &&
              ((s = s === !0 ? '' : s), c ? e.setAttributeNS(ne, t, s) : e.setAttribute(t, s)));
      }
  },
  tt = /\s/,
  le = (e) => (
    typeof e == 'object' && e && 'baseVal' in e && (e = e.baseVal),
    !e || typeof e != 'string' ? [] : e.split(tt)
  ),
  he = 'Capture',
  nt = new RegExp(he + '$'),
  ve = (e, t, n, s) => {
    const r = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$,
      l = (e && e.$attrs$) || {},
      a = t.$attrs$ || {};
    for (const i of oe(Object.keys(l))) i in a || ie(r, i, l[i], void 0, n, t.$flags$);
    for (const i of oe(Object.keys(a))) ie(r, i, l[i], a[i], n, t.$flags$);
  };
function oe(e) {
  return e.includes('ref') ? [...e.filter((t) => t !== 'ref'), 'ref'] : e;
}
var Z,
  k = !1,
  D = (e, t, n) => {
    const s = t.$children$[n];
    let r = 0,
      l,
      a;
    if (s.$text$ !== null) l = s.$elm$ = v.document.createTextNode(s.$text$);
    else {
      if ((k || (k = s.$tag$ === 'svg'), !v.document))
        throw new Error(
          "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.",
        );
      if (
        ((l = s.$elm$ = v.document.createElementNS(k ? Te : je, s.$tag$)),
        k && s.$tag$ === 'foreignObject' && (k = !1),
        ve(null, s, k),
        s.$children$)
      )
        for (r = 0; r < s.$children$.length; ++r) ((a = D(e, s, r)), a && l.appendChild(a));
      s.$tag$ === 'svg' ? (k = !1) : l.tagName === 'foreignObject' && (k = !0);
    }
    return ((l['s-hn'] = Z), l);
  },
  ge = (e, t, n, s, r, l) => {
    let a = e,
      i;
    for (a.shadowRoot && a.tagName === Z && (a = a.shadowRoot); r <= l; ++r)
      s[r] && ((i = D(null, n, r)), i && ((s[r].$elm$ = i), H(a, i, t)));
  },
  ye = (e, t, n) => {
    for (let s = t; s <= n; ++s) {
      const r = e[s];
      if (r) {
        const l = r.$elm$;
        (Se(r), l && l.remove());
      }
    }
  },
  st = (e, t, n, s, r = !1) => {
    let l = 0,
      a = 0,
      i = 0,
      $ = 0,
      o = t.length - 1,
      c = t[0],
      d = t[o],
      f = s.length - 1,
      u = s[0],
      p = s[f],
      h,
      E;
    for (; l <= o && a <= f; )
      if (c == null) c = t[++l];
      else if (d == null) d = t[--o];
      else if (u == null) u = s[++a];
      else if (p == null) p = s[--f];
      else if (j(c, u, r)) (b(c, u, r), (c = t[++l]), (u = s[++a]));
      else if (j(d, p, r)) (b(d, p, r), (d = t[--o]), (p = s[--f]));
      else if (j(c, p, r))
        (b(c, p, r), H(e, c.$elm$, d.$elm$.nextSibling), (c = t[++l]), (p = s[--f]));
      else if (j(d, u, r)) (b(d, u, r), H(e, d.$elm$, c.$elm$), (d = t[--o]), (u = s[++a]));
      else {
        for (i = -1, $ = l; $ <= o; ++$)
          if (t[$] && t[$].$key$ !== null && t[$].$key$ === u.$key$) {
            i = $;
            break;
          }
        (i >= 0
          ? ((E = t[i]),
            E.$tag$ !== u.$tag$
              ? (h = D(t && t[a], n, i))
              : (b(E, u, r), (t[i] = void 0), (h = E.$elm$)),
            (u = s[++a]))
          : ((h = D(t && t[a], n, a)), (u = s[++a])),
          h && H(c.$elm$.parentNode, h, c.$elm$));
      }
    l > o ? ge(e, s[f + 1] == null ? null : s[f + 1].$elm$, n, s, a, f) : a > f && ye(t, l, o);
  },
  j = (e, t, n = !1) =>
    e.$tag$ === t.$tag$
      ? n
        ? (n && !e.$key$ && t.$key$ && (e.$key$ = t.$key$), !0)
        : e.$key$ === t.$key$
      : !1,
  b = (e, t, n = !1) => {
    const s = (t.$elm$ = e.$elm$),
      r = e.$children$,
      l = t.$children$,
      a = t.$tag$,
      i = t.$text$;
    i === null
      ? ((k = a === 'svg' ? !0 : a === 'foreignObject' ? !1 : k),
        ve(e, t, k),
        r !== null && l !== null
          ? st(s, r, t, l, n)
          : l !== null
            ? (e.$text$ !== null && (s.textContent = ''), ge(s, null, t, l, 0, l.length - 1))
            : !n && U.updatable && r !== null && ye(r, 0, r.length - 1),
        k && a === 'svg' && (k = !1))
      : e.$text$ !== i && (s.data = i);
  },
  Se = (e) => {
    (e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null), e.$children$ && e.$children$.map(Se));
  },
  H = (e, t, n) => e?.insertBefore(t, n),
  rt = (e, t, n = !1) => {
    const s = e.$hostElement$,
      r = e.$cmpMeta$,
      l = e.$vnode$ || G(null, null),
      i = Ve(t) ? t : Me(null, null, t);
    if (
      ((Z = s.tagName),
      r.$attrsToReflect$ &&
        ((i.$attrs$ = i.$attrs$ || {}),
        r.$attrsToReflect$.forEach(([$, o]) => {
          i.$attrs$[o] = s[$];
        })),
      n && i.$attrs$)
    )
      for (const $ of Object.keys(i.$attrs$))
        s.hasAttribute($) && !['key', 'ref', 'style', 'class'].includes($) && (i.$attrs$[$] = s[$]);
    ((i.$tag$ = null),
      (i.$flags$ |= 4),
      (e.$vnode$ = i),
      (i.$elm$ = l.$elm$ = s.shadowRoot || s),
      b(l, i, n));
  },
  Ee = (e, t) => {
    if (t && !e.$onRenderResolve$ && t['s-p']) {
      const n = t['s-p'].push(
        new Promise(
          (s) =>
            (e.$onRenderResolve$ = () => {
              (t['s-p'].splice(n - 1, 1), s());
            }),
        ),
      );
    }
  },
  M = (e, t) => {
    if (((e.$flags$ |= 16), e.$flags$ & 4)) {
      e.$flags$ |= 512;
      return;
    }
    Ee(e, e.$ancestorComponent$);
    const n = () => it(e, t);
    if (t) {
      queueMicrotask(() => {
        n();
      });
      return;
    }
    return Re(n);
  },
  it = (e, t) => {
    const n = e.$hostElement$,
      s = w('scheduleUpdate', e.$cmpMeta$.$tagName$),
      r = e.$lazyInstance$;
    if (!r)
      throw new Error(
        `Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`,
      );
    let l;
    return (
      t
        ? ((e.$flags$ |= 256),
          e.$queuedListeners$ &&
            (e.$queuedListeners$.map(([a, i]) => L(r, a, i, n)), (e.$queuedListeners$ = void 0)),
          e.$fetchedCbList$.length && e.$fetchedCbList$.forEach((a) => a(n)),
          (l = L(r, 'componentWillLoad', void 0, n)))
        : (l = L(r, 'componentWillUpdate', void 0, n)),
      (l = ae(l, () => L(r, 'componentWillRender', void 0, n))),
      s(),
      ae(l, () => ot(e, r, t))
    );
  },
  ae = (e, t) =>
    lt(e)
      ? e.then(t).catch((n) => {
          (console.error(n), t());
        })
      : t(),
  lt = (e) => e instanceof Promise || (e && e.then && typeof e.then == 'function'),
  ot = async (e, t, n) => {
    var s;
    const r = e.$hostElement$,
      l = w('update', e.$cmpMeta$.$tagName$),
      a = r['s-rc'];
    n && Ze(e);
    const i = w('render', e.$cmpMeta$.$tagName$);
    (at(e, t, r, n), a && (a.map(($) => $()), (r['s-rc'] = void 0)), i(), l());
    {
      const $ = (s = r['s-p']) != null ? s : [],
        o = () => $t(e);
      $.length === 0 ? o() : (Promise.all($).then(o), (e.$flags$ |= 4), ($.length = 0));
    }
  },
  at = (e, t, n, s) => {
    try {
      ((t = t.render()), (e.$flags$ &= -17), (e.$flags$ |= 2), rt(e, t, s));
    } catch (r) {
      P(r, e.$hostElement$);
    }
    return null;
  },
  $t = (e) => {
    const t = e.$cmpMeta$.$tagName$,
      n = e.$hostElement$,
      s = w('postUpdate', t),
      r = e.$lazyInstance$,
      l = e.$ancestorComponent$;
    (L(r, 'componentDidRender', void 0, n),
      e.$flags$ & 64
        ? (L(r, 'componentDidUpdate', void 0, n), s())
        : ((e.$flags$ |= 64),
          ct(n),
          L(r, 'componentDidLoad', void 0, n),
          s(),
          e.$onReadyResolve$(n),
          l || ke()),
      e.$onInstanceResolve$(n),
      e.$onRenderResolve$ && (e.$onRenderResolve$(), (e.$onRenderResolve$ = void 0)),
      e.$flags$ & 512 && K(() => M(e, !1)),
      (e.$flags$ &= -517));
  },
  ke = (e) => {
    K(() => et(v, 'appload', { detail: { namespace: Ae } }));
  },
  L = (e, t, n, s) => {
    if (e && e[t])
      try {
        return e[t](n);
      } catch (r) {
        P(r, s);
      }
  },
  ct = (e) => {
    var t;
    return e.classList.add((t = U.hydratedSelectorName) != null ? t : 'hydrated');
  },
  ft = (e, t) => _(e).$instanceValues$.get(t),
  B = (e, t, n, s) => {
    const r = _(e);
    if (!r) return;
    if (!r)
      throw new Error(
        `Couldn't find host element for "${s.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`,
      );
    const l = r.$hostElement$,
      a = r.$instanceValues$.get(t),
      i = r.$flags$,
      $ = r.$lazyInstance$;
    n = X(n, s.$members$[t][0]);
    const o = Number.isNaN(a) && Number.isNaN(n),
      c = n !== a && !o;
    if ((!(i & 8) || a === void 0) && c && (r.$instanceValues$.set(t, n), $)) {
      if (s.$watchers$ && i & 128) {
        const d = s.$watchers$[t];
        d &&
          d.map((f) => {
            try {
              $[f](n, a, t);
            } catch (u) {
              P(u, l);
            }
          });
      }
      if ((i & 18) === 2) {
        if ($.componentShouldUpdate && $.componentShouldUpdate(n, a, t) === !1) return;
        M(r, !1);
      }
    }
  },
  _e = (e, t, n) => {
    var s, r;
    const l = e.prototype;
    if (t.$members$ || U.propChangeCallback) {
      (e.watchers && !t.$watchers$ && (t.$watchers$ = e.watchers),
        e.deserializers && !t.$deserializers$ && (t.$deserializers$ = e.deserializers),
        e.serializers && !t.$serializers$ && (t.$serializers$ = e.serializers));
      const a = Object.entries((s = t.$members$) != null ? s : {});
      if (
        (a.map(([i, [$]]) => {
          if ($ & 31 || (n & 2 && $ & 32)) {
            const { get: o, set: c } = Object.getOwnPropertyDescriptor(l, i) || {};
            (o && (t.$members$[i][0] |= 2048),
              c && (t.$members$[i][0] |= 4096),
              (n & 1 || !o) &&
                Object.defineProperty(l, i, {
                  get() {
                    {
                      if ((t.$members$[i][0] & 2048) === 0) return ft(this, i);
                      const d = _(this),
                        f = d ? d.$lazyInstance$ : l;
                      return f ? f[i] : void 0;
                    }
                  },
                  configurable: !0,
                  enumerable: !0,
                }),
              Object.defineProperty(l, i, {
                set(d) {
                  const f = _(this);
                  if (f) {
                    if (c) {
                      (typeof ($ & 32 ? this[i] : f.$hostElement$[i]) > 'u' &&
                        f.$instanceValues$.get(i) &&
                        (d = f.$instanceValues$.get(i)),
                        c.apply(this, [X(d, $)]),
                        (d = $ & 32 ? this[i] : f.$hostElement$[i]),
                        B(this, i, d, t));
                      return;
                    }
                    {
                      if ((n & 1) === 0 || (t.$members$[i][0] & 4096) === 0) {
                        (B(this, i, d, t),
                          n & 1 &&
                            !f.$lazyInstance$ &&
                            f.$fetchedCbList$.push(() => {
                              t.$members$[i][0] & 4096 &&
                                f.$lazyInstance$[i] !== f.$instanceValues$.get(i) &&
                                (f.$lazyInstance$[i] = d);
                            }));
                        return;
                      }
                      const u = () => {
                        const p = f.$lazyInstance$[i];
                        (!f.$instanceValues$.get(i) && p && f.$instanceValues$.set(i, p),
                          (f.$lazyInstance$[i] = X(d, $)),
                          B(this, i, f.$lazyInstance$[i], t));
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
          } else
            n & 1 &&
              $ & 64 &&
              Object.defineProperty(l, i, {
                value(...o) {
                  var c;
                  const d = _(this);
                  return (c = d?.$onInstancePromise$) == null
                    ? void 0
                    : c.then(() => {
                        var f;
                        return (f = d.$lazyInstance$) == null ? void 0 : f[i](...o);
                      });
                },
              });
        }),
        n & 1)
      ) {
        const i = new Map();
        ((l.attributeChangedCallback = function ($, o, c) {
          g.jmp(() => {
            var d;
            const f = i.get($),
              u = _(this);
            if (
              (this.hasOwnProperty(f) && U.lazyLoad && ((c = this[f]), delete this[f]),
              l.hasOwnProperty(f) && typeof this[f] == 'number' && this[f] == c)
            )
              return;
            if (f == null) {
              const E = u?.$flags$;
              if (u && E && !(E & 8) && E & 128 && c !== o) {
                const x = u.$lazyInstance$,
                  A = (d = t.$watchers$) == null ? void 0 : d[$];
                A?.forEach((y) => {
                  x[y] != null && x[y].call(x, c, o, $);
                });
              }
              return;
            }
            const p = a.find(([E]) => E === f);
            p && p[1][0] & 4 && (c = !(c === null || c === 'false'));
            const h = Object.getOwnPropertyDescriptor(l, f);
            c != this[f] && (!h.get || h.set) && (this[f] = c);
          });
        }),
          (e.observedAttributes = Array.from(
            new Set([
              ...Object.keys((r = t.$watchers$) != null ? r : {}),
              ...a
                .filter(([$, o]) => o[0] & 31)
                .map(([$, o]) => {
                  var c;
                  const d = o[1] || $;
                  return (
                    i.set(d, $),
                    o[0] & 512 && ((c = t.$attrsToReflect$) == null || c.push([$, d])),
                    d
                  );
                }),
            ]),
          )));
      }
    }
    return e;
  },
  dt = async (e, t, n, s) => {
    let r;
    if ((t.$flags$ & 32) === 0) {
      if (((t.$flags$ |= 32), n.$lazyBundleId$)) {
        const $ = Ue(n, t);
        if ($ && 'then' in $) {
          const c = Ke();
          ((r = await $), c());
        } else r = $;
        if (!r) throw new Error(`Constructor for "${n.$tagName$}#${t.$modeName$}" was not found`);
        r.isProxied ||
          ((n.$watchers$ = r.watchers),
          (n.$serializers$ = r.serializers),
          (n.$deserializers$ = r.deserializers),
          _e(r, n, 2),
          (r.isProxied = !0));
        const o = w('createInstance', n.$tagName$);
        t.$flags$ |= 8;
        try {
          new r(t);
        } catch (c) {
          P(c, e);
        }
        ((t.$flags$ &= -9), (t.$flags$ |= 128), o(), F(t.$lazyInstance$, e));
      } else {
        r = e.constructor;
        const $ = e.localName;
        customElements.whenDefined($).then(() => (t.$flags$ |= 128));
      }
      if (r && r.style) {
        let $;
        typeof r.style == 'string' && ($ = r.style);
        const o = pe(n);
        if (!q.has(o)) {
          const c = w('registerStyles', n.$tagName$);
          (Je(o, $, !!(n.$flags$ & 1)), c());
        }
      }
    }
    const l = t.$ancestorComponent$,
      a = () => M(t, !0);
    l && l['s-rc'] ? l['s-rc'].push(a) : a();
  },
  F = (e, t) => {
    L(e, 'connectedCallback', void 0, t);
  },
  ut = (e) => {
    if ((g.$flags$ & 1) === 0) {
      const t = _(e);
      if (!t) return;
      const n = t.$cmpMeta$,
        s = w('connectedCallback', n.$tagName$);
      if (t.$flags$ & 1)
        (Le(e, t, n.$listeners$),
          t?.$lazyInstance$
            ? F(t.$lazyInstance$, e)
            : t?.$onReadyPromise$ && t.$onReadyPromise$.then(() => F(t.$lazyInstance$, e)));
      else {
        t.$flags$ |= 1;
        {
          let r = e;
          for (; (r = r.parentNode || r.host); )
            if (r['s-p']) {
              Ee(t, (t.$ancestorComponent$ = r));
              break;
            }
        }
        (n.$members$ &&
          Object.entries(n.$members$).map(([r, [l]]) => {
            if (l & 31 && r in e && e[r] !== Object.prototype[r]) {
              const a = e[r];
              (delete e[r], (e[r] = a));
            }
          }),
          dt(e, t, n));
      }
      s();
    }
  },
  $e = (e, t) => {
    L(e, 'disconnectedCallback', void 0, t || e);
  },
  pt = async (e) => {
    if ((g.$flags$ & 1) === 0) {
      const t = _(e);
      (t?.$rmListeners$ && (t.$rmListeners$.map((n) => n()), (t.$rmListeners$ = void 0)),
        t?.$lazyInstance$
          ? $e(t.$lazyInstance$, e)
          : t?.$onReadyPromise$ && t.$onReadyPromise$.then(() => $e(t.$lazyInstance$, e)));
    }
    (z.has(e) && z.delete(e), e.shadowRoot && z.has(e.shadowRoot) && z.delete(e.shadowRoot));
  },
  yt = (e, t = {}) => {
    var n;
    if (!v.document) {
      console.warn('Stencil: No document found. Skipping bootstrapping lazy components.');
      return;
    }
    const s = w(),
      r = [],
      l = t.exclude || [],
      a = v.customElements,
      i = v.document.head,
      $ = i.querySelector('meta[charset]'),
      o = v.document.createElement('style'),
      c = [];
    let d,
      f = !0;
    (Object.assign(g, t),
      (g.$resourcesUrl$ = new URL(t.resourcesUrl || './', v.document.baseURI).href));
    let u = !1;
    if (
      (e.map((p) => {
        p[1].map((h) => {
          var E, x, A;
          const y = { $flags$: h[0], $tagName$: h[1], $members$: h[2], $listeners$: h[3] };
          (y.$flags$ & 4 && (u = !0),
            (y.$members$ = h[2]),
            (y.$listeners$ = h[3]),
            (y.$attrsToReflect$ = []),
            (y.$watchers$ = (E = h[4]) != null ? E : {}),
            (y.$serializers$ = (x = h[5]) != null ? x : {}),
            (y.$deserializers$ = (A = h[6]) != null ? A : {}));
          const T = y.$tagName$,
            we = class extends HTMLElement {
              constructor(S) {
                if (
                  (super(S),
                  (this.hasRegisteredEventListeners = !1),
                  (S = this),
                  He(S, y),
                  y.$flags$ & 1)
                ) {
                  if (!S.shadowRoot) Ye.call(S, y);
                  else if (S.shadowRoot.mode !== 'open')
                    throw new Error(
                      `Unable to re-use existing shadow root for ${y.$tagName$}! Mode is set to ${S.shadowRoot.mode} but Stencil only supports open shadow roots.`,
                    );
                }
              }
              connectedCallback() {
                const S = _(this);
                S &&
                  (this.hasRegisteredEventListeners ||
                    ((this.hasRegisteredEventListeners = !0), Le(this, S, y.$listeners$)),
                  d && (clearTimeout(d), (d = null)),
                  f ? c.push(this) : g.jmp(() => ut(this)));
              }
              disconnectedCallback() {
                (g.jmp(() => pt(this)),
                  g.raf(() => {
                    var S;
                    const I = _(this);
                    if (!I) return;
                    const N = c.findIndex((Pe) => Pe === this);
                    (N > -1 && c.splice(N, 1),
                      ((S = I?.$vnode$) == null ? void 0 : S.$elm$) instanceof Node &&
                        !I.$vnode$.$elm$.isConnected &&
                        delete I.$vnode$.$elm$);
                  }));
              }
              componentOnReady() {
                var S;
                return (S = _(this)) == null ? void 0 : S.$onReadyPromise$;
              }
            };
          ((y.$lazyBundleId$ = p[0]),
            !l.includes(T) && !a.get(T) && (r.push(T), a.define(T, _e(we, y, 1))));
        });
      }),
      r.length > 0 &&
        (u && (o.textContent += ce), (o.textContent += r.sort() + qe), o.innerHTML.length))
    ) {
      o.setAttribute('data-styles', '');
      const p = (n = g.$nonce$) != null ? n : de(v.document);
      (p != null && o.setAttribute('nonce', p),
        i.insertBefore(o, $ ? $.nextSibling : i.firstChild));
    }
    ((f = !1),
      c.length ? c.map((p) => p.connectedCallback()) : g.jmp(() => (d = setTimeout(ke, 30))),
      s());
  },
  Le = (e, t, n, s) => {
    n &&
      v.document &&
      n.map(([r, l, a]) => {
        const i = vt(v.document, e, r),
          $ = ht(t, a),
          o = gt(r);
        (g.ael(i, l, $, o),
          (t.$rmListeners$ = t.$rmListeners$ || []).push(() => g.rel(i, l, $, o)));
      });
  },
  ht = (e, t) => (n) => {
    var s;
    try {
      e.$flags$ & 256
        ? (s = e.$lazyInstance$) == null || s[t](n)
        : (e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, n]);
    } catch (r) {
      P(r, e.$hostElement$);
    }
  },
  vt = (e, t, n) => (n & 4 ? e : t),
  gt = (e) => (De ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0);
export { ze as _, yt as b };
