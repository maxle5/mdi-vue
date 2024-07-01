
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M21 1L1 21H17V19H16V8.8L19 5.8V9H21M19 11V17H21V11M19 19V21H21V19" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNetworkStrength3Alert",
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
