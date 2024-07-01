
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M11 21H9V3H11V21M15 3H13V21H15V3Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "DragVerticalVariant",
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
