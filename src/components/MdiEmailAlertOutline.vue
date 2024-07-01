
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M24 7H22V13H24V7M24 15H22V17H24V15M20 6C20 4.9 19.1 4 18 4H2C.9 4 0 4.9 0 6V18C0 19.1 .9 20 2 20H18C19.1 20 20 19.1 20 18V6M18 6L10 11L2 6H18M18 18H2V8L10 13L18 8V18Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiEmailAlertOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
      computed: {
        viewBox() {
          return `0 0 ${this.size} ${this.size}`;
        }
      }
  })
</script>
