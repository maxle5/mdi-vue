
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,4V6H18V18H15V20H20V4M4,4V20H9V18H6V6H9V4H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCodeBrackets",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
