
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPublish",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
