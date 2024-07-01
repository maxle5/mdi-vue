
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrashCan",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
