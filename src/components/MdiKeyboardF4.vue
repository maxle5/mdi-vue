
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5 7H11V9H7V11H10V13H7V17H5V7M13 7H15V11H17V7H19V17H17V13H13V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiKeyboardF4",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
