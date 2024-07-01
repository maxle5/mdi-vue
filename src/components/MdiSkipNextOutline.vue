
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M6,18L14.5,12L6,6M8,9.86L11.03,12L8,14.14M16,6H18V18H16" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiSkipNextOutline",
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
