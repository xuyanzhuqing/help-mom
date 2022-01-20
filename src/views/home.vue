<template>
  <ul class="tab tab-block">
    <li v-for="(section, index) in sections" 
    :key="section.danyuanCode"
    :class="{active: active === index}"
    class="tab-item">
      <router-link :to="'/lesson/' + (index + 1)"> {{index + 1}}- {{section.name}}</router-link>
    </li>
  </ul>
  <router-view/>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from '@/plugins/axios.js'
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const route = useRoute()

const sections = ref([])

const go = (index = 1) => {
  router.push('/lesson/' + index)
}

const getData = async () => {
  const res = await axios('/lesson/sections', { params: route.query })
  if (res.data.code === 200) {
    sections.value = res.data.result
  } else {
    sections.value = []
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