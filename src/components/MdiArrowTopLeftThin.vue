
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12.07 5L9.24 7.83L19 17.59L17.58 19L7.82 9.25L5 12.07V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopLeftThin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
