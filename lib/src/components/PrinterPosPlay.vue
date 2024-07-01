
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M20 13.09V12C20 10.9 19.11 10 18 10H6C4.89 10 4 10.9 4 12V19H13C13 15.69 15.69 13 19 13C19.34 13 19.67 13.04 20 13.09M10 14H6V12H10V14M17 9H7V4H17V9M22 19L17 22V16L22 19Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "PrinterPosPlay",
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
