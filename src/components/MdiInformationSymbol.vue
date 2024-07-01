
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11 9H13V7H11V9M11 17H13V11H11V17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiInformationSymbol",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
