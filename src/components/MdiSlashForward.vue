
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7 21L14.9 3H17L9.1 21H7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSlashForward",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
