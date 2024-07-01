
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M7,3H16.95V12.96L12.96,20.94H8L11.97,12.96H7V3Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiComma",
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
