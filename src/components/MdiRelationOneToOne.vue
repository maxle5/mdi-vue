
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 15V17H19V19H17V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H17V13H19V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRelationOneToOne",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
