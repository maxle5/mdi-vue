
  <template>
      <svg :width="size" :height="size" :viewBox="viewbox">
          <path d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" style="fill: currentColor" />
      </svg>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
      name: "MdiHomeVariant",
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
