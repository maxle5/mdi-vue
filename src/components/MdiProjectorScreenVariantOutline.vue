
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M20 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H19V9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6M17 16H7V9H17V16Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiProjectorScreenVariantOutline",
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
