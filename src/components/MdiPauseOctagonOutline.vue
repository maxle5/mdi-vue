
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,16H13V8H15V16M11,16H9V8H11V16M15.73,3L21,8.27V15.73L15.73,21H8.27L3,15.73V8.27L8.27,3H15.73M14.9,5H9.1L5,9.1V14.9L9.1,19H14.9L19,14.9V9.1L14.9,5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPauseOctagonOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
