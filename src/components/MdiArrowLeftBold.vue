
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowLeftBold",
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
