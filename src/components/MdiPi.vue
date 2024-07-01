
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M4,5V7H6V19H8V7H14V16A3,3 0 0,0 17,19A3,3 0 0,0 20,16H18A1,1 0 0,1 17,17A1,1 0 0,1 16,16V7H18V5" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPi",
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
