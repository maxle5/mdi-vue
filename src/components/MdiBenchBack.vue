
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M4 5C3.45 5 3 5.45 3 6V10C3 10.55 3.45 11 4 11H5V13H1V15H3V19H5V15H19V19H21V15H23V13H19V11H20C20.55 11 21 10.55 21 10V6C21 5.45 20.55 5 20 5H4M17 11V13H7V11H17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBenchBack",
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
