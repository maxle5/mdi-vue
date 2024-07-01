
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9 9V15H15V9H9M11 11H13V13H11V11M15 18V20H23V18H15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVectorPointMinus",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
