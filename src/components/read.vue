<template>
  <css-icon class="icon-audio" @click="play(value)"></css-icon>
</template>
<script setup>
import play from '@/utils/play.js'

defineProps({
  value: String
})
</script>