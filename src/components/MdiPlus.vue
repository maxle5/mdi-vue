
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
