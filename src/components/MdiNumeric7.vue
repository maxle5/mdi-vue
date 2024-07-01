
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M11,17L15,9V7H9V9H13L9,17" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumeric7",
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
