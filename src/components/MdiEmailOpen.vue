
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEmailOpen",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
