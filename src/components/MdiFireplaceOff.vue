
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M22,22H2V20H22V22M22,6H2V3H22V6M20,7V19H17V11C17,11 14.5,10 12,10C9.5,10 7,11 7,11V19H4V7H20Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFireplaceOff",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
