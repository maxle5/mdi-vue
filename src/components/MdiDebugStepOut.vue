
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,22A2,2 0 0,1 10,20A2,2 0 0,1 12,18A2,2 0 0,1 14,20A2,2 0 0,1 12,22M13,16H11V6L6.5,10.5L5.08,9.08L12,2.16L18.92,9.08L17.5,10.5L13,6V16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDebugStepOut",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
