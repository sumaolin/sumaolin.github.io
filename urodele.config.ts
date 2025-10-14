export const config = {
  github: {
    login: 'sumaolin', // github login name, not user name
    repo: 'sumaolin.github.io', //"urodele",
    logInUrl: '',
    logInAuthUrl: '',
  },
  head: {
    title: '苏茂林的博客',
    brand: '苏茂林',
    description: '苏茂林的博客 | 关于全栈技术 关于AI使用！',
  },
  footer: {
    copyright: '© sumaolin',
    copyrightUrl: 'https://github.com/sumaolin',
  },
  pagination: {
    size: 10,
  },
  giscus: {
    src: 'https://giscus.app/client.js',
    'data-repo': 'sumaolin/sumaolin.github.io',
    'data-repo-id': 'R_kgDONxoaGA',
    'data-category': 'Announcements',
    'data-category-id': 'DIC_kwDONxoaGM4CwonP',
    'data-mapping': 'pathname',
    'data-strict': '0',
    'data-reactions-enabled': '1',
    'data-emit-metadata': '1',
    'data-input-position': 'bottom',
    'data-theme': 'preferred_color_scheme',
    'data-lang': 'zh-CN',
    'data-loading': 'lazy',
    crossorigin: 'anonymous',
    async: true,
  } as object | false,
} as const

export default config
