
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,20V4H15.03V20H13M10,20V4H12.03V20H10M5,8L9.03,12L5,16V13H2V11H5V8M20,16L16,12L20,8V11H23V13H20V16Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowCollapseHorizontal",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
