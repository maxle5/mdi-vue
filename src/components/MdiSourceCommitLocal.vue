
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M11,5V3H13V5H11M11,21V19H13V21H11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSourceCommitLocal",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
