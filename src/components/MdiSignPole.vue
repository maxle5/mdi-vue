
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11 3L12 2L13 3V20C14.11 20 15 20.9 15 22H9C9 20.9 9.9 20 11 20V3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSignPole",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
