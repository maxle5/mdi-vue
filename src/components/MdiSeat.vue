
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSeat",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
