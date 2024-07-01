
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M12 22L1 3H23M12 18L19.53 5H4.47" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTriangleDownOutline",
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
