
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19 7H22L18 3L14 7H17V21H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSortDescending",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
