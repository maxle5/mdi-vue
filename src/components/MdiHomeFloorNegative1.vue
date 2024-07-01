
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,3L2,12H5V20H19V12H22L12,3M11,15H7V13H11V15M15,18H13V10H11V8H15V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeFloorNegative1",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
