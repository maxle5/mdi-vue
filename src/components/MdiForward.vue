
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12,8V4L20,12L12,20V16H4V8H12Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiForward",
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
