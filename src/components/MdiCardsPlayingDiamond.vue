
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2M12 17L9 12L12 7L15 12L12 17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCardsPlayingDiamond",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
