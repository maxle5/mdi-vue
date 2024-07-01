
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2M20 17.2L18.8 16H4V4H20V17.2Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMessageReplyOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
