
<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
      <path d="M12.5 3C17.1 3 21.1 6 22.5 10.2L20.1 11C19 7.8 16 5.5 12.5 5.5C10.5 5.5 8.8 6.2 7.4 7.4L10 10H3V3L5.6 5.6C7.4 4 9.9 3 12.5 3M13 12H19V14H15V16H17C18.1 16 19 16.9 19 18V20C19 21.1 18.1 22 17 22H13V20H17V18H13V12M5 12V18H9V22H11V12H9V16H7V12H5Z" style="fill: currentColor" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRewind45",
      props: {
          size: { 
              type: Number, 
              default: 24 
          }
      },
  })
</script>
