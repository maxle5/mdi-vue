
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSkipForward",
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
