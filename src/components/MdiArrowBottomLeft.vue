
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowBottomLeft",
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
