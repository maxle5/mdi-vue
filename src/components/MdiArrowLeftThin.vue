
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowLeftThin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
