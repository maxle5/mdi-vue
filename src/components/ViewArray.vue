
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "ViewArray",
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
