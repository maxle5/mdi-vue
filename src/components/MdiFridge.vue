
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,2H17A2,2 0 0,1 19,4V9H5V4A2,2 0 0,1 7,2M19,19A2,2 0 0,1 17,21V22H15V21H9V22H7V21A2,2 0 0,1 5,19V10H19V19M8,5V7H10V5H8M8,12V15H10V12H8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFridge",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
