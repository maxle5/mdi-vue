
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5 7H11V9H7V11H10V13H7V17H5V7M13 7H19V9H15V11H17C18.11 11 19 11.9 19 13V15C19 16.11 18.11 17 17 17H13V15H17V13H13V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiKeyboardF5",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
