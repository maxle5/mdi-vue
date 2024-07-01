
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9 6.19L7 4.19V2H17L13.5 9H17L15.18 12.37L11.43 8.62L13.76 4H9V6.19M19 18.73L17.73 20L13.41 15.68L10 22V14H7V9.27L2 4.27L3.27 3L19 18.73Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlashOffOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
