
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTableColumnPlusAfter",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
