
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11.93 19L14.76 16.18L5 6.42L6.42 5L16.18 14.76L19 11.94V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowBottomRightThin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
