
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 9V20H20V11H4V20H2V9L12 5L22 9M19 12H5V14H19V12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiGarageOpenVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
