<template>
  <ul class="breadcrumb">
    <li v-for="item in routeItems" :key="item.path" class="breadcrumb-item">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li>
  </ul>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch, reactive, computed } from 'vue'

const routes = reactive(useRoute())
const matchedRoutes = ref(routes.matched)

// 替换模板参数
const format = (path) => {
  const hash = location.hash.split('?')[0].slice(1).split('/')
  if (path.includes('/:')) {
    return path.split('/').map((v, i) => v.replace(v, hash[i])).join('/')
  }
  return path
}

const routeItems = computed(() => {
  const res = matchedRoutes.value.slice(1).filter(v => v.name)
  return res.map(({ name, path }) => ({name, path: format(path)}))
})

watch(routes, (val) => {
  matchedRoutes.value = val.matched
})

</script>