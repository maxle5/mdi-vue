
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M5 7H10V13H5V7M19 17H5V15H19V17M19 13H12V11H19V13M19 9H12V7H19V9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNewspaperVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
