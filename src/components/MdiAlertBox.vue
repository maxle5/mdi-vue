
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M13,13V7H11V13H13M13,17V15H11V17H13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlertBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
