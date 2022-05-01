<script setup lang="ts">
defineProps<{
  backgroundColor: string;
  color: string;
  size: number;
}>()
</script>


<template>
  <div
    class="message-box" 
    :style="{ backgroundColor, color, width: size + '%' }">
    <slot/>
  </div>
</template>

<style scoped>
.message-box {
  text-align: center;
  padding: 20px 0;
}
</style>