
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M8,11H11V21H13V11H16L12,7L8,11M4,3V5H20V3H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatVerticalAlignTop",
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
