
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRepeat",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
