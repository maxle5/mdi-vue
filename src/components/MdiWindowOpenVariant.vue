
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 20V2H3V20H1V23H23V20M19 4V11H17V4M5 4H7V11H5M5 20V13H7V20M9 20V4H15V20M17 20V13H19V20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWindowOpenVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
