
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
