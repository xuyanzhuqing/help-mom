<template>
  <ul class="tab tab-block">
    <li v-for="({ danyuanName, danyuanCode }, index) in sections" 
    :key="danyuanCode"
    :class="{active: active === index}"
    class="tab-item">
      <router-link :to="{path: 'cases', query: { ...route.query, danyuanCode }}">
        {{danyuanName}}
      </router-link>
    </li>
  </ul>
  <p v-if="sections.length > 0" class="title">{{title}}</p>
  <router-view/>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import axios from '@/plugins/axios.js'
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
const router = useRouter()
const route = useRoute()

const sections = ref([])
const active = computed(() => {
  const code = route.query.danyuanCode
  return sections.value.findIndex(v => v.danyuanCode === code)
})

const getData = async () => {
  const res = await axios('/lesson/sections', { params: route.query })
  if (res.data.code === 200) {
    sections.value = res.data.result
  } else {
    sections.value = []
  }
  const existed = route.query.hasOwnProperty('danyuanCode')
  if (sections.value.length === 0 || existed) return
  router.push({path: 'cases', query: { ...route.query, danyuanCode: sections.value[0].danyuanCode }})
}

const title = computed(() => {
  const { danYuanText, danyuanName } = sections.value[active.value] || {}
  return danYuanText || danyuanName
})

onMounted(() => {
  axios('/lesson')
  getData()
})

onBeforeRouteUpdate(getData)


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
  .title {
    text-align: center;
    font-size: 18px;
    line-height: 1.5
  }
</style>