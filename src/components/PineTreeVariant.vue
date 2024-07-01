
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M19 12L12 2L5 12H6.86L3 18H10V22H14V18H21L17.14 12H19Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "PineTreeVariant",
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
