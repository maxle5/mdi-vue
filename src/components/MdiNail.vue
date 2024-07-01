
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.5,5V16L12,22L10.5,16V5H13.5M17,2H7V4H17V2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNail",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
