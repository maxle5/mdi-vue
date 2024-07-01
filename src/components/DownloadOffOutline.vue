
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M22.11 21.46L2.39 1.73L1.11 3L7.11 9H5L12 16L13.06 14.95L16.11 18H5V20H18.11L20.84 22.73L22.11 21.46M11 5H13V9.8L15.6 12.4L19 9H15V3H9V5.8L11 7.8V5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "DownloadOffOutline",
      props: {
          size: { 
              type: Number, 
              default: 24 
          },
          viewbox: {
              type: String, 
              default: "0 0 24 24" 
          },
      },
  })
  </script>
