
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiShield",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
