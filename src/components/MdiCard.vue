
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCard",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
