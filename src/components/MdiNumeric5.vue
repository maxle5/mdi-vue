
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V13H13V15H9V17H13A2,2 0 0,0 15,15V13A2,2 0 0,0 13,11H11V9H15V7H9Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric5",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
