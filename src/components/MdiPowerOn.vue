
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,3H13V21H11V3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPowerOn",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
