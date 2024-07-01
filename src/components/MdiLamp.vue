
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8,2H16L20,14H4L8,2M11,15H13V20H18V22H6V20H11V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiLamp",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
