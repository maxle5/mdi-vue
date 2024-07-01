
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M20 19V3H4V19H2V21H22V19H20M10 19V5H14V19H10Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "BlindsVertical",
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
