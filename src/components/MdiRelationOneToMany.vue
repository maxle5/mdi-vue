
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M22 13V19H21L19 17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H19L21 13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRelationOneToMany",
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
