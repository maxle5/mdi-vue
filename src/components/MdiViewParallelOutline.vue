
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19 3H5V21H19V3M17 19H15V5H17V19M13 19H11V5H13V19M7 5H9V19H7V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewParallelOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
