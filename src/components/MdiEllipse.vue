
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,4C6.5,4 2,7.58 2,12C2,16.42 6.5,20 12,20C17.5,20 22,16.42 22,12C22,7.58 17.5,4 12,4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEllipse",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
