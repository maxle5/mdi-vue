
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWindowShutterOpen",
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
