
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M13,18.65L18.65,13L19,19L13,18.65Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPanBottomRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
