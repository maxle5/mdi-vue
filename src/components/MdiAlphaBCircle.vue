
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M15,10.5V9A2,2 0 0,0 13,7H9V17H13A2,2 0 0,0 15,15V13.5C15,12.7 14.3,12 13.5,12C14.3,12 15,11.3 15,10.5M13,15H11V13H13V15M13,11H11V9H13V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaBCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
