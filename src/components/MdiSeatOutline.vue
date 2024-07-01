
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,5V12H9V5H15M15,3H9A2,2 0 0,0 7,5V14H17V5A2,2 0 0,0 15,3M22,10H19V13H22V10M5,10H2V13H5V10M20,15H4V21H6V17H18V21H20V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSeatOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
