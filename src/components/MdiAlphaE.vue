
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V17H15V15H11V13H15V11H11V9H15V7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaE",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
