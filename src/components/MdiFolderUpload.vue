
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20M10.75,13H14V17H16V13H19.25L15,8.75" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFolderUpload",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
