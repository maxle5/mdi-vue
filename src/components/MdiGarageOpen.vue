
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,20H17V11H7V20H5V9L12,5L19,9V20M8,12H16V14H8V12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGarageOpen",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
