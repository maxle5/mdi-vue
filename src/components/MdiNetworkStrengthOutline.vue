
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M1,21H21V1M19,5.83V19H6" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNetworkStrengthOutline",
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
