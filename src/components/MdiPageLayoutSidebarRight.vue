
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M14,8V16H18V8H14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPageLayoutSidebarRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
