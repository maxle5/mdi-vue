
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M7,21H5V3H7V21M17,3V11H9V13H17V21H19V3H17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatTextWrappingClip",
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
