
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7,2H9V22H7V2M19,9L11,14.6V3.4L19,9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlagTriangle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
