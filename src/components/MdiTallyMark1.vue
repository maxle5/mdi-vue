
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13 19H11V5H13V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTallyMark1",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
