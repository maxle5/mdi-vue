
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 3V13.55A4 4 0 1 0 14 17V7H18V3M16.5 20A1.5 1.5 0 1 1 18 18.5A1.5 1.5 0 0 1 16.5 20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicNoteEighthDotted",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
