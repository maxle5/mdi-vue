
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13 9H11V7H13V9M14 15V17H10V15H11V13H10V11H13V15H14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiInformationSlabSymbol",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
