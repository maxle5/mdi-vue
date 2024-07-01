
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlagOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
