
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16,3V5H8V3H16M16,7V9H8V7H16M16,11V13H8V11H16M5,15H19L12,22L5,15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTransferDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
