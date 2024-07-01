
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M18 14H14V18H10V14H6V10H10V6H14V10H18" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHospital",
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
