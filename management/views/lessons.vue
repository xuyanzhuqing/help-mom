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
      <tr v-for="(grade, index) in grades" :key="index">
        <td>{{index + 1}}</td>
        <td>{{nzhcn.encodeS(grade.grade)}}</td>
        <td>{{toUpAndDown(grade.term)}}</td>
        <td><button class="btn btn-link" @click="check(grade)">查看课程</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import axios from '@/plugins/axios.js'
import nzhcn from 'nzh/cn'
const grades = ref([])
import { useRouter } from "vue-router";

const router = useRouter()

const getData = async () => {
  const res = await axios('/grade')
  if (res.data.code === 200) {
    grades.value = res.data.result
    if (grades.value.length === 0) return
  } else {
    grades.value = []
  }
}

const toUpAndDown = (term) => term === 0 ? '上' : '下'

const check = ({grade, term}) => {
  router.replace({ path: `/lessons/${grade}/${term}` })
}

onMounted(() => {
  getData()
})

</script>