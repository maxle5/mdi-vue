
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiReply",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
