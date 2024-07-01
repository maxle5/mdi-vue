
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M20,20.72L18.73,22L16.78,20.05L12,18L5,21V8.27L2,5.27L3.28,4L20,20.72M19,17.16V5C19,3.89 18.1,3 17,3H7C6.41,3 5.89,3.27 5.5,3.68L19,17.16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBookmarkOff",
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
