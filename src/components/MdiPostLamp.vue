
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14 3L13 1H11L10 3L5 6H7L8 14L10 16L10.5 17H9V23H15V17H13.5L14 16L16 14L17 6H19L14 3M14.16 13H9.84L9 6H15L14.16 13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPostLamp",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
