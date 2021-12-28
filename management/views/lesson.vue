<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>序号</th>
        <th>年级</th>
        <th>学期</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(lesson, index) in lessons" :key="index">
        <td>{{index + 1}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import axios from '@/plugins/axios.js'
import nzhcn from 'nzh/cn'
const lessons = ref([])

const getData = async () => {
  const res = await axios('/lesson')
  if (res.data.code === 200) {
    lessons.value = res.data.result
    if (lessons.value.length === 0) return
  } else {
    lessons.value = []
  }
}

const toUpAndDown = (term) => term === 0 ? '上' : '下'

onMounted(() => {
  getData()
})

</script>