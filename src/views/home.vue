<template>
  <ul class="tab tab-block">
    <li v-for="(lesson, index) in lessons" 
    :key="lesson.uuid"
    :class="{active: active === index}"
    class="tab-item">
      <router-link :to="'/lesson/' + (index + 1)"> {{index + 1}}- {{lesson.name}}</router-link>
    </li>
  </ul>
  <router-view/>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from '@/plugins/axios.js'
import { useRouter } from "vue-router";
const router = useRouter()
const lessons = ref([])

const go = (index = 1) => {
  router.push('/lesson/' + index)
}

const getData = async () => {
  const res = await axios('/lesson')
  if (res.data.code === 200) {
    lessons.value = res.data.result
    if (lessons.value.length === 0) return
    go()
  } else {
    lessons.value = []
  }
}

onMounted(() => {
  getData()
})


</script>
<style lang="scss" scoped>
  .tab {
    flex-wrap: nowrap;
    overflow: auto;
    &-item {
       white-space:nowrap;
       padding: 0 6px;
    }
  }
</style>