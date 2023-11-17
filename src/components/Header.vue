<template>
    <div>
        <!-- :style="{ backgroundImage: `url('${store.state.app_config.logoBackground}')` }" -->
       <div class="top w-full mx-auto h-[40vw] lg:h-[320px]  bg-none" >
            <a class="w-full lg:w-[800px] cursor-pointer h-[100%]  block mx-auto bg-no-repeat bg-cover lg:bg-center-bottom"  :style="{ backgroundImage: `url('${store.state.app_config.logo}')` }"></a>
       </div> 
    </div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore()
</script>
<style></style>