export default {
  products: {
    title: '프로덕트',
    type: 'nested',
    submenu: [
      {
        title: '출판사',
        external: true,
        link: 'https://bluedot.so/product/publisher'
      },
      {
        title: '뉴스미디어',
        external: true,
        link: 'https://bluedot.so/product/news-media'
      },
      {
        title: '인플루언서',
        external: true,
        link: 'https://bluedot.so/product/influencer'
      },
      {
        title: '기업브랜드',
        external: true,
        link: 'https://bluedot.so/product/brand'
      }
    ]
  },
  readers: {
    title: '고객 사례',
    type: 'nested',
    submenu: [
      {
        title: '파트너',
        link: '/partner'
      },
      {
        title: '파트너 인터뷰',
        external: true,
        link: 'https://bluedot.so/blog/tag/partners/'
      },
      {
        title: '파트너 콘텐츠',
        link: '/posts'
      }
    ]
  },
  creators: {
    title: '고객 지원',
    type: 'nested',
    submenu: [
      {
        title: '사용법 가이드',
        external: true,
        link: 'https://docs.google.com/presentation/d/1TaI1qxmOMKQ5eNcWGGxdxWPvAohwpOjsCT7CqYE6soQ/edit#slide=id.p'
      },
      {
        title: '테마 종류',
        external: true,
        link: 'https://bluedot.so/blog/bluedot-theme/'
      },
      {
        title: 'FAQ',
        external: true,
        link: 'https://bluedot.so/blog/faq/'
      }
    ]
  },
  pricing: {
    title: '가격',
    type: 'single',
    external: true,
    link: '/pricing'
  },
  about: {
    title: '블로그',
    type: 'single',
    external: true,
    link: 'https://bluedot.so/blog/'
  }
}
