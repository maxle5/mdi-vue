
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20.23,15.21C18.77,13.75 14.97,10.2 12.77,11.27L4.5,3L3,4.5L11.28,12.79C10.3,15 13.88,18.62 15.35,20.08C17.11,21.84 18.26,20.92 19.61,19.57C21.1,18.08 21.61,16.61 20.23,15.21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiOar",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
