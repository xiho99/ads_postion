<template>
  <div class="mt-[40px]">
    <!-- :style="{ backgroundImage: `url('${store.state.app_config.footerBackground}')` }" -->
    <div class="top w-full mx-auto h-[33vw] lg:h-[270px]  bg-none "
         >
         <!-- :style="{ backgroundImage: `url('${store.state.app_config.footerLogo}')` }" -->
      <a class="w-full lg:w-[800px] cursor-pointer h-[100%]  block mx-auto bg-no-repeat bg-cover lg:bg-center-bottom"
         ></a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore()
</script>
<style></style>