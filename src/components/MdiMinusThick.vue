
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 14H4V10H20" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMinusThick",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
