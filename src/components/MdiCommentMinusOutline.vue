
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16 11H8V9H16V11M22 4V16C22 17.11 21.11 18 20 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4C2 2.89 2.9 2 4 2H20C21.11 2 22 2.9 22 4M20 4H4V16H10V19.08L13.08 16H20V4" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCommentMinusOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
