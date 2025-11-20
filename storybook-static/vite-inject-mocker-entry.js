var c = Object.defineProperty;
var n = (r, e, o) =>
  e in r ? c(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (r[e] = o);
var t = (r, e, o) => n(r, typeof e != 'symbol' ? e + '' : e, o);
class l {
  constructor() {
    this.registry = new Map();
  }
  add(e) {
    if (!e) return;
    const o = e.url ?? e.id ?? Symbol();
    this.registry.set(o, e);
  }
  delete(e) {
    this.registry.delete(e);
  }
  clear() {
    this.registry.clear();
  }
  get(e) {
    return this.registry.get(e);
  }
  has(e) {
    return this.registry.has(e);
  }
}
class u {
  constructor() {}
  queueMock() {}
  queueUnmock() {}
  importActual() {
    return Promise.resolve(void 0);
  }
  importMock() {
    return Promise.resolve({});
  }
}
function d() {
  return {
    hoisted(r) {
      return typeof r == 'function' ? r() : r;
    },
    mock() {},
    unmock() {},
    doMock() {},
    doUnmock() {},
    importActual() {
      return Promise.resolve(void 0);
    },
    importMock() {
      return Promise.resolve({});
    },
  };
}
class a {
  constructor() {
    t(this, 'mocks', new l());
  }
  async register(e) {
    this.mocks.add(e);
  }
  async delete(e) {
    this.mocks.delete(e);
  }
  async invalidate() {
    this.mocks.clear();
  }
}
const s = (r) => {
  switch (r) {
    case 'resolveId':
      return Promise.resolve({ id: '', url: '', optimized: !1 });
    case 'resolveMock':
      return Promise.resolve({
        mockType: 'dummy',
        resolvedId: '',
        resolvedUrl: '',
        redirectUrl: '',
        needsInterop: !1,
      });
    case 'invalidate':
      return Promise.resolve();
  }
};
class m extends u {
  queueMock() {}
}
function k(r) {
  const e = new m(
    r('__vitest_mocker__'),
    {
      resolveId(o, i) {
        return s('resolveId');
      },
      resolveMock(o, i, v) {
        return s('resolveMock');
      },
      async invalidate(o) {
        return s('invalidate');
      },
    },
    (...o) => globalThis.__STORYBOOK_MODULE_TEST__.spyOn(...o),
    { root: '' },
  );
  return ((globalThis.__vitest_mocker__ = e), d());
}
globalThis.__STORYBOOK_MOCKER__ = k(() => new a());
