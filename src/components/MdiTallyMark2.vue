
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11 19H9V5H11V19M15 5H13V19H15V5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTallyMark2",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
