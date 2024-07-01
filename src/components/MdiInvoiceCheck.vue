
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M19 13C19.7 13 20.37 13.12 21 13.34V3H3V22L6 20L9 22L12 20L13.3 20.86C13.1 20.28 13 19.65 13 19C13 15.69 15.69 13 19 13M15.5 19L18.25 22L23 17.23L21.84 15.82L18.25 19.41L16.66 17.82L15.5 19Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiInvoiceCheck",
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
