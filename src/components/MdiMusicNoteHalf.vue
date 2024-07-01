
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M16 3H14V13.56A3.96 3.96 0 0 0 12 13A4 4 0 1 0 16 17V3M12 19A2 2 0 1 1 14 17A2 2 0 0 1 12 19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicNoteHalf",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
      computed: {
        viewBox() {
          return `0 0 ${this.size} ${this.size}`;
        }
      }
  })
</script>
