
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTextBox",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
