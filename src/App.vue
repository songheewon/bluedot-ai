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
