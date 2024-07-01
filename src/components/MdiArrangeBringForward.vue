
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M2,2H16V16H2V2M22,8V22H8V18H10V20H20V10H18V8H22Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrangeBringForward",
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
