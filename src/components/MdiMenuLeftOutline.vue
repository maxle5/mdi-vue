
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,18H13.5L7.5,12L13.5,6H15V18M10.33,12L13,14.67V9.33L10.33,12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMenuLeftOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
