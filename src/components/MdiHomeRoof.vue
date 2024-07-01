
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19 16H22L12 7L2 16H5L12 9.69L19 16M7 8.81V7H4V11.5L7 8.81Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeRoof",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
