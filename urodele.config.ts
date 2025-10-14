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
  giscus: false as object | false,
} as const

export default config
