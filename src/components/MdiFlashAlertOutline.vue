
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M5,2H15L11.5,9H15L8,22V14H5V2M7,4V12H10V14.66L12,11H8.24L11.76,4M17,15H19V17H17V15M17,7H19V13H17V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlashAlertOutline",
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
