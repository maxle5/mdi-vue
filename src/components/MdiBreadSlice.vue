
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M8,18H12V14H8V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBreadSlice",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
