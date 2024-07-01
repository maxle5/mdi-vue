
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowDown",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
