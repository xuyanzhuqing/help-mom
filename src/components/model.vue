<template>
   <div class="modal" :class="{active: visible }">
    <div class="modal-container">
    <div class="modal-header">
      <span class="btn btn-clear float-right" aria-label="Close" @click="visible = false"></span>
      <div class="modal-title h5">Modal title</div>
    </div>
    <div class="modal-body">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</div>

</template>
<script setup>
defineProps({
    visible: Boolean
})
</script>
