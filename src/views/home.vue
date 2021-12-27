<script setup>
import { onMounted, ref } from "vue";
import axios from '@/plugins/axios.js'
import { useRouter } from "vue-router";
const router = useRouter()
const lessons = ref([])
onMounted(async () => {
  const res = await axios('/lesson')
  if (res.data.code === 200) {
    lessons.value = res.data.result
    if (lessons.value.length === 0) return
    router.push('/lesson/' + 1)
  } else {
    lessons.value = []
  }
})

</script>

<template>

<ul class="tab tab-block">
  <li v-for="(lesson, index) in lessons" 
  :key="lesson.uuid" 
  class="tab-item">
    <router-link :to="'/lesson/' + (index + 1)">{{lesson.name}}</router-link>
  </li>
</ul>
<router-view/>
</template>
