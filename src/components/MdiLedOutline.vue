
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,6A4,4 0 0,0 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10A4,4 0 0,0 12,6M12,8A2,2 0 0,1 14,10V15H10V10A2,2 0 0,1 12,8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLedOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
