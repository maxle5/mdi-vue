
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSkipForward",
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
