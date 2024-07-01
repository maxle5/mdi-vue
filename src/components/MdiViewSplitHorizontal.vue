
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M3,5H21V7H3V5M3,11V9H21V11H3M3,19V13H21V19H3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewSplitHorizontal",
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
