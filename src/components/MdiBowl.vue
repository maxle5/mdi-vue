
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22 15C22 18.9 18.9 22 15 22H9C5.1 22 2 18.9 2 15V12H22V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBowl",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
