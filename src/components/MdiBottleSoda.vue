
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15 11V20A2 2 0 0 1 13 22H11A2 2 0 0 1 9 20V11A2 2 0 0 1 9.6 9.58C11.1 7.89 11 4 11 4H10V2H14V4H13S12.9 7.89 14.4 9.58A2 2 0 0 1 15 11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBottleSoda",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
