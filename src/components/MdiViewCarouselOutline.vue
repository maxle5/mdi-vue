
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M2 6H6V17H2V6M7 19H17V4H7V19M9 6H15V17H9V6M18 6H22V17H18V6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewCarouselOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
