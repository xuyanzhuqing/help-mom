<template>
  <div ref="psRef" class="container mx-auto" data-mdb-perfect-scrollbar='true'>
    <slot></slot>
  </div>
</template>
<script setup>
import { v4 as uuidv4 } from 'uuid'
import { onMounted } from 'vue';

const psRef = ref(null)

onMounted(() => {
  const demo = psRef.value;
  const myScroll = new IScroll(demo, { scrollX: true, scrollY: false, mouseWheel: true });
})
</script>
<style lang="scss" scoped>
  .container {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>