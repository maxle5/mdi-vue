
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewModule",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
