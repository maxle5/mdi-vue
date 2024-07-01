
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M3 4V11H14.23L22 4H19L13.46 9H5V4H3M3 13V20H5V15H13.46L19 20H22L14.23 13H3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphabetAurebesh",
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
