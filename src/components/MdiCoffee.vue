
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCoffee",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
