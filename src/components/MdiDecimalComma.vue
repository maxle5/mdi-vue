
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M10 7A3 3 0 0 1 13 10V13A3 3 0 0 1 7 13V10A3 3 0 0 1 10 7M10 9A1 1 0 0 0 9 10V13A1 1 0 0 0 11 13V10A1 1 0 0 0 10 9M17 7A3 3 0 0 1 20 10V13A3 3 0 0 1 14 13V10A3 3 0 0 1 17 7M17 9A1 1 0 0 0 16 10V13A1 1 0 0 0 18 13V10A1 1 0 0 0 17 9M5 14A1 1 0 0 0 4 15L5 18H6V15A1 1 0 0 0 5 14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDecimalComma",
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
