
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiInbox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
