
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatHorizontalAlignRight",
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
