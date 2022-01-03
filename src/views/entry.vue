<template>
<main>
  <div>
    Help Mom
    <p class="desc">帮助老人，小孩认字，学习的平台</p>
  </div>
  <button class="btn btn-lg" @click="enter">进入</button>
</main>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter()

const enter = () => {
  router.push('/locator/')
}

</script>
<style lang="scss" scoped>

main {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 32px;
}
.desc {
  margin-top: 20px;
  font-size: 16px;
  color: gray
}
</style>