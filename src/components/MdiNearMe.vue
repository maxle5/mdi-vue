
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,3L3,10.53V11.5L9.84,14.16L12.5,21H13.46L21,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNearMe",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
