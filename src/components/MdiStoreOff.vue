
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9.2 6L7.2 4H20V6H9.2M20 16.8V14H21V12L20 7H10.2L17.2 14H18V14.8L20 16.8M22.11 21.46L20.84 22.73L14 15.89V20H4V14H3V12L4 7H5.11L1.11 3L2.39 1.73L22.11 21.46M12 14H6V18H12V14Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStoreOff",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
