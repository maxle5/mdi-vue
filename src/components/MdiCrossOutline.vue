
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15.5,6V1H8.5V6H3V13H8.5V23H15.5V13H21V6H15.5M19,11H13.5V21H10.5V11H5V8H10.5V3H13.5V8H19V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCrossOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
