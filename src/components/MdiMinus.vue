
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,13H5V11H19V13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMinus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
