<template>
  <i class="icon icon-arrow-left" @click="back"></i>
  <router-view />
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
const back = () => {
  router.go(-1)
}
</script>
<style lang="scss" scoped>
  .icon {
    position: fixed;
    z-index: 999;
    top: 10px;
    left: 6px;
    padding: 10px;
  }
</style>