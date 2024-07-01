
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDockRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
