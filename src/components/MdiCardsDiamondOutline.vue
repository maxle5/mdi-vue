
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12 2L5 12L12 22L19 12M7.44 12L12 5.5L16.56 12L12 18.5" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiCardsDiamondOutline",
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
