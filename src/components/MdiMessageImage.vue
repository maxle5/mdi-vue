
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,14L8.5,9.5L11,12.5L14.5,8L19,14M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMessageImage",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
