
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,9H13V7H11M11,5H13V3H11M11,13H13V11H11M15,5H17V3H15M15,21H17V19H15M19,21H21V3H19M15,13H17V11H15M11,17H13V15H11M3,9H5V7H3M3,17H5V15H3M3,13H5V11H3M11,21H13V19H11M3,21H5V19H3M7,13H9V11H7M7,5H9V3H7M3,5H5V3H3M7,21H9V19H7V21Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBorderRight",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
