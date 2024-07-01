
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHome",
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
