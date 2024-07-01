
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 4H21V7H20L17.5 21H6.5L4 7H3V4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBucket",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
