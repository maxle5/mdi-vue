
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19M17,12L12,7V10H8V14H12V17L17,12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowRightBoldBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
