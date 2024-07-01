
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M1,21H23L12,2" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriangle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
