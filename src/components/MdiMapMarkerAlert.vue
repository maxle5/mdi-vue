
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12 2C15.9 2 19 5.1 19 9C19 14.2 12 22 12 22S5 14.2 5 9C5 5.1 8.1 2 12 2M11 6V12H13V6H11M11 14V16H13V14H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMapMarkerAlert",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
