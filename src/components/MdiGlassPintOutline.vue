
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 2L6 22H17L19 2H4M6.2 4H16.8L15.2 20H7.8L6.2 4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGlassPintOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
