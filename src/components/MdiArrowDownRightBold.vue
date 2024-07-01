
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M10.5 3C14.64 3 18 6.36 18 10.5V13H22L16 20L10 13H14V10.5C14 8.57 12.43 7 10.5 7H3V3H10.5Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowDownRightBold",
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
