
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20,22H22V2H20V11H5.83L11.33,5.5L9.92,4.08L2,12L9.92,19.92L11.33,18.5L5.83,13H20V22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowExpandLeft",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
