
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFilmstrip",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
