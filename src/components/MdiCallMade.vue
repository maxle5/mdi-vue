
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,5V7H15.59L4,18.59L5.41,20L17,8.41V15H19V5" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCallMade",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
