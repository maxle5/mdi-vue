
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,21H9V3H15V21M11,19H13V5H11V19M8,21H2V11H8V21M4,19H6V13H4V19M22,21H16V8H22V21M18,19H20V10H18V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEqualizerOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
