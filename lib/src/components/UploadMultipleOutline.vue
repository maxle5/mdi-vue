
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M19 8H15V14H9V8H5L12 1L19 8M14.17 6L12 3.83L9.83 6H11V12H13V6H14.17M5 16V18H19V16H5M19 20V22H5V20H19Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "UploadMultipleOutline",
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
