
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8 5H4V2H8V5M4 22H8V19H4V22M14 2H10V5H14V2M10 22H14V19H10V22M16 2V5H20V2H16M17 11H13V7H11V11H7V7H5V17H7V13H11V17H13V13H19V7H17V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCarShiftPattern",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
