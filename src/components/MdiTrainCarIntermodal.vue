
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 15V11H3V15H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V15H21M16 14H8V13H16V14M21 5H3V10H21V5M16 8H8V7H16V8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrainCarIntermodal",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
