
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M13,7V15H11V14H9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaJ",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
