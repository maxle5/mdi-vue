
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,21H6V18H3M8,21H11V14H8M13,21H16V9H13M18,21H21V3H18V21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSignal",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
