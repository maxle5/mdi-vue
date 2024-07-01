
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M6,2L2,8L12,22L22,8L18,2H6Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "Diamond",
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
