
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M21,10H9V8H21V10M21,16H9V14H21V16M4,5H6V16H4V5M6,18V20H4V18H6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNotEqual",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
