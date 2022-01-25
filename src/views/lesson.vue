<template>
  <ul class="lesson">
    <li v-for="item in lessonWords"
     :key="item.uuid"
     class="lesson-group">
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
import { useRouter, useRoute } from "vue-router";
import play from '@/utils/play.js'

const router = useRouter()
const route = useRoute()
const lessonWords = ref([])
const getData = () => {
  const { query } = route
  axios('/lesson/cases', {
    params: query
  }).then(res => {
    if (res.data.code === 200) {
      lessonWords.value = res.data.result
    } else {
      lessonWords.value = []
    }
  })
}

onBeforeRouteUpdate(getData)
onMounted(getData)

const toWord = (word) => {
  router.push({ path: '/xinhua-word', query: { word } })
}

const playSound = (word) => {
  play(word)
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

