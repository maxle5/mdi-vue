
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12,2L16,6H13V13.82L22.39,19.25L21.39,21L12,15.56L2.61,21L1.61,19.25L11,13.82V6H8L12,2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiAxisZArrow",
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
