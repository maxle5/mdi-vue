
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M16 5L15 2H13L12 5L6 8H8L8.6 11H4V7H2V17H4V13H9L10 18L12 20L13 22H15L16 20L18 18L20 8H22M16.16 17H11.84L10 8H18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCoachLamp",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
