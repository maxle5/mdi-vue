
<template>
  <svg :width="size" :height="size" :viewBox="viewBox">
      <path d="M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSettingsHelper",
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
