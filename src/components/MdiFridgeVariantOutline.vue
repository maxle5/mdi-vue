
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17 2H7C5.9 2 5 2.9 5 4V19C5 20.11 5.9 21 7 21V22H9V21H15V22H17V21C18.11 21 19 20.11 19 19V4C19 2.9 18.11 2 17 2M7 19V14H10V10H7V4H11V19H7M17 19H13V4H17V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFridgeVariantOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
