
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7.03 13.92H11.03V5L13.04 4.97V13.92H17.03L12.03 18.92Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowDownThin",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
