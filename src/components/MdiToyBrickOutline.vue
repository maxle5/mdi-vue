
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiToyBrickOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
