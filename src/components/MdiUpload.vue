
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiUpload",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
