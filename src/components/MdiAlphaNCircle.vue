
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V17H11V12L13,17H15V7H13V12L11,7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaNCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
