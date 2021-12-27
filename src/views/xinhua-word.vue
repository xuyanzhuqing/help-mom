<template>
<word :value="value"/>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from '@/plugins/axios.js';
import word from '@/components/word.vue'
import { useRoute } from "vue-router";
const value = ref({})
const getData = () => {
  const params = window.location.href.split('?')[1]
  axios('/word/xinhua?' + params).then(res => {
    if (res.data.code === 200) {
      value.value = res.data.result
    } else {
      value.value = {}
    }
  })
}

onMounted(() => {
  getData()
})
</script>
