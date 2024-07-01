
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13.28 12H18V14H13V21H11V14H6V12H10.72L5 3H7.37L12 10.29L16.63 3H19L13.28 12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCurrencyCny",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
