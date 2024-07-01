
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M21 1L1 21H17V19H13V11.8L19 5.8V9H21M19 11V17H21V11M19 19V21H21V19" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNetworkStrength2Alert",
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
