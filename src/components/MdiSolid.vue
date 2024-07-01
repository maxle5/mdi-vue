
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M0,0H24V24H0" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSolid",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
