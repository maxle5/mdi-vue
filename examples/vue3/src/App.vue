<script setup lang="ts">
import { ref } from 'vue';
import { MdiFileDocument, MdiCloudUploadOutline, MdiAbacus, MdiCar2Plus } from '@maxle5/mdi-vue';

const size = ref(64);
</script>

<template>
  <mdi-file-document class="blue" :size="64" />
  <mdi-cloud-upload-outline style="color: red" :size="size" />
  <mdi-abacus :size="size" />
  <mdi-car2-plus :size="size * 2" />
</template>

<style scoped>
.blue{
  color: blue;
}
</style>