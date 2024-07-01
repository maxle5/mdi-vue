
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,7V13H13V17H15V7H13V11H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric4Circle",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
