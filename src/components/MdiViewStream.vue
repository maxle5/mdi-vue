
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,5V11H21V5M4,18H21V12H4V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewStream",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
