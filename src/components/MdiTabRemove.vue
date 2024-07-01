
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M7.46,11.88L8.88,10.46L11,12.59L13.12,10.46L14.54,11.88L12.41,14L14.54,16.12L13.12,17.54L11,15.41L8.88,17.54L7.46,16.12L9.59,14L7.46,11.88M3,3H21A2,2 0 0,1 23,5V19A2,2 0 0,1 21,21H3A2,2 0 0,1 1,19V5A2,2 0 0,1 3,3M3,5V19H21V9H13V5H3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTabRemove",
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
