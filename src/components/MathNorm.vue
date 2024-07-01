
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M14 21V3H16V21H14M8 21V3H10V21H8Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MathNorm",
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
