
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 3V13.56C13.41 13.21 12.73 13 12 13C9.79 13 8 14.79 8 17S9.79 21 12 21 16 19.21 16 17V3H14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicNoteQuarter",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
