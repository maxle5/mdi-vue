
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,3L2,12H5V20H19V12H22L12,3M11,8H15V10H11V16H13V12H15V16C15,17.11 14.1,18 13,18H11A2,2 0 0,1 9,16V10C9,8.89 9.9,8 11,8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeFloorG",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
