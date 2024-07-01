
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPlay",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
