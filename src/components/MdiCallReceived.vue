
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M20,5.41L18.59,4L7,15.59V9H5V19H15V17H8.41" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCallReceived",
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
