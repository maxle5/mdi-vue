
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 15V17H21V19H19V17H18V19H16V17H11V9H5L3 11H2V5H3L5 7H13V15H16V13H18V15H19V13H21V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRelationManyToOnlyOne",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
