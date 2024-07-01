
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M9 7H11L12 9.5L13 7H15L13 12L15 17H13L12 14.5L11 17H9L11 12L9 7M16 7H18V15H22V17H16V7M2 7H4L5 9.5L6 7H8L6 12L8 17H6L5 14.5L4 17H2L4 12L2 7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSizeXxl",
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
