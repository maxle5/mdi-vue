
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20,10V14H11L14.5,17.5L12.08,19.92L4.16,12L12.08,4.08L14.5,6.5L11,10H20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowLeftThick",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
