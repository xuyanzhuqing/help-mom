<template>
<div class="flex-column">
  <button
    v-for="(grade, index) in grades"
    :key="grade.njCode"
    :class="{'btn-primary': index % 2 === 0}"
    class="btn"
    @click="jump(grade)">{{grade.njName}}</button>
</div>
</template>
<script setup>
import axios from '@/plugins/axios.js'
const grades = ref([])
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()
const getData = async () => {
  const res = await axios('/lesson/grades', { params: route.query })
  if (res.data.code === 200) {
    grades.value = res.data.result
  } else {
    grades.value = []
  }
}

const jump = ({ njCode }) => {
  router.push({ path: '/subject', query: { njCode, ...route.query } })
}

onMounted(() => {
  getData()
})
</script>
<style scoped lang="scss">
.flex-column {
  display: flex;
  padding: 10px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 70%;
  margin-top: 10px;
}
.btn:nth-child(2n+1) {
  margin-top: 28px;
}
</style>