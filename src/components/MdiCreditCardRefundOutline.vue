
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18,11H6A2,2 0 0,0 4,13V21A2,2 0 0,0 6,23H18A2,2 0 0,0 20,21V13A2,2 0 0,0 18,11M18,21H6V17H18V21M18,15H6V13H18V15M17,5V10H15.5V6.5H9.88L12.3,8.93L11.24,10L7,5.75L11.24,1.5L12.3,2.57L9.88,5H17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCreditCardRefundOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
