
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 22H2V2H4V22M22 2H20V22H22V2M13.5 7H10.5V17H13.5V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlignHorizontalDistribute",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
