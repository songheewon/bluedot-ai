export default {
  readers: {
    title: 'For readers',
    type: 'nested',
    submenu: [
      {
        title: '컨텐츠',
        link: '/posts'
      },
      {
        title: '파트너',
        link: '/partner'
      }
    ]
  },
  creators: {
    title: 'For creators',
    type: 'nested',
    submenu: [
      {
        title: '블루닷',
        link: '/bluedot'
      }
      // {
      //   title: '블루닷<sup class="superscript text-[0.5rem]">plus</sup>',
      //   link: '/bluedot-plus'
      // }
    ]
  },
  about: {
    title: 'About',
    type: 'single',
    external: true,
    link: 'https://www.mediasphere.kr/'
  }
}
