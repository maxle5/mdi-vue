
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M18,6V17H22V6M2,17H6V6H2M7,19H17V4H7V19Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "ViewCarousel",
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
