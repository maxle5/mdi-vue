
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCellphoneArrowDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
