
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,16H13V20H11M11,10H13V14H11M11,4H13V8H11M4,22H20V2H4V22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRoad",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
