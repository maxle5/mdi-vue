
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUpBoldOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
