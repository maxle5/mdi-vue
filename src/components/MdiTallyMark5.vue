
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M19 10.73V19H17V11.36L15 12V19H13V12.62L11 13.26V19H9V13.89L7 14.5V19H5V15.15L2.57 15.92L2 14L5 13.05V5H7V12.42L9 11.79V5H11V11.16L13 10.53V5H15V9.9L17 9.26V5H19V8.63L21 8L21.57 9.92L19 10.73Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTallyMark5",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
