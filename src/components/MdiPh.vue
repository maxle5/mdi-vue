
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13 7V17H15V13H17V17H19V7H17V11H15V7H13M11 15V13C11 11.9 10.11 11 9 11H5V21H7V17H9C10.11 17 11 16.11 11 15M9 15H7V13H9V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPh",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
