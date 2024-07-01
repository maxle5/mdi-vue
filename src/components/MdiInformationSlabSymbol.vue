
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M13 9H11V7H13V9M14 15V17H10V15H11V13H10V11H13V15H14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiInformationSlabSymbol",
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
