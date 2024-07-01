
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowCollapse",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
