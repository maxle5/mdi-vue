
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRepeatVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
