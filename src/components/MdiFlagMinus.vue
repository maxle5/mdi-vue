
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12.4,5H18V15H11L10.6,13H5V20H3V3H12L12.4,5M14,17H22V19H14V17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlagMinus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
