
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11.93 5L14.76 7.83L5 17.59L6.42 19L16.18 9.25L19 12.07V5H11.93Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopRightThin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
