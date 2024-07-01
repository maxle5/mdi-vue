
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M18,6V17H22V6M2,17H6V6H2M7,19H17V4H7V19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewCarousel",
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
