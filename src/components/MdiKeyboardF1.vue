
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6 7H12V9H8V11H11V13H8V17H6V7M14 7H18V17H16V9H14V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiKeyboardF1",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
