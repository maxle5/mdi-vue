
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M18,4L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4H18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMovie",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
