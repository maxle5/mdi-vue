<script setup lang="ts">
import { ref } from 'vue';
import { FileDocument, CloudUploadOutline } from '@maxle5/mdi-vue';

const size = ref(64);
</script>

<template>
  <file-document class="blue" :size="64" />
  <cloud-upload-outline style="color: red" :size="size" />
</template>

<style scoped>
.blue{
  color: blue;
}
</style>