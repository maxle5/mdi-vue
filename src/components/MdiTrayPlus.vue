
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17M11 5H13V8H16V10H13V13H11V10H8V8H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrayPlus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
