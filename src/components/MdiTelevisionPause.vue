
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3 3C1.89 3 1 3.89 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.89 22.1 3 21 3M3 5H21V17H3M9 8V14H11V8M13 8V14H15V8" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTelevisionPause",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
