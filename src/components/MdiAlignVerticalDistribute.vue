
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 2V4H2V2H22M7 10.5V13.5H17V10.5H7M2 20V22H22V20H2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlignVerticalDistribute",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
