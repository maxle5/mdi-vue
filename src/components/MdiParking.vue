
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.2,11H10V7H13.2A2,2 0 0,1 15.2,9A2,2 0 0,1 13.2,11M13,3H6V21H10V15H13A6,6 0 0,0 19,9C19,5.68 16.31,3 13,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiParking",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
