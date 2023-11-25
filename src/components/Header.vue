<template>
    <div>
        {{ store.state.app_config?.headTitle }}
        <!-- :style="{ backgroundImage: `url('${store.state.app_config.logoBackground}')` }" -->
       <div class="top w-full mx-auto h-[40vw] lg:h-[320px]  bg-none" >
            <a class="w-full lg:w-[800px] cursor-pointer h-[100%]  block mx-auto bg-no-repeat bg-cover lg:bg-center-bottom"  :style="{ backgroundImage: `url('${store.state.app_config?.logo}')` }"></a>
       </div> 
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useStore } from "vuex";
import { useHead } from '@unhead/vue';

const store = useStore()
const meta = reactive({
  title: store.state.app_config.headTitle?.title ?? 'App title',
  icon: store.state.app_config.headTitle?.value ?? '/images/iconG.png',
  description: store.state.app_config.headTitle?.title ?? '',
})
useHead({
  title: () => meta.title,
  meta: [
      { name: 'description', content: () => meta.description },
  ],
  link: [{ rel: 'icon', type: 'image/png', href: () => meta.icon }],
})
</script>
<style></style>