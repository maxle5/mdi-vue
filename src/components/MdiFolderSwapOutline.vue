
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M18 13L15 10V12H9V10L6 13L9 16V14H15V16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFolderSwapOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
