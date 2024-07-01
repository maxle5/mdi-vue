<script setup lang="ts">
import { ref } from 'vue';
import { MdiFileDocument, MdiCloudUploadOutline } from '@maxle5/mdi-vue';

const size = ref(64);
</script>

<template>
  <mdi-file-document class="blue" :size="64" />
  <mdi-cloud-upload-outline style="color: red" :size="size" />
</template>

<style scoped>
.blue{
  color: blue;
}
</style>