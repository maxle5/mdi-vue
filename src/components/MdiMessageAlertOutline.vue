
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,10H11V6H13V10M13,12H11V14H13V12M22,4V16A2,2 0 0,1 20,18H6L2,22V4A2,2 0 0,1 4,2H20A2,2 0 0,1 22,4M20,4H4V17.2L5.2,16H20V4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMessageAlertOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
