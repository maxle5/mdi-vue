
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 18H4V8H20V18M12 6L10 4H4C2.9 4 2 4.89 2 6V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 6.9 21.11 6 20 6H12M11 14V12H15V9L19 13L15 17V14H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFolderMoveOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
