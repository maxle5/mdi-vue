
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21M12,7L7,12H10V16H14V12H17L12,7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpBoldBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
