
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21.03,3L18,20.31C17.83,21.27 17,22 16,22H8C7,22 6.17,21.27 6,20.31L2.97,3H21.03M5.36,5L8,20H16L18.64,5H5.36M9,18V14H13V18H9M13,13.18L9.82,10L13,6.82L16.18,10L13,13.18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDeleteVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
