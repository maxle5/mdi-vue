
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16.67,4C17.4,4 18,4.6 18,5.33V20.67A1.33,1.33 0 0,1 16.67,22H7.33C6.6,22 6,21.4 6,20.67V5.33A1.33,1.33 0 0,1 7.33,4H9V2H15V4H16.67M8,12V14H16V12" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBatteryMinusVariant",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
