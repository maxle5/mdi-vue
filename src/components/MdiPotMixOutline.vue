
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14.6 9L18 3.1L19.7 4.1L16.9 9H14.6M16.3 10H21V12H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V12H3V10H16.3M17 12H7V19H17V12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPotMixOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
