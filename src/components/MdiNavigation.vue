
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNavigation",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
