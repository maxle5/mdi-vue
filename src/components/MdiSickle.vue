
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19.3 7.2C17.5 4.7 14.9 3 12 2C26.2 10.5 15.4 22.9 8.5 15.5L5.9 16L2.5 19.4C1.9 20 1.9 21 2.5 21.5C3.1 22.1 4.1 22.1 4.6 21.5L7.8 18.3C15.3 24.3 25 15 19.3 7.2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSickle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
