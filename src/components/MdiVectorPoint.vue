
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M9 9V15H15V9H9M11 11H13V13H11V11Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiVectorPoint",
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
