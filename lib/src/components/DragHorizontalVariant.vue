
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "DragHorizontalVariant",
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
