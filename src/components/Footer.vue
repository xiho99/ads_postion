<template>
  <div class="mt-[40px]">
    <div class="top w-full mx-auto h-[33vw] lg:h-[270px]  bg-none lg:bg-[#fee7d3]"
         :style="{ backgroundImage: `url('${store.state.app_config.footer}')` }">
      <a class="w-full lg:w-[800px] cursor-pointer h-[100%]  block mx-auto bg-no-repeat bg-cover lg:bg-center-bottom"
         :style="{ backgroundImage: `url('${store.state.app_config.footerBackground}')` }"></a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore()
</script>
<style></style>