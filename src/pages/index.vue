<template>
  <div :style="{ backgroundImage: `url('${store.state.app_config.bodyBackground}')` }">
    <Header/>
    <div class="sm:w-[calc(100%-100px)] md:w-[calc(100%-150px)] lg:w-[calc(100%-300px)] max-w-[1460px] mx-auto"
         v-loading="isLoading">
      <!-- Advertisement start here -->
      <div class="banner w-full max-w-[700px] mx-auto overflow-hidden" id="sssuo_banner">
        <ul class="m-[10px]">
          <li class="gogo w-full inline-block mb-2" v-for="(ad, index) in ads" :key="index">
            <a :href="ad.link" target="_blank">
              <img class="w-full" :src="ad.image" alt="loading..."/>
            </a>
          </li>
        </ul>
      </div>
      <!-- applist start here -->
      <div class="applist overflow-hidden mx-[10px] my-[5px]" id="sssuo_applist">
        <ul class="flex-wrap grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 justify-start items-center">
          <li class="gogo text-center rounded-md flex flex-col items-center py-[5px] relative text-[14px] overflow-hidden transition-[2s] bg-transparent hover:bg-white"
              v-for="(menu , index) in menus.Icon" :key="index">
            <a class="flex flex-col" :href="menu.link" target="_blank">
              <img class="w-14 h-14 rounded-md my-2" :src="menu.image" alt="loading..."/>
              <p class="truncate ">{{ menu.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- wzlist start here -->
      <div class="wzlist overflow-hidden mx-[10px] my-[5px] min-h-[50px]" id="sssuo_word">
        <ul class="flex-wrap grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 justify-center items-center">
          <li v-for="(button , index) in menus.Button" :key="index" :style="{ backgroundColor: button.color }"
              class="text-center inline-block text-[14px] rounded-md px-[12px] text-white py-[8px] m-[5px] max-w-[120px]">
            <div class="truncate text-center w-full">
              <a :href="button.link" target="_blank">{{ button.name }}</a>
            </div>
          </li>
        </ul>
      </div>
      <!-- Online video start here -->
      <div>
        <div class="card px-4">
          <div class="title text-center text-xl font-bold text-black pb-4">在线视频</div>
          <div class="list bg-white p-6 border-[5px] rounded-[12px] border-[#c59469]">
            <ul class="flex-wrap grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 justify-center items-center">
              <li v-for="(app, index) in groupItems.onlineVideo" v-show="index <= 30" :key="index"
                  class="item open_now flex gap-2 p-2 rounded-md items-center justify-center">
                <img class="w-6 h-6 rounded-full" :src="app.image" alt="loading..."/>
                <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
              </li>
            </ul>
            <div class="mt-6" v-if="groupItems.onlineVideo?.length > 30"
                 style="border: 1px solid #c59469; margin-bottom: 3px"></div>
            <ul class="mt-6 flex-wrap grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 justify-center items-center">
              <li class="item open_now flex gap-2 p-2 rounded-md items-center justify-center"
                  v-for="(app, index) in groupItems.onlineVideo" v-show="index > 30" :key="index">
                <img class="w-6 h-6 rounded-full" :src="app.image" alt=""/>
                <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Welfare Navigation start here -->
      <div>
        <div class="card px-4">
          <div class="title text-center text-xl font-bold text-black py-4">福利导航</div>
          <div class="list bg-white p-6 border-[5px] rounded-[12px] border-[#c59469]">
            <ul class="flex-wrap grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 justify-center items-center">
              <li v-for="app in groupItems.welfareNavigation" :key="app.id"
                  class="item open_now flex gap-2 p-2 rounded-md items-center justify-center">
                <img class="w-6 h-6 rounded-full" :src="app.image" alt=""/>
                <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- DatingApp start here -->
      <div class="px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap sm:gap-4">
          <div class="card">
            <div class="title text-center text-xl font-bold text-black py-4">手机上的福利</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px] overflow-y-scroll">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center">
                <li class="item open_now flex gap-2 p-2 rounded-md items-center justify-center"
                    v-for="app in groupItems.benefitOnMobilePhone" :key="app.id">
                  <img class="w-6 h-6 rounded-full" :src="app.image" alt="loading..."/>
                  <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-black py-4">交友与直播</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px] overflow-y-scroll">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center">
                <li :key="app.id" class="item open_now flex gap-2 p-2 rounded-md items-center justify-center"
                    v-for="app in groupItems.datingAndLiveBroadcasting">
                  <img class="w-6 h-6 rounded-full" :src="app.image" alt="loading..."/>
                  <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-black py-4">萝莉の二次元</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px] overflow-y-scroll">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center">
                <li class="item open_now flex gap-2 p-2 rounded-md items-center justify-center"
                    v-for="app in groupItems.yuri2D" :key="app.id">
                  <img class="w-6 h-6 rounded-full" :src="app.image" alt=""/>
                  <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-black py-4">心跳小说</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px] overflow-y-scroll">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center">
                <li class="item open_now flex gap-2 p-2 rounded-md items-center justify-center"
                    v-for="app in groupItems.heartBeatNovel" :key="app.id">
                  <img class="w-6 h-6 rounded-full" :src="app.image" alt=""/>
                  <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-black py-4">激情美图</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px] overflow-y-scroll">
              <ul class="mt-2 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center p-6 items-center">
                <li class="item open_now flex gap-2 p-2 rounded-md items-center justify-center"
                    v-for="app in groupItems.passionatePicture" :key="app.id">
                  <img class="w-6 h-6 rounded-full" :src="app.image" alt=""/>
                  <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-black py-4">实用工具</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px] overflow-y-scroll">
              <ul class="mt-2 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center p-6">
                <li class="item open_now flex gap-2 p-2 rounded-md items-center justify-center"
                    v-for="app in groupItems.utilities" :key="app.id">
                  <img class="w-6 h-6 rounded-full" :src="app.image" alt=""/>
                  <a class="truncate md:text-clip w-[120px]" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- DatingApp End here -->
    </div>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import useIndex from "../composables/useIndex";
import { useStore } from "vuex";

const { isLoading, menus, groupItems, ads } = useIndex();
const store = useStore()
</script>
<style scoped lang="scss">
/* scroll bar style */
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffb400;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffb400;
}

.open_now:hover {
  @apply text-[#f00];
  @apply bg-[#EEE];
}
</style>
