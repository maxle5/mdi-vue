
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 2V22H7.6V7.6H14.8V2H2M9.2 9.2V22H14.8V9.2H9.2M16.4 2V22H22V2H16.4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiManjaro",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
