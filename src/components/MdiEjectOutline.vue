
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M5,17H19V19H5V17M12,5L5.33,15H18.67L12,5M12,8.6L14.93,13H9.07L12,8.6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEjectOutline",
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
