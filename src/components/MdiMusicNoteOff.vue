
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4.27 3L3 4.27L12 13.27V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V15.27L19.73 21L21 19.73L4.27 3M14 7H18V3H12V8.18L14 10.18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMusicNoteOff",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
