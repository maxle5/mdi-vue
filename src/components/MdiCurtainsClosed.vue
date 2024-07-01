
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M23 3H1V1H23V3M2 22H11V4H2V22M22 4H13V22H22V4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCurtainsClosed",
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
