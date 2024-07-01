
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12.07 19L9.24 16.18L19 6.42L17.58 5L7.82 14.76L5 11.94V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowBottomLeftThin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
