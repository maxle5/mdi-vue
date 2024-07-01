
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M2 5V19H22V5H2M20 12H16V7H20V12M14 10H10V7H14V10M10 12H14V17H10V12M4 7H8V17H4V7M16 17V14H20V17H16Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiViewDashboardVariantOutline",
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
