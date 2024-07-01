
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M2,6L19,20H2V6M5,4L22,18V4H5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "DivingScubaFlag",
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
