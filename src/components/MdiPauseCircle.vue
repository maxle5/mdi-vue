
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPauseCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
