
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15A3,3 0 0,1 1,12A3,3 0 0,1 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRayStartArrow",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
