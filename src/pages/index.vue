<template>
    <!-- :style="{ backgroundImage: `url('${store.state.app_config.bodyBackground}')` , backgroundColor: `${store.state.app_config.bodyBackground}` }" -->
  <div class="backgroundImage">
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
              <p class="truncate trucateApplist">{{ menu.name }}</p>
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
          <div class="title text-center text-xl font-bold text-white pb-4">{{ store.state?.categories.onlineVideo}}</div>
          <div class="list bg-white p-6 border-[5px] rounded-[12px] border-[#c59469]">
            <ul class="flex-wrap grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 justify-center items-center">
              <li v-for="(app, index) in store.state.groupCategory?.onlineVideo" v-show="index <= 30" :key="index"
                  class="item open_now flex  p-2 rounded-md items-center justify-center"
                  @mouseover="appHover = app.name"
                  @mouseleave="appHover = null"
              >
                <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                  <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600 ' : 'text-gray-400'" @click="onIsSaved('onlineVideo', app)"/>
                </div>
                <div class="image w-[40px] h-[26px] flex items-center justify-center" v-else>
                  <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                </div>
                <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
              </li>
            </ul>
            <div class="mt-6" v-if="store.state.groupCategory?.length > 30"
                 style="border: 1px solid #c59469; margin-bottom: 3px"></div>
            <ul class="mt-6 flex-wrap grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 justify-center items-center">
              <li class="item open_now flex p-2 rounded-md items-center justify-center"
                  v-for="(app, index) in store.state.groupCategory?.onlineVideo"
                  v-show="index > 30" :key="index"
                  @mouseover="appHover = app.name"
                  @mouseleave="appHover = null"
              >
                <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                  <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('onlineVideo', app)"/>
                </div>
                <div class="image w-[40px] h-[26px]" v-else>
                  <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                </div>
                <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Welfare Navigation start here -->
      <div>
        <div class="card px-4">
          <div class="title text-center text-xl font-bold text-white py-4">{{ store.state?.categories.welfareNavigation}}</div>
          <div class="list bg-white p-6 border-[5px] rounded-[12px] border-[#c59469]">
            <ul class="flex-wrap grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 justify-center items-center">
              <li v-for="(app, index) in store.state.groupCategory?.welfareNavigation" :key="index"
                  class="item open_now flex p-2 rounded-md items-center justify-center"
                  @mouseover="appHover = app.name"
                  @mouseleave="appHover = null"
              >
                <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                  <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('welfareNavigation', app)"/>
                </div>
                <div class="image w-[40px] h-[26px]" v-else>
                  <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                </div>
                <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- DatingApp start here -->
      <div class="px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap sm:gap-4">
          <div class="card">
            <div class="title text-center text-xl font-bold text-white py-4">{{ store.state?.categories.benefitOnMobilePhone}}</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px]">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center h-[180px] overflow-y-scroll">
                <li class="item open_now flex p-2 rounded-md items-center justify-center"
                    v-for="(app, index) in store.state.groupCategory?.benefitOnMobilePhone" :key="index"
                    @mouseover="appHover = app.name"
                    @mouseleave="appHover = null"
                >
                  <div class="icon icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                    <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('benefitOnMobilePhone', app)"/>
                  </div>
                  <div class="image icon w-[40px] h-[26px]" v-else>
                    <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                  </div>
                  <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-white py-4">{{ store.state?.categories.datingAndLiveBroadcasting}}</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px]">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3  items-center h-[180px] overflow-y-scroll">
                <li :key="app.id" class="item open_now flex p-2 rounded-md items-center justify-center"
                    v-for="app in store.state.groupCategory?.datingAndLiveBroadcasting"
                    @mouseover="appHover = app.name"
                    @mouseleave="appHover = null">
                  <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                    <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('datingAndLiveBroadcasting', app)"/>
                  </div>
                  <div class="image w-[40px] h-[26px]" v-else>
                    <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                  </div>
                  <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-white py-4">{{ store.state?.categories.yuri2D}}</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px]">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center h-[180px] overflow-y-scroll">
                <li class="item open_now flex p-2 rounded-md items-center justify-center"
                    v-for="app in store.state.groupCategory?.yuri2D" :key="app.id"
                    @mouseover="appHover = app.name"
                    @mouseleave="appHover = null">
                  <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                    <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('yuri2D', app)"/>
                  </div>
                  <div class="image w-[40px] h-[26px]" v-else>
                    <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                  </div>
                  <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-white py-4">{{ store.state?.categories.heartBeatNovel}}</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px]">
              <ul class="mt-2 p-6 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center h-[180px] overflow-y-scroll">
                <li class="item open_now flex p-2 rounded-md items-center justify-center"
                    v-for="app in store.state.groupCategory?.heartBeatNovel" :key="app.id"
                    @mouseover="appHover = app.name"
                    @mouseleave="appHover = null">
                  <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                    <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('heartBeatNovel', app)"/>
                  </div>
                  <div class="image w-[40px] h-[26px]" v-else>
                    <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                  </div>
                  <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-white py-4">{{ store.state?.categories.passionatePicture}}</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px]">
              <ul class="mt-2 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center p-6 items-center h-[180px] overflow-y-scroll">
                <li class="item open_now flex p-2 rounded-md items-center justify-center"
                    v-for="app in store.state.groupCategory?.passionatePicture" :key="app.id"
                    @mouseover="appHover = app.name"
                    @mouseleave="appHover = null">
                  <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                    <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('passionatePicture', app)"/>
                  </div>
                  <div class="image w-[40px] h-[26px]" v-else>
                    <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                  </div>
                  <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="title text-center text-xl font-bold text-white py-4">{{ store.state?.categories.utilities}}</div>
            <div class="list bg-white border-[5px] rounded-[12px] border-[#c59469] h-[200px] ">
              <ul class="my-2 flex-wrap grid grid-cols-2 lg:grid-cols-3 justify-center items-center h-[180px] overflow-y-auto">
                <li class="item open_now flex p-2 py-2 rounded-md items-center justify-center"
                    v-for="app in store.state.groupCategory?.utilities" :key="app.id"
                    @mouseover="appHover = app.name"
                    @mouseleave="appHover = null">
                  <div class="icon w-[40px] h-[26px] flex items-center justify-center" v-if="appHover === app.name">
                    <font-awesome-icon icon="heart" :class="app.isSaved ? 'text-red-600' : 'text-gray-400'" @click="onIsSaved('utilities', app)"/>
                  </div>
                  <div class="image w-[40px] h-[26px]" v-else>
                    <img class="rounded-full object-cover object-center w-[26px] h-[24px]" :src="app.image" alt="loading..."/>
                  </div>
                  <a class="truncate md:text-clip w-[120px] font-bold" :href="app.link" target="_blank">{{ app.name }}</a>
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
import { ref } from 'vue';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import useIndex from "../composables/useIndex";
import { useStore } from "vuex";
const { isLoading, menus, ads } = useIndex();
const store = useStore();
const appHover = ref();
const onIsSaved = (key: string, item: object) => {
  const object = {
    key,
    item,
  }
  store.commit('setIsSaveItem', object)
};
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
  a {
    @apply text-[#f00];
  }
  @apply bg-[#EEE];
}
.backgroundImage {
  background-color: #000;
  background-position: top center,center center;
  -webkit-text-size-adjust: 100%;
  background-attachment: fixed;
  background-image: url('/images/bg-gaming.png');
  -webkit-animation: scrollToup 20s linear infinite;
  animation: scrollToup 20s linear infinite;
}

@-webkit-keyframes scrollToup {
  from {
    background-position: center bottom;
  }
  to {
    background-position: center top;
  }
}

@keyframes scrollToup {
  from {
    background-position: center bottom;
  }
  to {
    background-position: center top;
  }
}
.trucateApplist {
  @apply text-white;
  @apply font-bold;
}
.gogo:hover a p{ 
  @apply text-black;
}

</style>
