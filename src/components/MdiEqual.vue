
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,10H5V8H19V10M19,16H5V14H19V16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEqual",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
