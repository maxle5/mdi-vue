
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.5 21H6V17H13.5C15.43 17 17 15.43 17 13.5S15.43 10 13.5 10H11V14L4 8L11 2V6H13.5C17.64 6 21 9.36 21 13.5S17.64 21 13.5 21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowULeftTopBold",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
