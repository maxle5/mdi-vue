
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,17L9.5,11L13,15.5L15.5,12.5L19,17M20,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8A2,2 0 0,0 20,6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFolderImage",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
