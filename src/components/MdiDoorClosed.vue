
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16,11H18V13H16V11M12,3H19C20.11,3 21,3.89 21,5V19H22V21H2V19H10V5C10,3.89 10.89,3 12,3M12,5V19H19V5H12Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiDoorClosed",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
