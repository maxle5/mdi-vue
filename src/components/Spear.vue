
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M16 9H16.41L3.41 22L2 20.59L15 7.59V9H16M16 4V8H20L22 2L16 4Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "Spear",
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
