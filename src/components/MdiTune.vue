
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTune",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
