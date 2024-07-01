
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewDashboard",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
