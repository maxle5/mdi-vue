
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3.5,19L8.34,12L3.5,5H14.5C15.17,5 15.72,5.3 16.13,5.86L20.5,12L16.13,18.14C15.72,18.7 15.17,19 14.5,19H3.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLabelVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
