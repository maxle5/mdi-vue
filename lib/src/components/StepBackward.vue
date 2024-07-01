
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M19,5V19H16V5M14,5V19L3,12" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "StepBackward",
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
