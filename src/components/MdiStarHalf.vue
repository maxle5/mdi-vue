
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27V2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiStarHalf",
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
