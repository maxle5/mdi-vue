
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9 19H7V5H9V19M13 5H11V19H13V5M17 5H15V19H17V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTallyMark3",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
