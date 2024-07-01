
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFastForward",
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
