
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.09 20H5V6H3V20A2 2 0 0 0 5 22H13.81A5.5 5.5 0 0 1 13.09 20M19 2H14V7L12 5.5L10 7V2H9A2 2 0 0 0 7 4V16A2 2 0 0 0 9 18H13.09A6 6 0 0 1 21 13.34V4A2 2 0 0 0 19 2M20 15V18H23V20H20V23H18V20H15V18H18V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBookPlusMultiple",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
