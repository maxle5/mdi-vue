
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,3V21H11V3H9M5,3V21H7V3H5M13,3V21H15V3H13M19,3H17V21H19V3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiReorderVertical",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
