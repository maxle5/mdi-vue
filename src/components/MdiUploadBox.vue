
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M5 3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3M16 17V15H8V17H16M16 11L12 7L8 11H10.5V14H13.5V11H16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiUploadBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
