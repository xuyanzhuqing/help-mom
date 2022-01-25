<template>
  <ul class="cases">
    <li v-for="item in cases">{{item.caseCode}}</li>
  </ul>
</template>
<script setup>
import { onBeforeRouteUpdate } from "vue-router";
import axios from '@/plugins/axios.js';
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter()
const route = useRoute()
const cases = ref([])

const getCases = (cases = []) => {
  axios('/lesson/case-info', { params: { caseCode: cases } }).then(res => {
    if (res.data.code === 200) {
      cases.value = res.data.result
    } else {
      cases.value = []
    }
  })
}

const getData = () => {
  const { query } = route
  axios('/lesson/cases', {
    params: query
  }).then(res => {
    if (res.data.code === 200) {
      getCases(res.data.result.map(v => v.caseCode))
    } else {
      cases.value = []
    }
  })
}

onBeforeRouteUpdate(getData)
onMounted(getData)

</script>
<style lang="scss" scoped>
</style>

