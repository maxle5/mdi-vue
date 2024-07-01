
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V17H11V12L13,17H15V7H13V12L11,7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaN",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
