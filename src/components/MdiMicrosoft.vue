
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMicrosoft",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
