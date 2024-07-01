
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAlphaY",
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
