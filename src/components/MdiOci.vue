
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 2V22H22V2M19.12 19.03H4.87V5H19.13V19.03M14.83 10.71H17.69V17.59H14.83M14.83 6.41H17.69V9.27H14.83M6.3 6.41V17.59H13.4V14.72H9.17V9.28H13.4V6.41Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiOci",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
