
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSkipBackward",
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
