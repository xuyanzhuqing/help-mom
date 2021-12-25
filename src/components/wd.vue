<template>
  <div class="wd">{{value}}</div>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
defineProps({
  value: String
})
</script>
<style lang="scss">
.wd {
  position: relative;
  width: 64px;
  height: 64px;
  border: 2px solid sandybrown;
  box-sizing: border-box;
  font-size: 48px;
  text-align: center;
  line-height: 60px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0px;
    width: 1px;
    height: 84px;
    border-left: 1px dashed red;
    transform: rotate(-45deg);
    transform-origin: 0 0;
  }
  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0px;
    width: 1px;
    height: 84px;
    border-left: 1px dashed red;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }
}
</style>