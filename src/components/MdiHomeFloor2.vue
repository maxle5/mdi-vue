
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,3L2,12H5V20H19V12H22L12,3M9,8H13A2,2 0 0,1 15,10V12A2,2 0 0,1 13,14H11V16H15V18H9V14A2,2 0 0,1 11,12H13V10H9V8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeFloor2",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
