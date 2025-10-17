import config from 'urodele.config';
import { locales } from '../i18n';

const locale = 'zh-CN'; // Hardcode for now
const i18n = locales[locale];

const siteConfig = {
  title: config.head.title,
  description: config.head.description,
  image: undefined, // No image in urodele config
  locale: locale,
  headerNavLinks: [
    { text: i18n.navigation.home, href: '/' },
    { text: i18n.navigation.tags, href: '/tag' },
  ],
  // Add other properties from viking's siteConfig that might be used.
  logo: {
      src: '', // no logo
      alt: config.head.brand,
  },
  subtitle: config.head.description,
  footerNavLinks: [
      {
          text: 'Github',
          href: config.footer.copyrightUrl
      }
  ],
  socialLinks: [
      {
          text: 'Github',
          href: config.footer.copyrightUrl
      }
  ],
  hero: {
      text: "我是一名热爱技术与创意的全栈开发者。平时喜欢探索新技术，研究开源项目，偶尔写写技术博客分享心得。我相信技术应该服务于人，而不是相反。<a href='/about'>了解更多...</a>",
      image: {
          src: '/avatar.jpg',
          alt: 'Viking avatar'
      }
  },
  subscribe: undefined,
  postsPerPage: config.pagination.size,
  projectsPerPage: 8,
  enableExternalLinks: true,
  giscus: config.giscus,
};

export default siteConfig;
