import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const DEFAULT_TITLE = '블루닷'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "posts" */ '@/views/HomeView.vue'),
    meta: {
      title: '블루닷 - 콘텐츠 SMB를 위한 AI 검색최적화 CMS'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  }
})

router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
