
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPentagon",
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
