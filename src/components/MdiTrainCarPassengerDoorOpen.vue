
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 7H3C1.9 7 1 7.9 1 9V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V9C23 7.9 22.11 7 21 7M8 12H3V9H8V12M14 16H10V9H14V16M21 12H16V9H21V12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrainCarPassengerDoorOpen",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
