
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 12A10 10 0 0 0 15 21.54A10 10 0 0 1 15 2.46A10 10 0 0 0 2 12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMoonWaningCrescent",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
