
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 7V9H7V7H2M12 9V11H9V13H12V15L15 12L12 9M17 9V15H22V9H17M2 11V13H7V11H2M2 15V17H7V15H2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSetMerge",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
