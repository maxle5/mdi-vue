
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M4,4V10L4,14H6V10H8L13.41,15.41L9.83,19L11.24,20.41L14.83,16.83L18.41,20.41L19.82,19L16.24,15.41L19.82,11.83L18.41,10.41L14.83,14L10.83,10H11A3,3 0 0,0 14,7A3,3 0 0,0 11,4H4M6,6H11A1,1 0 0,1 12,7A1,1 0 0,1 11,8H6V6Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiPrescription",
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
