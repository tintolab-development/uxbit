var b = { updatable: !0, slotRelocation: !0, experimentalSlotFixes: !1 },
  ft = Object.defineProperty,
  at = (t, e) => {
    for (var l in e) ft(t, l, { get: e[l], enumerable: !0 });
  },
  ct = 'http://www.w3.org/2000/svg',
  ut = 'http://www.w3.org/1999/xhtml',
  Y = (t, e) => e in t,
  q = 'http://www.w3.org/1999/xlink',
  k = typeof window < 'u' ? window : {},
  E = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (t) => t(),
    raf: (t) => requestAnimationFrame(t),
    ael: (t, e, l, s) => t.addEventListener(e, l, s),
    rel: (t, e, l, s) => t.removeEventListener(e, l, s),
    ce: (t, e) => new CustomEvent(t, e),
  },
  dt = (t) => t != null && t !== void 0,
  I = (t) => ((t = typeof t), t === 'object' || t === 'function'),
  pt = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  gt = {};
at(gt, { err: () => C, map: () => vt, ok: () => U, unwrap: () => ht, unwrapErr: () => yt });
var U = (t) => ({ isOk: !0, isErr: !1, value: t }),
  C = (t) => ({ isOk: !1, isErr: !0, value: t });
function vt(t, e) {
  if (t.isOk) {
    const l = e(t.value);
    return l instanceof Promise ? l.then((s) => U(s)) : U(l);
  }
  if (t.isErr) {
    const l = t.value;
    return C(l);
  }
  throw 'should never get here';
}
var ht = (t) => {
    if (t.isOk) return t.value;
    throw t.value;
  },
  yt = (t) => {
    if (t.isErr) return t.value;
    throw t.value;
  },
  w = (t) => {
    const e = J(t, 'childNodes');
    t.tagName &&
      t.tagName.includes('-') &&
      t['s-cr'] &&
      t.tagName !== 'SLOT-FB' &&
      V(e, t.tagName).forEach((s) => {
        s.nodeType === 1 &&
          s.tagName === 'SLOT-FB' &&
          (kt(s, X(s), !1).length ? (s.hidden = !0) : (s.hidden = !1));
      });
    let l = 0;
    for (l = 0; l < e.length; l++) {
      const s = e[l];
      s.nodeType === 1 && J(s, 'childNodes').length && w(s);
    }
  },
  St = (t) => {
    const e = [];
    for (let l = 0; l < t.length; l++) {
      const s = t[l]['s-nr'] || void 0;
      s && s.isConnected && e.push(s);
    }
    return e;
  };
function V(t, e, l) {
  let s = 0,
    i = [],
    n;
  for (; s < t.length; s++)
    ((n = t[s]),
      n['s-sr'] && (!e || n['s-hn'] === e) && l === void 0 && i.push(n),
      (i = [...i, ...V(n.childNodes, e, l)]));
  return i;
}
var kt = (t, e, l = !0) => {
    const s = [];
    ((l && t['s-sr']) || !t['s-sr']) && s.push(t);
    let i = t;
    for (; (i = i.nextSibling); ) X(i) === e && (l || !i['s-sr']) && s.push(i);
    return s;
  },
  K = (t, e) =>
    t.nodeType === 1
      ? (t.getAttribute('slot') === null && e === '') || t.getAttribute('slot') === e
      : t['s-sn'] === e
        ? !0
        : e === '',
  X = (t) =>
    typeof t['s-sn'] == 'string'
      ? t['s-sn']
      : (t.nodeType === 1 && t.getAttribute('slot')) || void 0;
function _t(t) {
  if (t.assignedElements || t.assignedNodes || !t['s-sr']) return;
  const e = (l) =>
    function (s) {
      const i = [],
        n = this['s-sn'];
      s?.flatten &&
        console.error(`
          Flattening is not supported for Stencil non-shadow slots.
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
      const r = this['s-cr'].parentElement;
      return (
        (r.__childNodes ? r.childNodes : St(r.childNodes)).forEach((o) => {
          n === X(o) && i.push(o);
        }),
        l ? i.filter((o) => o.nodeType === 1) : i
      );
    }.bind(t);
  ((t.assignedElements = e(!0)), (t.assignedNodes = e(!1)));
}
function J(t, e) {
  if ('__' + e in t) {
    const l = t['__' + e];
    return typeof l != 'function' ? l : l.bind(t);
  } else return typeof t[e] != 'function' ? t[e] : t[e].bind(t);
}
var tt = (t, e, ...l) => {
    let s = null,
      i = null,
      n = null,
      r = !1,
      $ = !1;
    const o = [],
      a = (d) => {
        for (let c = 0; c < d.length; c++)
          ((s = d[c]),
            Array.isArray(s)
              ? a(s)
              : s != null &&
                typeof s != 'boolean' &&
                ((r = typeof t != 'function' && !I(s)) && (s = String(s)),
                r && $ ? (o[o.length - 1].$text$ += s) : o.push(r ? F(null, s) : s),
                ($ = r)));
      };
    if ((a(l), e)) {
      (e.key && (i = e.key), e.name && (n = e.name));
      {
        const d = e.className || e.class;
        d &&
          (e.class =
            typeof d != 'object'
              ? d
              : Object.keys(d)
                  .filter((c) => d[c])
                  .join(' '));
      }
    }
    if (typeof t == 'function') return t(e === null ? {} : e, o, Tt);
    const u = F(t, null);
    return ((u.$attrs$ = e), o.length > 0 && (u.$children$ = o), (u.$key$ = i), (u.$name$ = n), u);
  },
  F = (t, e) => {
    const l = { $flags$: 0, $tag$: t, $text$: e, $elm$: null, $children$: null };
    return ((l.$attrs$ = null), (l.$key$ = null), (l.$name$ = null), l);
  },
  xt = {},
  Et = (t) => t && t.$tag$ === xt,
  Tt = { forEach: (t, e) => t.map(Q).forEach(e), map: (t, e) => t.map(Q).map(e).map(bt) },
  Q = (t) => ({
    vattrs: t.$attrs$,
    vchildren: t.$children$,
    vkey: t.$key$,
    vname: t.$name$,
    vtag: t.$tag$,
    vtext: t.$text$,
  }),
  bt = (t) => {
    if (typeof t.vtag == 'function') {
      const l = { ...t.vattrs };
      return (
        t.vkey && (l.key = t.vkey),
        t.vname && (l.name = t.vname),
        tt(t.vtag, l, ...(t.vchildren || []))
      );
    }
    const e = F(t.vtag, t.vtext);
    return (
      (e.$attrs$ = t.vattrs),
      (e.$children$ = t.vchildren),
      (e.$key$ = t.vkey),
      (e.$name$ = t.vname),
      e
    );
  },
  m = (t) => {
    const e = pt(t);
    return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`, 'g');
  };
m('::slotted');
m(':host');
m(':host-context');
var Z = (t, e, l, s, i, n, r) => {
    if (l === s) return;
    let $ = Y(t, e),
      o = e.toLowerCase();
    if (e === 'class') {
      const a = t.classList,
        u = D(l);
      let d = D(s);
      (a.remove(...u.filter((c) => c && !d.includes(c))),
        a.add(...d.filter((c) => c && !u.includes(c))));
    } else if (e === 'style') {
      for (const a in l)
        (!s || s[a] == null) && (a.includes('-') ? t.style.removeProperty(a) : (t.style[a] = ''));
      for (const a in s)
        (!l || s[a] !== l[a]) &&
          (a.includes('-') ? t.style.setProperty(a, s[a]) : (t.style[a] = s[a]));
    } else if (e !== 'key')
      if (e === 'ref') s && s(t);
      else if (!t.__lookupSetter__(e) && e[0] === 'o' && e[1] === 'n') {
        if (
          (e[2] === '-' ? (e = e.slice(3)) : Y(k, o) ? (e = o.slice(2)) : (e = o[2] + e.slice(3)),
          l || s)
        ) {
          const a = e.endsWith(et);
          ((e = e.replace(At, '')), l && E.rel(t, e, l, a), s && E.ael(t, e, s, a));
        }
      } else {
        const a = I(s);
        if (($ || (a && s !== null)) && !i)
          try {
            if (t.tagName.includes('-')) t[e] !== s && (t[e] = s);
            else {
              const d = s ?? '';
              e === 'list'
                ? ($ = !1)
                : (l == null || t[e] != d) &&
                  (typeof t.__lookupSetter__(e) == 'function' ? (t[e] = d) : t.setAttribute(e, d));
            }
          } catch {}
        let u = !1;
        (o !== (o = o.replace(/^xlink\:?/, '')) && ((e = o), (u = !0)),
          s == null || s === !1
            ? (s !== !1 || t.getAttribute(e) === '') &&
              (u ? t.removeAttributeNS(q, e) : t.removeAttribute(e))
            : (!$ || n & 4 || i) &&
              !a &&
              t.nodeType === 1 &&
              ((s = s === !0 ? '' : s), u ? t.setAttributeNS(q, e, s) : t.setAttribute(e, s)));
      }
  },
  Rt = /\s/,
  D = (t) => (
    typeof t == 'object' && t && 'baseVal' in t && (t = t.baseVal),
    !t || typeof t != 'string' ? [] : t.split(Rt)
  ),
  et = 'Capture',
  At = new RegExp(et + '$'),
  z = (t, e, l, s) => {
    const i = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$,
      n = (t && t.$attrs$) || {},
      r = e.$attrs$ || {};
    for (const $ of P(Object.keys(n))) $ in r || Z(i, $, n[$], void 0, l, e.$flags$);
    for (const $ of P(Object.keys(r))) Z(i, $, n[$], r[$], l, e.$flags$);
  };
function P(t) {
  return t.includes('ref') ? [...t.filter((e) => e !== 'ref'), 'ref'] : t;
}
var j,
  M,
  R,
  W = !1,
  B = !1,
  G = !1,
  h = !1,
  H = (t, e, l) => {
    var s;
    const i = e.$children$[l];
    let n = 0,
      r,
      $,
      o;
    if (
      (W || ((G = !0), i.$tag$ === 'slot' && (i.$flags$ |= i.$children$ ? 2 : 1)),
      i.$text$ !== null)
    )
      r = i.$elm$ = k.document.createTextNode(i.$text$);
    else if (i.$flags$ & 1) ((r = i.$elm$ = k.document.createTextNode('')), z(null, i, h));
    else {
      if ((h || (h = i.$tag$ === 'svg'), !k.document))
        throw new Error(
          "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.",
        );
      if (
        ((r = i.$elm$ =
          k.document.createElementNS(
            h ? ct : ut,
            !W && b.slotRelocation && i.$flags$ & 2 ? 'slot-fb' : i.$tag$,
          )),
        h && i.$tag$ === 'foreignObject' && (h = !1),
        z(null, i, h),
        dt(j) && r['s-si'] !== j && r.classList.add((r['s-si'] = j)),
        i.$children$)
      )
        for (n = 0; n < i.$children$.length; ++n) (($ = H(t, i, n)), $ && r.appendChild($));
      i.$tag$ === 'svg' ? (h = !1) : r.tagName === 'foreignObject' && (h = !0);
    }
    return (
      (r['s-hn'] = R),
      i.$flags$ & 3 &&
        ((r['s-sr'] = !0),
        (r['s-cr'] = M),
        (r['s-sn'] = i.$name$ || ''),
        (r['s-rf'] = (s = i.$attrs$) == null ? void 0 : s.ref),
        _t(r),
        (o = t && t.$children$ && t.$children$[l]),
        o && o.$tag$ === i.$tag$ && t.$elm$ && A(t.$elm$, !1),
        nt(M, r, e.$elm$, t?.$elm$)),
      r
    );
  },
  A = (t, e) => {
    E.$flags$ |= 1;
    const l = Array.from(t.__childNodes || t.childNodes);
    t['s-sr'] && b.experimentalSlotFixes;
    for (let s = l.length - 1; s >= 0; s--) {
      const i = l[s];
      (i['s-hn'] !== R &&
        i['s-ol'] &&
        (_(L(i).parentNode, i, L(i)),
        i['s-ol'].remove(),
        (i['s-ol'] = void 0),
        (i['s-sh'] = void 0),
        (G = !0)),
        e && A(i, e));
    }
    E.$flags$ &= -2;
  },
  st = (t, e, l, s, i, n) => {
    let r = (t['s-cr'] && t['s-cr'].parentNode) || t,
      $;
    for (r.shadowRoot && r.tagName === R && (r = r.shadowRoot); i <= n; ++i)
      s[i] && (($ = H(null, l, i)), $ && ((s[i].$elm$ = $), _(r, $, L(e))));
  },
  lt = (t, e, l) => {
    for (let s = e; s <= l; ++s) {
      const i = t[s];
      if (i) {
        const n = i.$elm$;
        (rt(i), n && ((B = !0), n['s-ol'] ? n['s-ol'].remove() : A(n, !0), n.remove()));
      }
    }
  },
  Lt = (t, e, l, s, i = !1) => {
    let n = 0,
      r = 0,
      $ = 0,
      o = 0,
      a = e.length - 1,
      u = e[0],
      d = e[a],
      c = s.length - 1,
      p = s[0],
      f = s[c],
      g,
      S;
    for (; n <= a && r <= c; )
      if (u == null) u = e[++n];
      else if (d == null) d = e[--a];
      else if (p == null) p = s[++r];
      else if (f == null) f = s[--c];
      else if (O(u, p, i)) (x(u, p, i), (u = e[++n]), (p = s[++r]));
      else if (O(d, f, i)) (x(d, f, i), (d = e[--a]), (f = s[--c]));
      else if (O(u, f, i))
        ((u.$tag$ === 'slot' || f.$tag$ === 'slot') && A(u.$elm$.parentNode, !1),
          x(u, f, i),
          _(t, u.$elm$, d.$elm$.nextSibling),
          (u = e[++n]),
          (f = s[--c]));
      else if (O(d, p, i))
        ((u.$tag$ === 'slot' || f.$tag$ === 'slot') && A(d.$elm$.parentNode, !1),
          x(d, p, i),
          _(t, d.$elm$, u.$elm$),
          (d = e[--a]),
          (p = s[++r]));
      else {
        for ($ = -1, o = n; o <= a; ++o)
          if (e[o] && e[o].$key$ !== null && e[o].$key$ === p.$key$) {
            $ = o;
            break;
          }
        ($ >= 0
          ? ((S = e[$]),
            S.$tag$ !== p.$tag$
              ? (g = H(e && e[r], l, $))
              : (x(S, p, i), (e[$] = void 0), (g = S.$elm$)),
            (p = s[++r]))
          : ((g = H(e && e[r], l, r)), (p = s[++r])),
          g && _(L(u.$elm$).parentNode, g, L(u.$elm$)));
      }
    n > a ? st(t, s[c + 1] == null ? null : s[c + 1].$elm$, l, s, r, c) : r > c && lt(e, n, a);
  },
  O = (t, e, l = !1) =>
    t.$tag$ === e.$tag$
      ? t.$tag$ === 'slot'
        ? t.$name$ === e.$name$
        : l
          ? (l && !t.$key$ && e.$key$ && (t.$key$ = e.$key$), !0)
          : t.$key$ === e.$key$
      : !1,
  L = (t) => (t && t['s-ol']) || t,
  x = (t, e, l = !1) => {
    const s = (e.$elm$ = t.$elm$),
      i = t.$children$,
      n = e.$children$,
      r = e.$tag$,
      $ = e.$text$;
    let o;
    $ === null
      ? ((h = r === 'svg' ? !0 : r === 'foreignObject' ? !1 : h),
        z(t, e, h),
        i !== null && n !== null
          ? Lt(s, i, e, n, l)
          : n !== null
            ? (t.$text$ !== null && (s.textContent = ''), st(s, null, e, n, 0, n.length - 1))
            : !l && b.updatable && i !== null && lt(i, 0, i.length - 1),
        h && r === 'svg' && (h = !1))
      : (o = s['s-cr'])
        ? (o.parentNode.textContent = $)
        : t.$text$ !== $ && (s.data = $);
  },
  y = [],
  it = (t) => {
    let e, l, s;
    const i = t.__childNodes || t.childNodes;
    for (const n of i) {
      if (n['s-sr'] && (e = n['s-cr']) && e.parentNode) {
        l = e.parentNode.__childNodes || e.parentNode.childNodes;
        const r = n['s-sn'];
        for (s = l.length - 1; s >= 0; s--)
          if (((e = l[s]), !e['s-cn'] && !e['s-nr'] && e['s-hn'] !== n['s-hn']))
            if (K(e, r)) {
              let $ = y.find((o) => o.$nodeToRelocate$ === e);
              ((B = !0),
                (e['s-sn'] = e['s-sn'] || r),
                $
                  ? (($.$nodeToRelocate$['s-sh'] = n['s-hn']), ($.$slotRefNode$ = n))
                  : ((e['s-sh'] = n['s-hn']), y.push({ $slotRefNode$: n, $nodeToRelocate$: e })),
                e['s-sr'] &&
                  y.map((o) => {
                    K(o.$nodeToRelocate$, e['s-sn']) &&
                      (($ = y.find((a) => a.$nodeToRelocate$ === e)),
                      $ && !o.$slotRefNode$ && (o.$slotRefNode$ = $.$slotRefNode$));
                  }));
            } else y.some(($) => $.$nodeToRelocate$ === e) || y.push({ $nodeToRelocate$: e });
      }
      n.nodeType === 1 && it(n);
    }
  },
  rt = (t) => {
    (t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(rt));
  },
  _ = (t, e, l) => (
    typeof e['s-sn'] == 'string' && e['s-sr'] && e['s-cr'] && nt(e['s-cr'], e, t, e.parentElement),
    t?.insertBefore(e, l)
  );
function nt(t, e, l, s) {
  var i, n;
  let r;
  if (
    t &&
    typeof e['s-sn'] == 'string' &&
    e['s-sr'] &&
    t.parentNode &&
    t.parentNode['s-sc'] &&
    (r = e['s-si'] || t.parentNode['s-sc'])
  ) {
    const $ = e['s-sn'],
      o = e['s-hn'];
    if (
      ((i = l.classList) == null || i.add(r + '-s'),
      s && (n = s.classList) != null && n.contains(r + '-s'))
    ) {
      let a = (s.__childNodes || s.childNodes)[0],
        u = !1;
      for (; a; ) {
        if (a['s-sn'] !== $ && a['s-hn'] === o && a['s-sr']) {
          u = !0;
          break;
        }
        a = a.nextSibling;
      }
      u || s.classList.remove(r + '-s');
    }
  }
}
var Nt = (t, e, l = !1) => {
  var s, i, n, r, $;
  const o = t.$hostElement$,
    a = t.$cmpMeta$,
    u = t.$vnode$ || F(null, null),
    c = Et(e) ? e : tt(null, null, e);
  if (
    ((R = o.tagName),
    a.$attrsToReflect$ &&
      ((c.$attrs$ = c.$attrs$ || {}),
      a.$attrsToReflect$.forEach(([p, f]) => {
        b.serializer && t.$serializerValues$.has(p)
          ? (c.$attrs$[f] = t.$serializerValues$.get(p))
          : (c.$attrs$[f] = o[p]);
      })),
    l && c.$attrs$)
  )
    for (const p of Object.keys(c.$attrs$))
      o.hasAttribute(p) && !['key', 'ref', 'style', 'class'].includes(p) && (c.$attrs$[p] = o[p]);
  ((c.$tag$ = null),
    (c.$flags$ |= 4),
    (t.$vnode$ = c),
    (c.$elm$ = u.$elm$ = o.shadowRoot || o),
    (j = o['s-sc']),
    (W = !!(a.$flags$ & 1) && !(a.$flags$ & 128)),
    (M = o['s-cr']),
    (B = !1),
    x(u, c, l));
  {
    if (((E.$flags$ |= 1), G)) {
      it(c.$elm$);
      for (const p of y) {
        const f = p.$nodeToRelocate$;
        if (!f['s-ol'] && k.document) {
          const g = k.document.createTextNode('');
          ((g['s-nr'] = f), _(f.parentNode, (f['s-ol'] = g), f));
        }
      }
      for (const p of y) {
        const f = p.$nodeToRelocate$,
          g = p.$slotRefNode$;
        if (g) {
          const S = g.parentNode;
          let T = g.nextSibling;
          {
            let N = (s = f['s-ol']) == null ? void 0 : s.previousSibling;
            for (; N; ) {
              let v = (i = N['s-nr']) != null ? i : null;
              if (v && v['s-sn'] === f['s-sn'] && S === (v.__parentNode || v.parentNode)) {
                for (v = v.nextSibling; v === f || v?.['s-sr']; ) v = v?.nextSibling;
                if (!v || !v['s-nr']) {
                  T = v;
                  break;
                }
              }
              N = N.previousSibling;
            }
          }
          const ot = f.__parentNode || f.parentNode,
            $t = f.__nextSibling || f.nextSibling;
          (((!T && S !== ot) || $t !== T) &&
            f !== T &&
            (!f['s-hn'] && f['s-ol'] && (f['s-hn'] = f['s-ol'].parentNode.nodeName),
            _(S, f, T),
            f.nodeType === 1 &&
              f.tagName !== 'SLOT-FB' &&
              (f.hidden = (n = f['s-ih']) != null ? n : !1)),
            f && typeof g['s-rf'] == 'function' && g['s-rf'](g));
        } else
          f.nodeType === 1 && (l && (f['s-ih'] = (r = f.hidden) != null ? r : !1), (f.hidden = !0));
      }
    }
    (B && w(c.$elm$), (E.$flags$ &= -2), (y.length = 0));
  }
  if (b.experimentalScopedSlotChanges && a.$flags$ & 2) {
    const p = c.$elm$.__childNodes || c.$elm$.childNodes;
    for (const f of p)
      f['s-hn'] !== R &&
        !f['s-sh'] &&
        (l && f['s-ih'] == null && (f['s-ih'] = ($ = f.hidden) != null ? $ : !1), (f.hidden = !0));
  }
  M = void 0;
};
function Ot(t, e) {
  const s = { $cmpMeta$: { $flags$: 0, $tagName$: e.tagName }, $hostElement$: e };
  Nt(s, t);
}
export { tt as h, Ot as r };
