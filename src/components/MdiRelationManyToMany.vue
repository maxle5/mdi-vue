
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 13V19H21L19 17H11V9H5L3 11H2V5H3L5 7H13V15H19L21 13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRelationManyToMany",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
