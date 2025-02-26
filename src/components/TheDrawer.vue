<!-- <template>
  <div class="drawer mdl:hidden bg-bluedot-blue text-white overflow-y-auto" v-anchor-click>
    <div class="container max-w-full">
      <div class="h-20 flex items-center justify-between">
        <div class="logo h-6">
          <router-link to="/"><img class="h-full block" alt="Mediasphere logo" src="../assets/images/bluedot-logo.svg"></router-link>
        </div>
        <button class="flex items-center" @click="drawerClose"><XIcon class="w-12 h-12" /></button>
      </div>
      <div class="flex items-center mt-8">
          <router-link to="/demo" @click="drawerClose" class="border-0 rounded-full flex items-center justify-center w-full h-[50px] font-bold text-lg bg-gradient-to-b from-[#71FF90] via-[#13C9F1] to-[#CD6DFA] text-white">무료 체험판 시작하기</router-link>
        </div>
      <div class="px-5 py-8">
        <div class="form overflow-hidden py-1 px-5">
          <form action="/posts" method="get" class="flex justify-between items-center" @submit.prevent="submitForm">
            <input ref="searchInput" name="q" v-model="q" class="search-text py-2 border-0" type="text" placeholder="검색" />
            <button class="ml-2" type="submit"><SearchIcon class="h-5 w-5 text-bluedot-blue"/></button>
          </form>
        </div>

        <ul class="font-bold mt-10">
          <li v-for="menu in props.navigation" v-bind:key="menu" class="mb-12">
            <div v-if="menu.type == 'single'" class="text-[1.75rem] mb-6">
              <a class="uppercase" :href="menu.link" v-if="menu.external === true">{{ menu.title }}</a>
              <router-link v-else-if="menu.external !== true" :to="menu.link" class="uppercase">{{ menu.title }}</router-link>
            </div>
            <div v-else-if="menu.type == 'nested'">
              <div class="text-[1.75rem] uppercase mb-6">{{ menu.title }}</div>
              <div v-for="item in menu.submenu" v-bind:key="item" class="text-lg opacity-50 mb-4">
                <router-link :to="{ path: item.link }" class="flex items-start" v-html="item.title"></router-link>
              </div>
            </div>
          </li>
          <li class="mb-12">
            <div class="text-[1.75rem] mb-6">
              <router-link to="/signin">로그인</router-link>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { XIcon } from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'

const props = defineProps({
  navigation: Object
})

const isOpen = ref(false)

const emit = defineEmits(['drawer'])

function drawerClose () {
  emit('drawer')
}

const vAnchorClick = {
  mounted: (el) => {
    el.anchorClick = function (event) {
      if (event.target.tagName === 'A' || event.target.closest('.logo')) {
        drawerClose()
      }
    }

    el.addEventListener('click', el.anchorClick)
  },
  unmounted: (el) => {
    el.removeEventListener('click', el.anchorClick)
  }
}

const q = ref('')
const router = useRouter()

const submitForm = () => {
  // this.$router.push('/posts?q' + q.value)
  drawerClose()
  isOpen.value = false
  router.push({
    name: 'posts',
    query: {
      q: q.value
    }
  })
}
</script>

<style lang="stylus">
.drawer
  position: fixed
  top: 0
  left: 0;
  width: 100%
  height: 100vh
  z-index: 1

  .superscript
    line-height: 2.1

  .form
    background: #fff
    border: 0.5px solid #e6e6e6
    border-radius: 0.5rem
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1)

  .search-text
      flex-grow: 1
      color: black
      &:focus
        outline: 2px solid transparent
        outline-offset: 2px

</style> -->
