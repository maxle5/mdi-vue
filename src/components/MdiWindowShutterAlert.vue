
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 4H20V8H18V20H16V8H6V20H4V8H2V4M7 9H15V11H7V9M7 12H15V14H7V12M20 19V17H22V19H20M20 15V10H22V15H20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWindowShutterAlert",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
