
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 8C19.04 6.19 15.74 5 12 5S4.96 6.19 3 8H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V8H21M13 15V11H11V15H8V11H6V15H3V10H21V15H18V11H16V15H13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrainCarHopperFull",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
