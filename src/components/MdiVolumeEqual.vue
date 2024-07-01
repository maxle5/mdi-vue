
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M3 9H7L12 4V20L7 15H3V9M14 13H22V15H14M14 9H22V11H14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVolumeEqual",
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
