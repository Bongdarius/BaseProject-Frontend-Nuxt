<template>
  <div class="spinner-container">
    <!-- Spinner shown while loading -->
    <div v-if="loading" class="spinner" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    if (!authStore.isAuthenticated) {
      // User is not authenticated, redirect to login page
      navigateTo('/login');
    }
    else {
      // User is authenticated, redirect to main content page
      navigateTo('/main');
    }
    loading.value = false; // Stop spinner once navigation decision is made
  }, 1000); // Simulate a delay for demonstration purposes
});
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
