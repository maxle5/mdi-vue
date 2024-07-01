
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M13 7V9H15V17H17V7H13M11 13H5V11H11V13Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiNumericNegative1",
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
