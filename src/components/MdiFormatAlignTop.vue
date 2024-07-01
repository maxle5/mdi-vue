
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M13,15L15.5,17.5L16.92,16.08L12,11.16L7.08,16.08L8.5,17.5L11,15V21H13V15M3,3H21V5H3V3M3,7H13V9H3V7Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiFormatAlignTop",
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
