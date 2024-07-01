
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M22,12L18,8V11H3V13H18V16L22,12Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiTrendingNeutral",
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
