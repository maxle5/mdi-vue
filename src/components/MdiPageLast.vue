
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPageLast",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
