
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M3 5H21V9H3V5M3 10H21V14H3V10M3 15H21V19H3V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewSequential",
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
