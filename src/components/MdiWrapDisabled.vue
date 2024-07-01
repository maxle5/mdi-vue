
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M16,7H3V5H16V7M3,19H16V17H3V19M22,12L18,9V11H3V13H18V15L22,12Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWrapDisabled",
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
