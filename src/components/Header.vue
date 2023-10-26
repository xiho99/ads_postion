<template>
    <div>
       <div class="top w-full mx-auto h-[40vw] lg:h-[320px]  bg-none lg:bg-[#fee7d3]" :style="{ backgroundImage: `url('${store.state.app_config.logo_background}')` }">
            <a class="w-full lg:w-[800px] cursor-pointer h-[100%]  block mx-auto bg-no-repeat bg-cover lg:bg-center-bottom"  :style="{ backgroundImage: `url('${store.state.app_config.header_logo}')` }"></a>
       </div> 
    </div>
</template>
<script setup lang="ts">
import useIndex from "@/composables/useIndex";
const { store } = useIndex();

</script>
<style></style>