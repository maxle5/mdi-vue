
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.54 22H7.33C6.6 22 6 21.4 6 20.67V5.33C6 4.6 6.6 4 7.33 4H9V2H15V4H16.67C17.4 4 18 4.6 18 5.33V12C14.69 12 12 14.69 12 18C12 19.54 12.58 20.94 13.54 22M14.94 18.5L17.94 21.5L20.94 18.5H18.94V14.5H16.94V18.5H14.94" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBatteryArrowDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
