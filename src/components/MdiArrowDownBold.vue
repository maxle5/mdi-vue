
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowDownBold",
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
