
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17H9V7M11,9V15H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaDCircleOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
