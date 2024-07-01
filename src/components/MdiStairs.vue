
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStairs",
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
