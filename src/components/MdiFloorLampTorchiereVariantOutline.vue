
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.97 4L12.68 7H11.32L10.03 4H13.97M17 2H7L10 9H14L17 2M15.92 22L13 15V22H11V15L8.08 22H5.92L10.92 10H13.08L18.08 22H15.92Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFloorLampTorchiereVariantOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
