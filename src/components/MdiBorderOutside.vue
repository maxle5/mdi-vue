
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M9,11H7V13H9M13,15H11V17H13M19,19H5V5H19M3,21H21V3H3M17,11H15V13H17M13,11H11V13H13M13,7H11V9H13V7Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiBorderOutside",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
