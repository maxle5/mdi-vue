
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,2A9,9 0 0,1 21,11H13V19A3,3 0 0,1 10,22A3,3 0 0,1 7,19V18H9V19A1,1 0 0,0 10,20A1,1 0 0,0 11,19V11H3A9,9 0 0,1 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiUmbrella",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
