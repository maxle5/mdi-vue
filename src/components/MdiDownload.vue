
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDownload",
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
