
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLoading",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
