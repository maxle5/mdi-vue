
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,13H11V15H6M13,13H18V15H13M13,9H18V11H13M6,9H11V11H6M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCodeEqual",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
