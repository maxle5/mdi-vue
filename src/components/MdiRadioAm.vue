
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,7A2,2 0 0,0 3,9V17H5V13H7V17H9V9A2,2 0 0,0 7,7H5M5,9H7V11H5V9M13,7A2,2 0 0,0 11,9V17H13V9H15V16H17V9H19V17H21V9A2,2 0 0,0 19,7H13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRadioAm",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
