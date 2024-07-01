
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFolderUploadOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
