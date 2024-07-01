
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,7H11V14H3V5H1V20H3V17H21V20H23V11A4,4 0 0,0 19,7M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBed",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
