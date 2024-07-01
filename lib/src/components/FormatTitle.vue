
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M5,4V7H10.5V19H13.5V7H19V4H5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "FormatTitle",
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
