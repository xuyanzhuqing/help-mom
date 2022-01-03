
<template>
  <swiper :direction="'vertical'" :pagination='{"clickable": true }' class="mySwiper">
    <swiper-slide v-for="phase in phases" :key="phase.xueDuanCode">
      {{phase.xueDuanName}}
      <button class="btn btn-lg" @click="enter(phase.xueDuanCode)">进入</button>
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

const enter = (code) => {
  router.push({ path: '/grade/', query: { code } })
}

const getData = async () => {
  const res = await axios('/lesson/phase')
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
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  font-size: 32px;
  background: #fff;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
}
</style>