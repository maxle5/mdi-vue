
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,21H21V13H19V17.59L6.41,5H11V3H3V11H5V6.41L17.59,19H13V21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopLeftBottomRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
