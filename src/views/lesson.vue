<template>
  <ul class="lesson">
    <li v-for="item in lessonWords" :key="item.uuid" class="lesson-group">
      <wd v-for="it in item.word"
         :key="it"
         :value="it"
         @click="toWord(it)"
         class="lesson-group-item wd-small"/>
    </li>
  </ul>
</template>
<script setup>
import wd from '@/components/wd.vue'
import { onBeforeRouteUpdate } from "vue-router";
import axios from '@/plugins/axios.js';
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const lessonWords = ref([])
const getData = (to) => {
  const condition = (to || location.href).match(/\d$/)[0]
  axios('/word/query/project', {
    params: {
      conditionProp: 'lesson',
      condition
    }
  }).then(res => {
    if (res.data.code === 200) {
      lessonWords.value = res.data.result
    } else {
      lessonWords.value = []
    }
  })
}

onBeforeRouteUpdate((to) => {
  getData(to.path)
})

onMounted(() => {
  getData()
})

const toWord = (word) => {
  router.push({ path: '/xinhua-word', query: { word } })
}

</script>
<style lang="scss" scoped>
.lesson {
  display: flex;
  flex-wrap: wrap;
  &-group {
    display: flex;
    justify-content: center;
    margin: 8px;
    &-item {
      margin-left: 3px
    }
  }
}
</style>

