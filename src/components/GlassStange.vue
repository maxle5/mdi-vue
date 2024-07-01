
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M8,2H16V22H8V2M10,4V7H14V4H10Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "GlassStange",
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
