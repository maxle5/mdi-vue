
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17 4V6H3V4H6.5L7.5 3H12.5L13.5 4H17M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M19 15H21V17H19V15M19 7H21V13H19V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDeleteAlert",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
