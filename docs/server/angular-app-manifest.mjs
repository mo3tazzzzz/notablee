
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/notablee/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5093, hash: 'a18ba825ca43d1b06c6adf7037acc1e0864f647a3b63b8111fad8d7659829c5d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1065, hash: 'edf6dc87d030018600b275bfae33995d70dd98c45a78d37d65a0a26e82107402', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
