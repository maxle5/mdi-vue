
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M6 0A2 2 0 0 0 4 2V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V6L14 0H6M6 2H13V7H18V18H6V2M7 22V24H9V22H7M11 22V24H13V22H11M15 22V24H17V22H15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFileSettingsOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
