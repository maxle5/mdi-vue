
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M14 7V9H13V15H14V17H10V15H11V9H10V7H14Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiRomanNumeral1",
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
