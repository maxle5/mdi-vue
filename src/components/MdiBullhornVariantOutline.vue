
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 2V4L4 8V6H2V18H4V16L6 16.5V18.5C6 20.4 7.6 22 9.5 22S13 20.4 13 18.5V18.3L20 20V22H22V2H20M11 18.5C11 19.3 10.3 20 9.5 20S8 19.3 8 18.5V17L11 17.8V18.5M20 18L4 14V10L20 6V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBullhornVariantOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
