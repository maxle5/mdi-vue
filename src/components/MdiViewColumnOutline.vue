
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 5V18H21V5H4M14 7V16H11V7H14M6 7H9V16H6V7M19 16H16V7H19V16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewColumnOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
