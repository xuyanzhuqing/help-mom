<template>
  <swiper :direction="'vertical'" :pagination='{"clickable": true }'>
    <swiper-slide v-for="subject in subjects" :key="subject.xkCode">
      {{subject.xkName}}
      <button class="btn btn-lg" @click="jump(subject)">学习</button>
    </swiper-slide>
  </swiper>
</template>
<script setup>
import axios from '@/plugins/axios.js'
import { Swiper, SwiperSlide } from 'swiper/vue';

const subjects = ref([])
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()

const getData = async () => {
  const res = await axios('/lesson/subjects', { params: route.query })
  if (res.data.code === 200) {
    subjects.value = res.data.result
  } else {
    subjects.value = []
  }
}

const jump = ({ xkCode }) => {
  router.push({ path: '/home', query: { xkCode, ...route.query } })
}

onMounted(getData)

</script>
<style lang="scss" scoped>
@import '@/assets/locator/swiper.scss'
</style>
