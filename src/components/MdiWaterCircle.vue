
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 19C9.24 19 7 16.76 7 14C7 10.67 12 5.04 12 5.04S17 10.67 17 14C17 16.76 14.76 19 12 19Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiWaterCircle",
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
