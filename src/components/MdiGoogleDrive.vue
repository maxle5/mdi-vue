
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7.71,3.5L1.15,15L4.58,21L11.13,9.5M9.73,15L6.3,21H19.42L22.85,15M22.28,14L15.42,2H8.58L8.57,2L15.43,14H22.28Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGoogleDrive",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
