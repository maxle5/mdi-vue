
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M5,6.41L6.41,5L17,15.59V9H19V19H9V17H15.59L5,6.41Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiArrowBottomRight",
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
