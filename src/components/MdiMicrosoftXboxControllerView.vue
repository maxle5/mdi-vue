
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H15V9H8V14H6V7M9,10H18V17H9V10M11,12V15H16V12H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMicrosoftXboxControllerView",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
