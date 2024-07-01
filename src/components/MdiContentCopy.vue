
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiContentCopy",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
