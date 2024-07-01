
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M9.12,11.94V16.89H5.69V5.69H16.89V9.12H11.94L18.31,15.5L15.5,18.31L9.12,11.94Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopLeftThick",
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
