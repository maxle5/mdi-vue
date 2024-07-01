
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlert",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
