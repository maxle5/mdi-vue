
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M21 12C19 12 18 9 15 9S12 11 12 11 12 9 9 9 5 12 3 12C2 12 1 11 1 11S2 16 6 16C11 16 12 13 12 13S13 16 18 16C22 16 23 11 23 11S22 12 21 12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMustache",
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
