
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21 15V9H15V3L12 0L9 3V5H3V15H21M19 13H17V11H19V13M11 5V3H13V5H11M11 9V7H13V9H11M11 13V11H13V13H11M7 9H5V7H7V9M7 13H5V11H7V13M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCitySwitch",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
