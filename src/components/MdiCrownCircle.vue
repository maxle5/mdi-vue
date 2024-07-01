
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M16 15.44C16 15.78 15.78 16 15.44 16H8.56C8.22 16 8 15.78 8 15.44V15H16V15.44M16 14H8L7 8L10 10L12 7L14 10L17 8L16 14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCrownCircle",
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
