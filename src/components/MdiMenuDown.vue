
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,10L12,15L17,10H7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
