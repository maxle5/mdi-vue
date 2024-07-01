
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M17 17H7V15H17V17M8 14V11H10V14H8M11 14V11H13V14H11M14 14V11H16V14H14M17 10H7V8.5L12 6L17 8.5V10Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBankCircle",
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
