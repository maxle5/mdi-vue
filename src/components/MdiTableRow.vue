
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22,14A2,2 0 0,1 20,16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8H20A2,2 0 0,1 22,10V14M4,14H8V10H4V14M10,14H14V10H10V14M16,14H20V10H16V14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTableRow",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
