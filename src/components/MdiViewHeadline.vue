
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewHeadline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
