
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M19 17H21V11H19M19 21H21V19H19M1 21H17V9H21V1" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNetworkStrength4Alert",
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
