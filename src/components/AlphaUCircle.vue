
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M9,7V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13V15H11V7H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "AlphaUCircle",
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
