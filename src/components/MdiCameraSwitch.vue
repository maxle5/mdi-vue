
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,15.5V13H9V15.5L5.5,12L9,8.5V11H15V8.5L18.5,12M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCameraSwitch",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
