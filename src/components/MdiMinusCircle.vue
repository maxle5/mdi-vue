
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMinusCircle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
