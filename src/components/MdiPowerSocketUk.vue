
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4 2A2 2 0 0 0 2 4V20A2 2 0 0 0 4 22H20A2 2 0 0 0 22 20V4A2 2 0 0 0 20 2H4M4 4H20V20H4V4M11 7V11H13V7H11M6 14.75V17H9.5V14.75H6M14.5 14.75V17H18V14.75H14.5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPowerSocketUk",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
