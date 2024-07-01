
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12 2L1 21H23M12 6L19.5 19H4.5M14 14H12.5L14 11H10V15H11V18L14 14Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFlashTriangleOutline",
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
