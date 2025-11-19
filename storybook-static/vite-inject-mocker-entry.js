var l = Object.defineProperty;
var c = (r, e, o) =>
  e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (r[e] = o);
var t = (r, e, o) => c(r, typeof e != 'symbol' ? e + '' : e, o);
import { MockerRegistry as n } from '@vitest/mocker';
import { createCompilerHints as d, ModuleMocker as a } from '@vitest/mocker/browser';
class _ {
  constructor() {
    t(this, 'mocks', new n());
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
class m extends a {
  queueMock() {}
}
function u(r) {
  const e = new m(
    r('__vitest_mocker__'),
    {
      resolveId(o, i) {
        return s('resolveId');
      },
      resolveMock(o, i, k) {
        return s('resolveMock');
      },
      async invalidate(o) {
        return s('invalidate');
      },
    },
    (...o) => globalThis.__STORYBOOK_MODULE_TEST__.spyOn(...o),
    { root: '' },
  );
  return ((globalThis.__vitest_mocker__ = e), d({ globalThisKey: '__vitest_mocker__' }));
}
globalThis.__STORYBOOK_MOCKER__ = u(() => new _());
