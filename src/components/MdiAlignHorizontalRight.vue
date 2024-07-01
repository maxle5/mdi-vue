
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M20 2H22V22H20V2M2 10H18V7H2V10M8 17H18V14H8V17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlignHorizontalRight",
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
