
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewGrid",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
