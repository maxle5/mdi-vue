
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5M16 11L13 14L16 17V15H18V13H16V11M8 13H6V15H8V17L11 14L8 11V13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCalendarCollapseHorizontalOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
