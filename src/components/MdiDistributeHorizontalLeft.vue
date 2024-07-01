
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M21 7V17H16V22H14V2H16V7H21M5 2H3V22H5V19H10V5H5V2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDistributeHorizontalLeft",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
      computed: {
        viewBox() {
          return `0 0 ${this.size} ${this.size}`;
        }
      }
  })
</script>
