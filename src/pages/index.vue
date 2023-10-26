<template>
  <div class="bg-[#fee7d3]">
    <Header/>
    <main class="sm:w-[calc(100%-100px)] md:w-[calc(100%-150px)] lg:w-[calc(100%-300px)] max-w-[1460px] mx-auto ">
      <Advertisement/>
      <Applist/>
      <Wzlist/>
      <OnlineVideo/>
      <WelfareNavigation/>
      <DatingApps/>
      <ApplyWebs class="hidden"/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Advertisement from '../components/Addvertisement.vue'
import Applist from '../components/Applist.vue'
import Wzlist from '../components/Wzlist.vue'
import OnlineVideo from '../components/OnlineVideo.vue'
import WelfareNavigation from '../components/WelfareNavigation.vue'
import DatingApps from '../components/DatingApps.vue'
import ApplyWebs from '../components/ApplyWebs.vue'
import Footer from '../components/Footer.vue'
import { onMounted } from 'vue';
import useIndex from "@/composables/useIndex";
const { isLoading } = useIndex();
</script>

<style lang="scss" scoped>

</style>