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

$bd: 2px;

@mixin make-size($size) {
  width: $size;
  height: $size;
  font-size: $size * 0.75;
  line-height: $size - $bd * 2;
}

.wd {
  position: relative;
  @include make-size($normal);
  border: $bd solid sandybrown;
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
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    border-left: 1px dashed rgba(255,0,0, .6);
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed rgba(255,0,0, .6);
  }
}
</style>