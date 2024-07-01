
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M22 17V19H14V17H22M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20C12.12 20 12.23 20 12.34 20C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWaterMinus",
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
