
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,22L3,12L13,2V8H21V16H13V22M6,12L11,17V14H19V10H11V7L6,12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowLeftBoldOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
