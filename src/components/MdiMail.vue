
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiMail",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
