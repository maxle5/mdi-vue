
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V9L15 3M19 19H5V5H14V10H19M17 14H7V12H17M14 17H7V15H14" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNoteTextOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
