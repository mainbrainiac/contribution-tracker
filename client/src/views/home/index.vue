<script setup lang="ts">
import Navbar from '@/shared/components/Navbar.vue';
import MessageBox from '../../shared/components/MessageBox.vue';
</script>

<template>
  <div class="home">
    <MessageBox :size="100" color="white" background-color="#8b5cf6">
      <p>Urgent appeal: Find out how you can help people and charities in Ukraine. <a><strong>Donate  Now</strong></a></p>
    </MessageBox>
    <Navbar />
  </div>
</template>
