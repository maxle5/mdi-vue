
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M15,9H13V7H15V9M22,20V22H15A1,1 0 0,1 14,23H10A1,1 0 0,1 9,22H2V20H9A1,1 0 0,1 10,19H11V17H7A2,2 0 0,1 5,15V5A2,2 0 0,1 7,3H17A2,2 0 0,1 19,5V15A2,2 0 0,1 17,17H13V19H14A1,1 0 0,1 15,20H22M9,5H7V15H9V5M11,15H13V11H15A2,2 0 0,0 17,9V7A2,2 0 0,0 15,5H11V15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiIpNetwork",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
