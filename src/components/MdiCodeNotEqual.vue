
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,15H8V17H6M11,13H18V15H11M11,9H18V11H11M6,7H8V13H6M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCodeNotEqual",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
