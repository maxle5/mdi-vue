
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 21H17V13.5C17 11.57 15.43 10 13.5 10H11V14L4 8L11 2V6H13.5C17.64 6 21 9.36 21 13.5V21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowLeftTopBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
