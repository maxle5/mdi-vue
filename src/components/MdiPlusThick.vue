
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlusThick",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
