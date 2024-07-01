
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFilterVariant",
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
