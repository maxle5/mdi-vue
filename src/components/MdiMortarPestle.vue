
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 7L19 13L21 19V21H3V19L5 13L3 7V5H15.7L17.2 1L19.5 1.8L18.3 5H21V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMortarPestle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
