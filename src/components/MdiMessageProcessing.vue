
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMessageProcessing",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
