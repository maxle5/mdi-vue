
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 8V16L17 17L13.91 11.5C13.65 11.04 12.92 11.27 13 11.81L14 21L4 17L5.15 8.94C5.64 5.53 8.56 3 12 3H20L18.42 5.37C19.36 5.88 20 6.86 20 8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHorseVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
