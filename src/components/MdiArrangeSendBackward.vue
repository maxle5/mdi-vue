
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2,2H16V16H2V2M22,8V22H8V18H18V8H22M4,4V14H14V4H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrangeSendBackward",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
