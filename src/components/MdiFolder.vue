
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFolder",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
