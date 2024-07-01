
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 12H4V17H20V12H22V17A2 2 0 0 1 20 19H4A2 2 0 0 1 2 17M13 12H11V14H13M13 4H11V10H13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrayAlert",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
