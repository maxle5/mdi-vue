
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M15,15H11V13H13A2,2 0 0,0 15,11V9C15,7.89 14.1,7 13,7H9V9H13V11H11A2,2 0 0,0 9,13V17H15M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric2BoxOutline",
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
