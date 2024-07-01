
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewDay",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
