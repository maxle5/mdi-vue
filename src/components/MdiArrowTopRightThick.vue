
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowTopRightThick",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
