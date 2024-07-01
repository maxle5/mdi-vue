
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M12 2L5 12L12 22L19 12M7.44 12L12 5.5L16.56 12L12 18.5" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCardsDiamondOutline",
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
