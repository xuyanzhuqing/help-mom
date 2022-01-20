
<template>
  <swiper :direction="'vertical'" :pagination='{"clickable": true }'>
    <swiper-slide v-for="phase in phases" :key="phase.xueDuanCode">
      {{phase.xueDuanName}}
      <button class="btn btn-lg" @click="enter(phase)">进入</button>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import axios from '@/plugins/axios.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/pagination"
import SwiperCore, { Pagination } from 'swiper';
import { useRouter } from "vue-router";
const router = useRouter()

// install Swiper modules
SwiperCore.use([Pagination]);

const phases = ref([])

const enter = ({ xueDuanCode }) => {
  router.push({ path: '/grade/', query: { xueDuanCode } })
}

const getData = async () => {
  const res = await axios('/lesson/phases')
  if (res.data.code === 200) {
    phases.value = res.data.result
  } else {
    phases.value = []
  }
}

onMounted(() => {
  getData()
})

</script>
<style scoped>
@import '@/assets/locator/swiper.scss'
</style>