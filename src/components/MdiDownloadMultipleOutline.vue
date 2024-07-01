
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M12 14L19 7H15V1H9V7H5L12 14M12 11.17L9.83 9H11V3H13V9H14.17L12 11.17M5 16V18H19V16H5M5 22V20H19V22H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDownloadMultipleOutline",
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
