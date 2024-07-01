
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 3V13.55A4 4 0 1 0 14 17V7H18V3M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicNoteOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
