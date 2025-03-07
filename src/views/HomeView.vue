<template>
  <div class="bg-[#0A142F] w-full pb-[100px] relative overflow-hidden">
    <!-- Add blob SVGs -->
    <div class="absolute w-full h-full top-0 left-0">
      <svg class="blob blob-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgba(60, 114, 255, 0.1)" transform="translate(100 100)">
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
            M40.7,-68.2C54.9,-64.3,70,-55.5,75.5,-42.3C81,-29,77,-11.4,74.1,5.1C71.2,21.7,69.4,37.2,61.3,48.5C53.2,59.8,38.8,67,23.4,71.7C8,76.4,-8.3,78.6,-22.7,74.3C-37.1,70,-49.5,59.2,-59.1,46.4C-68.7,33.6,-75.5,18.8,-77.9,2.4C-80.4,-14,-78.5,-31.6,-69.8,-44.3C-61.1,-57,-45.6,-64.8,-31.1,-68.7C-16.6,-72.6,-3.1,-72.7,8.8,-70.1C20.8,-67.5,26.5,-72.2,40.7,-68.2Z;
            M43.3,-73.6C57.9,-69.2,73,-59.5,79.1,-45.3C85.3,-31,82.5,-12.2,78.8,5.4C75.1,23,70.4,39.4,61.1,51.8C51.8,64.2,37.9,72.6,22.7,76.3C7.5,80,-9,79,-23.2,73.8C-37.5,68.6,-49.5,59.2,-59.2,47.2C-68.9,35.2,-76.3,20.6,-78.5,4.7C-80.7,-11.2,-77.7,-28.4,-69.1,-42.1C-60.5,-55.8,-46.3,-66,-32.1,-70.5C-17.9,-75,-3.7,-73.8,9.7,-71.2C23.2,-68.6,28.7,-78,43.3,-73.6Z;
            M40.7,-68.2C54.9,-64.3,70,-55.5,75.5,-42.3C81,-29,77,-11.4,74.1,5.1C71.2,21.7,69.4,37.2,61.3,48.5C53.2,59.8,38.8,67,23.4,71.7C8,76.4,-8.3,78.6,-22.7,74.3C-37.1,70,-49.5,59.2,-59.1,46.4C-68.7,33.6,-75.5,18.8,-77.9,2.4C-80.4,-14,-78.5,-31.6,-69.8,-44.3C-61.1,-57,-45.6,-64.8,-31.1,-68.7C-16.6,-72.6,-3.1,-72.7,8.8,-70.1C20.8,-67.5,26.5,-72.2,40.7,-68.2Z"></animate>
        </path>
      </svg>
      <svg class="blob blob-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="rgba(60, 114, 255, 0.05)" transform="translate(100 100)">
          <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
            M45.3,-77.5C59.9,-71.3,73.8,-61.1,81.7,-47.3C89.6,-33.4,91.5,-16.7,89.8,-1C88.1,14.7,82.8,29.3,74.7,42.3C66.6,55.2,55.7,66.4,42.3,73.7C28.8,81,14.4,84.4,-0.2,84.7C-14.8,85,-29.6,82.2,-43.5,75.6C-57.3,69,-70.2,58.6,-78.9,44.7C-87.6,30.8,-92.1,13.4,-90.8,-3.3C-89.4,-20,-82.1,-36.9,-71.3,-49.8C-60.5,-62.6,-46.1,-71.3,-31.8,-77.5C-17.4,-83.7,-3.1,-87.4,9.7,-84.8C22.5,-82.2,30.7,-83.7,45.3,-77.5Z;
            M43.3,-73.6C57.9,-69.2,73,-59.5,79.1,-45.3C85.3,-31,82.5,-12.2,78.8,5.4C75.1,23,70.4,39.4,61.1,51.8C51.8,64.2,37.9,72.6,22.7,76.3C7.5,80,-9,79,-23.2,73.8C-37.5,68.6,-49.5,59.2,-59.2,47.2C-68.9,35.2,-76.3,20.6,-78.5,4.7C-80.7,-11.2,-77.7,-28.4,-69.1,-42.1C-60.5,-55.8,-46.3,-66,-32.1,-70.5C-17.9,-75,-3.7,-73.8,9.7,-71.2C23.2,-68.6,28.7,-78,43.3,-73.6Z;
            M45.3,-77.5C59.9,-71.3,73.8,-61.1,81.7,-47.3C89.6,-33.4,91.5,-16.7,89.8,-1C88.1,14.7,82.8,29.3,74.7,42.3C66.6,55.2,55.7,66.4,42.3,73.7C28.8,81,14.4,84.4,-0.2,84.7C-14.8,85,-29.6,82.2,-43.5,75.6C-57.3,69,-70.2,58.6,-78.9,44.7C-87.6,30.8,-92.1,13.4,-90.8,-3.3C-89.4,-20,-82.1,-36.9,-71.3,-49.8C-60.5,-62.6,-46.1,-71.3,-31.8,-77.5C-17.4,-83.7,-3.1,-87.4,9.7,-84.8C22.5,-82.2,30.7,-83.7,45.3,-77.5Z"></animate>
        </path>
      </svg>
    </div>
    <div
      class="w-full md:h-[730px] h-auto mx-auto flex flex-col items-center bg-[url('@/assets/img/home-bg.svg')] bg-cover bg-bottom bg-no-repeat relative z-10"
    >
      <div class="fade-in-1 text-[#FFFFFF] md:text-[50px] text-[25px] font-[900] mt-[5%] md:px-[12%] px-[3%] text-center">
        AI 검색최적화를 위한 AtoZ AI 종합 솔루션
      </div>
      <div class="fade-in-2 text-[#FFFFFF] md:text-[20px] text-[15px] font-[500] mt-[2%] md:px-[12%] px-[3%] text-center">
        데이터 분석 및 전략 제안부터 제작, 발행까지 전과정을 도와드립니다.
      </div>
      <form @submit.prevent="handleSubmit" class="flex md:gap-x-[20px] gap-x-[8px] mt-[4%] md:px-0">
        <div class="md:w-[100%] w-[70%]">
          <input
            id="email-input"
            name="email"
            type="text"
            class="md:w-[450px] md:h-[50px] h-[30px] w-[100%] bg-[#4F5870] rounded-[26px] px-[20px] py-[10px] border-none text-[#FFFFFF]"
          />
          <input type="hidden" name="emailType" value="subscribe" />
          <input type="hidden" name="withMagiclink" value="true" />
          <input type="hidden" name="labels" value="[]" />
          <input type="hidden" name="redirectURI" value="https://bluedot.so/blog/" />
        </div>
        <div class="md:w-[100%] w-[30%]">
          <button type="submit"
            class="md:h-[50px] h-[30px] w-[100%] bg-[#3C72FF] text-[#FFFFFF] rounded-[26px] md:px-[20px] px-[5px] md:py-[10px] py-[3px] font-[700] md:text-[15px] text-[11px] transition-transform duration-200 hover:scale-105"
          >
            새소식 받기
          </button>
        </div>
      </form>
    </div>
    <div class="flex md:mt-[-6%] mt-[10%] md:px-[12%] px-[3%] gap-x-[20px] items-center">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_79_805)">
          <path
            d="M15.84 0.260741L17.2741 4.21531C18.8602 8.60444 22.3151 12.0593 26.7042 13.6454L30.6588 15.0795C31.0064 15.2099 31.0064 15.7096 30.6588 15.84L26.7042 17.2741C22.3151 18.8602 18.8602 22.3151 17.2741 26.7042L15.84 30.6588C15.7096 31.0064 15.2099 31.0064 15.0795 30.6588L13.6454 26.7042C12.0593 22.3151 8.60445 18.8602 4.21531 17.2741L0.260741 15.84C-0.0869136 15.7096 -0.0869136 15.2099 0.260741 15.0795L4.21531 13.6454C8.60445 12.0593 12.0593 8.60444 13.6454 4.21531L15.0795 0.260741C15.2099 -0.108642 15.7096 -0.108642 15.84 0.260741Z"
            fill="white"
          />
          <path
            d="M34.6351 24.9877L35.5259 27.443C36.5037 30.159 38.6548 32.3101 41.3709 33.2879L43.8262 34.1788C44.0435 34.2657 44.0435 34.5699 43.8262 34.6568L41.3709 35.5477C38.6548 36.5254 36.5037 38.6766 35.5259 41.3926L34.6351 43.8479C34.5482 44.0652 34.244 44.0652 34.1571 43.8479L33.2662 41.3926C32.2884 38.6766 30.1373 36.5254 27.4213 35.5477L24.9659 34.6568C24.7487 34.5699 24.7487 34.2657 24.9659 34.1788L27.4213 33.2879C30.1373 32.3101 32.2884 30.159 33.2662 27.443L34.1571 24.9877C34.244 24.7704 34.5482 24.7704 34.6351 24.9877Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_79_805">
            <rect width="44" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div class="text-[#FFFFFF] md:text-[30px] text-[24px] font-[900] md:mb-0 mb-[10px]">
        우리의 AI 서비스
      </div>
    </div>
    <div class="flex justify-center items-center md:px-[15%] px-[3%]"></div>
    <div class="md:px-[12%] px-[3%] mt-[2%] relative z-[100] ">
      <!-- 탭 헤더 -->
      <div
        class="flex flex-wrap bg-[#FFFFFF] w-[100%] justify-between md:rounded-tl-[42px] md:rounded-tr-[42px] rounded-tl-[20px] rounded-tr-[20px]"
      >
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center w-[100%] justify-between h-full"
          role="tablist"
        >
          <li
            class="w-[20%]"
            role="presentation"
            v-for="(tab, index) in tabs"
            :key="index"
          >
            <button
              :class="[
                'inline-block md:p-4 p-1 w-full h-full whitespace-normal relative z-[100] mb-[12px]',
                activeTab === index
                  ? 'text-black md:text-[18px] text-[11px] font-[700] border-b-[5px] border-[#3C72FF] active'
                  : 'text-black md:text-[18px] text-[11px] font-[700] hover:text-gray-600 hover:border-gray-300 border-b-[5px] border-[#E8E6E6] ',
              ]"
              :id="`tab-${index}`"
              type="button"
              role="tab"
              @click="activeTab = index"
              style="word-break: keep-all;"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>

      <!-- 탭 컨텐츠 -->
      <div
        class="bg-[#FFFFFF] px-[30px] md:px-[90px] py-[5%] flex justify-between gap-x-[4%] md:rounded-bl-[42px] md:rounded-br-[42px] rounded-bl-[20px] rounded-br-[20px]"
      >
        <div
          class="flex justify-between gap-x-[4%]"
          v-for="(tab, index) in tabs"
          :key="index"
          v-show="activeTab === index"
        >
          <div class="lg:w-[40%] w-[100%]">
            <div class="text-[#3C72FF] md:text-[16px] text-[12px] font-[700]">
              {{ tab.title }}
            </div>
            <div class="text-black font-[900] text-[20px] md:text-[24px] custom:text-[36px] mt-[10px] whitespace-normal" style="word-break: keep-all;">
              {{ tab.content1 }}
            </div>
            <div class="text-black font-[400] md:text-[18px] text-[12px] mt-[20px] md:mb-[8%] mb-[4%]">
              {{ tab.desc }}
            </div>
            <a :href="tab.link" target="_blank"
          class="md:h-[50px] h-[30px] w-[100%] bg-[#3C72FF] text-[#FFFFFF] rounded-[26px] md:px-[20px] px-[5px] md:py-[10px] py-[3px] font-[700] md:text-[15px] text-[11px]"
        >
          바로가기
        </a>
          </div>
          <div class="hidden lg:block">
            <img :src="tab.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#D6E2FF] w-full py-[80px] md:px-[15%] px-[3%]">
    <div class="md:text-[36px] text-[24px] font-[900]">
      AI 검색이 기존 검색 시장을 위협합니다
    </div>
    <div class="md:text-[20px] text-[15px] font-[500] mt-[15px]">
      <span class="font-[900]">선제적 대응</span>이 필요할 만큼 빠르게 AI 검색
      중심으로 바뀌고 있습니다
    </div>
    <div class="md:text-[20px] text-[15px] font-[500]">
      <span class="font-[900]">ChatGPT 검색</span>과 Gemini기반의
      <span class="font-[900]">구글 AI 검색</span>에 우선적으로 초점을 맞춰야
      합니다
    </div>
    <div class="md:flex gap-x-[3%] mt-[20px]">
      <div class="md:h-[480px] w-[70%]">
        <img src="@/assets/img/ai-search/search1.svg" />
      </div>
      <div class="md:mt-0 mt-[10px]">
        <img src="@/assets/img/ai-search/search2.svg" />
      </div>
    </div>
    <div class="text-[13px] font-[500] text-[#939393] mt-[15px]">
      출처 : semrush & statista. (2024.12). Trend Study : Online Search After
      ChatGPT
    </div>
  </div>
  <div
    class="bg-[#0A142F] w-full pt-[3%] md:px-[15%] px-[3%] justify-between gap-x-[4%] items-center md:flex block"
  >
    <div class="md:w-[600px] w-[100%] flex-shrink-0">
      <img class="w-full" src="@/assets/img/ai-advantage/advantage.svg" />
    </div>
    <div class="text-white font-[500] md:text-[25px] text-[15px] leading-[40px]">
      <a
        class="underline decoration-1 underline-offset-4 font-[700]"
        href="https://www.gartner.com/en/information-technology/topics/ai-strategy-for-business?utm_campaign=RM_GB_2023_ITAI_NPP_PR1_AISTRATEGYPILLAR"
        >생성 AI</a
      >
      (GenAI) 솔루션은 기존 검색 엔진에서 실행되던 사용자 쿼리를 대체하는 차세대
      답변 엔진이 되고 있습니다.
      <span class="font-[700]"
        >GenAI가 기업의 모든 측면에 더 많이 도입됨에 따라 기업은 마케팅 채널
        전략을 재고해야 할 것</span
      >입니다.
    </div>
  </div>
  <div class="bg-[#EAF0FF] w-full pt-[3%] md:px-[15%] px-[3%] pb-[5%] h-[670px] flex items-center">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-[300px] overflow-hidden rounded-lg">
        <!-- Items -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="duration-200 ease-in-out absolute w-full h-full"
          :class="{
            'opacity-100': activeSlide === index,
            'opacity-0': activeSlide !== index,
          }"
          data-carousel-item
        >
          <div
            class="flex flex-col items-center justify-center h-full text-center p-8 md:w-[450px] w-[75%] mx-auto"
          >
            <p class="text-[#4F5870] md:text-[25px] text-[13px] font-[700] mb-2">
              {{ slide.mainText }}
            </p>
            <p class="text-[#2F4CC0] md:text-[15px] text-[10px] font-[700]">{{ slide.subText }}</p>
          </div>
        </div>
      </div>

      <!-- Slider controls -->
      <button
        @click="prevSlide"
        type="button"
        class="absolute top-1/2 -translate-y-1/2 start-0 z-30 flex items-center justify-center h-10 px-4 cursor-pointer group focus:outline-none"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_79_776)">
              <path
                d="M13.6 28L15.98 25.55L6.46 15.75L34 15.75L34 12.25L6.46 12.25L15.98 2.45L13.6 1.78342e-06L-1.22392e-06 14L13.6 28Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_79_776">
                <rect
                  width="34"
                  height="28"
                  fill="white"
                  transform="translate(34 28) rotate(180)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
      <button
        @click="nextSlide"
        type="button"
        class="absolute top-1/2 right-0 -translate-y-1/2 end-0 z-30 flex items-center justify-center h-10 px-4 cursor-pointer group focus:outline-none"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
        >
          <svg
            width="34"
            height="28"
            viewBox="0 0 34 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_79_774)">
              <path
                d="M20.4 0L18.02 2.45L27.54 12.25H0V15.75H27.54L18.02 25.55L20.4 28L34 14L20.4 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_79_774">
                <rect width="34" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>

      <!-- Slider indicators -->
      <div
        class="absolute z-30 flex -translate-x-1/2 md:bottom-[-50px] bottom-[30px] left-1/2 space-x-3 rtl:space-x-reverse"
      >
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          class="w-[11px] h-[11px] rounded-full"
          :class="activeSlide === index ? 'bg-[#3C72FF]' : 'bg-[#B3C9FF]'"
          @click="activeSlide = index"
          :aria-current="activeSlide === index"
          :aria-label="`Slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
  <div class="absolute inset-0 pointer-events-none">
    <div
      v-for="(position, index) in starPositions"
      :key="index"
      class="star absolute animate-twinkle"
      :style="position"
    >
      <svg width="55" height="56" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6222 55.1531C12.1926 33.3258 11.492 30.7147 0.0627297 12.0701C21.89 12.6405 24.5011 11.9399 43.1457 0.510667C42.5753 22.338 43.2759 24.9491 54.7052 43.5936C32.8779 43.0233 30.2668 43.7238 11.6222 55.1531Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref(0)
const tabs = ref([
  {
    title: '블루닷 인텔리전스',
    content1: '브랜드의 AI검색 가시성 높여드립니다',
    content2: '',
    desc: '브랜드의 성장을 이끄는 AI검색최적화를 위한 통합 마케팅 솔루션. 실시간 데이터 분석과 예측 알고리즘으로 귀사의 디지털 마케팅 전략을 혁신적으로 변화시킵니다. 고객 인사이트부터 캠페인 최적화까지, 스마트한 의사결정을 지원합니다.',
    img: new URL('@/assets/img/ai-product/product1.svg', import.meta.url).href,
    link: 'https://bi.bluedot.so/'
  },
  {
    title: '블루닷 CMS',
    content1: 'AI검색에 최적화한 올인원 CMS',
    content2: '올인원 CMS',
    desc: '차세대 AI 검색 최적화 CMS 플랫폼. 스키마 마크업, 메타데이터, 시맨틱 HTML 등 검색엔진이 선호하는 모든 기술 요소를 자동으로 최적화합니다. AI가 콘텐츠 구조와 의미를 이해하여 검색 노출도를 극대화하며, 기술에 대한 전문 지식 없이도 SEO에 완벽한 웹사이트를 구축할 수 있습니다.',
    img: new URL('@/assets/img/ai-product/product2.svg', import.meta.url).href,
    link: 'https://bluedot.so/'
  },
  {
    title: '오웰',
    content1: 'AI가 고품질 기사 생산을 도와드립니다',
    content2: '도와드립니다',
    desc: '언론사와 미디어를 위한 AI 기반 저널리즘 플랫폼. 방대한 데이터를 신속하게 분석하고, 뉴스 가치가 있는 인사이트를 발굴하여 고품질 기사 작성을 지원합니다. 팩트체크와 심층 리서치를 자동화하여 저널리스트의 제작 역량을 강화합니다.',
    img: new URL('@/assets/img/ai-product/product3.svg', import.meta.url).href,
    link: 'https://orwell.bluedot.so/'
  },
  {
    title: '소포스',
    content1: 'AI가 선호하는 마케팅 콘텐츠를 제작합니다',
    content2: '콘텐츠를 제작합니다',
    desc: '중소기업 마케터를 위한 직관적인 AI 마케팅 도구. 복잡한 디지털 마케팅을 쉽고 효율적으로 관리할 수 있습니다. 소규모 팀도 대기업 수준의 마케팅 성과를 낼 수 있도록 자동화된 캠페인 관리와 성과 분석을 제공합니다.',
    img: new URL('@/assets/img/ai-product/product4.svg', import.meta.url).href,
    link: 'https://sofos.bluedot.so/'
  },
  {
    title: '퍼바이',
    content1: '공공기관 문서 업무를 AI가 대신해드립니다',
    content2: 'AI가 대신해드립니다',
    desc: '공공기관 맞춤형 AI 업무 효율화 플랫폼. 행정 업무 자동화와 데이터 기반 의사결정을 지원하여 공공서비스의 품질을 높입니다. 정부 규제와 보안 요건을 준수하면서도 혁신적인 디지털 전환을 가능하게 합니다.',
    img: new URL('@/assets/img/ai-product/product5.svg', import.meta.url).href,
    link: 'https://pubai.bluedot.so/'
  }
])

const activeSlide = ref(0)
const slides = ref([
  {
    mainText: '“AI 시대에 발맞춰 검색 최적화 기능도 제공한다. 구글 AI 오버뷰, 서치GPT, 퍼플렉시티 등 주요 AI 플랫폼에서의 상위 노출을 위해 필수적인 ‘자주 묻는 질문(FAQ)’을 자동으로 생성해 준다.”',
    subText: '조선비즈(장윤서 기자)'
  },
  {
    mainText: '“기자는 AI와 경쟁해야 할까…6가지 문체로 10초 만에 기사 뚝딱”',
    subText: '한겨레(임지선 기자)'
  }
])

let autoplayInterval
let tabInterval

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  activeSlide.value =
    (activeSlide.value - 1 + slides.value.length) % slides.value.length
}

const handleSubmit = async (event) => {
  try {
    const form = event.target
    const email = form.querySelector('input[name="email"]').value
    const jsonData = {
      email: email,
      emailType: 'subscribe',
      withMagiclink: true,
      labels: [],
      redirectURI: 'https://bluedot.so/blog/'
    }

    const response = await fetch('https://accounts.withbluedot.site/bluedot/blog/send-magic-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })

    const data = await response.json()
    console.log(data)
    if (data.token) {
      window.open(`https://bluedot.so/blog/validate/?token=${data.token}&type=subscribe&lastPage=undefined&lastPageQuery=undefined&withMagiclink=true`)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

const starPositions = Array.from({ length: 12 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  transform: `scale(${0.1 + Math.random() * 0.5}) rotate(${Math.random() * 360}deg)`,
  animationDuration: `${2 + Math.random() * 3}s`
}))

onMounted(() => {
  autoplayInterval = setInterval(nextSlide, 5000) // 5초마다 다음 슬라이드로

  // Start tab rotation
  tabInterval = setInterval(() => {
    activeTab.value = (activeTab.value + 1) % tabs.value.length
  }, 2500)

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    document.documentElement.style.setProperty('--mouse-x', x.toString())
    document.documentElement.style.setProperty('--mouse-y', y.toString())
  }

  window.addEventListener('mousemove', handleMouseMove)

  onUnmounted(() => {
    if (autoplayInterval) clearInterval(autoplayInterval)
    if (tabInterval) clearInterval(tabInterval)
    window.removeEventListener('mousemove', handleMouseMove)
  })
})

</script>

<style scoped>
.fade-in-1 {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
}

.fade-in-2 {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.3s;
}

.fade-in-3 {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.6s;
}

.fade-in-4 {
  opacity: 0;
  animation: fadeIn 0.8s ease forwards;
  animation-delay: 0.9s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.star {
  opacity: 0.5;
}

.animate-twinkle {
  animation: twinkle ease-in-out infinite;
}

@keyframes twinkle {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
}

.blob {
  position: absolute;
  width: 800px;
  height: 800px;
  transition: transform 0.3s ease-out;
}

.blob:hover {
  transform: scale(1.1) rotate(10deg);
  filter: brightness(1.2);
}

.blob-1 {
  top: -20%;
  right: -10%;
  animation: rotate 20s linear infinite;
  transform-origin: center center;
}

.blob-2 {
  bottom: 50%;
  left: 0%;
  animation: rotate 20s linear infinite reverse;
  transform-origin: center center;
}

.blob-3 {
  bottom: 10%;
  left: 85%;
  animation: rotate 20s linear infinite reverse;
  transform-origin: center center;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0px) rotate(360deg);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 마우스 움직임에 따른 시차 효과 */
@media (hover: hover) {
  .blob {
    transition: transform 0.2s ease-out;
  }
  .blob-1 {
    transform: translate(calc(var(--mouse-x, 0) * -20px), calc(var(--mouse-y, 0) * -20px));
  }
  .blob-2 {
    transform: translate(calc(var(--mouse-x, 0) * 15px), calc(var(--mouse-y, 0) * 15px));
  }
  .blob-3 {
    transform: translate(calc(var(--mouse-x, 0) * -10px), calc(var(--mouse-y, 0) * -10px));
  }
}
</style>
