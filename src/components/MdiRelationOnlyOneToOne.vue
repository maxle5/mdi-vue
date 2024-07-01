
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 15V17H19V19H17V17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H17V13H19V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRelationOnlyOneToOne",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
