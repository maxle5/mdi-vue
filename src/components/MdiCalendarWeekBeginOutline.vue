
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCalendarWeekBeginOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
