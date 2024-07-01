
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M10.5 4A6.5 6.5 0 0 0 4 10H1L5 14L9 10H6.03A4.5 4.5 0 0 1 10.5 6A4.5 4.5 0 0 1 15 10.5A4.5 4.5 0 0 1 10.5 15H2V17H10.5A6.5 6.5 0 0 0 17 10.5A6.5 6.5 0 0 0 10.5 4M19 12V15H16.5A7.5 7.5 0 0 1 14.24 17H19V20L23 16Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiReiterate",
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
