
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,17V19H14A1,1 0 0,1 15,20H22V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H5V15.5C5,13.57 8.13,12 12,12C15.87,12 19,13.57 19,15.5V17H13M12,3A3.5,3.5 0 0,1 15.5,6.5A3.5,3.5 0 0,1 12,10A3.5,3.5 0 0,1 8.5,6.5A3.5,3.5 0 0,1 12,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAccountNetwork",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
