
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M7 19H5V5H7V19M11 5H9V19H11V5M15 5H13V19H15V5M19 5H17V19H19V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTallyMark4",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
