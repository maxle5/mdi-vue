
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.5 21C9.36 21 6 17.64 6 13.5V11H2L8 4L14 11H10V13.5C10 15.43 11.57 17 13.5 17S17 15.43 17 13.5V6H21V13.5C21 17.64 17.64 21 13.5 21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowUUpLeftBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
