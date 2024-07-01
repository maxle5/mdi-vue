
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCross",
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
