
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiForum",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
