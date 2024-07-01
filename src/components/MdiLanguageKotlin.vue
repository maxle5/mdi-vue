
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 2H22L12 12L22 22H2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLanguageKotlin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
