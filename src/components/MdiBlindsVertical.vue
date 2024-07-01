
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M20 19V3H4V19H2V21H22V19H20M10 19V5H14V19H10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBlindsVertical",
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
