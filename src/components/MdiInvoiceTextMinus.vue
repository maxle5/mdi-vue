
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M3 3V22L6 20L9 22L12 20L13.3 20.86C13.1 20.28 13 19.65 13 19C13 15.69 15.69 13 19 13C19.7 13 20.37 13.12 21 13.34V3H3M17 7V9H7V7H17M15 11V13H7V11H15M15 18V20H23V18H15Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiInvoiceTextMinus",
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
