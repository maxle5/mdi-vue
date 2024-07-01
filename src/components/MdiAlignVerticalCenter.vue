
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 11H17V6H14V11H10V3H7V11H1.8V13H7V21H10V13H14V18H17V13H22V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlignVerticalCenter",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
