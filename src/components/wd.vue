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
<style lang="scss" scoped>
@use "sass:math";

$large: 64px;
$normal: 48px;
$small: 32px;

@mixin make-size($size) {
  width: $size;
  height: $size;
  font-size: $size * 0.75;
  line-height: $size * 0.925;
}

.wd {
  position: relative;
  @include make-size($normal);
  border: 2px solid sandybrown;
  box-sizing: border-box;
  text-align: center;
  &-large {
    @include make-size($large);
  }
  &-small {
    @include make-size($small);
  }
  &:after {
    content: ''; 
    position: absolute;
    left: 0;
    top: 0px;
    width: 1px;
    height: #{math.hypot(100%, 100%) * 0.95};
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
    height: #{math.hypot(100%, 100%) * 0.95};
    border-left: 1px dashed red;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }
}
</style>