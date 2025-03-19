<template>
  <TheHeader />
  <main>
    <div class="main mt-[-5px]">
      <router-view v-slot="{ Component, route }">
        <!-- Use any custom transition and fallback to `fade` -->
        <transition :name="route.meta.transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
  <TheFooter />
</template>

<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css">

<style lang="stylus">
body
  font-family: 'AppleSDGothicNeo', sans-serif;

body.view-mobile-menu
  height: 100vh
  overflow: hidden;

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s ease;

.fade-enter-from, .fade-leave-to
  opacity: 0;
</style>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import AOS from 'aos'
import { onMounted } from 'vue'
import 'aos/dist/aos.css'

onMounted(() => AOS.init({ once: true }))

</script>

<script>
// Options API 방식
export default {
  mounted () {
    // charset 메타 태그 설정
    if (!document.querySelector('meta[charset]')) {
      const meta = document.createElement('meta')
      meta.setAttribute('charset', 'UTF-8')
      document.head.appendChild(meta)
    }

    // 기본 메타 태그 설정
    const metaTags = {
      viewport: 'width=device-width, initial-scale=1.0',
      title: '블루닷AI - AI 검색 최적화를 위한 AtoZ AI 종합 솔루션',
      description: 'AI 검색 최적화, 데이터 분석, 전략 제안, 콘텐츠 제작 및 발행까지 전 과정 지원. AI 기반 자동 기사 생성, SEO 최적화, 검색 엔진 트렌드 대응 솔루션 제공.',
      keywords: 'AI 검색 최적화, AI 기사 생성, SEO, 데이터 분석, 검색엔진, Bluedot AI, AI 마케팅',
      robots: 'index, follow',
      author: 'Bluedot AI'
    }

    // Open Graph 메타 태그 설정
    const ogTags = {
      'og:type': 'website',
      'og:title': '블루닷AI - AI 검색 최적화를 위한 AtoZ AI 종합 솔루션',
      'og:description': '데이터 분석 및 전략 제안부터 제작, 발행까지 AI 검색 최적화를 위한 종합 솔루션 제공.',
      'og:image': '/bluedotai.png',
      'og:url': 'https://blog.kakaocdn.net/dn/brZnjR/btsMOYBw03J/7HEkwObHHmetyY5n1Vwh41/img.png'
    }

    // Twitter 메타 태그 설정
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': '블루닷AI - AI 검색 최적화를 위한 AtoZ AI 종합 솔루션',
      'twitter:description': 'AI 기반 기사 생성 및 검색 최적화 서비스 제공. AI 검색 중심 시대 대비 전략 수립.',
      'twitter:image': 'https://blog.kakaocdn.net/dn/brZnjR/btsMOYBw03J/7HEkwObHHmetyY5n1Vwh41/img.png'
    }

    // 기본 메타 태그 적용
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    })

    // Open Graph 메타 태그 적용
    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    })

    // Twitter 메타 태그 적용
    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    })

    // canonical 링크 설정
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', 'https://bluedot.so/')

    // 타이틀 설정
    document.title = '블루닷 AI - AI 검색 최적화를 위한 AtoZ AI 종합 솔루션'
  }
}
</script>
