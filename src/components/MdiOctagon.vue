
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiOctagon",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
